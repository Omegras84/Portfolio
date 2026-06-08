import downloadData from "./helpers/downloadData.js";
import unpack from "./helpers/unpack.js";
import count from "./helpers/count.js";
import average from "./helpers/average.js";

function cleanData(rows) {
  return rows.map((r) => {
    const cleanRow = { ...r };

    // Convertir explicit en booléen
    cleanRow.Explicit = r.Explicit === "True" || r.Explicit === "true" ? 1 : 0;

    // Convertir la date en année
    const year = parseInt(r["Album Release Date"]?.slice(0, 4));
    cleanRow.Year = isNaN(year) ? null : year;

    // Colonnes numériques
    const numCols = [
      "Popularity", "Energy", "Valence", "Danceability", "Loudness", "Tempo", "Speechiness",
    ];
    numCols.forEach((col) => (cleanRow[col] = Number(r[col])));

    return cleanRow;
  }).filter((r) => r.Year);
}

function median(arr) {
  const a = [...arr].sort((p, q) => p - q);
  const mid = Math.floor(a.length / 2);
  return a.length % 2 ? a[mid] : (a[mid - 1] + a[mid]) / 2;
}

function drawScatter(rows, xKey, yKey) {
  const xVals = unpack(rows, xKey);
  const yVals = unpack(rows, yKey);
  const labels = unpack(rows, "Track Name");

  const yMed = median(yVals);
  const colors = rows.map((r) =>
    r.Explicit ? "var(--bear)" : "var(--bull)"
  );

  const data = [
    {
      x: xVals,
      y: yVals,
      text: labels,
      mode: "markers",
      type: "scatter",
      marker: {
        color: colors,
        size: 5,
        opacity: 0.85,
        line: { width: 1, color: "grey" },
      },
      hovertemplate:
        "<b>%{text}</b><br>" +
        `${xKey}: %{x}<br>${yKey}: %{y}<extra></extra>`,
    },
  ];

  const layout = {
    title: `Relation entre ${yKey} et ${xKey}`,
    xaxis: { title: xKey },
    yaxis: { title: yKey },
    plot_bgcolor: "#111",
    paper_bgcolor: "#111",
    font: { color: "#fff" },
  };

  Plotly.newPlot("plot", data, layout, {
    responsive: true,
    displaylogo: false,
  });
}






// ----------------------------------------------------

function drawExplicitByYear(rows) {
  const grouped = d3.rollups(
    rows,
    (v) => d3.mean(v, (d) => d.Explicit),
    (d) => d.Year
  );
  const years = grouped.map((g) => g[0]);
  const values = grouped.map((g) => g[1] * 100);

  const data = [
    {
      x: years,
      y: values,
      type: "bar",
      marker: { color: "grey" },
    },
  ];

  const layout = {
    title: "Taux de chansons explicites par année (%)",
    xaxis: { title: "Année" },
    yaxis: { title: "%" },
    plot_bgcolor: "#111",
    paper_bgcolor: "#111",
    font: { color: "#fff" },
  };

  Plotly.newPlot("explicit-by-year", data, layout);
}


// ----------------------------------------------------

// ----------------------------------------------------


function drawpopularity(rows) {
  const grouped = d3.rollups(
    rows,
    (v) => d3.mean(v, (d) => d.Popularity),
    (d) => d.Year,
    (d) => d.Explicit
  );

  const years = [...new Set(grouped.map((g) => g[0]))].sort();
  const explicitData = years.map((year) => {
    const yearGroup = grouped.find((g) => g[0] === year);
    if (yearGroup) {
      const explicitGroup = yearGroup[1].find((sub) => sub[0] === 1);
      return explicitGroup ? explicitGroup[1] : null;
    }
    return null;
  });
  const nonExplicitData = years.map((year) => {
    const yearGroup = grouped.find((g) => g[0] === year);
    if (yearGroup) {
      const nonExplicitGroup = yearGroup[1].find((sub) => sub[0] === 0);
      return nonExplicitGroup ? nonExplicitGroup[1] : null;
    }
    return null;
  });

  const data = [
    {
      x: years,
      y: explicitData,
      mode: "lines",
      name: "Explicite",
      line: { color: "darkred" },
    },
    {
      x: years,
      y: nonExplicitData,
      mode: "lines",
      name: "Non explicite",
      line: { color: "white" },
    },
  ];

  const layout = {
    title: "Popularité moyenne par année pour chansons explicites et non explicites",
    xaxis: { title: "Année" },
    yaxis: { title: "Popularité moyenne" },
    plot_bgcolor: "#111",
    paper_bgcolor: "#111",
    font: { color: "#fff" },
  };

  Plotly.newPlot("popularity", data, layout);
}

// ----------------------------------------------------

async function main() {
  const raw = await downloadData("data/top_spotify_10000_1950-now.csv");
  const rows = cleanData(raw);

  const xSelector = document.getElementById("x-selection");
  const ySelector = document.getElementById("y-selection");

  let xKey = xSelector.value;
  let yKey = ySelector.value;

  drawScatter(rows, xKey, yKey);
  // drawExplicitByYear(rows);
  drawExplicitByYear(rows);
  drawpopularity(rows);

  const update = () => {
    xKey = xSelector.value;
    yKey = ySelector.value;
    const sampledRows = random(rows, 10);
    drawScatter(sampledRows, xKey, yKey);
    inject(text, xKey, descriptionEl);
  };

  xSelector.addEventListener("change", update);
  ySelector.addEventListener("change", update);
}

 const text = {
  "Energy": 
    "Ce graphique met en relation la valence, qui représente l’émotion générale perçue dans un morceau, et l’energy, qui mesure son intensité et sa puissance sonore. Il permet d’analyser si les titres à forte valence, souvent associés à des émotions positives comme la joie ou l’enthousiasme, sont également caractérisés par une énergie élevée. À l’inverse, le graphique permet aussi d’identifier des musiques à faible valence pouvant malgré tout présenter une forte intensité, montrant ainsi que des émotions plus sombres peuvent s’exprimer à travers des compositions dynamiques et percutantes. Cette comparaison met en évidence la complexité du lien entre émotion et intensité musicale.",

  "Tempo": 
    "Ce graphique compare la valence d’un morceau à son tempo afin d’explorer le lien entre l’émotion ressentie et la vitesse d’exécution de la musique. Il permet d’observer si les morceaux perçus comme joyeux ou positifs tendent à adopter des tempos plus rapides, souvent associés à une sensation d’énergie ou de mouvement. À l’inverse, il met en lumière la manière dont des musiques à faible valence peuvent privilégier des tempos plus lents, renforçant des ambiances introspectives ou mélancoliques. Cette visualisation aide à comprendre comment le rythme participe à la construction émotionnelle d’un titre.",

  "Danceability": 
    "Ce graphique met en relation la valence et la danceability afin d’analyser dans quelle mesure l’émotion transmise par un morceau influence son caractère dansant. Il permet d’identifier si les titres à valence élevée sont plus fréquemment associés à des structures rythmiques régulières, propices au mouvement et à la danse. Le graphique révèle également que certaines musiques à valence plus faible peuvent rester très dansantes, montrant que la capacité d’un morceau à faire bouger l’auditeur ne dépend pas uniquement de son émotion perçue, mais aussi de choix rythmiques et de production.",

  "Loudness": 
    "Ce graphique compare la valence et la loudness afin d’observer si l’intensité émotionnelle d’un morceau est liée à son volume sonore moyen. Il permet d’analyser si les musiques exprimant des émotions positives sont généralement produites avec des niveaux sonores plus élevés, ou si des émotions plus calmes ou mélancoliques sont associées à des productions plus modérées. Cette visualisation met en évidence le rôle de la production sonore dans la transmission des émotions et montre que le volume n’est pas nécessairement un indicateur direct de l’émotion ressentie."
};


const descriptionEl = document.getElementById("description_valence");

function inject(map, key, element) {
  element.textContent = map[key] ?? "";
}

function random(rows, step = 10) {
  const shuffled = [...rows].sort(() => Math.random() - 0.5);
  return shuffled.filter((_, i) => i % step === 0);
}
 
main();

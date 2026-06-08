/* ============================================================
   PORTFOLIO TRISTAN GOUJAN — DATA SOURCE
   Toute la matière du portfolio vit ici.
   Modifie librement, l'UI s'adapte.
   ============================================================ */

window.PORTFOLIO = {

  /* ----------------------------------------------------------
     IDENTITÉ
     ---------------------------------------------------------- */
  identity: {
    name: "Tristan GOUJAN",
    role: "Étudiant développeur web",
    formation: "BUT MMI — Parcours DWDI",
    school: "IUT de Dijon",
    location: "Dijon, France",
    tagline: "Étudiant le jour, développeur la nuit — et un peu les deux à la fois.",
    intro:
      "Étudiant en deuxième année de BUT Métiers du Multimédia et de l'Internet, parcours Développement Web et Dispositifs Interactifs. Je code pour le web, j'aime les projets qui mêlent rigueur technique et identité visuelle, et je crois que les meilleures interfaces se font à l'intersection des deux.",
    available: true,
    availableLabel: "À la recherche d'une alternance pour la 3ème année",
    avatar: "placeholder",
    quote: "Un grand pouvoir implique de grandes responsabilités.",
    /* Stats pour le panneau BD du hero */
    stats: [
      { label: "Front-end", value: 85 },
      { label: "Back-end", value: 65 },
      { label: "Design", value: 70 },
      { label: "Conception", value: 75 },
      { label: "Travail d'équipe", value: 80 }
    ]
  },

  /* ----------------------------------------------------------
     À PROPOS
     ---------------------------------------------------------- */
  about: {
    lead:
      "Deux ans de BUT MMI m'ont fait passer du statut d'étudiant curieux à celui de développeur web autonome, à l'aise aussi bien sur du React moderne que sur du Symfony 1 vieillissant.",
    body: [
      "J'ai découvert le développement web par les SAE de première année, où le PHP m'a mis face à mes premières difficultés. La deuxième année a confirmé mon orientation : projets en groupe, dispositifs interactifs, et surtout un stage en entreprise de services numériques qui m'a confronté à la réalité du métier.",
      "Aujourd'hui, je cherche une alternance pour ma troisième année dans une structure où la polyvalence est valorisée. Mon profil : front-end solide, back-end en consolidation, sensibilité graphique réelle, et une capacité d'adaptation que je n'ai pas trouvée dans les manuels."
    ],
    facts: [
      { k: "Formation", v: "BUT MMI" },
      { k: "École", v: "IUT de Dijon" },
      { k: "Parcours", v: "DWDI" },
      { k: "Statut", v: "Recherche alternance" }
    ]
  },

  /* ----------------------------------------------------------
     PROJETS PHARES
     7 projets analysés en STAR + AC mappés.
     ---------------------------------------------------------- */
  projects: [

    /* -----  PROJET 1 : STAGE — BUNDLE CMS  ----- */
    {
      id: "bundle-cms",
      name: "Bundle CMS — Copier-coller de blocs",
      year: "2026",
      type: "Stage · Contribution à un produit interne",
      context: "Stage chez ABSYS Informatique",
      duration: "Fin de stage (2 semaines)",
      role: "Développeur back + intégration UI",
      stack: ["Symfony", "Twig", "PHP", "JavaScript"],
      featured: true,
      heroColor: "red",
      blurb:
        "Ajout d'une fonctionnalité au CMS interne d'ABSYS, déployable sur l'ensemble du portefeuille de sites clients.",

      star: {
        situation:
          "Vers la fin du stage, le pôle développement web d'ABSYS recevait des retours réguliers des utilisateurs de leur back-office. Les clients passaient beaucoup de temps à recréer manuellement des blocs de contenu identiques entre plusieurs pages d'un même site. Le besoin était transversal à plusieurs projets clients, donc remontait naturellement au bundle CMS interne.",
        tache:
          "Développer une fonctionnalité permettant de copier un bloc d'une page pour le coller sur une autre, directement depuis l'interface du page builder. Le travail devait s'inscrire dans le bundle CMS interne, donc impacter tous les sites qui s'appuient dessus.",
        action: [
          "Analyse de la structure existante du bundle pour identifier les points d'extension pertinents sans rompre la cohérence du code.",
          "Implémentation du mécanisme de copie côté serveur en respectant les conventions Symfony du bundle (entités, services, persistance).",
          "Intégration des contrôles correspondants dans l'interface du page builder (boutons, retours visuels, gestion des erreurs).",
          "Tests de la fonctionnalité sur plusieurs sites avant validation."
        ],
        resultat:
          "La fonctionnalité est aujourd'hui en phase de revue. Après validation, elle sera disponible sur l'ensemble des sites d'ABSYS qui s'appuient sur ce CMS. Cette mission a marqué pour moi le passage du statut d'utilisateur du CMS à celui de contributeur à son évolution — une responsabilité que je n'avais pas connue sur les missions précédentes du stage."
      },

      autoEval: {
        level: "en-voie",
        comment:
          "Je maîtrise désormais l'extension d'un bundle Symfony existant et la logique de mutualisation entre projets. À approfondir : la couverture par tests automatisés, que je n'ai pas eu le temps de mettre en place."
      },

      ac: ["AC24.02", "AC24.03", "AC24.04", "AC25.04", "AC25.05"]
    },

    /* -----  PROJET 1bis : STAGE — REFONTE & OPTIMISATION  ----- */
    {
      id: "refonte-stage",
      name: "Refonte & optimisation de sites",
      year: "2026",
      type: "Stage · Refonte, audit et référencement",
      context: "Stage chez ABSYS Informatique",
      duration: "Plusieurs missions réparties sur le stage",
      role: "Développeur web · intégrateur",
      stack: ["Symfony", "Symfony 1", "SCSS", "Bootstrap", "HTML", "CSS"],
      links: {
        demo: "https://vins-luberon.absys-info.site/",
        oldSite: "https://www.vins-luberon.fr/fr/"
      },
      featured: true,
      heroColor: "blue",
      blurb:
        "Refonte graphique et réorganisation de plusieurs sites clients en production, avec audit préalable, application de chartes et optimisation du référencement.",

      star: {
        situation:
          "Au-delà du développement, une grande partie de mon stage a consisté à intervenir sur des sites clients déjà en ligne. Trois cas représentatifs : la refonte graphique de NDfrance, un site ancien tournant sous Symfony 1 ; la réorganisation puis la refonte de l'intranet de la commune d'Apt ; et l'initialisation optimisée du site Caparol Center, pensé pour le référencement local. Dans chaque cas, le site existait déjà dans un écosystème de communication précis, qu'il fallait comprendre avant d'agir.",
        tache:
          "Pour chaque site, analyser la stratégie de communication du client et auditer l'existant avant toute intervention, puis appliquer une nouvelle identité visuelle ou réorganiser les contenus, tout en veillant à la lisibilité, au caractère responsive et au référencement.",
        action: [
          "Analyse de la stratégie de communication de chaque client pour comprendre la cible et le message avant d'intervenir sur le site.",
          "Audit de l'existant : structure des pages, organisation du code, points faibles en lisibilité et en référencement.",
          "Sur l'intranet d'Apt, cartographie de l'expérience utilisateur des agents pour repenser l'organisation des documents téléchargeables, devenue difficile à maintenir.",
          "Application fidèle des chartes graphiques fournies (vins-luberon, intranet aligné sur le site principal de la commune), avec centralisation des variables CSS.",
          "Optimisation du référencement local sur Caparol Center et attention au temps de chargement des pages produites.",
          "Vérification page par page du rendu responsive et des effets de bord après chaque modification."
        ],
        resultat:
          "Les sites concernés ont été refondus ou réorganisés et restent en production. Cette série de missions m'a appris que la refonte n'est pas qu'un travail visuel : elle commence par comprendre l'écosystème de communication du client et auditer l'existant, et elle se prolonge par un souci constant du référencement et de la performance. C'est la facette la plus stratégique du métier que j'ai découverte en stage."
      },

      autoEval: {
        level: "en-voie",
        comment:
          "Je me sens à l'aise sur l'audit d'un site existant et l'application d'une charte. Je suis encore en apprentissage sur le référencement avancé et la mesure fine des performances, que je n'ai abordés que de façon pratique sans outillage dédié."
      },

      ac: ["AC21.01", "AC21.02", "AC21.05", "AC22.04", "AC23.03", "AC24.01", "AC24.05"]
    },

    /* -----  PROJET 2 : SAE4 CINÉ-CLUB  ----- */
    {
      id: "cineclub",
      name: "Ciné-club IUT — App de vote",
      year: "2026",
      type: "SAE S4 · Application web full-stack",
      context: "SAE4DWeb-DI01 — Développer pour le Web",
      duration: "Semestre 4 (en cours)",
      role: "Développeur back-end (binôme)",
      stack: ["React 19", "Vite", "MUI v9", "Lexical", "React Router"],
      links: {
        github: "https://github.com/btwNemS/cineclub"
      },
      featured: true,
      heroColor: "blue",
      blurb:
        "Application web pour le ciné-club de l'IUT, avec système de votes et back-office d'administration des films et compétitions.",

      star: {
        situation:
          "Le ciné-club de l'IUT de Dijon avait besoin d'une plateforme pour organiser le choix collectif des films projetés en salle. Jusque-là, les votes se géraient à la main, ce qui limitait la participation et compliquait l'organisation des compétitions thématiques. La SAE S4 nous a confié ce projet, en groupe de 8.",
        tache:
          "Concevoir et développer en équipe une application web complète : front-end pour les votes utilisateurs, back-office d'administration permettant le CRUD sur les films, la création de compétitions et la gestion des participants. Contexte international : une partie de la documentation devait être réalisée en anglais.",
        action: [
          "Répartition des rôles dans l'équipe : avec un camarade, j'ai pris en charge le back-end et la modélisation des données.",
          "Modélisation des entités (films, utilisateurs, compétitions, votes) et conception des endpoints API.",
          "Implémentation des opérations CRUD côté serveur, avec attention particulière à la performance des requêtes.",
          "Travail itératif avec l'équipe front pour ajuster les contrats d'API au fur et à mesure des besoins UI.",
          "Recherche permanente de l'efficacité du code : moins de requêtes, plus de réutilisation, plus de lisibilité."
        ],
        resultat:
          "Le projet est en cours de finalisation et sera livré en fin de semestre. Au-delà du livrable, ce qui me rend fier de ce projet, c'est la qualité du travail d'équipe et l'ingéniosité collective sur l'efficacité du code : on a réussi à éviter les solutions naïves chaque fois qu'on a pu, sans sacrifier les délais."
      },

      autoEval: {
        level: "maitrise",
        comment:
          "Projet le plus complet de ma formation en termes de compétences mobilisées : back-end, modélisation, collaboration en équipe sur la durée. Pleinement à l'aise sur le développement back et l'organisation d'équipe. Encore à progresser sur l'estimation des charges."
      },

      ac: ["AC21.04", "AC22.01", "AC24.01", "AC24.02", "AC24.04", "AC25.01", "AC25.04", "AC25.05", "AC25.06"]
    },

    /* -----  PROJET 3 : SAE4 VR SYSTÈME SOLAIRE  ----- */
    {
      id: "systeme-solaire-vr",
      name: "Système solaire en VR",
      year: "2026",
      type: "SAE S4 · Dispositif interactif éducatif",
      context: "SAE4DWeb-DI02 — Concevoir un dispositif interactif",
      duration: "Semestre 4 (en cours)",
      role: "Développeur solo",
      stack: ["three.js", "WebXR", "JavaScript", "ngrok"],
      featured: true,
      heroColor: "navy",
      blurb:
        "Système solaire interactif en réalité virtuelle, conçu pour une exposition pédagogique en musée à destination d'enfants en âge collège.",

      star: {
        situation:
          "La SAE S4 invitait à explorer un dispositif interactif au choix : VR, jeu, installation. J'ai choisi un projet pédagogique : un système solaire en VR pour un public d'enfants, dans l'esprit d'une exposition de musée. L'objectif est de transformer une connaissance scolaire (les planètes) en expérience immersive et active.",
        tache:
          "Concevoir et développer une application VR observable depuis un casque, dans laquelle un enfant peut se déplacer dans le système solaire, sélectionner une planète au clic et accéder à des informations adaptées au niveau collège (taille, type rocheuse ou gazeuse, particularités).",
        action: [
          "Apprentissage de three.js, librairie totalement nouvelle pour moi.",
          "Modélisation des planètes avec leurs proportions relatives et leurs orbites.",
          "Implémentation du système d'interaction au clic en environnement VR (sélection d'une planète → affichage de sa fiche d'information).",
          "Mise en place de WebXR pour rendre l'expérience accessible depuis un casque Quest.",
          "Utilisation de ngrok pour exposer le serveur de développement au casque sans déploiement complet."
        ],
        resultat:
          "Le projet est en cours. L'interactivité est déjà bonne et l'expérience donne réellement envie de parcourir le système solaire — ce qui est exactement l'objectif pédagogique recherché. Reste à finaliser le contenu des fiches d'information et à polish l'ergonomie en VR. Apprentissages forts sur three.js et sur la conception d'interactions adaptées à un public jeune."
      },

      autoEval: {
        level: "en-voie",
        comment:
          "three.js et WebXR sont des terrains nouveaux. Je me sens à l'aise sur la mise en scène 3D et la logique d'interaction, mais encore en apprentissage sur les optimisations spécifiques à la VR (performance, confort visuel). Compétence Exprimer pleinement mobilisée par la dimension pédagogique du projet."
      },

      ac: ["AC23.02", "AC23.04", "AC23.06", "AC24.03"]
    },

    /* -----  PROJET 4 : FITTRACKER  ----- */
    {
      id: "fittracker",
      name: "Fittracker",
      year: "Mars 2026 → en cours",
      type: "Projet personnel · Application full-stack en production",
      context: "Initiative personnelle",
      duration: "Démarré fin du stage Absys, en évolution continue",
      role: "Développeur solo",
      stack: ["React", "Node.js", "PostgreSQL", "Vercel", "Neon"],
      links: {
        demo: "https://fittracker-two-sandy.vercel.app",
        github: "https://github.com/TristanGoujan/Fittracker"
      },
      featured: true,
      heroColor: "red",
      blurb:
        "Application personnelle de suivi d'entraînement en salle de sport : séances, exercices, charges, répétitions, progression dans le temps.",

      star: {
        situation:
          "Je fréquente régulièrement la salle de sport, mais aucun outil ne me permettait de tracker mes séances de manière à la fois fluide en plein entraînement et lisible sur la durée. Les apps existantes étaient soit trop lourdes, soit trop génériques. J'avais besoin d'un outil taillé pour mon usage réel.",
        tache:
          "Concevoir et développer une application web complète permettant d'ajouter rapidement une séance pendant l'entraînement, de consulter l'historique des exercices et de visualiser sa progression dans le temps. Contrainte forte : l'ergonomie doit être pensée pour une utilisation mobile, debout, entre deux séries.",
        action: [
          "Choix d'une stack full-stack maîtrisable seul : React côté front, Node.js côté back, PostgreSQL pour la persistance.",
          "Conception de l'UX d'ajout de séance pour qu'elle reste rapide et lisible sur petit écran, en mouvement.",
          "Mise en production progressive : passage d'un Postgres local Docker à Neon (cloud), déploiement front sur Vercel.",
          "Résolution de problèmes concrets de déploiement (variables d'environnement, CORS, authentification SASL).",
          "Itérations basées sur mon propre usage et les retours de mes amis utilisateurs."
        ],
        resultat:
          "L'application est en ligne sur fittracker-two-sandy.vercel.app et utilisée au quotidien par moi et plusieurs amis. C'est mon projet personnel le plus abouti : il me sert pour de vrai, il fonctionne pour d'autres personnes, et il continue d'évoluer en fonction des besoins. La satisfaction d'utiliser au quotidien quelque chose qu'on a construit soi-même est difficile à reproduire dans un contexte scolaire."
      },

      autoEval: {
        level: "maitrise",
        comment:
          "Projet où je touche à tout : conception, design, front, back, base de données, déploiement, infrastructure. Compétences Concevoir, Développer et Entreprendre toutes mobilisées. Reste à approfondir : tests automatisés, et travail sur la performance à plus grande échelle."
      },

      ac: ["AC22.01", "AC22.02", "AC24.01", "AC24.04", "AC24.06", "AC25.01"]
    },

    /* -----  PROJET 5 : SAE 303 DATAVIZ MUSIQUE  ----- */
    {
      id: "dataviz-musique",
      name: "Dataviz musique",
      year: "2025",
      type: "SAE S3 · Visualisation de données",
      context: "SAE 303 — Concevoir des visualisations de données pour le web",
      duration: "Semestre 3",
      role: "Développeur solo",
      stack: ["JavaScript", "Plotly", "HTML", "CSS"],
      featured: true,
      heroColor: "blue",
      preview: {
        type: "browser",
        title: "GOUJAN_Tristan_DATAVIZ.html",
        url: "dataviz-musique/index.html",
        screens: [
          { caption: "Vue d'ensemble du site dataviz" },
          { caption: "Détail d'un graphique Plotly interactif" }
        ]
      },
      links: {
        demo: "./dataviz-musique/index.html"
      },
      blurb:
        "Site one-page exploitant une base de données musicale, avec graphiques interactifs Plotly pour faire émerger les tendances cachées dans une masse d'informations.",

      star: {
        situation:
          "La SAE 303 mettait au centre la valeur communicationnelle de la donnée. Il fallait choisir un jeu de données, en extraire des indicateurs pertinents et produire un site exploitant ces indicateurs à des fins de communication. J'ai choisi un dataset musical, riche et dense, ce qui m'a tout de suite imposé de travailler la lisibilité.",
        tache:
          "Analyser un jeu de données musical, en extraire les indicateurs porteurs de sens, concevoir un site one-page qui rende ces données accessibles à un lecteur non spécialiste. Le défi : transformer une masse d'informations en récit visuel clair.",
        action: [
          "Phase d'exploration du dataset pour identifier les angles d'attaque les plus porteurs de sens.",
          "Définition d'une problématique précise qui structure la visualisation autour d'un message.",
          "Choix de Plotly côté graphiques pour l'interactivité native (zoom, survol, filtres).",
          "Travail sur la hiérarchie visuelle des graphiques pour qu'ils restent lisibles malgré la densité d'informations.",
          "Intégration en site one-page avec une narration progressive du dataset."
        ],
        resultat:
          "Le site est livré. Les graphiques restent clairs malgré la quantité importante d'informations à représenter, et la problématique guide bien le parcours de lecture. C'est sur cette SAE que j'ai vraiment compris que la datavisualisation, ce n'est pas montrer des données : c'est raconter quelque chose avec des données."
      },

      autoEval: {
        level: "maitrise",
        comment:
          "Compétences Comprendre, Exprimer et Développer toutes mobilisées. Très à l'aise sur la dimension communicationnelle des graphiques. À approfondir : les techniques statistiques plus avancées pour faire émerger des indicateurs moins évidents."
      },

      ac: ["AC21.03", "AC23.05", "AC23.06", "AC24.01", "AC24.03"]
    },

    /* -----  PROJET 6 : PERUDO BOT  ----- */
    {
      id: "perudo-bot",
      name: "Perudo Bot",
      year: "2026",
      type: "Projet de groupe · Bot stratégique en PHP",
      context: "Projet de cours (5 personnes)",
      duration: "Plusieurs semaines",
      role: "Développeur (stratégie + adaptation comportementale)",
      stack: ["PHP", "HTML", "CSS", "JavaScript"],
      featured: true,
      heroColor: "red",
      blurb:
        "Bot de Perudo à stratégie risk/reward différenciée. Vainqueur du tournoi inter-équipes avec le plus grand nombre de points sur 4 parties.",

      star: {
        situation:
          "Un projet de cours nous demandait, en groupe de 5, de développer un bot capable de jouer au Perudo de manière autonome. Le tournoi inter-équipes opposait 4 bots (Pique, Cœur, Carreau, Trèfle) sur plusieurs parties. La règle du classement : ce n'était pas le nombre de parties remportées qui comptait, mais le total de points accumulés sur l'ensemble des parties.",
        tache:
          "Concevoir une stratégie qui se démarque suffisamment des approches naïves (probabilités brutes, jeu défensif) pour maximiser le score sur la durée. Implémenter, tester, corriger les bugs critiques et itérer.",
        action: [
          "Conception d'une stratégie 'risk/reward' : même en position favorable, le bot tente des coups audacieux quand les statistiques le justifient, pour maximiser le gain plutôt que survivre.",
          "Implémentation des fonctions adaptatives : aggBid() pour la prise d'initiative offensive, tauxDudo() pour évaluer la probabilité de contestation.",
          "Correction d'un bug critique de crash dans historique() lié à un accès tableau non protégé.",
          "Correction d'un bug d'illégalité d'enchère lors des transitions paco → normal.",
          "Itérations sur la stratégie en analysant les replays des parties perdues."
        ],
        resultat:
          "Notre équipe Pique a terminé première du tournoi inter-équipes en cumulant plus de points que les trois autres bots sur l'ensemble des parties. La stratégie risk/reward s'est révélée gagnante sur la durée : prendre des risques calculés rapportait plus que la prudence systématique. Au-delà du score, ce projet a été ma première vraie expérience de programmation algorithmique : modéliser des décisions, anticiper celles des adversaires, itérer sur la base de résultats chiffrés."
      },

      autoEval: {
        level: "en-voie",
        comment:
          "Projet plus algorithmique que ceux que je rencontre habituellement en MMI. Pleinement à l'aise sur la modélisation des traitements et l'itération sur la base de tests réels. Reste à explorer : les approches plus formelles (Monte Carlo, théorie des jeux) qui dépassent le cadre du cours."
      },

      ac: ["AC21.03", "AC24.04"]
    },

    /* -----  PROJET 7 : LE PORTFOLIO LUI-MÊME (MÉTA)  ----- */
    {
      id: "portfolio",
      name: "Ce portfolio",
      year: "2026",
      type: "Projet personnel · Site one-page React",
      context: "Livrable de fin de 2ème année MMI",
      duration: "Quelques jours",
      role: "Conception · Design · Développement · Déploiement",
      stack: ["React", "Vite", "CSS"],
      featured: true,
      heroColor: "navy",
      blurb:
        "Le site sur lequel vous êtes. Une vitrine personnelle où l'esthétique comics rencontre la rigueur d'un livrable académique.",

      star: {
        situation:
          "Le portfolio de fin de 2ème année doit démontrer l'acquisition des compétences de la formation. Plutôt qu'un document statique, j'ai choisi un format que le contenu rend pertinent : un site React. Cohérent avec mon parcours DWDI, et cohérent avec ce que je vise à long terme.",
        tache:
          "Concevoir et coder un site one-page qui présente ma personne, mes projets phares analysés en STAR, mes compétences mappées aux apprentissages critiques, et qui exprime une identité visuelle personnelle. Le site doit servir aussi bien la lecture académique (clarté, exhaustivité) que la lecture professionnelle (impact, mémorabilité).",
        action: [
          "Définition d'une direction artistique 'comics éditorial' inspirée de l'univers Spider-Man (cases, halftone, toile d'araignée), suffisamment subtile pour rester professionnelle.",
          "Architecture React simple en Vite + CSS pur, sans bibliothèque UI lourde, pour garder le contrôle sur chaque détail.",
          "Implémentation d'un toggle 'Mode comics ON/OFF' pour offrir aux visiteurs une lecture plus ou moins ornementale selon leur préférence.",
          "Structuration des données dans un fichier source unique (data.js) pour découpler le contenu de la présentation.",
          "Modale projet détaillée au clic avec la grille STAR complète + AC démontrés.",
          "Tableau récapitulatif AC ↔ projets, et version interactive permettant de cliquer un AC pour voir les projets qui le démontrent.",
          "Déploiement sur Vercel."
        ],
        resultat:
          "Le portfolio est en ligne. Il devient à la fois mon outil de présentation devant le jury et un projet à part entière dans mon CV. Méta : ce projet illustre lui-même plusieurs des compétences qu'il sert à démontrer."
      },

      autoEval: {
        level: "maitrise",
        comment:
          "Compétences Concevoir, Exprimer et Développer toutes mobilisées simultanément. Pleinement à l'aise sur la chaîne complète conception → développement → déploiement, en solo, sur un projet personnel à forte exigence d'identité visuelle."
      },

      ac: ["AC22.01", "AC23.03", "AC24.01", "AC24.06", "AC25.03"]
    }
  ],

  /* ----------------------------------------------------------
     COMPÉTENCES MMI (les 5 grandes)
     ---------------------------------------------------------- */
  competences: [
    {
      id: "comprendre",
      label: "Comprendre",
      full: "Comprendre les écosystèmes, les besoins des utilisateurs et les dispositifs de communication numérique",
      level: "en-voie",
      summary:
        "Analyser un contexte, des besoins, des données. Mobilisée sur les SAE de données, le cadrage des projets et l'audit de sites en refonte pendant le stage.",
      projects: ["dataviz-musique", "refonte-stage", "cineclub"]
    },
    {
      id: "concevoir",
      label: "Concevoir",
      full: "Concevoir ou co-concevoir une réponse stratégique pertinente à une problématique complexe",
      level: "maitrise",
      summary:
        "Penser un produit, un service, une réponse. Mobilisée intensivement sur Fittracker, le ciné-club, et le portfolio lui-même.",
      projects: ["fittracker", "cineclub", "portfolio"]
    },
    {
      id: "exprimer",
      label: "Exprimer",
      full: "Exprimer un message avec les médias numériques pour informer et communiquer",
      level: "maitrise",
      summary:
        "Communiquer par le visuel et le récit. Compétence centrale sur la dataviz, le VR pédagogique et l'identité visuelle du portfolio.",
      projects: ["dataviz-musique", "systeme-solaire-vr", "portfolio"]
    },
    {
      id: "developper",
      label: "Développer",
      full: "Développer pour le web et les médias numériques",
      level: "maitrise",
      summary:
        "Le cœur de ma formation et de mon stage. Mobilisée sur tous les projets, du back-end PHP au front React, en passant par le VR three.js.",
      projects: ["bundle-cms", "cineclub", "systeme-solaire-vr", "fittracker", "perudo-bot", "portfolio"]
    },
    {
      id: "entreprendre",
      label: "Entreprendre",
      full: "Entreprendre dans le secteur du numérique",
      level: "en-voie",
      summary:
        "Organiser, collaborer, livrer. Renforcée par le stage en ESN et le travail en équipe de 8 sur le ciné-club.",
      projects: ["cineclub", "bundle-cms", "fittracker"]
    }
  ],

  /* ----------------------------------------------------------
     RÉFÉRENTIEL DES APPRENTISSAGES CRITIQUES
     Avec mapping vers les projets qui les démontrent.
     ---------------------------------------------------------- */
  apprentissagesCritiques: [
    /* === Comprendre === */
    { code: "AC21.01", label: "Analyser la stratégie de communication ou marketing d'un acteur, d'une organisation au regard d'un secteur ou d'un marché", competence: "comprendre", projects: ["refonte-stage"] },
    { code: "AC21.02", label: "Auditer un site web, une marque ou un service, en termes de trafic et de référencement", competence: "comprendre", projects: ["refonte-stage"] },
    { code: "AC21.03", label: "Traiter des données avec des outils statistiques pour faciliter leur analyse et leur exploitation", competence: "comprendre", projects: ["dataviz-musique", "perudo-bot"] },
    { code: "AC21.04", label: "Identifier et décrire les parcours client à partir d'enquêtes de terrain", competence: "comprendre", projects: ["cineclub"] },
    { code: "AC21.05", label: "Cartographier les expériences utilisateur : points de contact, points de friction et de satisfaction", competence: "comprendre", projects: ["refonte-stage", "fittracker"] },

    /* === Concevoir === */
    { code: "AC22.01", label: "Co-concevoir un produit ou un service (proposition de valeur, fonctionnalités…)", competence: "concevoir", projects: ["cineclub", "fittracker", "portfolio"] },
    { code: "AC22.02", label: "Tester et améliorer l'ergonomie d'un produit à partir d'usage réel et de retours utilisateurs", competence: "concevoir", projects: ["fittracker"] },
    { code: "AC22.04", label: "Optimiser le référencement d'un site web, d'un produit ou d'un service", competence: "concevoir", projects: ["refonte-stage"] },

    /* === Exprimer === */
    { code: "AC23.02", label: "Définir une iconographie (illustrations, photographies, vidéos)", competence: "exprimer", projects: ["systeme-solaire-vr"] },
    { code: "AC23.03", label: "Créer et décliner une identité visuelle (charte graphique)", competence: "exprimer", projects: ["portfolio", "refonte-stage"] },
    { code: "AC23.04", label: "Imaginer, écrire et scénariser en vue d'une communication multimédia ou transmédia", competence: "exprimer", projects: ["systeme-solaire-vr"] },
    { code: "AC23.05", label: "Réaliser, composer et produire pour une communication plurimédia", competence: "exprimer", projects: ["dataviz-musique"] },
    { code: "AC23.06", label: "Élaborer et produire des animations, des designs sonores, des effets spéciaux, de la visualisation de données ou de la 3D", competence: "exprimer", projects: ["dataviz-musique", "systeme-solaire-vr"] },

    /* === Développer === */
    { code: "AC24.01", label: "Produire des pages et applications Web responsives", competence: "developper", projects: ["cineclub", "fittracker", "dataviz-musique", "portfolio", "refonte-stage"] },
    { code: "AC24.02", label: "Mettre en place ou développer un back office", competence: "developper", projects: ["bundle-cms", "cineclub"] },
    { code: "AC24.03", label: "Intégrer, produire ou développer des interactions riches ou des dispositifs interactifs", competence: "developper", projects: ["systeme-solaire-vr", "dataviz-musique", "bundle-cms"] },
    { code: "AC24.04", label: "Modéliser les traitements d'une application Web", competence: "developper", projects: ["bundle-cms", "cineclub", "fittracker", "perudo-bot"] },
    { code: "AC24.05", label: "Optimiser une application web en termes de référencement et de temps de chargement", competence: "developper", projects: ["refonte-stage"] },
    { code: "AC24.06", label: "Configurer une solution d'hébergement adaptée aux besoins", competence: "developper", projects: ["fittracker", "portfolio"] },

    /* === Entreprendre === */
    { code: "AC25.01", label: "Gérer un projet avec une méthode d'amélioration continue", competence: "entreprendre", projects: ["cineclub", "fittracker"] },
    { code: "AC25.03", label: "Construire un outil de mise en réseau professionnel pour être visible des recruteurs et candidats à l'alternance", competence: "entreprendre", projects: ["portfolio"] },
    { code: "AC25.04", label: "Collaborer au sein des organisations", competence: "entreprendre", projects: ["cineclub", "bundle-cms"] },
    { code: "AC25.05", label: "Maîtriser les codes des productions écrites et orales professionnelles", competence: "entreprendre", projects: ["bundle-cms", "cineclub"] },
    { code: "AC25.06", label: "Prendre en compte les contraintes juridiques", competence: "entreprendre", projects: ["cineclub"] }
  ],

  /* ----------------------------------------------------------
     STACK TECHNIQUE
     ---------------------------------------------------------- */
  stack: [
    { group: "Front-end", items: ["HTML", "CSS / SCSS", "Tailwind CSS", "JavaScript", "React"] },
    { group: "Back-end", items: ["Node.js", "PHP", "Symfony"] },
    { group: "Données", items: ["PostgreSQL", "MySQL", "Plotly"] },
    { group: "Outils", items: ["Vite", "Git", "Docker", "Vercel", "Neon"] },
    { group: "Spécialités", items: ["three.js", "WebXR", "Bootstrap", "ngrok"] }
  ],

  /* ----------------------------------------------------------
     PARCOURS — Timeline 2 ans
     ---------------------------------------------------------- */
  timeline: [
    {
      period: "2024",
      title: "Entrée en BUT MMI",
      description: "Découverte du multimédia et de l'internet. Premiers contacts avec HTML, CSS, JS, et les outils graphiques."
    },
    {
      period: "2024-2025",
      title: "Première année",
      description: "SAE de fondation. Premier site PHP + BDD (où j'ai définitivement compris que je préfère le JavaScript). Choix d'orientation : parcours DWDI."
    },
    {
      period: "Sept. 2025 → Janv. 2026",
      title: "Deuxième année — semestre 3",
      description: "SAE dataviz,  SAE création UI. Montée en compétence sur le travail de groupe."
    },
    {
      period: "Févr. → Mars 2026",
      title: "Stage chez ABSYS Informatique",
      description: "8 semaines en entreprise de services numériques. Sept projets clients, contribution au bundle CMS interne. Bascule d'utilisateur d'outils à développeur."
    },
    {
      period: "Mars 2026 → en cours",
      title: "Lancement de Fittracker",
      description: "Démarré dans la dernière ligne droite du stage pour répondre à un besoin personnel de suivi sportif. Premier projet où je gère tout, de la conception au déploiement Vercel."
    },
    {
      period: "Avr. → Juin 2026",
      title: "Fin de deuxième année",
      description: "SAE ciné-club, SAE Perudo bot (1ère place au tournoi inter-équipes) et VR système solaire en parallèle. Construction du portfolio. Recherche d'alternance pour la 3ème année."
    }
  ],

  /* ----------------------------------------------------------
     CONTACT
     ---------------------------------------------------------- */
  contact: {
    email: "tristangoujan@gmail.com",
    socials: [
      { label: "GitHub", handle: "@TristanGoujan", url: "https://github.com/TristanGoujan" },
      { label: "LinkedIn", handle: "in/tristan-goujan", url: "https://www.linkedin.com/in/tristan-goujan-14667539a/" }
    ],
    cta: "Disponible pour une alternance dès la rentrée 2026.",
    location: "Dijon, France · Mobile selon opportunités"
  },

  /* ----------------------------------------------------------
     CLINS D'ŒIL (utilisés discrètement dans l'UI)
     ---------------------------------------------------------- */
  comicsLore: {
    footerQuote: "Un grand pouvoir implique de grandes responsabilités.",
    altTagline: "Étudiant le jour, développeur la nuit.",
    secretEgg: "🕷️"
  }
};

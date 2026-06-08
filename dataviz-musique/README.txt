------------------------------------------
	Utilisation du site
------------------------------------------

Sélectionnez, dans les menus « Axe X » et « Axe Y », les variables à comparer. Le texte explicatif correspondant apparaîtra automatiquement en dessous du graphique.

------------------------------------------
	Utilisation de l'ia
------------------------------------------

Pour la majeure partie de ce projet, l’intelligence artificielle a été utilisée à des fins de documentation et de recherche, 
notamment pour l’apprentissage et l’utilisation de la bibliothèque Plotly. Elle a également permis d’identifier et de corriger des erreurs lors du développement du premier graphique, 
qui s’est avéré être le plus complexe à mettre en place en raison de la grande quantité de données à traiter.

------------------------------------------
	Choix de trie graph n°1
------------------------------------------

Pour le graphique 1, qui compare la relation entre la valence d’un morceau et son tempo, sa danceability, son energy et son intensité sonore, 

le choix de la méthode de tri et d’affichage des données a été un enjeu important. La base de données étant très volumineuse, il était nécessaire d’utiliser un algorithme permettant de conserver un maximum d’informations 
tout en garantissant une bonne lisibilité du graphique.

Plusieurs approches ont été testées, notamment un algorithme regroupant les points par artiste et un autre regroupant les morceaux par année. 

La solution la plus concluante a finalement été d’utiliser un algorithme sélectionnant aléatoirement un dixième des points à afficher.
 Bien que cette méthode entraîne une perte d’informations, celle-ci n’est pas critique au regard de la taille de la base de données et permet de préserver une bonne compréhension globale des tendances observables dans le graphique.
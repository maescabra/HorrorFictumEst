Horror Fictum Est

Projet réalisé en React pour le S4 du DUT MMI

## Génèse du projet

Depuis quelques mois, j'ai pour ambition de créer un site répertoriant des histoires d'horreur, avec la possibilité d'importer un lecteur audio Spotify permettant d'écouter les versions audio de ces histoires, ou bien une autre possibilité serait d'ajouter des musiques d'ambiance, car j'ai pour projet à long terme de créer quand j'en aurai le temps, un podcast (d'abord d'histoires d'horreur, puis d'autres genres). Je souhaiterais également au second plan m'intéresser à la psychologie, à la criminologie et à la cybercriminologie, c'est pourquoi ce site serait amené à évoluer à l'avenir. Je souhaiterais créer un contenu similaire à ce que font mes créateurs de contenu favoris (Sonya Lwu, Feldup, creepy stories, L'Étrange Rendez-Vous, Tales of Ivy, et bien entendu Horror Humanum Est (oui le nom en est FORTEMENT inspiré, car je souhaitais en tirer l'aspect horrifique et lui rendre hommage. Le nom pourra évoluer à l'avenir) ...)

J'ai donc saisi l'opportunité d'apprendre React que je souhaitais découvrir en profondeur depuis qu'un de mes amis m'en avait parlé, et de réaliser mon projet, faisant ainsi d'une pierre deux coups. Cet ami m'a d'ailleurs été d'une aide très précieuse pour comprendre les bases de React. Je souhaitais au départ allier mes compétences en développement et celles en graphisme afin de créer des histoires animées, mais je n'avais aucune compétence en motion design. Je réserve donc cette fonctionnalité pour plus tard. Il me tient également à cœur de pouvoir créer des histoires interactives, des histoires à choix. 

Les jeux narratifs et interactifs sont ce que je préfère. Pouvoir façonner l'identité du personnage principal à sa guise est important. Je souhaite par dessus tout offrir aux lecteurs une expérience personnalisée et unique dont ils se souviendront. A l'état actuel, il s'agirait simplement d'un recueil d'histoire banal, et je ne peux pas le publier ainsi.

J'ai également découvert l'utilisation de Node.JS et de Material-UI au cours de cet apprentissage. Je souhaitais depuis un moment pouvoir apprendre à maîtriser Node.JS, notamment pour pouvoir créer une intelligence artificielle avec qui il serait possible d'échanger (j'ai de très nombreux projets, tellement que je ne pourrais pas tous les concrétiser en une seule vie...)

## Initialisation du projet

J'ai initialisé mon projet avec Create React App que j'ai utilisé dans mon terminal Node.js intégré à VS Code (https://github.com/facebook/create-react-app). Après la première prise en main de React, j'ai également installé Material-UI, librairie React.

## Fonctionnalités à intégrer :
- Filtrage des histoires par genre au clic sur les boutons
- Changement de style du bouton (outlined > contained) au clic
- Ajout de dynamisme grâce à des animations JS
- Créer des histoires à choix (comme https://morale.arte.tv/)
- Back-office pour créer les histoires facilement + stylisation
- Musiques d'ambiance
- Version audio des histoires
- Possibilité pour les utilisateurs de proposer des histoires (par mail ? ou directement grâce à un formulaire qui envoie les données sur une page Suggestions)

## Architecture

### Visible

Sur la page d'accueil, on a toutes les cartes d'histoires affichant les informations essentielles pour chaque histoire :
	- le(s) genre(s) montré(s) grâce à une icône,
	- le temps de lecture,
	- la date de création,
	- le titre,
	- la miniature,
	- un résumé,
	- un bouton permettant de mettre les histoires en favori (à sauvegarder dans le cache): PAS FONCTIONNEL,
	- un bouton permettant de partager l'histoire : PAS FONCTIONNEL,
	- un bouton "Lire la suite", redirigeant vers la page de l'histoire.
On a également un logo et une barre avec des boutons contenant le nom de chaque genre en lien avec l'horreur.

### Source

L'application est composée d'un dossier appelé [React_HorrorApp], dans lequel on retrouve :

- un dossier [node_modules] contenant tous les modules de Node.js (donc tous les modules créés par d'autres contributeurs),
- un dossier [public] qui est la partie qui importe l'application et auquel j'ai à peine touché, sauf pour modifier le favicon et ajouter les assets (les images
correspondant à chaque histoire),
- et un dossier [src] contenant le cœur de l'application. J'ai créé à l'intérieur de celui-ci :
	- un dossier [components] contenant tous mes composants :
		- un fichier StoryCard.jsx qui utilise les informations de storylist.js,
		- un fichier Logo.jsx qui permet d'importer et styliser le logo créé,
		- un fichier Catalog.jsx qui prend en paramètre storylist.js et qui affiche les cartes,
		- un fichier FilteredCatalog.jsx qui (est censé prendre) en paramètre genres.js pour filtrer les genres au clic sur les boutons,
		- un fichier Story.jsx qui permet de styliser les histoires sur leur page dédiée,
	- un dossier [data] contenant un fichier storylist.js qui contient la liste des histoires avec toutes leurs spécificités,
	- un dossier [types] contenant un fichier genres.js qui contient tous les genres, leur couleur et leur nom,
	- un dossier [utils] contenant un fichier formatimg.js qui permet de formater l'URL des images locales.

- J'ai utilisé ReactRouterDOM pour ajouter des "pages" (une page par histoire), essentiel pour les applis qui ne sont pas single page.
- Pour créer mes composants, j'ai exploité les composants déjà créés par Material-UI (similaire à Bootstrap)
- J'ai intégré les styles grâce à la méthode makeStyles() de Material-UI.

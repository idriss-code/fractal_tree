# Arbre Fractal 3D Non-Planaire

Ce projet visualise un arbre fractal en 3D non-planaire à l'aide de Three.js. L'application permet de modifier divers paramètres pour explorer différentes formes d'arbres.

## Structure du Projet

Le projet est organisé comme suit :

- `index.html`: Le fichier HTML principal qui structure la page et lie les fichiers CSS et JavaScript.
- `style.css`: Contient tous les styles CSS pour l'interface utilisateur.
- `js/`: Ce répertoire contient les fichiers JavaScript séparés par fonctionnalité :
  - `js/tree-params.js`: Définit les variables pour les paramètres de l'arbre.
  - `js/utils.js`: Contient des fonctions utilitaires pour les calculs vectoriels et les rotations.
  - `js/tree-generation.js`: Implémente la logique récursive pour générer les données de l'arbre.
  - `js/tree-visualization.js`: Gère la création des objets 3D (tubes) pour visualiser l'arbre avec Three.js.
  - `js/controls.js`: Contient la logique pour gérer les interactions avec les contrôles de l'interface utilisateur.
  - `js/script.js`: Initialise la scène Three.js, configure l'éclairage, le sol, et gère la boucle d'animation.

## Comment Exécuter le Projet

Pour exécuter ce projet, il suffit d'ouvrir le fichier `index.html` dans un navigateur web moderne. Aucune installation de serveur local n'est nécessaire.

1. Naviguez jusqu'au répertoire du projet.
2. Double-cliquez sur `index.html` ou ouvrez-le via le menu "Fichier" -> "Ouvrir" de votre navigateur.

## Utilisation

Une fois l'application chargée dans le navigateur, vous verrez l'arbre fractal rendu en 3D. Un panneau de contrôle en haut à gauche vous permet de modifier les paramètres de l'arbre tels que la profondeur, le facteur d'échelle, les angles de bifurcation, l'inclinaison et la torsion.

- Utilisez les curseurs pour ajuster les valeurs.
- Cliquez sur "Régénérer" pour redessiner l'arbre avec les nouveaux paramètres.
- Cliquez sur "Animation" pour activer/désactiver la rotation automatique de l'arbre.
- Utilisez les boutons de préréglage ("Original 2D", "Naturel 3D", "Hélice") pour charger des configurations d'arbre prédéfinies.

Les informations sur le nombre de segments et le mode d'affichage actuel sont affichées en bas à gauche.

## Technologies Utilisées

- HTML5
- CSS3
- JavaScript
- Three.js (pour le rendu 3D)
let scene, camera, renderer, treeGroup;
let animating = false;

// Paramètres de l'arbre
let n = 6;
let scaleFactor = 0.7;
let leftAngle = Math.PI / 6; // 30°
let rightAngle = Math.PI / 6; // 30°
let leftTilt = 0; // inclinaison hors plan
let rightTilt = 0; // inclinaison hors plan
let twistPerLevel = 0; // torsion par niveau
let randomVariation = 0; // variation aléatoire
let arbreData = [];
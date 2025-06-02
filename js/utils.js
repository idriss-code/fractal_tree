// Fonction pour créer un vecteur directeur à partir d'angles sphériques
function createDirectionVector(azimuth, elevation) {
  return new THREE.Vector3(
    Math.sin(elevation) * Math.cos(azimuth),
    Math.cos(elevation),
    Math.sin(elevation) * Math.sin(azimuth)
  );
}

// Fonction pour faire tourner un vecteur autour d'un axe
function rotateVectorAroundAxis(vector, axis, angle) {
  const rotationMatrix = new THREE.Matrix4();
  rotationMatrix.makeRotationAxis(axis.normalize(), angle);
  return vector.clone().applyMatrix4(rotationMatrix);
}
function createTube3D(segment) {
  const { start, end, depth, maxDepth } = segment;

  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();

  if (length < 0.001) return null;

  // Rayon basé sur la profondeur
  const radiusMultiplier = Math.pow(0.75, depth);
  const startRadius = 0.08 * radiusMultiplier;
  const endRadius = 0.04 * radiusMultiplier;

  // Couleur dégradée du brun au vert
  const t = depth / maxDepth;
  const r = (1 - t) * 0.6 + t * 0.2;
  const g = (1 - t) * 0.3 + t * 0.8;
  const b = (1 - t) * 0.1 + t * 0.3;

  const geometry = new THREE.CylinderGeometry(
    endRadius,
    startRadius,
    length,
    6,
    1
  );
  const material = new THREE.MeshPhongMaterial({
    color: new THREE.Color(r, g, b),
    shininess: 40,
    transparent: true,
    opacity: 0.95,
  });

  const tube = new THREE.Mesh(geometry, material);

  // Position au centre du segment
  const center = new THREE.Vector3()
    .addVectors(start, end)
    .multiplyScalar(0.5);
  tube.position.copy(center);

  // Orientation du tube
  const axis = new THREE.Vector3(0, 1, 0);
  tube.quaternion.setFromUnitVectors(axis, direction.normalize());

  tube.castShadow = true;
  tube.receiveShadow = true;

  return tube;
}

function createTreeVisualization() {
  if (treeGroup) {
    scene.remove(treeGroup);
  }

  treeGroup = new THREE.Group();

  arbreData.forEach((segment) => {
    const tube = createTube3D(segment);
    if (tube) {
      treeGroup.add(tube);
    }
  });

  scene.add(treeGroup);
}
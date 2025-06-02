function proc_arbre_3d(
  startPos,
  endPos,
  currentDepth,
  maxDepth,
  rightVector = null,
  forwardVector = null
) {
  const result = [
    {
      start: startPos.clone(),
      end: endPos.clone(),
      depth: currentDepth,
      maxDepth: maxDepth,
    },
  ];

  if (currentDepth >= maxDepth) return result;

  const currentDirection = new THREE.Vector3()
    .subVectors(endPos, startPos)
    .normalize();
  const segmentLength = startPos.distanceTo(endPos) * scaleFactor;

  // Initialisation des axes locaux si à la racine
  if (currentDepth === 0) {
    rightVector = new THREE.Vector3(1, 0, 0); // X
    forwardVector = new THREE.Vector3(0, 0, 1); // Z
  }

  // Appliquer la torsion (twist) sur l’axe forward
  const twistedForward =
    twistPerLevel !== 0
      ? rotateVectorAroundAxis(
          forwardVector.clone(),
          currentDirection,
          twistPerLevel
        )
      : forwardVector;

  const branches = [
    { angle: leftAngle, tilt: leftTilt, side: -1 },
    { angle: rightAngle, tilt: rightTilt, side: 1 },
  ];

  branches.forEach(({ angle, tilt, side }) => {
    const angleVar = (Math.random() - 0.5) * randomVariation;
    const tiltVar = (Math.random() - 0.5) * randomVariation;

    const rotAngle = (angle + angleVar) * side;
    const tiltAngle = tilt + tiltVar;

    let newDir = currentDirection.clone();
    let newRight = rightVector.clone();
    let newForward = twistedForward.clone();

    // Rotation dans le plan de bifurcation
    if (rotAngle !== 0) {
      const axis = twistedForward;
      newDir = rotateVectorAroundAxis(newDir, axis, rotAngle);
      newRight = rotateVectorAroundAxis(newRight, axis, rotAngle);
    }

    // Inclinaison hors du plan
    if (tiltAngle !== 0) {
      const axis = rightVector;
      newDir = rotateVectorAroundAxis(newDir, axis, tiltAngle);
    }

    const newEnd = endPos.clone().addScaledVector(newDir, segmentLength);
    result.push(
      ...proc_arbre_3d(
        endPos,
        newEnd,
        currentDepth + 1,
        maxDepth,
        newRight,
        newForward
      )
    );
  });

  return result;
}

function generateTree() {
  const startPos = new THREE.Vector3(0, 0, 0);
  const endPos = new THREE.Vector3(0, 2, 0);

  arbreData = proc_arbre_3d(startPos, endPos, 0, n);

  document.getElementById("segmentCount").textContent = arbreData.length;
  createTreeVisualization();
}
function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a1e);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(5, 4, 8);
  camera.lookAt(0, 2, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById("container").appendChild(renderer.domElement);

  // Éclairage
  const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
  mainLight.position.set(8, 12, 6);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 2048;
  mainLight.shadow.mapSize.height = 2048;
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0x4a90e2, 0.3);
  fillLight.position.set(-5, 3, -5);
  scene.add(fillLight);

  // Sol pour référence
  const groundGeometry = new THREE.PlaneGeometry(20, 20);
  const groundMaterial = new THREE.MeshLambertMaterial({
    color: 0x1a1a2e,
    transparent: true,
    opacity: 0.3,
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  generateTree();
  setupControls();
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  if (animating && treeGroup) {
    treeGroup.rotation.y += 0.01;
  } else {
    const time = Date.now() * 0.0003;
    camera.position.x = Math.cos(time) * 10;
    camera.position.z = Math.sin(time) * 10;
    camera.lookAt(0, 2, 0);
  }

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
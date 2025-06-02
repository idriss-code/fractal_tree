function setupControls() {
  document.getElementById("depth").addEventListener("input", (e) => {
    n = parseInt(e.target.value);
    document.getElementById("depthValue").textContent = n;
  });

  document.getElementById("factor").addEventListener("input", (e) => {
    scaleFactor = parseFloat(e.target.value);
    document.getElementById("factorValue").textContent = scaleFactor;
  });

  document.getElementById("leftAngle").addEventListener("input", (e) => {
    leftAngle = (parseInt(e.target.value) * Math.PI) / 180;
    document.getElementById("leftAngleValue").textContent =
      e.target.value + "°";
  });

  document.getElementById("rightAngle").addEventListener("input", (e) => {
    rightAngle = (parseInt(e.target.value) * Math.PI) / 180;
    document.getElementById("rightAngleValue").textContent =
      e.target.value + "°";
  });

  document.getElementById("leftTilt").addEventListener("input", (e) => {
    leftTilt = (parseInt(e.target.value) * Math.PI) / 180;
    document.getElementById("leftTiltValue").textContent =
      e.target.value + "°";
  });

  document.getElementById("rightTilt").addEventListener("input", (e) => {
    rightTilt = (parseInt(e.target.value) * Math.PI) / 180;
    document.getElementById("rightTiltValue").textContent =
      e.target.value + "°";
  });

  document.getElementById("twist").addEventListener("input", (e) => {
    twistPerLevel = (parseInt(e.target.value) * Math.PI) / 180;
    document.getElementById("twistValue").textContent =
      e.target.value + "°";
  });

  document.getElementById("random").addEventListener("input", (e) => {
    randomVariation = (parseInt(e.target.value) * Math.PI) / 180;
    document.getElementById("randomValue").textContent =
      e.target.value + "°";
  });
}

function regenerateTree() {
  generateTree();
}

function toggleAnimation() {
  animating = !animating;
}

function setPreset(type) {
  switch (type) {
    case "original":
      leftAngle = Math.PI / 9;
      rightAngle = (2 * Math.PI) / 9;
      leftTilt = 0;
      rightTilt = 0;
      twistPerLevel = 0;
      randomVariation = 0;
      document.getElementById("modeInfo").textContent = "2D Original";
      break;
    case "natural":
      leftAngle = Math.PI / 6;
      rightAngle = Math.PI / 6;
      leftTilt = Math.PI / 12;
      rightTilt = -Math.PI / 12;
      twistPerLevel = Math.PI / 36;
      randomVariation = Math.PI / 24;
      document.getElementById("modeInfo").textContent = "3D Naturel";
      break;
    case "helix":
      leftAngle = Math.PI / 4;
      rightAngle = Math.PI / 4;
      leftTilt = Math.PI / 8;
      rightTilt = -Math.PI / 8;
      twistPerLevel = Math.PI / 8;
      randomVariation = Math.PI / 36;
      document.getElementById("modeInfo").textContent = "3D Hélice";
      break;
  }
  updateControlValues();
  generateTree();
}

function updateControlValues() {
  document.getElementById("leftAngle").value = Math.round(
    (leftAngle * 180) / Math.PI
  );
  document.getElementById("leftAngleValue").textContent =
    Math.round((leftAngle * 180) / Math.PI) + "°";
  document.getElementById("rightAngle").value = Math.round(
    (rightAngle * 180) / Math.PI
  );
  document.getElementById("rightAngleValue").textContent =
    Math.round((rightAngle * 180) / Math.PI) + "°";
  document.getElementById("leftTilt").value = Math.round(
    (leftTilt * 180) / Math.PI
  );
  document.getElementById("leftTiltValue").textContent =
    Math.round((leftTilt * 180) / Math.PI) + "°";
  document.getElementById("rightTilt").value = Math.round(
    (rightTilt * 180) / Math.PI
  );
  document.getElementById("rightTiltValue").textContent =
    Math.round((rightTilt * 180) / Math.PI) + "°";
  document.getElementById("twist").value = Math.round(
    (twistPerLevel * 180) / Math.PI
  );
  document.getElementById("twistValue").textContent =
    Math.round((twistPerLevel * 180) / Math.PI) + "°";
  document.getElementById("random").value = Math.round(
    (randomVariation * 180) / Math.PI
  );
  document.getElementById("randomValue").textContent =
    Math.round((randomVariation * 180) / Math.PI) + "°";
}
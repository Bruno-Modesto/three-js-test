const box = new THREE.Mesh(geometryBox, materialBox)
const cube = new THREE.Mesh(geometryCube, materialCube)
cube.castShadow = true;
cube.receiveShadow = false;
box.receiveShadow = true;

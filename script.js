// scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// object
const geometryCube = new THREE.BoxGeometry(1,1,1);
/*
const geometrySphere = new THREE.SphereBufferGeometry(.5,64,64);
*/
const geometryBox = new THREE.BoxGeometry(10,0.5,10);

// material
const materialCube = new THREE.MeshStandardMaterial()
materialCube.color = new THREE.Color(0x00ff00)
materialCube.metalness = 0.95;
materialCube.roughness = 0.4;
/*
const materialSphere = new THREE.MeshStandardMaterial()
materialSphere.color = new THREE.Color(0xffffff)
materialSphere.metalness = 0.95;
materialSphere.roughness = 0;
materialSphere.flatShading = true;
*/
const materialBox = new THREE.MeshStandardMaterial()
materialBox.color = new THREE.Color(0xffffff)
materialBox.metalness = 0.9;
materialBox.roughness = 0.3;


// mesh
/*
const sphere = new THREE.Mesh(geometrySphere, materialSphere)
*/
const box = new THREE.Mesh(geometryBox, materialBox)
const cube = new THREE.Mesh(geometryCube, materialCube)
cube.castShadow = true;
cube.receiveShadow = false;
/*
sphere.castShadow = true;
sphere.receiveShadow = false;
*/
box.receiveShadow = true;


// renderer
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// web window
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// camera and object inside scene
camera.position.z = 9;
camera.position.y = 3;
camera.position.x = -9;
camera.rotation.y = -0.75;
scene.add(box, cube);

// objects position
box.position.y = -1;
cube.position.y = 0.3;

// lights
const pointLight = new THREE.PointLight(0xff0000, 5)
pointLight.position.set(3,5,4)
pointLight.castShadow = true;
pointLight.shadow.radius = 20;

const pointLight2 = new THREE.PointLight(0x0000ff, 5)
pointLight2.position.set(-3,5,-4)
pointLight2.castShadow = true;
pointLight2.shadow.radius = 20;

const light = new THREE.PointLight( 0xffffff, 1.5 );
light.position.set(0,20,0)
light.castShadow = true;
light.shadow.radius = 1;

scene.add(pointLight, pointLight2, light)

// loader
/*
let loader = new THREE.GLTFLoader();
loader.load('trybeLogo.gltf', function(gltf) {
    scene.add(gltf.scene);
    trybe = gltf.scene.children[0];
    trybe.position.set(1,1,1)
})
*/

// controls

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.campingFactor = 0.25;
controls.enableZoom = true;


// animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
    cube.rotation.x += .01;
    cube.rotation.z += .01;
}
animate();
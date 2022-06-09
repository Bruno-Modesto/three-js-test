// scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// object
const geometryCube = new THREE.BoxGeometry(1,1,1);
const geometryBox = new THREE.BoxGeometry(10,0.5,10);

// material
const materialCube = new THREE.MeshStandardMaterial()
materialCube.color = new THREE.Color(0x00ff00)
materialCube.metalness = 0.95;
materialCube.roughness = 0.2;
const materialBox = new THREE.MeshStandardMaterial()
materialBox.color = new THREE.Color(0xffffff)
materialBox.metalness = 0.9;
materialBox.roughness = 0.3;


// mesh
const box = new THREE.Mesh(geometryBox, materialBox)
const cube = new THREE.Mesh(geometryCube, materialCube)
cube.castShadow = true;
cube.receiveShadow = false;
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
box.position.set(0,-1,0);
cube.position.set(0,0.3,0);

// lights
const redLight = new THREE.PointLight(0xff0000, 5)
redLight.position.set(3,5,4)
redLight.castShadow = true;
redLight.shadow.radius = 15;

const blueLight = new THREE.PointLight(0x0000ff, 5)
blueLight.position.set(-3,5,-4)
blueLight.castShadow = true;
blueLight.shadow.radius = 15;

const ambientLight = new THREE.PointLight( 0xffffff, 1.5 );
ambientLight.position.set(0,20,0)
ambientLight.castShadow = true;
ambientLight.shadow.radius = 5;

const ambientLight2 = new THREE.PointLight( 0xffffff, 3 );
ambientLight2.position.set(-9,-5,9)
ambientLight2.castShadow = true;

const ambientLight3 = new THREE.PointLight( 0xffffff, 3 );
ambientLight3.position.set(9,-5,-9)
ambientLight3.castShadow = true;
ambientLight3.shadow.radius = 1;

scene.add(redLight, blueLight, ambientLight, ambientLight2, ambientLight3)

// loader
/*
let loader = new THREE.FBXLoader();
loader.load('three-js-test/trybe-logo/trybeLogo.fbx', function(fbx) {
    trybe = fbx.scene.children[0];
    trybe.position.set(3,2,3)
    scene.add(fbx.scene);
    trybe.receiveShadow = false;
    trybe.castShadow = true;
})
*/

// controls

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.campingFactor = 0.25;
controls.enableZoom = true;

// animation
let cubeZMinus = false; 
let cubeZPlus = true;
let cubeXMinus = false; 
let cubeXPlus = true;
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;
    if(cubeZPlus == true){
        cube.position.z += 0.03;
        if(cube.position.z >= 4.5){
            cubeZPlus = false;
            cubeZMinus = true;
        }
    } else if(cubeZMinus == true) {
        cube.position.z -= 0.04;
        if(cube.position.z <= -4.5){
            cubeZMinus = false;
            cubeZPlus = true;
        }
    }
    if(cubeXPlus == true){
        cube.position.x += 0.02;
        if(cube.position.x >= 4.5){
            cubeXPlus = false;
            cubeXMinus = true;
        }
    } else if(cubeXMinus == true) {
        cube.position.x -= 0.03;
        if(cube.position.x <= -4.5){
            cubeXMinus = false;
            cubeXPlus = true;
        }
    }
}
animate();
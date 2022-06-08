// scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// object
/*
const geometry = new THREE.BoxGeometry(1, 1, 1,);
const material = new THREE.MeshBasicMaterial()
material.color = new THREE.Color(0xff0000)
const box = new THREE.Mesh(geometry, material)
*/

// renderer
const renderer = new THREE.WebGLRenderer();
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
camera.position.z = 5;
scene.add('object');


// animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    /*
    object.rotation.y += 0.1
    object.rotation.x += 0.1
    */
}
animate();

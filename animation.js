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
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

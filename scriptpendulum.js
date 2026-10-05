/*import * as THREE from 'three';

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth /window.innerHeight,
    0.1,
    1000
);

camera.position.set(0,0,8);
camera.lookAt(0,0,0);

//pendulum 

//support
const pendulumSupportGeometry = new THREE.BoxGeometry(4, 0.5, 1);

const pendulumSupportMaterial = new THREE.MeshBasicMaterial({
    color: 0x8B4513
});

const pendulumSupport = new THREE.Mesh(
    pendulumSupportGeometry,
    pendulumSupportMaterial
);

pendulumSupport.position.y = 1.5; 
scene.add(pendulumSupport);

//pivot

const pendulumPivot = new THREE.Group();
pendulumPivot.position.set(0, -0.25,0);

pendulumPivot.add(pendulumPivot);

//pivot rod

const pendulumRodGeometry = new THREE.CylinderGeometry(
    0.08,
    0.08,
    3,
    32
);

const pendulumRodMaterial = new THREE.MeshBasicMaterial({
    color : 0x444444
});

const pendulumRod = new THREE.Mesh(
    pendulumRodGeometry,
    pendulumRodMaterial
);

pendulumRod.position.y = -1.45;

pendulumPivot.add(pendulumRod);
pendulumPivot.add(pendulumRod);


//pendulum bob

const pendulumBobGeometry = new THREE.SphereGeometry(
    0.4,
    32,
    32
);

const pendulumBobMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000
});

const pendulumBob = new THREE.Mesh(
    pendulumBobGeometry,
    pendulumBobMaterial
);

pendulumBob.position.y = -3.2;

pendulumPivot.add(pendulumBob);
//renderer

const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);

//render
renderer.render(scene, camera);


*/

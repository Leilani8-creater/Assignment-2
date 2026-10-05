import * as THREE from 'three';

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0,0,8);
camera.lookAt(0,0,0);

//spaceship body

const bodyGeometry = new THREE.ConeGeometry(
    1,
    3,
    4

);

const bodyMaterial = new THREE.MeshBasicMaterial({
    color: 0x888888
});

const spaceshipBody = new THREE.Mesh(
    bodyGeometry,
    bodyMaterial
);

spaceshipBody.rotation.z = -Math.PI / 2;
scene.add(spaceshipBody);

//top wings
const wingGeometry = new THREE.BoxGeometry(
    1.5,
    0.2,
    0.8
);

const wingMaterial = new THREE.MeshBasicMaterial({
    color: 0x4444ff
});

const topWing = new THREE.Mesh(
    wingGeometry,
    wingMaterial
);

topWing.position.y = 0.8;
scene.add(topWing);

//bottom wing

const bottomWing = new THREE.Mesh(
    wingGeometry,
    wingMaterial
);
bottomWing.position.y = -0.8;
scene.add(bottomWing);

//engine nozzel

const engineGeometry = new THREE.CylinderGeometry(
    0.4,
    0.4,
    0.6,
    32
);

const engineMaterial = new THREE.MeshBasicMaterial({
    color : 0x333333
});

const engine = new THREE.Mesh(
    engineGeometry,
    engineMaterial
);

engine.rotation.z = Math.PI /2;

engine.rotation.x = -1.7;

scene.add(engine);


//renderer

const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);

//render
renderer.render(scene,camera);
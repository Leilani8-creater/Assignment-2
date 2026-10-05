import * as THREE from 'three';
import './style.css';

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x07111f);

//camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.set( 8, 6, 10);
camera.lookAt(0,1,0);

const renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

//lighting
const ambientLight = new THREE.AmbientLight(0xfffff, 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xfffff, 2);
directionalLight.position.set(5,10,7);
scene.add(directionalLight);

//object 
const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshStandardMaterial({
  color: 0x22c55e
});

const cube = new THREE.Mesh(geometry, material);
cube.position.y = 1;

scene.add(cube);

function animate(){
  requestAnimationFrame(animate);

  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
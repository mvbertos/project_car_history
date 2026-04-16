import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(-10, 30, 30);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

const axelhelper = new THREE.AxesHelper(5);
scene.add(axelhelper);

function animationLoop() {
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animationLoop);

function getRendererElement() {
  return renderer.domElement;
}
export { getRendererElement };

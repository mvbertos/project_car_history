import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//Renderer
const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);

//Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

// const axelhelper = new THREE.AxesHelper(5);
// scene.add(axelhelper);

//Camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.set(5, 10, 16);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableZoom = false;
orbit.enablePan = false;
orbit.update();

//Light
const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.castShadow = true;
ambientLight.intensity = 1000;
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);

// const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(dLightHelper);

//Load Model
const modelRef = new URL(
  "../assets/model/nissan_fairlady_300zx_z32_1989.glb",
  import.meta.url,
);
const loader = new GLTFLoader();
loader.load(
  modelRef.href,
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);
    model.position.set(0, 0, 0);
    console.log("Model Loaded!");
  },
  (e) => {
    console.error(e);
  },
);

//Update renderer
function animationLoop() {
  renderer.render(scene, camera);
}

// Update the windowsize for the renderer

function resizeRendererView() {
  const container = renderer.domElement.parentElement;
  if (container == null) {
    return;
  }

  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

window.addEventListener("resize", () => {
  resizeRendererView();
});

renderer.setAnimationLoop(animationLoop);

function getRendererElement() {
  return renderer.domElement;
}

let resizeObserver;

function setRendererParent(parent) {
  parent.appendChild(renderer.domElement);
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  resizeObserver = new ResizeObserver(() => {
    resizeRendererView();
  });
  resizeObserver.observe(parent);
  window.addEventListener("resize", resizeRendererView);
  resizeRendererView();
}

export { setRendererParent };

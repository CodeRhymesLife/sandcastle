import { BoxGeometry, DirectionalLight, MeshBasicMaterial, Mesh, Scene, Vector3 } from "three";
import XRInput from "../../engine/xrinput";
import PeerConnection from "../../engine/networking/PeerConnection";
import State from "../../engine/state";
import Physics from "../../engine/physics/physics";

import SettlersOfCatan from "./settlersofcatan";

export const scene = new Scene();
const networking = new PeerConnection(scene);
let settlers;

//Physics.enableDebugger(scene);

scene.init = () => {
  const light = new DirectionalLight(0xffffff, 0.8);
  scene.add(light);

  settlers = new SettlersOfCatan();
  scene.add(settlers);
};

// Add paddles when we know our inputs
State.eventHandler.addEventListener("inputsourceschange", e => {
  XRInput.controllerGrips.forEach((controller, i) => {
    // add controller RBs
    Physics.addControllerRigidBody(controller);

    // network controllers
    networking.remoteSync.addSharedObject(controller);

    // create controller models
    XRInput.CreateControllerModel(controller, scene);
  });
});

scene.init();
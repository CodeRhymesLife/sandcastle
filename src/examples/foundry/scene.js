// SURGICAL PLANNING sample code
// important: test in metachromium which enables transparent WebXR rendering on desktop!
// https://github.com/webaverse/metachromium-bin

import { AmbientLight, LoadingManager, Scene, Color, Mesh, Plane, DoubleSide, SphereBufferGeometry, PlaneBufferGeometry, MeshBasicMaterial, MeshNormalMaterial, MeshPhongMaterial, Object3D, HemisphereLight, DirectionalLight, SpotLight, ShaderMaterial, AdditiveBlending, BufferGeometry, TextureLoader, Float32BufferAttribute, Points, DynamicDrawUsage, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const GLTFFoundry = require("./assets/models/foundry/foundry-upstairs.gltf");
const GLTFFoundryBin = require("./assets/models/foundry/foundry-upstairs.bin");
const GLTFFoundryPng = require("./assets/models/foundry/foundry-upstairs.png");

export const scene = new Scene();
//const networking = new PeerConnection(scene);

scene.init = () =>
{
    var light = new AmbientLight( 0x404040 ); // soft white light
    light.intensity = 10;
    scene.add( light );

    const manager = new LoadingManager();
    const oldResolve = manager.resolveURL;
    manager.resolveURL = (uri) => {
        console.log("Resolving uri: " + uri);

        // When the GLTF loader reads "foundry-upstairs.jpg" in the GLTF json
        // it thinks it is in the directory as the gltf file (i.e. /assets/models/)
        // However, in webpack.common.js we put images in /assets/images
        // so we need to point the image at the appropriate path
        if (uri.includes("foundry-upstairs.png"))
        {
            uri = GLTFFoundryPng
        }

        return oldResolve(uri)
    };

    const loader = new GLTFLoader(manager);

    // "A simulated heart" developed by Ryan James
    let heart;
    loader.load(GLTFFoundry, function (gltf)
    {
        gltf.scene.traverse( child => {

            if ( child.material ) child.material.metalness = 0;
        
        } );

        const office = gltf.scene.children[ 0 ];
        office.position.set(0, 0, 0);

        scene.add(office);
    });
}
scene.init();
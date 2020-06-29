// SURGICAL PLANNING sample code
// important: test in metachromium which enables transparent WebXR rendering on desktop!
// https://github.com/webaverse/metachromium-bin

import { AmbientLight, AnimationMixer, Clock, LoadingManager, Scene, Color, Mesh, Plane, DoubleSide, SphereBufferGeometry, PlaneBufferGeometry, MeshBasicMaterial, MeshNormalMaterial, MeshPhongMaterial, Object3D, HemisphereLight, DirectionalLight, SpotLight, ShaderMaterial, AdditiveBlending, BufferGeometry, TextureLoader, Float32BufferAttribute, Points, DynamicDrawUsage, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const GLTFPlutoOffice = require("./assets/models/pluto.glb");

export const scene = new Scene();

scene.init = () =>
{
    var light = new AmbientLight( 0x404040 ); // soft white light
    light.intensity = 15;
    scene.add( light );

    const loader = new GLTFLoader();
    loader.load(GLTFPlutoOffice, function (gltf)
    {
        const office = gltf.scene;
        const animations = gltf.animations;
        
        office.traverse( child => {
            if ( child.material ) child.material.metalness = 0;
        } );

        scene.add(office);

        const mixer = new AnimationMixer( office );
        const clock = new Clock();
        office.Update = () => {
            var delta = clock.getDelta(); // clock is an instance of THREE.Clock
            mixer.update( delta );
        }

        console.log("playing animation")
        var action = mixer.clipAction( animations[ 0 ] ); // access first animation clip
        action.play();
    });
}
scene.init();
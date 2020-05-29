import { Scene, Color, Mesh, SphereBufferGeometry, MeshNormalMaterial, Object3D, HemisphereLight, DirectionalLight, ShaderMaterial, AdditiveBlending, BufferGeometry, TextureLoader, Float32BufferAttribute, Points, DynamicDrawUsage } from "three";
import { state } from "../../engine/state"
import { XRInput } from "../../engine/xrinput"
import { PeerConnection } from "../../engine/networking/PeerConnection"
import { renderer } from "../../engine/renderer";
const fs_partycles = require("./shaders/fs_partycles.glsl");
const vs_partycles = require("./shaders/vs_partycles.glsl");
const spark = require("./textures/spark1.png");
const scene = new Scene();

let networking;
navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function (stream)
    {
        networking = new PeerConnection(scene, stream);

        networking.remoteSync.addEventListener('remote_stream', function (remoteStream)
        {
            // console.log("getting audio");
            var audio = document.createElement("AUDIO");
            audio.srcObject = remoteStream;
            audio.autoplay = true;
        });
    });

scene.init = () =>
{
    let particleSystem, uniforms, geometry;

    const radius = 200;
    const particles = 100000;

    const geo = new SphereBufferGeometry(.1, 13, 13);
    const mat = new MeshNormalMaterial({ wireframe: true });
    const mesh = new Mesh(geo, mat);

    XRInput.controllerGrips.forEach((e) =>
    {
        const sp = mesh.clone();

        sp.Update = () =>
        {
            sp.position.copy(e.position);
            sp.quaternion.copy(e.quaternion);
        }
        networking.remoteSync.addSharedObject(sp);
        scene.add(sp);

        // XRInput.CreateControllerModel(e, scene);
    });

    // console.log(c);

    // window.addEventListener('keydown', (e) =>
    // {
    //     scene.traverse(e =>
    //     {
    //         if (e.name == "camera")
    //         {
    //             const c = renderer.xr.getCamera(e);
    //             console.log(c);
    //             const sp = mesh.clone();
    //             sp.Update = () =>
    //             {
    //                 console.log(sp.position);
    //             }
    //             sp.position.copy(c.position);
    //             c.add(sp);

    //             // scene.add(e.camera);

    //             // scene.add(e);
    //         }
    //     });
    // });

    // light controllers

    // scene.add(new HemisphereLight(0x606060, 0x404040, 13));
    // const light = new DirectionalLight(0xffffff, 13);
    // light.position.set(1, 1, 1).normalize();
    // scene.add(light);

    uniforms = {
        pointTexture: { value: new TextureLoader().load(spark) }
    };

    var shaderMaterial = new ShaderMaterial({

        uniforms: uniforms,
        vertexShader: vs_partycles,
        fragmentShader: fs_partycles,

        blending: AdditiveBlending,
        depthTest: false,
        transparent: true,
        vertexColors: true
    });

    geometry = new BufferGeometry();

    var positions = [];
    var colors = [];
    var sizes = [];

    var color = new Color();

    for (var i = 0; i < particles; i++)
    {

        positions.push((Math.random() * 2 - 1) * radius);
        positions.push((Math.random() * 2 - 1) * radius);
        positions.push((Math.random() * 2 - 1) * radius);

        color.setHSL(i / particles, 1.0, 0.5);

        colors.push(color.r, color.g, color.b);

        sizes.push(20);

    }

    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new Float32BufferAttribute(sizes, 1).setUsage(DynamicDrawUsage));

    particleSystem = new Points(geometry, shaderMaterial);

    // networking.remoteSync.addSharedObject(partchromeicleSystem);
    scene.add(particleSystem);

    const data = new Object3D();
    data.Update = (e) =>
    {
        const time = Date.now() * 0.005;

        particleSystem.rotation.z = 0.01 * time;

        const sizes = geometry.attributes.size.array;

        for (var i = 0; i < particles; i++)
        {

            sizes[ i ] = 10 * (1 + Math.sin(0.1 * i + time / 3));

        }

        geometry.attributes.size.needsUpdate = true;
    }
    // networking.remoteSync.addSharedObject(data);
    scene.add(data);

}
state.eventHandler.addEventListener("peerconnected", (e) =>
{
    scene.init();
});



export { scene }








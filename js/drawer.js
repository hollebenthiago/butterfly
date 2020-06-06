// BASIC SOLVER

function euler(dt, f, xs, args) {
    return [xs[0] + dt * f(xs, args)[0], xs[1] + dt * f(xs, args)[1], xs[2] + dt * f(xs, args)[2]];
}

// EQUATION

function lorenz(xs, args) {
    
    let dxs0 = args[0] * (xs[1] - xs[0]);
    let dxs1 = xs[0] * (args[1] - xs[2]) - xs[1];
    let dxs2 = xs[0] * xs[1] - args[2] * xs[2];
    return [dxs0, dxs1, dxs2];
}

// INITIAL CONDITIONS/STEP

var dt      = 0.001;
var x0      = 8;
var y0      = 5;
var z0      = 13;
var spheres = [];


// SCENE SETUP

var scene = new THREE.Scene();
var canvasholder = document.getElementById('canvas')
var camera = new THREE.PerspectiveCamera(75,300/300,1,1000)

camera.position.x = 11;
camera.position.y = 40;
camera.position.z = 55;

camera.rotation.x = 5.4
camera.rotation.y = 6.4
camera.rotation.z = 3.3

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#C0C0C0"); //background color
renderer.setSize(300, 300)
document.getElementById('canvas').appendChild(renderer.domElement);

//CONTROLS

function onKeyDown(event) {

    if (event.key == ' ') {
        var geometry = new THREE.SphereGeometry(0.2, 10, 10);
        var material  = new THREE.MeshLambertMaterial({color: colors[Math.floor(Math.random() * colors.length)]});
        var mesh     = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 10;
        mesh.position.y = (Math.random() - 0.5) * 10;
        mesh.position.z = (Math.random() - 0.5) * 10;
        scene.add(mesh);
        spheres.push(mesh);
    }
    else if (event.key == 'x' && event.ctrlKey) {
        console.log('a')
            camera.rotation.x = camera.rotation.x - 0.1
    }
    else if (event.key == 'x' && !event.ctrlKey) {
        camera.rotation.x = camera.rotation.x + 0.1
    }
    else if (event.key == 'y' && event.ctrlKey) {
        camera.rotation.y = camera.rotation.y - 0.1
    }
    else if (event.key == 'y' && !event.ctrlKey) {
        camera.rotation.y = camera.rotation.y + 0.1
    }
    else if (event.key == 'z' && event.ctrlKey) {
        camera.rotation.z = camera.rotation.z - 0.1
    }
    else if (event.key == 'z' && !event.ctrlKey) {
        camera.rotation.z = camera.rotation.z + 0.1
    }
    else if (event.key == 'ArrowLeft') {
        camera.position.x --;
    }
    else if (event.key == 'ArrowRight') {
        camera.position.x ++;
    }
    else if (event.key == 'ArrowUp' && !event.ctrlKey) {
        camera.position.y ++;
    }
    else if (event.key == 'ArrowUp' && event.ctrlKey) {
        camera.position.z ++;
    }
    else if (event.key == 'ArrowDown' && !event.ctrlKey) {
        camera.position.y --;
    }
    else if (event.key == 'ArrowDown' && event.ctrlKey) {
        camera.position.z --;
    }
    console.log(camera.position, camera.rotation)
}

// COLORS
var colors = ['blue', 'yellow', 'green', 'red', 'white', 'pink', 'purple', 'orange']
window.addEventListener('keydown', onKeyDown)

// LIGHTS

var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(0,0,0);    
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(5,8,13);    
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(camera.position.x, camera.position.y, camera.position.z);    
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(-1, 18, 46);    
scene.add(light);

const num_lights = 4

var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(16, 12, 31);    
scene.add(light);

// ANIMATION LOOP    

var render = function() {
    for (let i = num_lights; i < scene.children.length; i++) {
        new_xs = euler(dt, lorenz, [scene.children[i].position.x, scene.children[i].position.y, scene.children[i].position.z], [10, 28, 8/3])
        scene.children[i].position.x = new_xs[0];
        scene.children[i].position.y = new_xs[1];
        scene.children[i].position.z = new_xs[2];
    }
    setTimeout( function() {

        requestAnimationFrame(render);

    }, 1000/30);
    renderer.render(scene, camera);
}       
render();
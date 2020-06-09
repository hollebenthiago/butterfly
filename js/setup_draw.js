// SCENE SETUP
var scene = new THREE.Scene();
var canvasholder = document.getElementById('canvas')
var camera = new THREE.PerspectiveCamera(75,500/300,1,1000)

camera.position.x = 11;
camera.position.y = 40;
camera.position.z = 55;

camera.rotation.x = 5.4
camera.rotation.y = 6.4
camera.rotation.z = 3.3

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#C0C0C0"); //background color
renderer.setSize(500, 300)
document.getElementById('canvas').appendChild(renderer.domElement);

// COLORS
var colors = ['blue', 'yellow', 'green', 'red', 'white', 'pink', 'purple', 'orange']

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
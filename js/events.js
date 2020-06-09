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

window.addEventListener('keydown', onKeyDown)
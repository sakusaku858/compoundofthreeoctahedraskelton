window.addEventListener("DOMContentLoaded", init);

function init() {

    const width = 960;
    const height = 540;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        45,
        width / height,
        1,
        10000
    );
    camera.position.set(0, 0, +500);

    var geometry = new THREE.Geometry();
    geometry.vertices[0] = new THREE.Vector3(100, 100, 0);
    geometry.vertices[1] = new THREE.Vector3(-100, 100, 0);
    geometry.vertices[2] = new THREE.Vector3(-100, -100, 0);
    geometry.vertices[3] = new THREE.Vector3(100, -100, 0);
    geometry.vertices[4] = new THREE.Vector3(100, 0, 100);
    geometry.vertices[5] = new THREE.Vector3(-100, 0, 100);
    geometry.vertices[6] = new THREE.Vector3(-100, 0, -100);
    geometry.vertices[7] = new THREE.Vector3(100, 0, -100);
    geometry.vertices[8] = new THREE.Vector3(0, 100, 100);
    geometry.vertices[9] = new THREE.Vector3(0, 100, -100);
    geometry.vertices[10] = new THREE.Vector3(0, -100, -100);
    geometry.vertices[11] = new THREE.Vector3(0, -100, 100);
    geometry.vertices[12] = new THREE.Vector3(141, 0, 0);
    geometry.vertices[13] = new THREE.Vector3(-141, 0, 0);
    geometry.vertices[14] = new THREE.Vector3(0, 141, 0);
    geometry.vertices[15] = new THREE.Vector3(0, -141, 0);
    geometry.vertices[16] = new THREE.Vector3(0, 0, 141);
    geometry.vertices[17] = new THREE.Vector3(0, 0, -141);

    geometry.faces[0] = new THREE.Face3(0, 1, 2);
    geometry.faces[1] = new THREE.Face3(2, 3, 0);
    geometry.faces[2] = new THREE.Face3(4, 5, 6);
    geometry.faces[3] = new THREE.Face3(6, 7, 4);
    geometry.faces[4] = new THREE.Face3(8, 9, 10);
    geometry.faces[5] = new THREE.Face3(10, 11, 8);
    geometry.faces[6] = new THREE.Face3(16, 3, 17);
    geometry.faces[7] = new THREE.Face3(17, 1, 16);
    geometry.faces[8] = new THREE.Face3(16, 0, 17);
    geometry.faces[9] = new THREE.Face3(17, 2, 16);
    geometry.faces[10] = new THREE.Face3(12, 8, 13);
    geometry.faces[11] = new THREE.Face3(13, 10, 12);
    geometry.faces[12] = new THREE.Face3(12, 11, 13);
    geometry.faces[13] = new THREE.Face3(12, 9, 13);
    geometry.faces[14] = new THREE.Face3(14, 4, 15);
    geometry.faces[15] = new THREE.Face3(14, 6, 15);
    geometry.faces[16] = new THREE.Face3(14, 5, 15);
    geometry.faces[17] = new THREE.Face3(14, 7, 15);

    geometry.computeFaceNormals();

    const material = new THREE.MeshNormalMaterial({
        color: 0x0000ff,
        side: THREE.DoubleSide
    });
    var box = new THREE.Mesh(geometry, material);
    scene.add(box);

    /*
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);
    */
    renderer.render(scene, camera);

    tick();

    function tick() {
        requestAnimationFrame(tick);
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
}

initScene('models/objects_per_subject/math_item.glb');

function initScene(subjectModel){
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0,2,5);

    let renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff,0.6);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff,1);
    dirLight.position.set(5,10,7);
    scene.add(dirLight);

    const loader = new THREE.GLTFLoader();
    loader.load('models/table.glb', gltf=>scene.add(gltf.scene));
    loader.load('models/chair.glb', gltf=>scene.add(gltf.scene));
    loader.load('models/board.glb', gltf=>scene.add(gltf.scene));
    loader.load('models/plant.glb', gltf=>scene.add(gltf.scene));
    loader.load(subjectModel, gltf=>scene.add(gltf.scene));

    let bgMusic = new Audio('sounds/background.mp3');
    bgMusic.loop = true;
    bgMusic.play();
    let doorSound = new Audio('sounds/door.mp3');
    doorSound.play();

    function animate(){
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
    }
    animate();

    window.addEventListener('resize',()=>{
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth,window.innerHeight);
    });
}

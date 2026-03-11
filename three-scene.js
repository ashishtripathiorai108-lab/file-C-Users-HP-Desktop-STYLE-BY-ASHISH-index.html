const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.getElementById("three-canvas").appendChild(renderer.domElement);

const geometry=new THREE.TorusKnotGeometry(3,0.7,100,16);
const material=new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true});
const mesh=new THREE.Mesh(geometry,material);
scene.add(mesh);
camera.position.z=10;

function animate(){
requestAnimationFrame(animate);
mesh.rotation.x+=0.003;
mesh.rotation.y+=0.005;
renderer.render(scene,camera);
}
animate();
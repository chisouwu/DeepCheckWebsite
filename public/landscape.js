// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a group for AI components
const aiGroup = new THREE.Group();
scene.add(aiGroup);

// Set background color
scene.background = new THREE.Color(0x000020);

// Create floating spheres (representing AI nodes)
const sphereGeometry = new THREE.SphereGeometry(3, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x50ffd8, opacity: 0.075, transparent: true });

const spheres = [];
const numSpheres = 100;
for (let i = 0; i < numSpheres; i++) {
    const sphere = new THREE.Mesh(sphereGeometry, material);
    sphere.position.x = Math.random() * 50 - 25; // Random X position
    sphere.position.y = Math.random() * 50 - 25; // Random Y position
    sphere.position.z = Math.random() * 50 - 25; // Random Z position
    sphere.scale.set(Math.random() * 1.5, Math.random() * 1.5, Math.random() * 1.5); // Random scale
    aiGroup.add(sphere);
    spheres.push(sphere);
}

// Set camera position
camera.position.z = 50;

// Mouse tracking
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop to update AI landscape
function animate() {
    requestAnimationFrame(animate);

    // Update sphere positions
    spheres.forEach((sphere, index) => {
        sphere.position.x += Math.sin(index + mouseX * 2) * 0.01;
        sphere.position.y += Math.cos(index + mouseY * 2) * 0.01;
        sphere.position.z += Math.sin(index * 0.5) * 0.01;
    });

    aiGroup.rotation.x += 0.0005;
    aiGroup.rotation.y += 0.0007;

    // Render the scene
    renderer.render(scene, camera);
}

// Start animation
animate();

// Handle window resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

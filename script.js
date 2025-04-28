// Dynamically change About section text
document.getElementById('change-about').addEventListener('click', function() {
    document.getElementById('about-text').textContent = "We simplify complex biology topics for everyone to understand!";
    this.style.backgroundColor = 'green';
});

// Add a new PCR step
document.getElementById('add-step').addEventListener('click', function() {
    const stepsList = document.getElementById('steps-list');
    const newStep = document.createElement('li');
    newStep.textContent = "New Step Example";
    stepsList.appendChild(newStep);
});

// Remove the last PCR step
document.getElementById('remove-step').addEventListener('click', function() {
    const stepsList = document.getElementById('steps-list');
    if (stepsList.children.length > 0) {
        stepsList.removeChild(stepsList.lastElementChild);
    }
});

// Scroll animation effect
const containers = document.querySelectorAll('.container');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1,
});

containers.forEach(container => {
    container.classList.add('hidden');
    observer.observe(container);
});

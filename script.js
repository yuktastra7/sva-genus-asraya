const familyTasks = {
    shiva: {
        everyday: ["Fitness Session", "Tech Learning: DS, Blockchain, LLMs"],
        special: { "2025-02-24": ["Plan with Family/ Atta", "Car RC Extension"] }
    },
    parvati: {
        everyday: ["Financial Assets Monitoring", "LIC Reimbursement Status"],
        special: {}
    },
    ganesha: {
        everyday: ["Fitness Session"],
        special: { "2025-02-24": ["Logikids"] }
    },
    subramanya: {
        everyday: ["Free Play / Activity Time"],
        special: {}
    }
};

function renderSchedule() {
    const today = new Date();
    const dateKey = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    document.getElementById('current-date').innerText = today.toDateString();

    Object.keys(familyTasks).forEach(member => {
        const container = document.querySelector(`#${member} .task-list`);
        container.innerHTML = '';

        // Add Recurring Tasks
        familyTasks[member].everyday.forEach(task => {
            container.innerHTML += `<div class="task-item recurring">🔄 ${task}</div>`;
        });

        // Add Special Date Tasks (like Feb 24)
        if (familyTasks[member].special[dateKey]) {
            familyTasks[member].special[dateKey].forEach(task => {
                container.innerHTML += `<div class="task-item special">📅 ${task}</div>`;
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', renderSchedule);

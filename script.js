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

function renderSchedule(dateKey) {
    const key = dateKey || new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const displayDate = new Date(key);
    document.getElementById('current-date').innerText = displayDate.toDateString();

    Object.keys(familyTasks).forEach(member => {
        const container = document.querySelector(`#${member} .task-list`);
        container.innerHTML = '';

        // Add Recurring Tasks
        familyTasks[member].everyday.forEach(task => {
            container.innerHTML += `<div class="task-item recurring">🔄 ${task}</div>`;
        });

        // Add Special Date Tasks for the selected date
        if (familyTasks[member].special[key]) {
            familyTasks[member].special[key].forEach(task => {
                container.innerHTML += `<div class="task-item special">📅 ${task}</div>`;
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const datePicker = document.getElementById('date-picker');
    const todayBtn = document.getElementById('today-btn');

    // Initialize picker and render
    const todayKey = (new Date()).toISOString().split('T')[0];
    datePicker.value = todayKey;
    renderSchedule(todayKey);

    datePicker.addEventListener('change', (e) => {
        if (e.target.value) {
            renderSchedule(e.target.value);
        }
    });

    todayBtn.addEventListener('click', () => {
        const t = (new Date()).toISOString().split('T')[0];
        datePicker.value = t;
        renderSchedule(t);
    });
});

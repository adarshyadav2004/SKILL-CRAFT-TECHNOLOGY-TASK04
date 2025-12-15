function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let taskDate = document.getElementById("dateInput").value;
    let taskTime = document.getElementById("timeInput").value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let info = document.createElement("div");
    info.className = "task-info";
    info.innerHTML = `
        <strong class="task-name">${taskText}</strong><br>
        <span class="task-date">${taskDate}</span>
        <span class="task-time">${taskTime}</span>
    `;

    let actions = document.createElement("div");
    actions.className = "actions";

    // COMPLETE BUTTON
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✓";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };

    // EDIT BUTTON (FULL EDIT)
    let editBtn = document.createElement("button");
    editBtn.innerText = "✎";
    editBtn.className = "edit-btn";
    editBtn.onclick = function () {

        let currentName = info.querySelector(".task-name").innerText;
        let currentDate = info.querySelector(".task-date").innerText;
        let currentTime = info.querySelector(".task-time").innerText;

        let newName = prompt("Edit Task Name:", currentName);
        if (newName === null || newName.trim() === "") return;

        let newDate = prompt("Edit Date (YYYY-MM-DD):", currentDate);
        if (newDate === null) return;

        let newTime = prompt("Edit Time (HH:MM):", currentTime);
        if (newTime === null) return;

        info.innerHTML = `
            <strong class="task-name">${newName}</strong><br>
            <span class="task-date">${newDate}</span>
            <span class="task-time">${newTime}</span>
        `;
    };

    // DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(info);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);

    // CLEAR INPUTS
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("timeInput").value = "";
}

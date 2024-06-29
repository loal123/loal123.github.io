let buttons = document.querySelector('.selected');
["aboutme", "projects", "socials", "attributions"].forEach((sectionName) => {
    let button = document.getElementById(`${sectionName}button`);
    let section = document.querySelector(`.${sectionName}`);

    button.onclick = function () {
        document.querySelectorAll(".selected").forEach((x) => {
            x.classList.remove("selected");
        })
        section.classList.add("selected");
        buttons.classList.remove("selected");

    }
});
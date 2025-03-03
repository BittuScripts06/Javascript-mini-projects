const fullDarkModeCheckBox = document.querySelector('#full-dark-mode');
const containedDarkModeCheckBox = document.querySelector("#contained-dark-mode")
const container = document.querySelector('.container');

fullDarkModeCheckBox.addEventListener('change', () => {
    if (fullDarkModeCheckBox.checked) {
        document.body.classList.add('dark');
    }
    else {
        document.body.classList.remove('dark');
    }
    containedDarkModeCheckBox.checked = fullDarkModeCheckBox.checked;

    changeContainedDarkMode();

})

// containedDarkModeCheckBox.addEventListener('change', () => {
//     if (containedDarkModeCheckBox.checked) {
//         container.classList.add("dark");
//     }
//     else {
//         container.classList.remove('dark');
//     }
// })

function changeContainedDarkMode() {
    if (containedDarkModeCheckBox.checked) {
        container.classList.add('dark');
    }
    else {
        container.classList.remove('dark');
    }
}
containedDarkModeCheckBox.addEventListener('change', changeContainedDarkMode);
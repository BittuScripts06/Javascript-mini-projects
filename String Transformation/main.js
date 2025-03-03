const input = document.querySelector("input");
const lowerCaseOutput = document.querySelector("#lowercase span");
const upperCaseOutput = document.querySelector("#upercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span")
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");


function capitalizeString(str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
}

function CamelCase(string) {

    const lowerCaseString = string.toLowerCase();
    const wordsArray = lowerCaseString.split(" ");
    const finalArray = wordsArray.map((word, i) => {
        if (i === 0) return word;
        return capitalizeString(word);
    })
    return finalArray.join('');
}


function pascalCase(str) {

    const lowerCaseString = str.toLowerCase();
    const wordsArray = lowerCaseString.split(" ");
    const finalArray = wordsArray.map((word) => {

        return capitalizeString(word);
    })
    return finalArray.join('');
}


function snakeCase(str) {
    return str.replaceAll(' ', '_');
}

function kebabCase(str){
return str.replaceAll(' ', '-');
}

function trim(str){
    return str.replaceAll(' ', '');
}


function updateScreen() {
    lowerCaseOutput.innerText = input.value.toLowerCase();
    upperCaseOutput.innerText = input.value.toUpperCase();
    camelCaseOutput.innerText = CamelCase(input.value);
    pascalCaseOutput.innerText = pascalCase(input.value);
    snakeCaseOutput.innerText = snakeCase(input.value);
    kebabCaseOutput.innerText = kebabCase(input.value);
    trimOutput.innerText = trim(input.value);
}
updateScreen()


input.addEventListener('input', () => {
        updateScreen();
});
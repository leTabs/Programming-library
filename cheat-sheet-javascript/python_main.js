
const chapters = document.querySelector('.chapters')
// const context = document.querySelector('.context')

// The list of each concept etc.
chapters.innerHTML += `<h1>Introduction</h1><hr>`
chapters.innerHTML += `<h3>Basics</h3>`
basics = [
    'Syntax',
    'Data Types',
    'Variables',
    'Operators',
    'Strings',
    'Basic Functions'
]
for(item in basics){
    chapters.innerHTML +=  `<p class="chapterNames chapter${item}">${basics[item]}</p>`
}
chapters.innerHTML += `<h3>Control flow</h3><hr>` 
controlFlow = [
    'if Statments',
    'Ternary Operator',
    'while Loop',
    'for Loop',
    'break', 
    'continue'
]
for(item in controlFlow){
    chapters.innerHTML +=  `<p class="chapterNames">${controlFlow[item]}</p>`
}

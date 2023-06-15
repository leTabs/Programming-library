
const chapters = document.querySelector('.chapters')
// const context = document.querySelector('.context')
// chapters.textContent += 'pop'
// The list of each concept etc.
chapters.innerHTML+= `<h1>Introduction</h1><hr>`

basics = [
    'Syntax',
    'Data Types',
    'Variables',
    'Operators',
    'Strings',
    'Basic Functions'
]
chapters.innerHTML += `<h3>Basics</h3>`
for(item in basics){
    chapters.innerHTML +=  `<p class="chapterNames chapter${item}">${basics[item]}</p>`
}

controlFlow = [
    'if Statments',
    'Ternary Operator',
    'while Loop',
    'for Loop',
    'break', 
    'continue'
]
chapters.innerHTML += `<h3>Control flow</h3>` 
for(item in controlFlow){
    chapters.innerHTML +=  `<p class="chapterNames">${controlFlow[item]}</p>`
}


functios = [
    'Functions',
    'return Statment',
    'lambda Functions',
    'Scopes'
]
chapters.innerHTML += `<h3>Functions</h3>`
for(item in functios){
    chapters.innerHTML += `<p class="chapterNames">${functios[item]}</p>`
}

dataStructures = [
    'Data Structures',
    'Lists',
    'Tuples',
    'Sets',
    'Dictionaries'
]
chapters.innerHTML += '<h3>Data Structures</h3>'
for(item in dataStructures){
    chapters.innerHTML += `<p class="chapterNames">${dataStructures[item]}</p>`
}

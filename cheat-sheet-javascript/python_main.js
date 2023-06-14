
const chapters = document.querySelector('.chapters')
chapters.innerHTML += `<h3>Introduction</h3>`
pythonChapters = [
    'Syntax',
    'Data Types',
    'Variables',
    'Operators',
    'Strings',
    'Basic Functions'
]
for(item in pythonChapters){
    chapters.innerHTML +=  `<p class="chapterNames chapter${item}">${pythonChapters[item]}</p>`
}
chapters.innerHTML += `<h3>Control flow</h3>`
pythonChapters = [
    'if Statment'
]
for(item in pythonChapters){
    chapters.innerHTML +=  `<p class="chapterNames">${pythonChapters[item]}</p>`
}

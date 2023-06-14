
const chapters = document.querySelector('.chapters')
chapters.innerHTML += `<h3>Introduction</h3>`
pythonChapters = [
    'Introduction',
    'Basics',
    'Syntax',
    'Data types',
]

for(item in pythonChapters){
    chapters.innerHTML +=  `<p class="chapterNames chapter${item}">${pythonChapters[item]}</p>`
}
chapters.innerHTML += `<h3>After basics</h3>`
pythonChapters = [
    'Variables',
    'Operators',
    'Strings',
    'String Formating',
    'Basic Build-in Functions',
    'Controw flow'
]
for(item in pythonChapters){
    chapters.innerHTML +=  `<p class="chapterNames">${pythonChapters[item]}</p>`
}

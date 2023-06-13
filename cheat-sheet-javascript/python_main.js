const chapters = document.querySelector('.chapters')

pythonChapters = ['Introduction', 'Basics', 'Syntax']

for(item in pythonChapters){
    chapters.innerHTML +=  `<p class="chapterNames">${pythonChapters[item]}</p>`
}

const chapters = document.querySelector('.chapters')

const basics = [
    'Tags',
    'Elements',
    'Page Structure',
    'Atributes'
]

function list(){
    chapters.innerHTML+= `<h1>Introduction</h1><hr>`
    chapters.innerHTML += `<h3>Basics</h3>`
    for(item in basics){
        chapters.innerHTML +=  `<p class="chapterNames basic${item}">${basics[item]}</p>`
    }
}
list()

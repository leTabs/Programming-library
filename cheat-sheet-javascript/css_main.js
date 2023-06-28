const chapters = document.querySelector('.chapters')
const context = document.querySelector('.context')

const basics = [
    'Selectors',
    'Properties',
    'Units'
]
const cummonProperties = [
    'Text',
    'Box Model',
    'Background',
    'Transform',
    'Miscelanious',
]
const layout = [
  'Flex box',
  'Grid'
]
const additionaly = [
    'Pseudo classes',
    'CSS functions',
    'Animations',
]
const responsiveWD = [
    'Media Queries',
    'Cross Platform',
    'Framwords'
]
const library = [
    'Properties List',
    'Key Values List',
    'Pseudo classes List'
]
function list(){
    chapters.innerHTML+= `<h3>Introduction</h3><hr/>`
    chapters.innerHTML+= '<p class="html_intro">What is CSS ?</p>'
    chapters.innerHTML += `<h3>Basics</h3><hr/>`
    for(item in basics){
        chapters.innerHTML +=  `<p class="chapterNames basic${item}">${basics[item]}</p>`
    }
    
    chapters.innerHTML += `<h3>Additionaly</h3><hr/>`
    for(item in additionaly){
      chapters.innerHTML += `<p class="chapterNames additionaly${item}">${additionaly[item]}</p>`
    }

}
list()

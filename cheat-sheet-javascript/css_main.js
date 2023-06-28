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
    chapters.innerHTML+= '<p class="css_intro">What is CSS ?</p>'
    chapters.innerHTML += `<h3>Basics</h3><hr/>`
    for(item in basics){
        chapters.innerHTML +=  `<p class="chapterNames basic${item}">${basics[item]}</p>`
    }
    chapters.innerHTML += `<h3>Cummon Properties</h3><hr />`
    for(item in cummonProperties){
        chapters.innerHTML += `<p class="chapterName cummonP${item}">${cummonProperties[item]}</p>`
    }
    chapters.innerHTML += `<h3>Layout</h3><hr/>`
    for(item in layout){
      chapters.innerHTML += `<p class="chapterNames layout${item}">${layout[item]}</p>`
    }
    chapters.innerHTML += `<h3>Additionaly</h3><hr/>`
    for(item in additionaly){
      chapters.innerHTML += `<p class="chapterNames additionaly${item}">${additionaly[item]}</p>`
    }
    chapters.innerHTML += `<h3>Responsive Web Design</h3><hr/>`
    for(item in responsiveWD){
      chapters.innerHTML += `<p class="chapterNames responsiveWD${item}">${responsiveWD[item]}</p>`
    }
    chapters.innerHTML += `<h3>Library</h3><hr/>`
    for(item in library){
      chapters.innerHTML += `<p class="chapterNames library${item}">${library[item]}</p>`
    }
}
list()

const buttonSection= function(previous, next){
    return `<div class="container-btn">
    <hr />
    <button>
        <i>Previous Page</i>
        <br />
        ${previous}
    </button>
    <button>
        <i>Next Page</i>
        <br />
        ${next}
    </button>
    <hr />
  </div>`
  }

  document.querySelector('.css_intro').addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>What is CSS ?</h1>
    <p> 
        CSS stands for Cascading Style Sheets. it is the language used to manipulate the visual styling of web pages.
        <br /><br />
        CSS defines how the elements of an HTML document are represented by the browser. It accomplishes that by altering the element’s size, color, position etc. as a property-value combination.
    </p>
    ${buttonSection('Home', 'HTML Tags')}
    `})

const chapters = document.querySelector('.chapters')
const context = document.querySelector('.context')

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

/*
context.innerHTML = `
<h1>Introduction</h1>
<p>HTML stands for HyperText Markup Language. HTML allows for the structuring of
     web pages and the definition of their content. HTML structures the web pages
      by using tags and elements, such as, paragraphs, lists, headings etc. The 
      combination of all the tags and elements results to the creation the page’s
       structure.</p>
` */

const basic0 = document.querySelector('.basic0')
basic0.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>Tags</h1>
    <p>
        HTML tags define the structure and appearance of the page’s components called “Elements”. 
        They consist of two angle brackets (“< >”) that surround an html keyword which dictates 
        the type of tag that is created. Html tags encapsulate content or provide content and
         instruct the web browser on how to render the elements on the web page. 
    </p>
    <p>When tags encapsulating content, they are one of two kinds, opening tags and closing tags.
         The closing tags have a forward slash added to them after the first angle bracket:<br />
        (“< tag-name > content </ tag-name >”). 
       </p>
    <p>
        Tags that don’t encapsulate content are called self-closing tags and include a forward slash 
        before the second angle bracket (“< tag-name />”)
    </p>
    `
})

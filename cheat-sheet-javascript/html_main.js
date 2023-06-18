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

const basic1 = document.querySelector('.basic1')
basic1.addEventListener('click', ()=>{
    context.innerHTML = ` 
    <h1>Elements</h1>
    <p>
        Elements are the components of web pages and are created by using the HTML tags. Elements can contain information, like text images etc. 
They can also include “Attributes” that provide additional information to the element or alter the element’s behavior.
    </p>
    <h2>Inline elements</h2>
    <p>
        There are inline elements and block elements.
Inline elements appear to the website next to other elements in the webpage, covering only as much width as they need so that they fit horizontally.
    </p>
    <h2>Block elements</h2>
    <p>
        Block elements start on a new line. In addition,
         the browsers will automatically add some margin (space) around the element.
    </p>
    `})

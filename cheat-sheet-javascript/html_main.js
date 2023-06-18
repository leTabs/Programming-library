const chapters = document.querySelector('.chapters')
const context = document.querySelector('.context')

const basics = [
    'Tags',
    'Elements',
    'Page Structure',
    'Attributes'
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


    const basic2 = document.querySelector('.basic2')
    basic2.addEventListener('click', ()=>{
        context.innerHTML = ` 
    <h1>Page Structure</h1>
    <p>
        The combine power of all elements and tags creates the structure of the page. The structure acts as a skeleton on which can be added styling and functionality.<br />
        Even the simplest of webpages need to have three certain elements: 
    </p>
    <ul>
        <li>< html > < /html ></li>
        <li> < head > < /head ></li>
        <li> < body > < /body ></li>
    </ul>
    <p>
        And the file of the website needs to start with a < !DOCTYPE html > statement, 
        informing the browser about the version of HTML that is being utilized. 
    </p>
    <p>
        The < html > tag acts as the root element and nests the “head” and “body” tags inside of it. <br />
The < head > tag includes information about the page, such as the title. <br />
The < body > tag nests other elements and tags that compose the content of the webpage.

    </p>
    <p> Note: A good practice is to add a tab-sized indentation to elements and tags that are nested inside of other tags. This helps on understanding the hierarchy of the components, especially as the page grows.</p>
    ` })


    const basic3 = document.querySelector('.basic3')
    basic3.addEventListener('click', ()=>{
        context.innerHTML = ` 
    <h1>Attributes</h1>
    <p>
        Attributes provide information to an element or modify it (functionality & appearance). An attribute needs to be included in the opening tag of an element. An element can have multiple attributes. Attributes consist of a name and a value (the value is encapsulated to double quotes).
        <br />
        Note: not all attributes require a value.
    </p>
    <p>Purposes of attributes:</p>
    <ul>
        <li>Information: they can provide information witch can be used by HTML or other combinations like Css and JavaScript.</li>
        <li>Behavior: attributes can define behaviors for elements, such as destination for hyperlinks, alternative text for accessibility purposes etc. </li>
        <li>Appearance: certain attributes change the appearance of an element or allow for the inclusion of inline Css (Css is a Cascading language with the ability to alter elements by changing their size color etc.).</li>
        <li>Events: event type attributes allow for the inclusion of JavaScript, by enabling a functionality when the attribute takes effect.</li>
        <p> Values:<br />
            Attribute values can be expressed as strings, numbers, URLs, and Booleans. The value will depend on the participating attribute and the usage of it. 
            Attributes can allow for multiple values to be assign on them, the values will be separated by spaces.
        </p>
    </ul>
    `})


    const basic4 = document.querySelector('.basic4')
    basic4.addEventListener('click', ()=>{
        context.innerHTML = ` 
        <h1>Comments</h1>
        <p>
        Comments are context of the HTML document that don’t provide any functionality to the page. Comments are used to add a description to the code for the programmer or other programmers, also they prevent a block of code to be included to the page while writing and fixing code.  The comments can cover form
         parts of a single line to multiple lines. The format is  <!-- comment goes here -->.
        </p>
        `})

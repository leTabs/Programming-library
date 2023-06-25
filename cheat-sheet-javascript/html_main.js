const chapters = document.querySelector('.chapters')
const context = document.querySelector('.context')

const basics = [
    'HTML Tags',
    'HTML Elements',
    'HTML Attributes',
    'Page Structure',
    'Comments'
]
const movingForward = [
  'Text',
  'Lists',
  'Linking Tags',
  'Media',
  'Input & Forms',
  'Tables',
  'Semantic HTML',
  'File Paths',
  'Entities'
]
const additionaly = [
  'APIs',
  'CSS',
  'JavaScript',
]
const library = [
  'Tags List',
  'Attributes List',
  'Entities List',
  'Matching Patterns' 
]
function list(){
    chapters.innerHTML+= `<h3>Introduction</h3><hr/>`
    chapters.innerHTML+= '<p>What is HTML ?</p>'
    chapters.innerHTML += `<h3>Basics</h3><hr/>`
    for(item in basics){
        chapters.innerHTML +=  `<p class="chapterNames basic${item}">${basics[item]}</p>`
    }
    chapters.innerHTML += '<h3>Moving Forward</h3><hr/>'
    for(item in movingForward){
        chapters.innerHTML +=  `<p class="chapterNames movingF${item}">${movingForward[item]}</p>`
    }
    chapters.innerHTML += `<h3>Additionaly</h3><hr/>`
    for(item in additionaly){
      chapters.innerHTML += `<p class="chapterNames additionaly${item}">${additionaly[item]}</p>`
    }
    chapters.innerHTML += `<h3>Library</h3><hr/>`
    for(item in library){
      chapters.innerHTML +=  `<p class="chapterNames library${item}">${library[item]}</p>`
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
/*
context.innerHTML = `
<h1>What is HTML5 ?</h1>
<p> <span class="paragraph-space"></span>HTML stands for HyperText Markup Language, is a fundamental language 
    for structuring web pages and defining their content. It achieves this
    by utilizing tags and elements, such as, paragraphs, lists, headings and 
    more. <br />
    <span class="paragraph-space"></span>
    By combining these tags and elements, web developers create the desired 
    structure of a web page.
    <br /> <br />
    HTML5 is the latest version of HTML.
</p>
${buttonSection('Home', 'HTML Tags')}
`
*/

const basic0 = document.querySelector('.basic0')
basic0.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>HTML Tags</h1>
    <p>
        <span class="paragraph-space"></span>
        HTML tags define the structure and appearance of the page’s components, 
        called “Elements”. 
        Tags consist of two angle brackets (“&lt; &gt;”) 
        that surround an html keyword which dictates the type of tag that is created. 
        Html tags encapsulate content or provide content and instruct the web browser on how to
        render the elements on the web page.
        <br /> <br />
        <span class="paragraph-space"></span>
        When tags encapsulating content, they are one of two kinds, 
        opening tags and closing tags. The closing tags have a forward slash added to
        them after the first angle bracket.
        <br /><br />
        <!-- <span class="paragraph-space"></span> -->
        <b>Structure:</b>
        &lt;tag-name&gt; content &lt;/tag-name&gt;
        <br /> <br />
        Tags that don’t encapsulate content are called self-closing tags and include a forward
        slash before the second angle bracket. 
        <br /><br />
        <b>Structure:</b>
        &lt;tag-name /&gt;
    </p>
    <h2>Tag examples:</h2> 
    <table>
        <tr>
          <th>Tag</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>&lt;p&gt;&lt;/p&gt;</td>
          <td>Contains text and displays it as a paragraph.</td>
        </tr>
        <tr>
          <td>&lt;img /&gt;</td>
          <td>Includes an image to the webpage.</td>
        </tr>
        <tr>
          <td>&lt;br /&gt;</td>
          <td>Inserts a break-line.</td>
        </tr>
        <tr>
          <td>&lt;button&gt;&lt;/button&gt;</td>
          <td>Creates a clickable button.</td>
        </tr>
        <tr>
          <td>&lt;div&gt;&lt;/div&gt;</td>
          <td>Commonly used for wrapping other tags.</td>
        </tr>
      </table>
      ${buttonSection('Introduction', 'HTML Elements')}
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
    <h2>Element examples</h2>
    <table>
  <tr>
    <th>Element</th>
  </tr>
  <tr>
    <td>
      &lt;h1&gt;Welcome&lt;/h1&gt;<br>
      &lt;p&gt;Hello, world.&lt;/p&gt;
    </td>
  </tr>
  <tr>
    <td>
      &lt;div&gt;<br>
      &nbsp;&nbsp;&nbsp;&lt;h1&gt;Welcome&lt;/h1&gt;<br>
      &nbsp;&nbsp;&nbsp;&lt;p&gt;Hello, world&lt;/p&gt;<br>
      &nbsp;&nbsp;&nbsp;&lt;br/&gt;<br>
      &lt;/div&gt;
    </td>
  </tr>
</table>

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
        </ul>
        <p> Values:<br />
            Attribute values can be expressed as strings, numbers, URLs, and Booleans. The value will depend on the participating attribute and the usage of it. 
            Attributes can allow for multiple values to be assign on them, the values will be separated by spaces.
        </p>
        <p>
        Aside from the standard attributes, HTML can utilize custom attributes for storing additional information. However, custom attributes may not be understood by all browsers and other included technologies. Therefore, it’s better practice to use the standard attributes.
        </p>
        <h2>Attribute Examples</h2>
        <table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Class</td>
    <td>Gives a class name to an element (assisting technologies can use them)</td>
  </tr>
  <tr>
    <td>Disabled</td>
    <td>Excludes the functionality of an element (like a button, becomes unclickable)</td>
  </tr>
  <tr>
    <td>Src</td>
    <td>References the position of a file or the URL address.</td>
  </tr>
</table>
<h2>Usage</h2>
<table>
  <tr>
    <th>Usage</th>
  </tr>
  <tr>
    <td>&lt;h1 class="introduction"&gt;Welcome to the page&lt;/h1&gt;</td>
  </tr>
  <tr>
    <td>&lt;button disabled&gt;You can’t click me&lt;/button&gt;</td>
  </tr>
  <tr>
    <td>&lt;img src="file-path-or-URL" /&gt;</td>
  </tr>
</table>

    `})

    
    const basic4 = document.querySelector('.basic4')
    basic4.addEventListener('click', ()=>{
        context.innerHTML = ` 
        <h1>Comments</h1>
        <p>
        Comments are context of the HTML document that don’t provide any functionality to the page. Comments are used to add a description to the code for the programmer or other programmers, also they prevent a block of code to be included to the page while writing and fixing code.  The comments can cover form
         parts of a single line to multiple lines. The format is  <!-- comment goes here -->.
        </p>
        <h2>Comment example</h2>
        <table>
  <tr>
    <th>Comment</th>
  </tr>
  <tr>
    <td>&lt;!-- This is a comment --&gt;</td>
  </tr>
</table>

        `})

    const tagTypes0 = document.querySelector('.tagTypes0')
    tagTypes0.addEventListener('click', ()=>{
    context.innerHTML =`
    <h1>Heading Tags</h1>
    <p>
        Headings create a text hierarchy in the web page, the importance of the heading’s text is determined by the size and boldness of the text.<br />
        There are six heading tags, each one represents a hierarchical order with the < h1 ></ h1 > indicating the most important text and the < h6 ></ h6 > the least important text.
        <p>
            Note: aside from visual hierarchy, headings are also used by the search engines in the search engine optimization (SEO) to understand the context of the page and its relevance.
        </p>
    `})

    const tagTypes1 = document.querySelector('.tagTypes1')
    tagTypes1.addEventListener('click', ()=>{
    context.innerHTML = `            <h1>Paragraphs</h1>
<p>The paragraph tag is used to display large bodies of text such as articles, explanations etc.</p>
<p> Structure: < p > Some text < /p ></p>`    
})


const tagTypes2 = document.querySelector('.tagTypes2')
tagTypes2.addEventListener('click', ()=>{
context.innerHTML = `<h1>Span</h1>
<p>
    Holds text, usually small pieces of text. Commonly, to target specific text inside a larger text body, like a paragraph.
    <p>Structure: < span> Some text </ span> </p>
</p>`})


const tagTypes3 = document.querySelector('.tagTypes3')
tagTypes3.addEventListener('click', ()=>{
context.innerHTML =`<h1>Text Decoration Tags</h1>
<h2>Bold tag</h2>
<p>The are used to apply the bold effect to text. Commonly, to make words stand out in a large body of text. </p>
<p>Structure: < b> text < /b></p>
<h2>Italic Tag</h2>
<p>It is used to apply the italic effect to text. Commonly, to turn words in the italic formal in a large body of text.</p>
<p>Structure: < i> text < /i></p>
<h2>Underline Tag</h2>
<p>It is used to underline to text. Commonly, to underline specific text withing a larger text body.</p>
<p>Structure: < u> text < /u>  </p>`})

const tagTypes4 = document.querySelector('.tagTypes4')
tagTypes4.addEventListener('click', ()=>{
context.innerHTML =`
<h1>List Tag</h1>
<p>
    List tags create lists of contexts. <br />
    There are two kinds of lists:
</p>
<ol>
    <li>Ordered (each item is indexed), defined by the < ol>< /ol> tag</li>
    <li>Unordered (the items are not indexed),  defined by the < ul>< /ul>.</li>
</ol>
<p>
    Inside the list, each item is specified with list item tag < li>< /li>, therefore, a list is a combination of two types tags.
</p>
`})

const tagTypes5 = document.querySelector('.tagTypes5')
tagTypes5.addEventListener('click', ()=>{
context.innerHTML =`
<h1> Linking Tags</h1>
<p>Link Tags reference the URL address of a website, a position with the website or the position of a file.</p>
<h2>Anchor Tags</h2>
<p>Anchor tags: The are used to navigate the user to a different website by referencing the URL address of the website of interest as a value to the “href” attribute. Or to navigate the user to a specific part of the website by referencing the id value of the element of interest as a value to the “href” attribute.</p>
<p>Note: the anchor tag does not work without the “href” attribute and can nest other elements inside them or text, functioning as descriptions.</p>
<h2>Link tags</h2>
<p>Link tags: The are used to reference the file path or location of a file that is included in the webpage, also specifies the relationship of that file. The link tag works by including the “href” and “rel” attributes.
    The link tag is placed in the head portion of the web page. 
    Link it a self-losing tag.
    </p>`})

const tagTypes6 = document.querySelector('.tagTypes6')
tagTypes6.addEventListener('click', ()=>{
context.innerHTML =`
<h1>Media Tags</h1>
<h2>Images</h2>
<p>
    The image tag (img) inserts images to the webpage. It uses the search (src) attribute to determine the location of the image. The location can be a file path or a URL address on the web.   
</p>
<p>
    It is a self-closing tag, often the alternative (alt) attribute is included in the tag that displays text in the case that the image does not load. The img tag can utilize other attributes like heigh and width to adjust the image’s size, however, it’s common and usually not the best practice.
</p>
<h2>Videos</h2>
<p>
    The video tag can insert videos to the website. It uses the src attribute to determine the location of the video file. The location can be a file path or a URL address on the web. <br />
It can also include useful attributes on it like controls (adds pause button, full screen etc. to the video), autoplay muted, witch causes the video to play automatically when the page load (while muted), “loop” that will replay the video once it’s over.
</p>
<h2>Audio</h2>
<p>
    The audio tag can insert audio files to the website. I uses the src attribute to determine the location of the audio file. The location can be a file path or a URL address on the web. It is used with the controls attribute.<br />
Audio can include other attributes, such as loop.
</p>
<h2>Source</h2>
<p>
    The source tag is used within other media tags (video, audio), to specify alternative media sources. It is a self-closing tag. For more stable code, it can take the “type” attribute to specify the type of the media and it’s suffix.
</p>
`})
const fni = document.querySelector('.fni')
fni.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>Forms and Inputs</h1>
    <p>
        HTML forms are the components that allow data to be submitted by the user to the website.  The data could be text, numbers, choices from a list etc. The form element is created with the form tag (< form>< /form>), and input tags (< input />). The form tag includes attributes, necessary attributes are:
    </p>
    <p>
        The “action” attribute: which defines the URL address or the file (and file-path) that handles the submission of the form (calculations, storing, manipulating the data etc.).
    </p>
    <p>
        The “method” attribute: which defines how the data is send (“GET”, “POST”, etc.)
    </p>
    <h2>Inputs</h2>
    <p>The input tags are responsible for providing a way for specifying the data that will be send.</p>
    <p>Tables here</p>
    <h2>Label</h2>
    <p>The label tag is used to add descriptions to input elements. Takes the “for” attribute to associate itself with a specific input tag, the value of the “for” attribute should be the input’s value of the “id” attribute.</p>
    <h2>Submit</h2>
    <p>A form is submitted by an input or a button, both of the type “submit”.<br />
        Typically, when a form is submitted, the data are sent to a server to be processed. Technologies like Python, Node.js and PHP can handle the data. They can manipulate the data, filter them, store them into a database, send it elsewhere etc.
        </p>`
})



const tables = document.querySelector('.tables')
tables.addEventListener('click', ()=>{
    context.innerHTML = `<h1>Tables</h1>
<p>
    HTML tables are used to display organized data on the webpage. They consist of columns and row. They are created with the < table>< /table> tag, which nests other tabular tags.
</p>
<p>Table goes here</p>
<p>Table goes here</p>
<p>Structure: ...</p>`})

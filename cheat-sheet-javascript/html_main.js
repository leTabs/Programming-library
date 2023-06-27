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
    chapters.innerHTML+= '<p class="html_intro">What is HTML ?</p>'
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
/* */
// <span class="paragraph-space"></span>
document.querySelector('.html_intro').addEventListener('click', ()=>{
context.innerHTML = `
<h1>What is HTML5 ?</h1>
<p> HTML stands for HyperText Markup Language, is a fundamental language 
    for structuring web pages and defining their content. It achieves this
    by utilizing tags and elements, such as, paragraphs, lists, headings and 
    more. 
    <br /> <br />
    By combining these tags and elements, web developers create the desired 
    structure of a web page.
    <br /> <br />
    HTML5 is the latest version of HTML.
</p>
${buttonSection('Home', 'HTML Tags')}
`})


const basic0 = document.querySelector('.basic0')
basic0.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>HTML Tags</h1>
    <p>
        
        HTML tags define the structure and appearance of the page’s components, 
        called “Elements”. 
        Tags consist of two angle brackets (“&lt; &gt;”) 
        that surround an html keyword which dictates the type of tag that is created. 
        Html tags encapsulate content or provide content and instruct the web browser on how to
        render the elements on the web page.
        <br /> <br />
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
    <h1>HTML Elements</h1>
    <p>
       Elements are the components of web pages and are created by using the HTML tags. 
       Elements can contain information, like text images etc.<br /> <br />
       They can also include “attributes” that provide additional information to the element or
       alter the element’s behavior.
    </p>
    <h2>Element examples:</h2>
    <table>
     <tr>
       <th>Element</th>
       <th>Implementation</th>
     </tr>
     <tr>
       <td>Heading</td>
       <td>&lt;h1&gt;Welcome&lt;/h1&gt;</td>
     </tr>
     <tr>
       <td>Paragraph</td>
       <td>&lt;p&gt;Hello, world.&lt;/p&gt;</td>
     </tr>
     <tr>
       <td>Button</td>
       <td>
         &lt;button&gt;Click Me&lt;/button&gt;
       </td>
     </tr>
   </table>
   <p>
     There are inline elements and block elements.
   </p>
     <ul>
     <li>
       <b>Inline elements</b> appear to the website next to other elements,
       covering only as much width as they need so that they fit horizontally.
     </il>
     <li>
       <b>Block elements</b> appear to the website on a new line.
     </li>
     </ul>
    ${buttonSection('HTML Tags', 'HTML Attributes')}`})


    const basic2 = document.querySelector('.basic2')
    basic2.addEventListener('click', ()=>{
        context.innerHTML = ` 
        <h1>HTML Attributes</h1>
        <p>
          Attributes provide information to an element or modify it (functionality & appearance).
          An attribute needs to be included in the opening tag of an element and consists of a name 
          and a value (the value is encapsulated to double quotes). 
          <br /><br />
          <b>Additionaly:</b>
        </p>
        <ul>
          <li>Not all attributes require a value (the keyword alone).</li>
          <li>Not all attributes work on all the elements.</li>
          <li>Global attributes are the attributes that work on all elements.</li>
          <li>An element can have multiple attributes.</li>
        </ul>
        <h2>Values</h2>
        <p>
          Attribute values can be expressed as strings, numbers, URLs, and Booleans.
          The value will depend on the participating attribute and the usage of it.
          Some attributes allow for multiple values to be assign on them 
          (the values will be separated by spaces).
        </p>
        <p><b>Purposes of attributes:</b></p>
        <ul>
          <li>Information: they can provide information which can be used by HTML or
             assisting technologies, such as CSS, JavaScript etc.
            </li>
          <li>Behavior: attributes can define behaviors for elements, such as destination for hyperlinks,
            alternative text, for accessibility purposes etc.
          </li>
          <li>Appearance: certain attributes change the appearance of an element or allow for the
            inclusion of inline CSS (It is a Cascading language with the ability to alter elements by changing their
            size, color etc.).
          </li>
          <li>Events: event a type of attributes that allow for the inclusion of JavaScript, by enabling 
            a functionality when the attribute takes effect.
          </li>
        </ul>

        <h2>Attribute examples:</h2>
        <table>
          <tr>
            <th>Attribute</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>class</td>
            <td>Gives a class name to an element (assisting technologies can use them).</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Excludes the functionality of an element (such as a button, becomes unclickable).</td>
          </tr>
          <tr>
            <td>src</td>
            <td>References the position of a file or the URL address.</td>
          </tr>
          <tr>
            <td>width and height</td>
            <td>Adjust the width and height of the element (the values are numbers and translated as pixels).</td>
          </tr>
        </table>
        <h2>Usage example:</h2>
        <div class="example-section">
          <img src="examples/html_examples/attriubte_code.png" alt="Image failed to load" />
          <p><b><u>Output:</u></b></p>
          <img src="examples/html_examples/attriubte_output.png" alt="Image failed to load" />
        </div>
        <p>
          <b>Note:</b>
          Aside from the standard attributes, HTML can utilize custom attributes for storing additional
          information. However, custom attributes may not be understood by all browsers and other 
          included technologies. Therefore, it’s better practice to use the standard attributes.
        </p>
        ${buttonSection('HTML Elements', 'Page Structure')}` })


    const basic3 = document.querySelector('.basic3')
    basic3.addEventListener('click', ()=>{
        context.innerHTML = ` 
        <h1>Page Structure</h1>
        <p>The combine power of all elements and tags creates the structure of the page. 
            The structure acts as a skeleton on which can be added styling and functionality.
            <br /><br />
            Even the simplest of webpages must have the following three certain elements:
        </p>
        <ul>
            <li> &lt;html&gt;&lt;/html&gt;</li>
            <li> &lt;head&gt;&lt;/head&gt;</li>
            <li> &lt;body&gt;&lt;/body&gt;</li>
        </ul>
        <p>
            Additionally, the file of the website (document) needs to start with a <!DOCTYPE html>
            statement, informing the browser about the version of HTML that is being utilized.
            <br /><br />
            The html tag acts as the root element and nests all the other tags.<br /><br />
            The head tag includes information about the page, such as the title.<br /><br />
            The body tag nests other elements and tags that compose the content of the webpage.
        </p>
        <h2>Simple Structure:</h2>
        <p>Structure goes here</p>
        <h2>HTML5</h2>
        <p>In the latest version of HTML (HTML5) the basic structure explicitly states:</p>
        <ol>
            <li>The language of the webpage, usually English (in the html tag).</li>
            <li>The title of the webpage (as the context of the title tag).</li>
            <li>The character encoding (commonly UTF-8), in a meta tag.</li>
            <li>The viewport control (for the capability of responsive web design 
                especially on phone devices), in a meta tag.</li>
        </ol>
        <p>A page structure without context:</p>
        <p>Goes here</p>
        <p><b>Note:</b> A good practice is to add a tab-sized indentation to elements and tags 
            that are nested inside of other tags. This helps on understanding the hierarchy 
            of the components, especially as the page grows.</p>
        ${buttonSection('HTML Attributes', 'Comments')}`})

    
    const basic4 = document.querySelector('.basic4')
    basic4.addEventListener('click', ()=>{
        context.innerHTML = ` 
        <h1>Comments</h1>
        <p>
            Comments are context of the HTML document that don’t provide any functionality to 
            the page. Comments are used to add a description to the code for the programmer or 
            other programmers, also they prevent the inclusion of a block of code to the page
            while writing and fixing code.  The comments can cover form parts of a single line 
            or multiple lines. 
        </p>
        <p><b>Structure:</b> &lt;!-- Comment containt --&gt;</p>
        <h2>Usage example:</h2>
        <p>Example goes here</p>
        ${buttonSection('Page Structure', 'Text')}`})

    const movingF0 = document.querySelector('.movingF0')
    movingF0.addEventListener('click', ()=>{
    context.innerHTML =`
    <h1>Text Tags</h1>
    <h2>Headings</h2>
    <p>
        Headings create a text hierarchy in the web page, the importance of the heading’s text is
        determined by the size and boldness of the text.
        <br /><br />
        There are six heading tags, each one represents a hierarchical order with the 
        h1 (&lt;h1&gt;&lt;/h1&gt;)
        indicating the most important text and the h6 (&lt;h6&gt;&lt;/h6&gt;) the least important text.
        <br /><br />
        aside from visual hierarchy, headings are also used by the search engines in 
        the search engine optimization (SEO) to understand the context of the page and its relevance.
    </p>
    <p><b>Structure:</b> &lt;h2&gt; text content &lt;/h2&gt;</p>
    <h2>Usage example:</h2>
    <p>Example goes here</p>
    <hr />
    <h2>Paragraphs</h2>
    <p>
        The paragraph tag is used to display large bodies of text such as articles, 
        explanations, stories etc.
    </p>
    <p><b>Structure:</b> &lt;p&gt; paragraph content &lt;/p&gt; </p>
    <h2>Usage example:</h2>
    <p>Example goes here</p>
    <h2>Bold Tag</h2>
    <p>
        The bold is used to apply the bold effect to text. Commonly, 
        to make words stand out in a large body of text.
    </p>
    <p><b>Structure:</b> &lt;b&gt; bold content &lt;/b&gt;</p>
    <h2>Italic Tag</h2>
    <p>It is used to apply the italic effect to text. Commonly, 
        to turn words in the italic format in a large body of text.
    </p>
    <p><b>Structure:</b> &lt;i&gt; italic content &lt;/i&gt;</p>
    <h2>Uderline Tag</h2>
    <p>
        It is used to underline text. Commonly, 
        to underline specific text withing a large body of text.
    </p>
    <p><b>Structure:</b> &lt;u&gt; underlin content &lt;/u&gt;</p>
    <h2>Delete Tag</h2>
    <p>
        It’s used to line-cross text. Commonly to convey the removal a word or a sentence.
    </p>
    <p><b>Structure:</b> &lt;del&gt; delete content &lt;/del&gt;</p>
    <h2>Usage example:</h2>
    <p>Example goes here</p>
    ${buttonSection('Comments', 'Lists')}
    `})

    const movingF1 = document.querySelector('.movingF1')
    movingF1.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>List tags</h1>
    <p>List tags create lists of items with context.
        <br /><br />
        There are two kinds of lists:
    </p>
    <ul>
        <li>Ordered (each item is indexed), defined by the ol tag (&lt;ol&gt;&lt;/ol&gt;).</li>
        <li>Unordered (the items are not indexed), defined by the ul tag (&lt;l&gt;&lt;/ul&gt;).</li>
    </ul>
    <p>
        Inside the list, each item is specified with list item tag (&lt;li&gt;&lt;/li&gt;). 
        Therefore, a list is a combination of two types of tags.
    </p>
    <p><b>Structure of ordered list:</b></p>
    <p><b>Structure of onordered list:</b></p>
    <h2>Usage example:</h2>
    ${buttonSection('Tetx', 'Linking Tags')}
    ` 
})

const movingF2 = document.querySelector('.movingF2')
movingF2.addEventListener('click', ()=>{
context.innerHTML = `
<h1>Linking Tags</h1>
<p>
    Linking tags are the tags that reference the URL address of a website, 
    a portion of the website or the position of a file.
</p>
<h2>Anchor Tags:</h2>
<p>Anchor tags are used to navigate the user to a different website, by referencing the 
    URL address of the website of interest as a value to the href attribute or to navigate 
    the user to a specific part of the website by referencing the value of the id attribute 
    of the element of interest as a value to the href attribute and prefixed with an 
    octothorpe sign (#).
</p>
<p><b>Note:</b>
    the anchor tag does not work without the href attribute. Also, it has the ability 
    to nest other elements inside it or text that function as descriptions. 
    The target attribute with the value of “_blank” will ensure that the browser 
    will return to the webpage tab, after the anchor target tab closes.
</p>
<p><b>Structure:</b> <br /> 
    &lt;a href=”url-address”&gt;
     Description 
     &lt;/a&gt; <br /> <br />
    And <br /> <br />
    &lt;a href=”element-id”&gt; Description &lt;/a&gt;
</p>
<h2>Usage example:</h2>
<h2>Link Tag</h2>
<p>
    Link tags are used to reference the file path or location of a file that is combined 
    with the webpage, it can also reference URL addresses. In addition, the link tag specifies 
    the relationship of that file and  works by utilizing the href and rel attributes.
    <br /><br >
    The link tag is placed in the head portion of the web page, and it is a self-closing tag.
</p>
<p><b>Structure:</b> &lt;link rel=”the-relationship” href=”element-id”&gt;</p>
<h2>Usage example:</h2>
${buttonSection('List Tags', 'Media')}
`})


const movingF3 = document.querySelector('.movingF3')
movingF3.addEventListener('click', ()=>{
context.innerHTML =`
<h1>Media Tags</h1>
<p>The media tags include in the document images, videos, sound etc.</p>
<h2>Image tag:</h2>
<p>
    The image tag (img) inserts images to the webpage. It uses the search (src) attribute to determine the location of the image. The location can be a file path or a URL address on the web.
    <br /><br />
    It is a self-closing tag, often, the alternative (alt) attribute is included in the tag that displays text in the case that the image does not load. The img tag can utilize other attributes like height and width to adjust the image’s size. However, changing the appearance of an elelement directly with HTML it’s uncommon and usually not the best practice.
</p>
<p><b>Structure:</b> &lt;img src="file-path-or-URL" alt="alternative message" /&gt;</p>
<h2>Usage example:</h2>
<h2>Video tag:</h2>
<p>
    The video tag inserts videos to the website. It uses the src attribute to determine the location of the video file. The location can be a file path or a URL address on the web.
    <br /><br />
    It can also include useful attributes on it like controls (adds pause button, full screen etc. to the video), autoplay muted, which causes the video to play automatically when the page load (while muted), loop, causing the video replay once it’s over.
</p>
<p><b>Structure:</b> &lt;video src="file-path-or-URL" controls/&gt;&lt;/video&gt;</p>
<h2>Usage example:</h2>
<h2>Audio tag:</h2>
<p>
    The audio tag can insert audio files to the website. It uses the src attribute to determine the location of the audio file. The location can be a file path or a URL address on the web. It is used with the controls attribute.
    <br /><br />
    Audio can include other attributes, such as loop.
</p>
<p><b>Structure:</b> &lt;audio src="file-path-or-URL" controls/&gt;&lt;/audio&gt;</p>
<h2>Source tag:</h2>
<p>
    The source tag is used within other media tags (video, audio), to specify alternative media sources. It is a self-closing tag. For more stable code, it can take the type attribute to specify the type of the media and it’s suffix.
</p>
<h2>Usage example:</h2>
${buttonSection('Linking Tags', 'Input & Forms')}
`})

const movingF4 = document.querySelector('.movingF4')
movingF4.addEventListener('click', ()=>{
context.innerHTML =`
<h1>Input & Forms</h1>
<p>
    HTML forms are the components that allow data to be submitted by the user to the website.  The data could be text, numbers, choices from a list etc. The form element is created with the form tag (&lt;form&gt;&lt;/form&gt;), and input tags (&lt;input /&gt;). The form tag includes necessary attributes. 
    <br /><br />
    Those are:
</p>
<ul>
    <li>The action attribute: which defines the URL address or the file (and file-path) that handles the submission of the form (calculations, storing, manipulating the data etc.).</li>
    <li>The method attribute: which defines how the data is send (“GET”, “POST”, etc.)</li>
</ul>
<p>The input tags are responsible for providing a way for specifying the data that will be send.</p>
<h2>Attributes for Inputs</h2>
<table>
    <tr>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>type</td>
      <td>Determines the type of input that is utilized.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>Defines the name of the input, utilized by a programming language after the form’s submission for the input’s identification.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Sets an initial value for the input.</td>
    </tr>
    <tr>
      <td>required</td>
      <td>Prevents the form to be submitted unless the input is completed.</td>
    </tr>
    <tr>
      <td>min &amp; max</td>
      <td>Those two specify a minimum and maximum length of the input respectively.</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>Displays a value to the input before anything is entered into it, without being an actual value.</td>
    </tr>
  </table>
  <h2>Common Input types:</h2>
  <table>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>text</td>
      <td>Accepts character data in a single line of text.</td>
    </tr>
    <tr>
      <td>password</td>
      <td>Every character that is inserted gets displayed as a dot.</td>
    </tr>
    <tr>
      <td>number</td>
      <td>Accepts only numerical input.</td>
    </tr>
    <tr>
      <td>checkbox</td>
      <td>The user can choose more than one option from a list of options.</td>
    </tr>
    <tr>
      <td>radio</td>
      <td>The user can choose a single option from a list of options.</td>
    </tr>
    <tr>
      <td>select</td>
      <td>Creates a dropdown menu of options.</td>
    </tr>
    <tr>
      <td>textarea</td>
      <td>Accepts character data in a multiline text.</td>
    </tr>
    <tr>
      <td>email</td>
      <td>Accepts input with email characteristics.</td>
    </tr>
  </table>
  <h2>Label tag:</h2>
  <p>
    The label tag is used to add descriptions to input elements. Takes the for attribute to associate itself with a specific input tag, the value of the for attribute should be the input’s value of the id attribute.
  </p>              
  <h2>Usage example:</h2>
  <h2>The “submit” input type:</h2>
  <p>
    A form is submitted by an input or a button, both of the type “submit”.
    <br /><br />
    Typically, when a form is submitted, the data are sent to a server to be processed. Technologies like Python, Node.js and PHP can handle the data. They can manipulate the data, filter them, store them into a database, send it elsewhere etc.
  </p>
  <h2>Usage example:</h2>
  ${buttonSection('Media', 'Tables')}
`})

const movingF5 = document.querySelector('.movingF5')
movingF5.addEventListener('click', ()=>{
context.innerHTML =`
<h1>HTML Tables</h1>
<p>
    HTML tables are used to display organized data on the webpage. They consist of columns and rows. They are created with the table tag (&lt;table&gt;&lt;/table&gt;), which nests other tabular tags.
</p>
<h2>Table tags:</h2>
<table>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>&lt;tr&gt;</td>
      <td>Creates a row in the table.</td>
    </tr>
    <tr>
      <td>&lt;td&gt;</td>
      <td>Creates a data cell in the table.</td>
    </tr>
    <tr>
      <td>&lt;th&gt;</td>
      <td>Creates the header cell of the table.</td>
    </tr>
    <tr>
      <td>&lt;thead&gt;</td>
      <td>Groups the header content.</td>
    </tr>
    <tr>
      <td>&lt;tbody&gt;</td>
      <td>Groups the body content.</td>
    </tr>
    <tr>
      <td>&lt;tfoot&gt;</td>
      <td>Groups the footer content.</td>
    </tr>
  </table>
<h2>Attributes:</h2>
<table>
    <tr>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>colspan</td>
      <td>Defines the number of columns of a cell.</td>
    </tr>
    <tr>
      <td>rowspan</td>
      <td>Defines the number of rows of a cell.</td>
    </tr>
    <tr>
      <td>scope</td>
      <td>Defines the scope of a &lt;th&gt; element in relation to the table structure.</td>
    </tr>
  </table>              
<h2>Usage example:</h2>
${buttonSection('Input & Forms', 'Semantic HTML')}
`})

const movingF6 = document.querySelector('.movingF6')
movingF6.addEventListener('click', ()=>{
context.innerHTML =`
<h1>Semantics</h1>
<p>
    HTML semantics are the practice of using markup elements to convey meaning and structure to the content of a webpage. It involves choosing the appropriate HTML tags and attributes to accurately represent the purpose and significance of different sections and elements within the page. By employing semantic html developers can enhance the accessibility, SEO (search engine optimization) and overall understanding of the document’s structures.
</p>
<h2>Most common semantics:</h2>
<table>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>&lt;header&gt;</td>
      <td>Introductory section of the page, typically containing the navigation, theme message, and other relevant information.</td>
    </tr>
    <tr>
      <td>&lt;nav&gt;</td>
      <td>The navigation part of the page (links), mainly used for site navigation.</td>
    </tr>
    <tr>
      <td>&lt;main&gt;</td>
      <td>Indicates the main content of the document, excluding headers, footers, and sidebars. Typically, there should be only one "main" element.</td>
    </tr>
    <tr>
      <td>&lt;article&gt;</td>
      <td>Represents a self-contained composition within a document, such as blogs, news, forums. Each one should be sustained independently.</td>
    </tr>
    <tr>
      <td>&lt;section&gt;</td>
      <td>Defines a generic section of content within a document. It helps organize related content into meaningful blocks.</td>
    </tr>
    <tr>
      <td>&lt;aside&gt;</td>
      <td>A section of content that isn’t directly connected to the main content, such as sidebars, pull quotes, ads, etc.</td>
    </tr>
    <tr>
      <td>&lt;figure&gt; and &lt;figcaption&gt;</td>
      <td>Used together to represent media content, such as images, diagrams, videos, with a descriptive caption.</td>
    </tr>
    <tr>
      <td>&lt;footer&gt;</td>
      <td>The footer of the document or section, often contains info like copyright notes, contact info, related links, etc.</td>
    </tr>
  </table>              
<h2>Usage example:</h2>
${buttonSection('Tables', 'File Paths')}
`})
const movingF7 = document.querySelector('.movingF7')
movingF7.addEventListener('click', ()=>{
  context.innerHTML = `
  <h1>File Paths</h1>
  <p>
      Files paths references the location of a file in a system’s memory.
      <br /><br />
      In HTML, they are used to allow the website to access files, such as images, videos, CSS files to style the website etc.
      <br /><br />
      <b>Note:</b> while referencing a file on a directory, the file extension is included.
  </p>
  ${buttonSection('Semantic HTML', 'Entities')}
  `
})
const movingF8 = document.querySelector('.movingF8')
movingF8.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>Entities</h1>
    <p>
        In HTML, entities are special characters or symbols of a specific meaning or a representation, they are used inside the html document.
    </p>
    <p>Advice the entities list for more information on page…</p>
    ${buttonSection('File Paths','APIs')}
    `
})

const additionaly0 = document.querySelector('.additionaly0')
additionaly0.addEventListener('click', ()=>{
    context.innerHTML = 
    `
    <h1>APIs</h1>
    <p>
        APIs stands for “Application Program Interface” and allows the website to access and retrieve data from a database or other web services and utilize it in the representation, resulting in web pages with real-time data.
        <br /><br />
    <b>Note:</b> for the use of an API, a backend programming language is used to process the data (not HTML itself).
    </p>
    ${buttonSection('Entities', 'CSS')}
    `
})

const additionaly1 = document.querySelector('.additionaly1')
additionaly1.addEventListener('click', ()=>{
context.innerHTML =`
<h1>CSS</h1>
<p>
    CSS stands for “Cascading Style Sheets” and is responsible of the website’s styling. Normally, HTML elements have fixed color, size, font etc. With the implementation of CSS, the presentation of the html elements can change.
    <br /><br />
    CSS can be implemented in three main ways.
</p>
<ol>
    <li>Inline CSS</li>
    <li>Internal CSS</li>
    <li>External CSS</li>
</ol>
<p>
    <b>Inline CSS:</b> <br />
    The styling changes occur inside the element itself in the form of the style attribute.
</p>
<h2>Usage example:</h2>
<p>
    When CSS isn’t implemented directly to an element, it modifies elements and tags based on:
</p>
<ul>
    <li>Their tag types</li>
    <li>Their id values</li>
    <li>Their class names</li>
</ul>
<p>
    <b>Internal CSS</b><br />
    The styling changes occur inside the head of the webpage as an element with the style tag.
</p>
<h2>Usage example:</h2>
<p>
    <b>External CSS:</b><br />
    The styling changes occur inside a separate file with the .css suffix. The file is included to the HTML document inside the head using the link tag. Any changes to the CSS file will influence the representation of elements.
</p>
<h2>Usage example:</h2>
<p>
    <b>Note:</b>A web page can have multiple CSS files linked to it.
    <br /><br />
</p>
<ul>
    <li>Doesn’t clutter the HTML document.</li>
    <li>Organizes the code.</li>
    <li>Allows for easier changes and maintenance.</li>
</ul>
${buttonSection('APIs','JavaScript')}
`})
const additionaly2 = document.querySelector('.additionaly2')
additionaly2.addEventListener('click', ()=>{
  context.innerHTML = `
  <h1>JavaScript</h1>
  <p>
      JavaScript is a programming language, commonly used with HTML to make webpages interactive by adding functionality to the tags and elements.
      <br /><br />
      JavaScript code is implemented in HTML with the script tag (&lt;script&gt;&lt;/script&gt;) in two ways.
  </p>
  <p>
      <span class="paragraph-space"></span>
      1.	By writing the JavaScript code inside the script tag.
  </p>
  <h2>Usage example:</h2>
  <p>
      <span class="paragraph-space"></span>
      2.	By referencing a JavaScript file to the HTML inside the opening script tag.
  </p>
  <h2>Usage example:</h2>
  <p>
      <b>Note:</b>: Because JavaScript usually will consider the existence of certain tags on the document, the tags need to be already created and accessible by JavaScript, in other words, the JavaScript code needs to be placed after all the necessary HTML code that will utilize. Therefore, it is a standard practice to include the JavaScript at the bottom of the HTML document, to avoid errors.
  </p>
  ${buttonSection('CSS','Tag List')}
  `
})

const library0 = document.querySelector('.library0')
library0.addEventListener('click', ()=>{
  context.innerHTML = `
  <h1>HTML Tags List</h1>
  <table>
  <tr>
    <th>Tag</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>&lt;a&gt;</td>
    <td>Defines a hyperlink</td>
  </tr>
  <tr>
    <td>&lt;abbr&gt;</td>
    <td>Defines an abbreviation</td>
  </tr>
  <tr>
    <td>&lt;address&gt;</td>
    <td>Contains contact info of the owner or creator of the website</td>
  </tr>
  <tr>
    <td>&lt;area&gt;</td>
    <td>Defines an area inside of an image map</td>
  </tr>
  <tr>
    <td>&lt;article&gt;</td>
    <td>Contains an article</td>
  </tr>
  <tr>
    <td>&lt;aside&gt;</td>
    <td>Contains info and elements aside from the page content (contacts, adds etc.)</td>
  </tr>
  <tr>
    <td>&lt;audio&gt;</td>
    <td>Implements audio to the document</td>
  </tr>
  <tr>
    <td>&lt;b&gt;</td>
    <td>Applies the bold effect on text</td>
  </tr>
  <tr>
    <td>&lt;base&gt;</td>
    <td>Specifies the base URL/target for all relative URLs in a document</td>
  </tr>
  <tr>
    <td>&lt;bdi&gt;</td>
    <td>Isolates a part of text that might be formatted in a different direction from other text outside it</td>
  </tr>
  <tr>
    <td>&lt;bdo&gt;</td>
    <td>Overrides the current text direction</td>
  </tr>
  <tr>
    <td>&lt;blockquote&gt;</td>
    <td>Contains a section that is quoted from another source</td>
  </tr>
  <tr>
    <td>&lt;body&gt;</td>
    <td>Defines the document's body</td>
  </tr>
  <tr>
    <td>&lt;br /&gt;</td>
    <td>Creates a single line break</td>
  </tr>
  <tr>
    <td>&lt;button&gt;</td>
    <td>Creates a clickable button</td>
  </tr>
  <tr>
    <td>&lt;canvas&gt;</td>
    <td>Used to draw graphics, through scripting (usually JavaScript)</td>
  </tr>
  <tr>
    <td>&lt;caption&gt;</td>
    <td>Defines a table caption</td>
  </tr>
  <tr>
    <td>&lt;cite&gt;</td>
    <td>Defines the title of a work</td>
  </tr>
  <tr>
    <td>&lt;code&gt;</td>
    <td>Specifies a piece of code (doesn't add functionality)</td>
  </tr>
  <tr>
    <td>&lt;col&gt;</td>
    <td>Specifies column properties for each column within a &lt;colgroup&gt; element</td>
  </tr>
  <tr>
    <td>&lt;colgroup&gt;</td>
    <td>Specifies a group of one or more columns in a table for formatting</td>
  </tr>
  <tr>
    <td>&lt;data&gt;</td>
    <td>Adds a machine-readable translation of a given content</td>
  </tr>
  <tr>
    <td>&lt;datalist&gt;</td>
    <td>Specifies a list of pre-defined options for input controls</td>
  </tr>
  <tr>
    <td>&lt;dd&gt;</td>
    <td>Adds a description of a term in a description list</td>
  </tr>
  <tr>
    <td>&lt;del&gt;</td>
    <td>Strikes a line through a text body</td>
  </tr>
  <tr>
    <td>&lt;details&gt;</td>
    <td>Specifies additional details that the user can view or hide</td>
  </tr>
  <tr>
    <td>&lt;dfn&gt;</td>
    <td>Specifies a term that is going to be defined within the content</td>
  </tr>
  <tr>
    <td>&lt;dialog&gt;</td>
    <td>Defines a dialog box or window</td>
  </tr>
  <tr>
      <td>&lt;div&gt;</td>
      <td>Defines a section in a document</td>
    </tr>
    <tr>
      <td>&lt;dl&gt;</td>
      <td>Creates a description list</td>
    </tr>
    <tr>
      <td>&lt;dt&gt;</td>
      <td>Defines a term in a description list</td>
    </tr>
    <tr>
      <td>&lt;em&gt;</td>
      <td>Emphasizes text</td>
    </tr>
    <tr>
      <td>&lt;embed&gt;</td>
      <td>Defines a container for an external application</td>
    </tr>
    <tr>
      <td>&lt;fieldset&gt;</td>
      <td>Groups related elements in a form</td>
    </tr>
    <tr>
      <td>&lt;figcaption&gt;</td>
      <td>Defines a caption for a &lt;figure&gt; element</td>
    </tr>
    <tr>
      <td>&lt;figure&gt;</td>
      <td>Specifies self-contained content</td>
    </tr>
    <tr>
      <td>&lt;footer&gt;</td>
      <td>Defines a footer for a document or a section</td>
    </tr>
    <tr>
      <td>&lt;form&gt;</td>
      <td>Creates an HTML form for user input</td>
    </tr>
    <tr>
      <td>&lt;h1&gt; - &lt;h6&gt;</td>
      <td>Create HTML headings</td>
    </tr>
    <tr>
      <td>&lt;head&gt;</td>
      <td>Contains the document's information</td>
    </tr>
    <tr>
      <td>&lt;header&gt;</td>
      <td>Defines the header for a document or section, contains the navbar, icons, etc.</td>
    </tr>
    <tr>
      <td>&lt;hr&gt;</td>
      <td>Creates a line and indicates a thematic change in the content</td>
    </tr>
    <tr>
      <td>&lt;html&gt;</td>
      <td>Defines the root of an HTML document</td>
    </tr>
    <tr>
      <td>&lt;i&gt;</td>
      <td>Applies the italic effect on a text body</td>
    </tr>
    <tr>
      <td>&lt;iframe&gt;</td>
      <td>Defines an inline frame</td>
    </tr>
    <tr>
      <td>&lt;img&gt;</td>
      <td>Includes an image in the document</td>
    </tr>
    <tr>
      <td>&lt;input&gt;</td>
      <td>Creates an input interface for data insertion</td>
    </tr>
    <tr>
      <td>&lt;ins&gt;</td>
      <td>Defines text that has been inserted into a document</td>
    </tr>
    <tr>
      <td>&lt;kbd&gt;</td>
      <td>Defines keyboard input</td>
    </tr>
    <tr>
      <td>&lt;label&gt;</td>
      <td>Specifies a label text for an input element</td>
    </tr>
    <tr>
      <td>&lt;legend&gt;</td>
      <td>Defines a caption for a &lt;fieldset&gt; element</td>
    </tr>
    <tr>
      <td>&lt;li&gt;</td>
      <td>Specifies a list item</td>
    </tr>
    <tr>
      <td>&lt;link&gt;</td>
      <td>Defines the relationship between a document and another file and that file's URL or path location</td>
    </tr>
    <tr>
      <td>&lt;main&gt;</td>
      <td>Specifies the main content of a document</td>
    </tr>
    <tr>
      <td>&lt;map&gt;</td>
      <td>Defines an image map</td>
    </tr>
    <tr>
      <td>&lt;mark&gt;</td>
      <td>Specifies marked text (font)</td>
    </tr>
    <tr>
      <td>&lt;meta&gt;</td>
      <td>Defines metadata about an HTML document</td>
    </tr>
    <tr>
      <td>&lt;meter&gt;</td>
      <td>Creates scalar measurement within a known range</td>
    </tr>
    <tr>
      <td>&lt;nav&gt;</td>
      <td>Contains the navigation portion of the page</td>
    </tr>
    <tr>
      <td>&lt;noscript&gt;</td>
      <td>Defines alternative content for users that do not support client-side scripts</td>
    </tr>
    <tr>
      <td>&lt;object&gt;</td>
      <td>Specifies a container for an external application</td>
    </tr>
    <tr>
      <td>&lt;ol&gt;</td>
      <td>Defines an ordered list</td>
    </tr>
    <tr>
      <td>&lt;optgroup&gt;</td>
      <td>Contains a group of related options in a dropdown list</td>
    </tr>
    <tr>
      <td>&lt;option&gt;</td>
      <td>Specifies an option in a drop-down list</td>
    </tr>
    <tr>
      <td>&lt;output&gt;</td>
      <td>Defines the result of a calculation</td>
    </tr>
    <tr>
      <td>&lt;p&gt;</td>
      <td>Defines a paragraph</td>
    </tr>
    <tr>
      <td>&lt;param&gt;</td>
      <td>Defines a parameter for an object</td>
    </tr>
    <tr>
      <td>&lt;picture&gt;</td>
      <td>Creates a container for multiple image resources</td>
    </tr>
    <tr>
      <td>&lt;pre&gt;</td>
      <td>Defines preformatted text</td>
    </tr>
    <tr>
      <td>&lt;progress&gt;</td>
      <td>Represents the progress of a task</td>
    </tr>
    <tr>
      <td>&lt;q&gt;</td>
      <td>Specifies a short quotation</td>
    </tr>
    <tr>
      <td>&lt;rq&gt;</td>
      <td>Specifies the display in browsers that do not support ruby annotations</td>
    </tr>
    <tr>
      <td>&lt;rt&gt;</td>
      <td>Defines an explanation of characters (for East Asian typography)</td>
    </tr>
    <tr>
      <td>&lt;ruby&gt;</td>
      <td>Defines ruby annotation</td>
    </tr>
    <tr>
      <td>&lt;r&gt;</td>
      <td>Defines text that is no longer correct</td>
    </tr>
    <tr>
      <td>&lt;samp&gt;</td>
      <td>Specifies a sample output from a computer program</td>
    </tr>
    <tr>
      <td>&lt;script&gt;</td>
      <td>Defines client-side script (Notably, JavaScript)</td>
    </tr>
    <tr>
      <td>&lt;section&gt;</td>
      <td>Creates a section in a document</td>
    </tr>
    <tr>
      <td>&lt;select&gt;</td>
      <td>Creates a drop-down list</td>
    </tr>
    <tr>
      <td>&lt;small&gt;</td>
      <td>Defines smaller text</td>
    </tr>
    <tr>
      <td>&lt;source&gt;</td>
      <td>Specifies multiple media resources for media elements</td>
    </tr>
    <tr>
      <td>&lt;span&gt;</td>
      <td>Creates a small section in a document</td>
    </tr>
    <tr>
      <td>&lt;strong&gt;</td>
      <td>Applies the bold effect on a text body</td>
    </tr>
    <tr>
      <td>&lt;style&gt;</td>
      <td>Defines style information for a document</td>
    </tr>
    <tr>
      <td>&lt;sub&gt;</td>
      <td>Defines subscripted text</td>
    </tr>
    <tr>
      <td>&lt;summary&gt;</td>
      <td>Creates a heading for &lt;details&gt; elements</td>
    </tr>
    <tr>
      <td>&lt;sup&gt;</td>
      <td>Defines superscripted text</td>
    </tr>
    <tr>
      <td>&lt;svg&gt;</td>
      <td>Creates a container for SVG graphics</td>
    </tr>
    <tr>
      <td>&lt;table&gt;</td>
      <td>Creates a table for data representation</td>
    </tr>
    <tr>
      <td>&lt;tbody&gt;</td>
      <td>Groups the body content in a table</td>
    </tr>
    <tr>
      <td>&lt;td&gt;</td>
      <td>Creates a cell in a table</td>
    </tr>
    <tr>
      <td>&lt;template&gt;</td>
      <td>Defines a container for content that should be hidden when the page loads</td>
    </tr>
    <tr>
      <td>&lt;tfoot&gt;</td>
      <td>Groups the footer content in a table</td>
    </tr>
    <tr>
      <td>&lt;th&gt;</td>
      <td>Defines a header cell in a table</td>
    </tr>
    <tr>
      <td>&lt;thead&gt;</td>
      <td>Groups the header content in a table</td>
    </tr>
    <tr>
      <td>&lt;time&gt;</td>
      <td>Specifies a time (or datetime)</td>
    </tr>
    <tr>
      <td>&lt;title&gt;</td>
      <td>Defines a title for the document</td>
    </tr>
    <tr>
      <td>&lt;tr&gt;</td>
      <td>Defines a row in a table</td>
    </tr>
    <tr>
      <td>&lt;track&gt;</td>
      <td>Specifies text tracks for a media element</td>
    </tr>
    <tr>
      <td>&lt;u&gt;</td>
      <td>Applies the underline effect on a text body</td>
    </tr>
    <tr>
      <td>&lt;ul&gt;</td>
      <td>Creates an unordered list</td>
    </tr>
    <tr>
      <td>&lt;var&gt;</td>
      <td>Specifies a variable</td>
    </tr>
    <tr>
      <td>&lt;video&gt;</td>
      <td>Includes video in the document</td>
    </tr>
    <tr>
      <td>&lt;wbr&gt;</td>
      <td>Defines a possible line-break</td>
    </tr>
</table>
${buttonSection('JavaScript', 'Attribute List')}
  `
})

const library1 = document.querySelector('.library1')
library1.addEventListener('click', ()=>{
  context.innerHTML = `
  <h1>HTML Attribute List</h1>
  <table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Tags</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>accept</td>
      <td>input</td>
      <td>Specifies the type of file that the server accepts [type="file"]</td>
    </tr>
    <tr>
      <td>accept-charset</td>
      <td>form</td>
      <td>Specifies the character encodings that are for the form submission</td>
    </tr>
    <tr>
      <td>accesskey</td>
      <td>Global Attribute</td>
      <td>Specifies where to send the form-data when a form is submitted</td>
    </tr>
    <tr>
      <td>alt</td>
      <td>area, img, input</td>
      <td>Specifies an alternate text when the original element fails to display</td>
    </tr>
    <tr>
      <td>async</td>
      <td>Script</td>
      <td>Allows the script to execute asynchronously</td>
    </tr>
    <tr>
      <td>autocomplete</td>
      <td>form, input</td>
      <td>Manages the element's autocomplete option</td>
    </tr>
    <tr>
      <td>autofocus</td>
      <td>button, input, select, textarea</td>
      <td>The element is focused automatically after the page loads</td>
    </tr>
    <tr>
      <td>autoplay</td>
      <td>audio, video</td>
      <td>The video or audio will play automatically after the page loads</td>
    </tr>
    <tr>
      <td>charset</td>
      <td>meta, script</td>
      <td>Specifies the character encoding</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>input</td>
      <td>Pre-selects the input element after the page loads</td>
    </tr>
    <tr>
      <td>cite</td>
      <td>blockquote, del, ins, q</td>
      <td>Specifies a URL that explains the quote/deleted/inserted text</td>
    </tr>
    <tr>
      <td>class</td>
      <td>Global attribute</td>
      <td>Specifies one or more class-names for an element</td>
    </tr>
    <tr>
      <td>cols</td>
      <td>textarea</td>
      <td>Defines the width of a text area</td>
    </tr>
    <tr>
      <td>colspan</td>
      <td>td, th</td>
      <td>Specifies the number of columns a table cell should span</td>
    </tr>
    <tr>
      <td>content</td>
      <td>meta</td>
      <td>Gives the value associated with the http-equiv or name attribute</td>
    </tr>
    <tr>
      <td>contenteditable</td>
      <td>Global Attribute</td>
      <td>Specifies whether the content of an element is editable or not</td>
    </tr>
    <tr>
      <td>controls</td>
      <td>audio, video</td>
      <td>Adds controls to the video and audio elements</td>
    </tr>
    <tr>
      <td>coords</td>
      <td>area</td>
      <td>Specifies the coordinates of the area</td>
    </tr>
    <tr>
      <td>data</td>
      <td>object</td>
      <td>Specifies the URL of the resource used by the object</td>
    </tr>
    <tr>
      <td>data-*</td>
      <td>Global attributes</td>
      <td>Stores custom data, private to the page or application</td>
    </tr>
    <tr>
      <td>datetime</td>
      <td>del, ins, time</td>
      <td>Specifies the date and time</td>
    </tr>
    <tr>
      <td>default</td>
      <td>track</td>
      <td>Specifies timed text track for media elements, allowing the inclusion of additional textual info</td>
    </tr>
    <tr>
      <td>defer</td>
      <td>script</td>
      <td>Allows script execution when the page has finished parsing</td>
    </tr>
    <tr>
      <td>dir</td>
      <td>Global Attribute</td>
      <td>Specifies the text direction for the content in an element</td>
    </tr>
    <tr>
      <td>dirname</td>
      <td>input, textarea</td>
      <td>Allows the submission of the text direction</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>button, fieldset, input, optgroup, option, select, textarea</td>
      <td>Excludes the functionality of an element</td>
    </tr>
    <tr>
      <td>download</td>
      <td>a, area</td>
      <td>Download the target when clicked</td>
    </tr>
    <tr>
      <td>draggable</td>
      <td>Global Attribute</td>
      <td>Specifies whether an element is draggable or not</td>
    </tr>
    <tr>
      <td>enctype</td>
      <td>form</td>
      <td>Specifies how the form-data should be encoded when submitting</td>
    </tr>
    <tr>
      <td>for</td>
      <td>label, output</td>
      <td>Specifies the element(s) a label or calculation is bound to</td>
    </tr>
    <tr>
      <td>form</td>
      <td>button, fieldset, input, label, meter, object, output, select, textarea</td>
      <td>Specifies the name of the form the element belongs to</td>
    </tr>
    <tr>
      <td>formaction</td>
      <td>button, input</td>
      <td>Defines where to send the form-data after it is submitted [type="submit"]</td>
    </tr>
    <tr>
      <td>headers</td>
      <td>td, th</td>
      <td>Specifies one or more header cells a cell is related to</td>
    </tr>
    <tr>
      <td>height</td>
      <td>canvas, embed, iframe, img, input, object, video</td>
      <td>Defines the height of the element</td>
    </tr>
    <tr>
      <td>hidden</td>
      <td>Global Attribute</td>
      <td>Specifies that an element is not yet or no longer relevant</td>
    </tr>
    <tr>
      <td>high</td>
      <td>meter</td>
      <td>Specifies the range that is considered to be a high value</td>
    </tr>
    <tr>
      <td>href</td>
      <td>a, area, base, link</td>
      <td>Defines the URL where a file or other data is located</td>
    </tr>
    <tr>
      <td>hrefflang</td>
      <td>a, area, link</td>
      <td>Specifies the language of the linked document</td>
    </tr>
    <tr>
      <td>http-equiv</td>
      <td>meta</td>
      <td>Provides an HTTP header for the info or value of the content attribute</td>
    </tr>
    <tr>
      <td>id</td>
      <td>Global Attribute</td>
      <td>Specifies a unique id for an element</td>
    </tr>
    <tr>
      <td>ismap</td>
      <td>img</td>
      <td>Specifies an image as a server-side image map</td>
    </tr>
    <tr>
      <td>kind</td>
      <td>track</td>
      <td>Specifies the kind of the text track</td>
    </tr>
    <tr>
      <td>label</td>
      <td>track, option, optgroup</td>
      <td>Specifies the title of the text track, option, or optgroup</td>
    </tr>
    <tr>
      <td>lang</td>
      <td>Global Attribute</td>
      <td>Specifies the language of the element's content</td>
    </tr>
    <tr>
      <td>list</td>
      <td>input</td>
      <td>Refers to a datalist element that contains predefined options for an input element</td>
    </tr>
    <tr>
      <td>loop</td>
      <td>audio, video</td>
      <td>Replays the video or audio after it finishes</td>
    </tr>
    <tr>
      <td>low</td>
      <td>meter</td>
      <td>Specifies a range that is considered to be a low value</td>
    </tr>
    <tr>
      <td>max</td>
      <td>input, meter, progress</td>
      <td>Specifies the maximum value</td>
    </tr>
    <tr>
      <td>maxlength</td>
      <td>input, textarea</td>
      <td>Specifies the maximum number of characters allowed in an element</td>
    </tr>
    <tr>
      <td>media</td>
      <td>a, area, link, source, style</td>
      <td>Specifies what media/device the linked document is optimized for</td>
    </tr>
    <tr>
      <td>method</td>
      <td>form</td>
      <td>Specifies the HTTP method to use when sending form-data</td>
    </tr>
    <tr>
      <td>min</td>
      <td>input, meter</td>
      <td>Defines a minimum value</td>
    </tr>
    <tr>
      <td>multiple</td>
      <td>input, select</td>
      <td>Specifies that a user can enter more than one value</td>
    </tr>
    <tr>
      <td>muted</td>
      <td>video, audio</td>
      <td>Specifies that the audio output of the video should be muted</td>
    </tr>
    <tr>
      <td>name</td>
      <td>button, fieldset, form, iframe, input, map, meta, object, output, param, select, textarea</td>
      <td>Specifies the name of the element</td>
    </tr>
    <tr>
      <td>novalidate</td>
      <td>form</td>
      <td>Specifies that the form should not be validated when submitted</td>
    </tr>
    <tr>
      <td>open</td>
      <td>details</td>
      <td>Specifies that the details should be visible to the user</td>
    </tr>
    <tr>
      <td>optimum</td>
      <td>meter</td>
      <td>Specifies what value is the optimal value for the gauge</td>
    </tr>
    <tr>
      <td>pattern</td>
      <td>input</td>
      <td>A regular expression that an input element's value is checked against</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>input, textarea</td>
      <td>Specifies a short hint that describes the expected value of the element</td>
    </tr>
    <tr>
      <td>poster</td>
      <td>video</td>
      <td>Specifies an image to be shown while the video is downloading or until the user hits the play button</td>
    </tr>
    <tr>
      <td>preload</td>
      <td>audio, video</td>
      <td>Specifies if and how the author thinks the element should be loaded when the page loads</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>input, textarea</td>
      <td>Specifies that the element is read-only</td>
    </tr>
    <tr>
      <td>rel</td>
      <td>a, area, form, link</td>
      <td>Specifies the relationship between the current document and the linked document</td>
    </tr>
    <tr>
      <td>required</td>
      <td>input, select, textarea</td>
      <td>Specifies that the element must be filled out before submitting the form</td>
    </tr>
    <tr>
      <td>reversed</td>
      <td>ol</td>
      <td>The order of the list should be descending</td>
    </tr>
    <tr>
      <td>rows</td>
      <td>textarea</td>
      <td>Specifies the number of lines in a text area</td>
    </tr>
    <tr>
      <td>rowspan</td>
      <td>td, th</td>
      <td>Specifies the number of rows a cell should span</td>
    </tr>
    <tr>
      <td>sandbox</td>
      <td>iframe</td>
      <td>Enables an extra set of restrictions for the content in an iframe</td>
    </tr>
    <tr>
      <td>scope</td>
      <td>th</td>
      <td>Specifies whether a header cell is a header for a column, row, or group of columns or rows</td>
    </tr>
    <tr>
      <td>selected</td>
      <td>option</td>
      <td>Specifies that an option should be preselected when the page loads</td>
    </tr>
    <tr>
      <td>shape</td>
      <td>area</td>
      <td>Specifies the shape of the area</td>
    </tr>
    <tr>
      <td>size</td>
      <td>input, select</td>
      <td>Specifies the width in characters (input) or the number of visible options (select)</td>
    </tr>
    <tr>
      <td>sizes</td>
      <td>img, link, source</td>
      <td>Specifies the size of the linked resource</td>
    </tr>
    <tr>
      <td>span</td>
      <td>col, colgroup</td>
      <td>Specifies the number of columns to span</td>
    </tr>
    <tr>
      <td>spellcheck</td>
      <td>Global Attribute</td>
      <td>Specifies whether the element is to have its spelling and grammar checked or not</td>
    </tr>
    <tr>
      <td>src</td>
      <td>audio, embed, iframe, img, input, script, source, track, video</td>
      <td>Specifies the URL of the media file</td>
    </tr>
    <tr>
      <td>srcdoc</td>
      <td>iframe</td>
      <td>Specifies the HTML content of the page to show in the iframe</td>
    </tr>
    <tr>
      <td>srclang</td>
      <td>track</td>
      <td>Specifies the language of the track text data (in kind="subtitles")</td>
    </tr>
    <tr>
      <td>srcset</td>
      <td>img, source</td>
      <td>Specifies the URL of the image to use in different situations</td>
    </tr>
    <tr>
      <td>start</td>
      <td>ol</td>
      <td>Specifies the start value of an ordered list</td>
    </tr>
    <tr>
      <td>step</td>
      <td>input</td>
      <td>Specifies the legal number intervals for an input field</td>
    </tr>
    <tr>
      <td>style</td>
      <td>Global Attribute</td>
      <td>Specifies an inline CSS style for an element</td>
    </tr>
    <tr>
      <td>tabindex</td>
      <td>Global Attribute</td>
      <td>Specifies the tabbing order of an element</td>
    </tr>
    <tr>
      <td>target</td>
      <td>a, area, base, form</td>
      <td>Specifies the target for where to open the linked document or where to submit the form</td>
    </tr>
    <tr>
      <td>title</td>
      <td>Global Attribute</td>
      <td>Specifies extra information about an element</td>
    </tr>
    <tr>
      <td>translate</td>
      <td>Global Attribute</td>
      <td>Specifies whether the content of an element should be translated or not</td>
    </tr>
    <tr>
      <td>type</td>
      <td>a, button, embed, input, link, menu, object, script, source, style</td>
      <td>Specifies the type of an element</td>
    </tr>
    <tr>
      <td>usemap</td>
      <td>img, object</td>
      <td>Specifies an image as a client-side image map</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Button, input, li, option, meter, progress, param</td>
      <td>Specifies the value of the element</td>
    </tr>
    <tr>
      <td>width</td>
      <td>canvas, embed, img, input, object, video</td>
      <td>Specifies the width of the element</td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>textarea</td>
      <td>Specifies how the text in a text area is to be wrapped when submitted in a form</td>
    </tr>
  </tbody>
  </tbody>
</table>
${buttonSection('Tags List', 'Entities List')}
  `
})

const library2 = document.querySelector('.library2')
library2.addEventListener('click', ()=>{
context.innerHTML = `
<h1>HTML Entities List</h1>
<table>
    <tr>
      <th>Output</th>
      <th>Description</th>
      <th>Entity</th>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>Non-breaking space</td>
      <td>&amp;nbsp;</td>
    </tr>
    <tr>
      <td>&lt;</td>
      <td>Less than</td>
      <td>&amp;lt;</td>
    </tr>
    <tr>
      <td>&gt;</td>
      <td>Greater than</td>
      <td>&amp;gt;</td>
    </tr>
    <tr>
      <td>&amp;</td>
      <td>Ampersand</td>
      <td>&amp;amp;</td>
    </tr>
    <tr>
      <td>&quot;</td>
      <td>Double quote</td>
      <td>&amp;quot;</td>
    </tr>
    <tr>
      <td>&apos;</td>
      <td>Single quote</td>
      <td>&amp;apos;</td>
    </tr>
    <tr>
      <td>&cent;</td>
      <td>Cents</td>
      <td>&amp;cent;</td>
    </tr>
    <tr>
      <td>&pound;</td>
      <td>Pound</td>
      <td>&amp;pound;</td>
    </tr>
    <tr>
      <td>&yen;</td>
      <td>Yen</td>
      <td>&amp;yen;</td>
    </tr>
    <tr>
      <td>&euro;</td>
      <td>Euro</td>
      <td>&amp;euro;</td>
    </tr>
    <tr>
      <td>&copy;</td>
      <td>Copyright</td>
      <td>&amp;copy;</td>
    </tr>
    <tr>
      <td>&reg;</td>
      <td>Registered mark</td>
      <td>&amp;reg;</td>
    </tr>
    <tr>
      <td>a&#768;</td>
      <td>à</td>
      <td>a&amp;#768;</td>
    </tr>
    <tr>
      <td>a&#769;</td>
      <td>á</td>
      <td>a&amp;#769;</td>
    </tr>
    <tr>
      <td>a&#770;</td>
      <td>â</td>
      <td>a&amp;#770;</td>
    </tr>
    <tr>
      <td>a&#771;</td>
      <td>ã</td>
      <td>a&amp;#771;</td>
    </tr>
    <tr>
      <td>O&#768;</td>
      <td>Ò</td>
      <td>O&amp;#768;</td>
    </tr>
    <tr>
      <td>O&#769;</td>
      <td>Ó</td>
      <td>O&amp;#769;</td>
    </tr>
    <tr>
      <td>O&#770;</td>
      <td>Ô</td>
      <td>O&amp;#770;</td>
    </tr>
    <tr>
      <td>O&#771;</td>
      <td>Õ</td>
      <td>O&amp;#771;</td>
    </tr>
  </table>
  ${buttonSection('Attributes List', 'Match Patterns')}
`})

const library3 = document.querySelector('.library3')
library3.addEventListener('click', ()=>{
context.innerHTML = `
  <h1>Matching Patterns</h1>
  <table>
  <tr>
    <th>Pattern</th>
    <th>Matches</th>
  </tr>
  <tr>
    <td>[0-9]</td>
    <td>Any single digit</td>
  </tr>
  <tr>
    <td>[a-z]</td>
    <td>Any lowercase letter</td>
  </tr>
  <tr>
    <td>[A-Z]</td>
    <td>Any uppercase letter</td>
  </tr>
  <tr>
    <td>[a-zA-Z]</td>
    <td>Any letter</td>
  </tr>
  <tr>
    <td>[0-9a-fA-F]</td>
    <td>Any hexadecimal digit (0-9, a-f, A-F)</td>
  </tr>
  <tr>
    <td>[a-zA-Z0-9]</td>
    <td>Any alphanumeric character</td>
  </tr>
  <tr>
    <td>[0-9]+</td>
    <td>One or more consecutive digits</td>
  </tr>
  <tr>
    <td>[a-z]+</td>
    <td>One or more consecutive lowercase letters</td>
  </tr>
  <tr>
    <td>[A-Z]+</td>
    <td>One or more consecutive uppercase letters</td>
  </tr>
  <tr>
    <td>[a-zA-Z]+</td>
    <td>One or more consecutive letters</td>
  </tr>
  <tr>
    <td>[^0-9]</td>
    <td>Any non-digit character</td>
  </tr>
  <tr>
    <td>[^a-z]</td>
    <td>Any non-lowercase character</td>
  </tr>
  <tr>
    <td>[^A-Z]</td>
    <td>Any non-uppercase character</td>
  </tr>
  <tr>
    <td>[^a-zA-Z]</td>
    <td>Any non-letter</td>
  </tr>
  <tr>
    <td>\d</td>
    <td>Any digit character</td>
  </tr>
  <tr>
    <td>\D</td>
    <td>Any non-digit character</td>
  </tr>
  <tr>
    <td>\w</td>
    <td>Any alphanumeric and underscore character</td>
  </tr>
  <tr>
    <td>\W</td>
    <td>Any non-alphanumeric and non-underscore character</td>
  </tr>
  <tr>
    <td>\s</td>
    <td>Any whitespace character</td>
  </tr>
  <tr>
    <td>\S</td>
    <td>Any non-whitespace character</td>
  </tr>
  <tr>
    <td>.</td>
    <td>Any single character, except a newline</td>
  </tr>
  <tr>
    <td>.*</td>
    <td>Zero or more single characters, except a newline</td>
  </tr>
  <tr>
    <td>[a-zA-Z]*[0-9]*</td>
    <td>Combination (zero or more consecutive letters followed by zero or more digits)</td>
  </tr>
</table>
${buttonSection('Entities', 'Home')}
`})

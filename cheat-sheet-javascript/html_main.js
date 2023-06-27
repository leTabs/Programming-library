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



const tables = document.querySelector('.tables')
tables.addEventListener('click', ()=>{
    context.innerHTML = `<h1>Tables</h1>
<p>
    HTML tables are used to display organized data on the webpage. They consist of columns and row. They are created with the < table>< /table> tag, which nests other tabular tags.
</p>
<p>Table goes here</p>
<p>Table goes here</p>
<p>Structure: ...</p>`})

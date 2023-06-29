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
    ${buttonSection('Home', 'Selectors')}
    `})
    document.querySelector('.basic0').addEventListener('click', ()=>{
        context.innerHTML = `
        <h1>Selectors</h1>
        <p>
            The CSS language targets specific elements before applying changes to them. The targeting of the elements happens with the CSS selectors. A selector consists of a name and two curly braces (“{}”). The styling changes occur inside the curly braces as properties and values.
            <br /><br />
            The property and its value is associated with a colon (:) and the property-value pairs are separated with each other by semi-colons(;)
        </p>
        <p>
            There are three main types of selectors:
        </p>
        <ol>
            <li><b>Tag based:</b> the selector targets the elements of a specific type.</li>
            <li><b>Class based:</b>the selector targets the elements of a specific class name of the elements. The class name is prefixed with a dot (.).</li>
            <li><b>Id based:</b>the selector targets the elements of a specific id value of the element. The id is prefixed with a hash sign (#).</li>
        </ol>
        <p>
            A selector can target more than one element during the selector definition (they separated by commas). The CSS styling changes that occur inside the curly braces will affect all the selected elements.
        </p>
        <p>
            The * selector selects all the elements of the document.
        </p>
        <h2>Child elements:</h2>
        <p>
            A selector can target elements that are children of other elements by specifying the tag, class, or id of the child element, next to the parent element. 
        </p>
        ${buttonSection('Introduction', 'Properties')}
        `
    })
    document.querySelector('.basic1').addEventListener('click', ()=>{  
        context.innerHTML = 
        `
    <h1>Properties</h1>
    <p>
        A CSS property changes a characteristic of an element or multiple elements, the property references that characteristic with a keyword, the keyword usually hints the characteristic itself, and is assigned a value with a column, the value dictates the change.
        <br /><br />
        All property-value pairs end with e semi column and are placed inside the curly braces of the selector.
    </p>
    <p><b>Structure:</b> property: value ;</p>
    ${buttonSection('Selectors','Unites')}
    `}
    )
document.querySelector('.basic2').addEventListener('click', ()=>{
    context.innerHTML =  `
    <h1>Units</h1>
    <p>
        Some property values are including a unit of measurement, such as the “pixel”.
        <br/> <br />
        However, the pixel isn’t the only unit of CSS values. Usually, it is a good practice to avoid using the pixel unit for significant elements, due to the fact that screens have multiple sizes.
        <br /><br />
        There are two kinds of units:
    </p>
    <ol>
        <li>Absolute units: measured fixed</li>
        <li>Relative units: measured in relation to something</li>
    </ol>
    <h2>Absolute Units:</h2>
    <table>
        <tr>
          <th>Unit</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>1px</td>
          <td>Pixel</td>
        </tr>
        <tr>
          <td>1cm</td>
          <td>Centimeter</td>
        </tr>
        <tr>
          <td>1mm</td>
          <td>Millimeter</td>
        </tr>
        <tr>
          <td>1in</td>
          <td>Inch (1in = 96px)</td>
        </tr>
        <tr>
          <td>1pt</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>pc</td>
          <td>Picas</td>
        </tr>
      </table>
      <p><b>Note:</b>Pixels are relative to the device. Low DPI devices have a 1px = 1 device px. For high resolution screens, or printers 1px = multiple device pixels.</p>              
      <h2>Relative Units:</h2>
      <table>
        <tr>
          <th>Unit</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>1px</td>
          <td>Pixel</td>
        </tr>
        <tr>
          <td>1cm</td>
          <td>Centimeter</td>
        </tr>
        <tr>
          <td>1mm</td>
          <td>Millimeter</td>
        </tr>
        <tr>
          <td>1in</td>
          <td>Inch (1in = 96px)</td>
        </tr>
        <tr>
          <td>1pt</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>pc</td>
          <td>Picas</td>
        </tr>
        <tr>
          <td>em</td>
          <td>Represents a multiple of the font size of the nearest parent element that has a defined font size.</td>
        </tr>
        <tr>
          <td>ex</td>
          <td>Represent the x-height of the current font size.</td>
        </tr>
        <tr>
          <td>ch</td>
          <td>Represent a multiple of the width size of the "0" character.</td>
        </tr>
        <tr>
          <td>rem</td>
          <td>Relative to the root element.</td>
        </tr>
        <tr>
          <td>vw</td>
          <td>Relative to 1% of the viewport width.</td>
        </tr>
        <tr>
          <td>vh</td>
          <td>Relative to 1% of the viewport height.</td>
        </tr>
        <tr>
          <td>vmin</td>
          <td>Relative to 1% of the viewport's smaller dimension.</td>
        </tr>
        <tr>
          <td>vmax</td>
          <td>Relative to 1% of the viewport's larger dimension.</td>
        </tr>
        <tr>
          <td>%</td>
          <td>Relative to the parent element.</td>
        </tr>
      </table>
      <p><b>Em:</b>A size value of 3em will scale the size three times of the current size.</p>
      <p><b>Ex:</b>The x-height refers to the height to the lowercase letter “x” in a specific font. The ex unit is rarely used. </p>
      <p><b>Ch:</b>The is based on the concept that the width of the “0” character is generally uniform across most fonts. If the width of “0” is 12 pixels, a property with the value of 2ch will be equal to 24px.</p>
      <p><b>Rem:</b>Rem stands for “root em”. It represents a multiple of the root element’s set font. If the root element font is set to 16px, then, 2rem is equal to 32px. Rem is a more consient form of the em.</p>
      <p><b>Vw:</b>Vw (viewport width) represents a percentage of the width of the viewport, viewport is the size of the window. A viewport width of 50 (50vw) would be equal to the half of the total viewport width</p>
      <p><b>Vh:</b>Vh (viewport height) represents a percentage of the height of the viewport. A viewport height of 25 (25vh) is equal to a quarter of the total viewport height. </p>
      <p><b>Vmin:</b>Vmin represents a percentage of the viewport’s smaller end, if the viewport’s smaller end is 800px, a vmin of 50 (50vmin) will be equal to 400px.</p>
      <p><b>Vmax:</b>Vmin represents a percentage of the viewport’s larger end, if the viewport’s larger end is 1600px, a vmin of 50 (50vmin) will be equal to 800px.</p>
      <p><b>Percentage:</b>Size: the sizing properties of an element that uses the percentage unit, will adjust relatively to the size of its parent element. In simpler terms, an element of 100% width will occupy us much width space as its parent element. An element of 50% height will occupy half the height space of its parent element.
        <br/><br />
        Position: the positioning properties of an element that use the percentage unit, will adjust the position of that element relatively it’s containing block (parent element). In simpler terms, an element that is being set the “top” property to be 25%, it will be position to a quarter of the container’s height from the top.
        </p>
        ${buttonSection('Properties', 'Text')}
    `
})

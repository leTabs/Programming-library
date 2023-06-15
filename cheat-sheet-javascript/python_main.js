// remeber to change the list color once clicked
const chapters = document.querySelector('.chapters')
basics = [
    'Syntax',
    'Data Types',
    'Variables',
    'Operators',
    'Strings',
    'Basic Functions'
]
controlFlow = [
    'if Statments',
    'Ternary Operator',
    'while Loop',
    'for Loop',
    'break', 
    'continue'
]
functios = [
    'Functions',
    'return Statment',
    'lambda Functions',
    'Scopes'
]
dataStructures = [
    'Data Structures',
    'Lists',
    'Tuples',
    'Sets',
    'Dictionaries'
]
fileDirs = [
    'Paths / Directories',
    'Handling Paths',
    'Working with files',
]
debugging = [
    'Debugging',
    'raise Statement',
    'Assertions',
    'Exception Handling'
]
oop = [
    'OOP',
    'Classes',
    'Objects',
    'Attributes',
    'Methods',
    'Inheritence',
    'Encapsulation',
    'Polymorphism'
]
modules  = [
    'Modules & Packages',
    'Working with Modules'
]
json_ = [
    'working with Json'
]
dates = [
    'Dates',
    'Working with Dates'
]
function lists(){
    chapters.innerHTML+= `<h1>Introduction</h1><hr>`
    chapters.innerHTML += `<h3>Basics</h3>`
    for(item in basics){
        chapters.innerHTML +=  `<p class="chapterNames basic${item}">${basics[item]}</p>`
    }
    chapters.innerHTML += `<h3>Control flow</h3>` 
    for(item in controlFlow){
        chapters.innerHTML +=  `<p class="chapterNames">${controlFlow[item]}</p>`
    }
    chapters.innerHTML += `<h3>Functions</h3>`
    for(item in functios){
        chapters.innerHTML += `<p class="chapterNames">${functios[item]}</p>`
    }
    chapters.innerHTML += '<h3>Data Structures</h3>'
    for(item in dataStructures){
        chapters.innerHTML += `<p class="chapterNames">${dataStructures[item]}</p>`
    }
    chapters.innerHTML += `<h3> Files and Paths</h3>`
    for(item in fileDirs){
        chapters.innerHTML += `<p class="chapterNames">${fileDirs[item]}</p>`
    }
    chapters.innerHTML += '<h3>Debugging</h3>'
    for(item in debugging){
        chapters.innerHTML += `<p class="chapterNames">${debugging[item]}</p>`
    }
    chapters.innerHTML += '<h3>Object-Oriented Programming</h3>'
    for(item in oop){
        chapters.innerHTML += `<p class="chapterNames">${oop[item]}</p>`
    }
    chapters.innerHTML += '<h3>Modules</h3>'
    for(item in modules){
        chapters.innerHTML += `<p class="chapterNames">${modules[item]}</p>`
    }
    chapters.innerHTML += '<h3>Dates</h3>'

    for(item in dates){
        chapters.innerHTML += `<p class="chapterNames">${dates[item]}</p>`
    }
    chapters.innerHTML += '<h3>Json</h3>'
    for(item in json_){
        chapters.innerHTML += `<p class="chapterNames">${json_[item]}</p>`
    }
}

lists()


const context = document.querySelector('.context')
/*
context.innerHTML = `
    <h1>Introduction</h1>
    <p>Python is high-level programming language. It’s known for its simple syntax,
        wide variety of uses and as one of the most beginner friendly languages.
    </p>
    <hr />
    <p>Python is used for:</p>
    <ul>
        <li>Web development</li>
        <li>Data Analysis and Visualization</li>
        <li>Machine Learning and AI</li>
        <li>Command-line applications</li>
        <li>Game development</li>
        <li>Networking Programming</li>
        <li>And more…</li>
    </ul>
    <hr />
    <p>A program created with the python programming language consists of python code written
        in one or more files. When the files run (compile) they read the code from top to 
        bottom.
    </p>
    <hr />
    <div class="next-prev-btn">
        <button>Previous</button>
        <button>Next</button>
    </div>
`*/

const basic0 = document.querySelector('.basic0')
basic0.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>Syntax</h1>
    <p>
        Python’s syntax is highly readable. 
        Notably, the functionality of many keywords is understood by the name of the keyword itself.
    </p>
    <hr />
    <h2>Indentation</h2>
    <p>
        Indentation: python uses indentations to define blocks of code derived from statements,
        to determine the hierarchy and structure of the code. Those statements are 
        loops, functions, conditional statements, etc. This eliminates the need for
        curly braces and semicolons present in many other programming languages.
    </p>
    <hr />
    <h2>Dynamic Typing</h2>
    <p> Dynamic typing: Python is dynamically typed, meaning, the variables
        don’t need to explicitly be declared with a variable type.
    </p>
    <hr />
    <h2>Comments</h2>
    <p>Comments: Comments are context of the python script that does not run 
        or has any functionality. The are used to help add a description to the
        code for the programmer or other programmers and to prevent a block of
        code to running while writing and fixing code. They are of two kinds of
        comments, in-line present in a single line, prefixed with a hash (#)
        and multiline that are present in multiple lines and are surrounded 
        by three single of double quotes
    </p>
    
    <div class="example">
    <p>>>> # single-line comment </p>
    <p>>>> ' ' ' Multi-<br /> . . . line <br />
    . . .  comment ' ' '</p>
  </div>
    <hr />
    <div class="next-prev-btn">
        <button>Previous</button>
        <button>Next</button>
    </div>
    `
})
const basic1 = document.querySelector('.basic1')
basic1.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>Data types</h1>
    <p>DATA TYPES refer to the different types of data python can utilize. 
        The basic python data types are:</p>
    <hr/>
    <h2>Numeric Datatypes:</h2>
    <table>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>int</td>
          <td>Integer number</td>
          <td>Represent whole numbers.</td>
        </tr>
        <tr>
          <td>float</td>
          <td>Floating point numbers</td>
          <td>Represent real numbers with decimal points.</td>
        </tr>
        <tr>
          <td>complex</td>
          <td>Complex</td>
          <td>Represent complex numbers with real and imaginary parts.</td>
        </tr>
      </table>
      <div class="example">
        <p>>>> <span class="keyword">int</span> 5 </p>
        <p>>>> <span class="keyword">float   </span>3.14</p>
        <p>>>> <span class="keyword">complex </span>( 2 + 3j )</p>
      </div>
    <hr />
    <h2>Sequence Datatypes</h2>
    <table>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>str</td>
          <td>String</td>
          <td>Represent a sequence of characters (letters, numbers, symbols), like a sentence. Strings are surrounded by single or double quotes.</td>
        </tr>
        <tr>
          <td>list</td>
          <td>List</td>
          <td>Represent an ordered collection of items (lists are surrounded with square braces).</td>
        </tr>
        <tr>
          <td>tuple</td>
          <td>Tuple</td>
          <td>Represent an ordered and unchangeable collection of items (items are separated by commas and can be surrounded by parenthesis).</td>
        </tr>
      </table>
      <div class="example">
        <p>>>> <span class="keyword">str</span>  # 'I am a string' </p>
        <p>>>> <span class="keyword">list   </span> # [ 5, 'Martha', 8.4 ]</p>
        <p>>>> <span class="keyword">tuple </span># ( 'John', 45, 2.1 )</p>
      </div>
      <hr />
      <h2>Mapping Datatypes</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>dict</td>
          <td>Dictionary</td>
          <td>Represent a collection of key-value pairs. Every key is unique and its value is connected to it with a colon sign (:). They are surrounded by curly braces.</td>
        </tr>
      </table>
      <div class="example">
        <p>>>> <span class="keyword">dict</span>  #  { 'John': 'Teacher', 'Marth': 'Doctor'} </p>
      </div>
      <hr />
      <h2>Set Datatypes</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>set</td>
          <td>Set</td>
          <td>Represent an ordered collection of unique items. The items are surrounded by curly braces.</td>
        </tr>
        <tr>
          <td>frozenset</td>
          <td>frozenset</td>
          <td>Represent an immutable version of a set.</td>
        </tr>
      </table>
      <div class="example">
        <p>>>> <span class="keyword">set</span>  #  {'apple', 'banana', 'kiwi'} </p>
      </div>
      <hr />
      <h2>Boolean Datatypes</h2>
      <div class="example">
        <p>>>> <span class="keyword">bool</span>  #  True or False </p>
      </div>
      <table>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>bool</td>
          <td>Boolean</td>
          <td>Represent a value of either "True" or "False".</td>
        </tr>
      </table>              
      <hr />  
      <h2>None Datatypes</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>NoneType</td>
          <td>None</td>
          <td>Represent the absence of a value.</td>
        </tr>
      </table>
      <div class="example">
        <p>>>> <span class="keyword">NoneType</span>  # None </p>
      </div>
    <hr />       
    <div class="next-prev-btn">
        <button>Previous</button>
        <button>Next</button>
    </div>
    `
})

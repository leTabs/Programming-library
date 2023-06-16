// remeber to change the list color once clicked
//Make sure to change the html to module and the innerHTML to a function with a variable parameter
const chapters = document.querySelector('.chapters')
basics = [
    'Syntax',
    'Data Types',
    'Variables',
    'Operators',
    'Strings',
    'Basic Functions',
    'Indexing'
]
controlFlow = [
    'if Statments',
    'Ternary Operator',
    'while Loop',
    'for Loop',
    'break', 
    'continue'
]
functions = [
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
        chapters.innerHTML +=  `<p class="chapterNames controlF${item}">${controlFlow[item]}</p>`
    }
    chapters.innerHTML += `<h3>Functions</h3>`
    for(item in functions){
        chapters.innerHTML += `<p class="chapterNames functions${item}">${functions[item]}</p>`
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

const basic2 = document.querySelector('.basic2')
basic2.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>Variables<h1>
    <p>Variables are references to values. They use the assignment operator (=) 
    to be defined. Variables can be displayed, manipulated, combined and more,
    to serve the need of the program. The values of a variable can be int, float,
    string, list etc.</p>
    <hr />
    <p>In Python, variable follow the following rules:</p>
    <ul>
       <li>They must start with a letter (a-z, A-Z) or an underscore ( _ ).</li>
        <li>They can contain letters, whole numbers (0-9) and underscores.</li>
        <li>They are case sensitive.</li>
        <li>The present a meaningful name about the context.</li>
        <li>They can not be a python keyword.</li>
        <li>They don’t have a restricted length.</li>
    </ul>
    <div class="example">
        <p>variable_name = 56</p>
        <p>var001</p>
        <p>var001 is not the same as Var001</p>
        <p>person01 = 'Joohn'</p>
    </div>
    <p>Variables with other variables as values reference the same value.</p>
    <div class="example">
        <p>>>> x = 5<br />
        >>> y = x # y is equal to 5<br />
        >>> # if x it's value, y will change too</p>
    </div>
    <hr />
    <div class="next-prev-btn">
        <button>Previous</button>
        <button>Next</button>
    </div>
    `
})


const basic3 = document.querySelector('.basic3')
basic3.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>Operators</h1>
    <p>Operators are symbols or combinations of symbols that serve a very specific functionality.</p>
    <h2>Arithmetic Operators</h2>
    <p>Arithmetic operators: are the operators used to execute addition, subtraction,
        multiplication, division. Also, to get the remainder of a division and use the
        mathematical powers.
    </p>
    <table>
        <tr>
          <th>Operation</th>
          <th>Sign</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Addition</td>
          <td>+</td>
          <td>Performs addition, also combines the context of values of the same data type.</td>
        </tr>
        <tr>
          <td>Subtraction</td>
          <td>-</td>
          <td>Performs subtraction.</td>
        </tr>
        <tr>
          <td>Multiplication</td>
          <td>*</td>
          <td>Multiplies numbers and the context of other data types.</td>
        </tr>
        <tr>
          <td>Division</td>
          <td>/</td>
          <td>Performs division.</td>
        </tr>
        <tr>
          <td>Floor Division</td>
          <td>//</td>
          <td>Performs division and returns the integer (without any decimal points).</td>
        </tr>
        <tr>
          <td>Power</td>
          <td>**</td>
          <td>Uses power to numbers.</td>
        </tr>
        <tr>
          <td>Modulus</td>
          <td>%</td>
          <td>Returns the remainder of the division of two numbers.</td>
        </tr>
      </table>
    <hr />

    <h2>Assignment operators</h2>
    <p>Assignment operators: assign values to a variable or a different  python object.</p>

    <table>
        <tr>
          <th>Operation</th>
          <th>Sign</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Assignment</td>
          <td>=</td>
          <td>Assigns a value to a variable name.</td>
        </tr>
        <tr>
          <td>Augmented addition</td>
          <td>+=</td>
          <td>Adds the variable with the right operand and assigns the result to the variable.</td>
        </tr>
        <tr>
          <td>Augmented subtraction</td>
          <td>-=</td>
          <td>Subtracts the variable with the right operand and assigns the result to the variable.</td>
        </tr>
        <tr>
          <td>Augmented multiplication</td>
          <td>*=</td>
          <td>Multiplies the variable with the right operand and assigns the result to the variable.</td>
        </tr>
        <tr>
          <td>Augmented division</td>
          <td>/=</td>
          <td>Divides the variable with the right operand and assigns the result to the variable.</td>
        </tr>
        <tr>
          <td>Augmented floor division</td>
          <td>//=</td>
          <td>Floor divides the variable with the right operand and assigns the result to the variable.</td>
        </tr>
        <tr>
          <td>Augmented power</td>
          <td>**=</td>
          <td>Powers the variable with the right operand and assigns the result to the variable.</td>
        </tr>
        <tr>
          <td>Augmented modulus</td>
          <td>%=</td>
          <td>Divides the variable with the right operand and assigns the remainder of the division to the variable.</td>
        </tr>
      </table>
    <hr />              
    <h2>Comparison Operators</h2>
    <p>Comparison Operators: compare two values and return “True” or “False”
        according to the result of the comparison:</p>
        <table>
            <tr>
              <th>Operation</th>
              <th>Sign</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>Equal to</td>
              <td>==</td>
              <td>Returns True if the two values are equal and False otherwise.</td>
            </tr>
            <tr>
              <td>Not Equal to</td>
              <td>!=</td>
              <td>Returns True if the two values are not equal and False otherwise.</td>
            </tr>
            <tr>
              <td>Greater than</td>
              <td>&gt;</td>
              <td>Returns True if the left value is greater than the right value and False otherwise.</td>
            </tr>
            <tr>
              <td>Less than</td>
              <td>&lt;</td>
              <td>Returns True if the left value is smaller than the right value and False otherwise.</td>
            </tr>
            <tr>
              <td>Greater or Equal to</td>
              <td>&gt;=</td>
              <td>Returns True if the left value is greater or equal to the right value and False otherwise.</td>
            </tr>
            <tr>
              <td>Less or Equal to</td>
              <td>&lt;=</td>
              <td>Returns True if the left value is smaller or equal to the right value and False otherwise.</td>
            </tr>
          </table>
        <hr />                  
    <h2>Logical Operators</h2>
    <p>Logical operators: combine or manipulate Boolean values. They help on creating complex conditions 
        by combining simpler conditions together.</p>
        <table>
            <thead>
              <tr>
                <th>Operation &amp; Sign</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>and</td>
                <td>Returns True if both operands are evaluated to True, and False otherwise.</td>
              </tr>
              <tr>
                <td>or</td>
                <td>Returns True if at least one of the operands is evaluated to True, and False otherwise.</td>
              </tr>
              <tr>
                <td>not</td>
                <td>Is a unary operator. Returns True if the operand is evaluated to False, and False if the operand is evaluated to True.</td>
              </tr>
            </tbody>
          </table>
        <hr />
    
    <h2>Memebership Operators</h2>
    <p>Membership Operators: test the membership of a specified value in a sequence of items,
        such as strings, lists tuples etc.</p>
        <table>
            <tr>
              <th>Operation &amp; Sign</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>in</td>
              <td>Returns True if the specified value is included in the sequence of interest, and False otherwise.</td>
            </tr>
            <tr>
              <td>not in</td>
              <td>Returns True if the specified value is not included in the sequence of interest, and False otherwise.</td>
            </tr>
          </table>
        <hr />                  
    <h2>Identity Operators</h2>
    <p>Identity Operators: compare the identity of two objects, they determine if two values
         or objects refer to the same memory location.</p>
    
         <!DOCTYPE html>
         <html>
         <head>
           <title>Python Comparison Operators</title>
         </head>
         <body>
           <h1>Python Comparison Operators</h1>
         
           <table>
             <tr>
               <th>Operation</th>
               <th>Description</th>
             </tr>
             <tr>
               <td>is</td>
               <td>Returns True if the two vars or objects refer to the same memory location, and False otherwise.</td>
             </tr>
             <tr>
               <td>is not</td>
               <td>Returns True if the two vars or objects do not refer to the same memory location, and False otherwise.</td>
             </tr>
           </table>
         
         </body>
         </html>
        <hr />                 
    <h2>Bitwise Operators</h2>
    <p>Bitwise Operators: perform operations at a binary level on the individual bits of integers.
        They manipulate the binary representation of numbers.</p>
    
        <table>
            <tr>
              <th>Operation</th>
              <th>Sign</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>AND</td>
              <td>&amp;</td>
              <td>Performs AND on each pair of the corresponding bits of the operands. Returns a new integer where each bit is set to 1 if the corresponding bits of both operands are 1. Otherwise, is set to 0.</td>
            </tr>
            <tr>
              <td>OR</td>
              <td>|</td>
              <td>Performs OR on each pair of the corresponding bits of the operands. Returns a new integer where each bit is 1 if at least one of the corresponding bits of the operands is 1. Otherwise, is set to 0.</td>
            </tr>
            <tr>
              <td>XOR</td>
              <td>^</td>
              <td>Performs an exclusive OR operation on each pair of the corresponding bits of the operands. Returns a new integer where each bit is set to 1 if the corresponding bits of the operands are different. Otherwise, is set to 0.</td>
            </tr>
            <tr>
              <td>NOT</td>
              <td>~</td>
              <td>Is a unary operator. Performs a negation operation. It flips each bit of the operand. The result is a new integer where all the bits are inverted.</td>
            </tr>
            <tr>
              <td>Left Shift</td>
              <td>&lt;&lt;</td>
              <td>Shifts the bits of the left operand to the left by a specified number of positions. The vacant positions are filled with 0.</td>
            </tr>
            <tr>
              <td>Right Shift</td>
              <td>&gt;&gt;</td>
              <td>Shifts the bits of the left operand to the right by a specified number of positions. The vacant positions are filled based on the sign of the left operand. For non-negatives, the vacant positions are filled with 0.</td>
            </tr>
          </table>                  
    <hr />
    <div class="next-prev-btn">
        <button>Previous</button>
        <button>Next</button>
    </div>
    `
})
const basic4 = document.querySelector('.basic4')
basic4.addEventListener('click', () =>{
    context.innerHTML = `
    <h1>Strings</h1>
    <p>Strings represent a sequence of characters 
    (letters, numbers, symbols), like a sentence. Strings are surrounded by single or double quotes.</p>
<p>
    Strings can be combined with each other using the addition operator 
    (+) and multiplied with the multiplication operator (*).
</p>
<h2>String Formatting</h2>
<p>String formatting refers to the manipulation of strings.
    That way they can change forms and include variables or other expressions.</p>
<h3> The % Operator</h3>
<p>This type of string formatting uses the %s inside the string, for each variable passed to it. The variables of interest need to be specified after the string prefixed with a percentage sign (%) and in the correct order.
    Note: The %d can also be used numbers that are included in the string.
    </p>
<h3>The .fortmat() Method</h3>
<p>This type of string formatting uses curly braces ({}) as placeholders for the variables 
    inside the string. The variables of interest are passed as
    arguments to the .format() method that is applied to the string and in the correct order.</p>
<h3>The "f string" format</h3>
<p>This type of string is prefixed with an “f”. Inside of the strings the variables are surrounded
    by curly braces. F strings is usually the most optimal way of formatting strings.</p>
    <h4>The "=" specifier</h4>
    <p>The “=” specifier allows for the variable’s name and an equal sign to be assigned
         to the string along with the variable’s value. </p>
    <h4>String Decoration</h4>
<h2>Raw strings</h2>
<p>Raw strings are prefixed with an “r”. Raw strings ignore any escape 
    characters inside of the string.</p>
<h2>Multi-line strings</h2>
<p>Multiline strings cover more than one line, in the string’s expression, any new-line
    characters (\n) will be included. Multiline strings
    are surrounded by three single or double quotes instead of one.</p>
<h2>Unicode Strings</h2>
<p>Unicode strings are prefixed with a “u”. They include Unicode characters.</p>


<div class="next-prev-btn">
    <button>Previous</button>
    <button>Next</button>
</div>
    `
})


const basic5 = document.querySelector('.basic5')
basic5.addEventListener('click', () =>{
    context.innerHTML = `
    <h1>Basic Functions</h1>
    <p>
    Python has available build-in functions, code that perform a specific action. 
    The functions can accept arguments/parameters.
    Arguments are data that are used by the function during its 
    execution.</p>
    <h2>print()</h2>
    <p>print(): Displays content on the screen, such as the context of variables, values,
        or other expressions. The function can accept more than one argument separated by 
        commas. By default, after the output, print() adds a new-line character (\n).</p>
    <h3>sep</h3>
    <p>When the expressions are more than one, the “sep” keyword specifies how the expression should be
        separated during printing. By default, “sep” is set to a single space.</p>
        <h3>end</h3>
    <p>The “end” keyword is provided as an argument to the print() function to modify the default new-line
        character at the end of the output, by assigning a value to the “end”</p>
    <h2>input()</h2>
    <p>input():  allows the user of the program to insert data into it. The function receives the data in a string form. Input can accept optional arguments, that are printed
        as a message when the input runs, calling the for the user to insert data. </p>
    <h2>len()</h2>
    <p>len(): returns the total number of items in a collection 
        (string, list dicts, etc). The function accepts the collection as argument.</p>
    <h2>type()</h2>
    <p>type(): returns data type or class object of it’s argument.</p>
    <h2>range()</h2>
    <p>range(): generates a sequence of numbers withing a specified range. Returns an iterable 
        object, that represents the sequence of numbers. The object has a starting value, a final 
        value, and a stepping size. Each of them passed to function as arguments.
        The only required argument is the range of the sequence. The default starting point is 
        set to zero and the stepping size is 1. In result a sequence of the range 10, will start from 0 & end on 9.
    </p>

<p>Two additional integer arguments represent the starting an finishing values respectively. </p>
<p>range() can generate a sequence with negative values</p>
<p>Range() can generate a sequence with descending order.</p>
<h2>Convergence Functions</h2>
<table>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>str()</td>
      <td>Converts its argument to a string.</td>
    </tr>
    <tr>
      <td>int()</td>
      <td>Converts its argument to an integer.</td>
    </tr>
    <tr>
      <td>float()</td>
      <td>Converts its argument to a floating point number.</td>
    </tr>
    <tr>
      <td>list()</td>
      <td>Converts its argument to a list.</td>
    </tr>
    <tr>
      <td>dict()</td>
      <td>Converts its argument to a dictionary.</td>
    </tr>
  </table>
  <p>Note: if the argument of a convergence function is not compatible with the data type of change, an error will be raised. 
    For example the string ‘5’ can be used to the int() function to be turned in to 5, however, the string ‘I am the number five’ cannot be used to the int() function and  will  raise an error.
    </p>          

    <div class="next-prev-btn">
        <button>Previous</button>
        <button>Next</button>
    </div>
    `
})




const basic6 = document.querySelector('.basic6')
basic6.addEventListener('click', () =>{
    context.innerHTML = `
    <h1>Indexing</h1>
    <p>Indexing refers to the process of accessing individual elements or a range of elements 
        in a sequence. Allows for the retrieval of specific values based on their position within the 
        sequence. Indexing starts from 0. Negative indexing will result on the reverse search of the 
        sequence, with -1 being the last item in the array. 
        Note: indexes equal or greater than the sequence’s length, will raise an IndexError error.
        </p>

<div class="next-prev-btn">
<button>Previous</button>
<button>Next</button>
</div>
    `
})

const controlF0 = document.querySelector('.controlF0')
controlF0.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>Condition Statements</h1>
    <h2>"if"</h2>
    <p>The if statement sets a condition on when a block of code should run. 
        The code under the if statement influence(indentation) will run only if the
         condition evaluates to True. It is composed by the “if” keyword, the condition, 
         a column, and the block of code</p>
    <p>If no block of code is passed, the if statement will raise an error:</p>

<h2>"elif"</h2>
<p>The “elif” statement is used with the if statement. “elif” also sets a condition on a block of code, but the
     condition is checked only if all the above conditions (if & elif statements) are evaluated to False.
     Otherwise, it is ignored along with the block of code under its influence. Structure:</p>

<h2>"else"</h2>
<p>The “else” statement will execute a block of code only if all the above conditions
     (if & elif statements) are evaluated to False.</p>
     <div class="next-prev-btn">
        <button>Previous</button>
        <button>Next</button>
        </div>
    `
})

const controlF1 = document.querySelector('.controlF1')
controlF1.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>Ternary Operator</h1>
    <p>The ternary operator is a conditional statement that returns one of two expressions. 
        The expression depends on the evaluation of the condition as True or False. Structure:</p>
    `})

    const controlF2 = document.querySelector('.controlF2')
controlF2.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>while Loop</h1>
    <p>While loop statements will execute a block of code repeatedly for 
        as long as a condition is True. If the condition evaluates to False, 
        the loop stops. Structure:</p>
    `})

    const controlF3 = document.querySelector('.controlF3')
controlF3.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>The for Loop</h1>
    <p>for loops statemets will iterate over the context 
        (each item) of an iterable sequence, like lists strings, dictionaries etc.</p>
    <p>Notably: for loops are often used in combination to the range() function to perform
        a task a number of times. </p>
    `})



    const controlF4 = document.querySelector('.controlF4')
controlF4.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>The "break" Statement</h1>
    <p>
        When a loop (while, for) reaches a break statement, the 
        loop terminates the iteration and the script continues to execute the lines of code after the loop.
    </p>
    `})

    const controlF5 = document.querySelector('.controlF5')
controlF5.addEventListener('click', ()=>{
    context.innerHTML = `
    <h1>The "continue" Statement</h1>
    <p>
        When a loop (while, for) reaches a continue statement, the loop jumps at
         the beginning of the loop.
    </p>
    `})
    const functions0 = document.querySelector('.functions0')
functions0.addEventListener('click', ()=>{
    context.innerHTML = `    
    <h1>Functions</h1>
    <p>
        A function is a block of organized code that is used to perform one or more tasks. 
        Functions help on breaking the program in to smaller reusable components.
         They can accept arguments (or parameters) that can be used by the function to return a
          result. In the function definition, the arguments are passed as variables.
        Structure (defining the function):
    </p> <p>Calling the function:</p>
    <p>Writing the name of a defined function with parenthesis will execute (invoke/call) the function.
        If the functions requires arguments, 
        the arguments are written inside the parenthesis and in the correct order.</p>
    <p>Functions that require arguments, can have default values for them in the case that in the 
        function call, no arguments are passed to the function. 
        This is done by assigning the parameters to a value during the function definition.</p>
    <p>Functions can contain (nest) other functions within their code. This allows for the 
        function to include another function as part of its implementation. </p>
    <h2>*Args</h2>
    <p>
    Args: the name “args” is associated with the asterisk (*) used as a prefix for a function argument.
     With this addition, the function can accept an arbitrary number of arguments. This is helpful when
      the function is uncertain 
    as to if and how many arguments are going to passed during the function call. 
    </p>
    <h2>**kwargs</h2>
    <p>Kwargs: the name “kawrgs is associated with the double asterisks (**) used as a prefix for
         a function argument, during the function definition. With this addition the function can accept 
         an arbitrary 
         number of arguments and in the form of dictionaries. The word “kwargs” is sort for 
         “keyword arguments”.</p>
         `})

const functions1 = document.querySelector('.functions1')
functions1.addEventListener('click', ()=>{
context.innerHTML = `  
    <h1>The return Statement</h1>
    <p>The return statement terminates the execution of a
        function and returns a value back to the function call.</p>
`})

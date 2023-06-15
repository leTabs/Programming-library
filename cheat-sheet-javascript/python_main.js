
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
        chapters.innerHTML +=  `<p class="chapterNames chapter${item}">${basics[item]}</p>`
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
context.innerHTML = `
    <h1 class="title-con">Introduction</h1>
    <p class="description">Python is high-level programming language. It’s known for its simple syntax,
        wide variety of uses and as one of the most beginner friendly languages.</p>
    <hr />
    <p class="description">Python is used for:</p>
    <ul class="clasic-ul">
        <li>Web development</li>
        <li>Data Analysis and Visualization</li>
        <li>Machine Learning and AI</li>
        <li>Command-line applications</li>
        <li>Game development</li>
        <li>Networking Programming</li>
        <li>And more…</li>
    </ul>
    <hr />
    <p class="description">A program created with the python programming language consists of python code written
        in one or more files. When the files run (compile) they read the code from top to 
        bottom.
    </p>
    <div class="next-prev-btn">
        <button>Previous</button>
        <button>Next</button>
    </div>
`

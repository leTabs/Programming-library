
const chapters = document.querySelector('.chapters')
const context = document.querySelector('.context')
context.innerHTML = `
<h1>Introduction</h1>
<p>Python is high-level programming language. It’s known for its simple syntax, wide variety of uses and as one of the most beginner friendly languages.
Python is used for:
<p>
<ul>
    <li>Web Developmet</li>
    <li>Data Analysis and Visualization</li>
    <li>Machine Learning and AI</li>
    <li>Command-line applications</li>
    <li>Game development</li>
    <li>Networking Programming ,</li>
    <li>And more…</li>
</ul>
`
chapters.innerHTML += `<h3>Introduction</h3><hr>`
pythonChapters = [
    'Syntax',
    'Data Types',
    'Variables',
    'Operators',
    'Strings',
    'Basic Functions'
]
for(item in pythonChapters){
    chapters.innerHTML +=  `<p class="chapterNames chapter${item}">${pythonChapters[item]}</p>`
}
chapters.innerHTML += `<h3>Control flow</h3><hr>` 
pythonChapters = [
    'if Statment',
    'while loop',
    'for loop',
    'range()'
]
for(item in pythonChapters){
    chapters.innerHTML +=  `<p class="chapterNames">${pythonChapters[item]}</p>`
}

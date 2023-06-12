const relational = document.querySelector('.relational')
const python = document.querySelector('.python')
const html = document.querySelector('.html')

relational.addEventListener('click', ()=>{
    window.location = 'sql_main.html'
})
python.addEventListener('click', ()=>{
    window.location = 'python_main.html'
})
html.addEventListener('click', ()=>{window.location = 'html_main.html'})





// 
const relational_btn = document.querySelector('.relational_btn')
relational_btn.addEventListener('click', ()=>{
    alert('kiss')
})

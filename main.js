// ADD COMMENTS DUMMY
const html = document.querySelector('.html')
const css = document.querySelector('.css')
const js = document.querySelector('.js')
const python = document.querySelector('.python')
const relational = document.querySelector('.relational')


html.addEventListener('click', ()=>{window.location = 'html_main.html'})
css.addEventListener('click', ()=>{window.location = 'css_main.html'})
js.addEventListener('click', ()=>{window.location = 'js_main.html'})
python.addEventListener('click', ()=>{window.location = 'python_main.html'})
relational.addEventListener('click', ()=>{window.location = 'sql_main.html'})


// 
const relational_btn = document.querySelector('.relational_btn')
relational_btn.addEventListener('click', ()=>{
    alert('kiss')
})

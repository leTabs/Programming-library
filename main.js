const relational = document.querySelector('.relational')
const relational_btn = document.querySelector('.relational_btn')
const python = document.querySelector('.python')


relational.addEventListener('click', ()=>{
    window.location = 'sql_main.html'
})

python.addEventListener('click', ()=>{
    window.location = 'python_main.html'
})

relational_btn.addEventListener('click', ()=>{
    alert('kiss')
})

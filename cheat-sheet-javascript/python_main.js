body{
    max-width:100vw;
    max-height: 100vh;
    overflow: hidden;
}
body, body *{
    padding: 0;
    margin: 0;
}
nav{
    display: flex;
    justify-content:flex-start;
}
.concept-icon{
    margin-left: 3rem;
}
main{
    display: grid;
    grid-template-columns: 0.75fr 3.25fr;
    overflow: hidden;
    color: white;
}
section{
    overflow-y: auto;
    height: calc(100vh - 3.5rem);
    padding: 1rem;
    text-align: left;
}
h3{
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    margin:0.5rem;
    margin-top: 1.5rem;
    /* text-decoration: underline; */
}
.chapterNames{
    font-size: 1.rem;
    color: rgb(7, 161, 169);
    margin: 0.7rem 0 0.5rem 2rem;
    transition: 300ms;
}
.chapterNames:last-child{
    margin-bottom: 3rem;
}
.chapterNames:hover{
    color: rgb(255, 255, 255);
    cursor: pointer;
}
hr{
    width: 80%;
}


/* ACTUAL CONTEXT */
.context{
    border: solid white;
    padding:4rem
}
.title-con{

}
.description{

}
.clasic-ul{

}
/* END ACTUAL CONTEXT */

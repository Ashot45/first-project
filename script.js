let root = document.getElementById('root');
let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9b702a6b89b0278738dab62417267c49'
// let url = 'https://api.themoviedb.org/3/search/movie?api_key=7460d7b244aba833f74c699194ad403a&query=scream'
let searchInp = document.getElementById('searchInp');
let api_key = 'api_key=7460d7b244aba833f74c699194ad403a'
let img_url = 'https://image.tmdb.org/t/p/original'
let search_url = 'https://api.themoviedb.org/3/search/movie?api_key=7460d7b244aba833f74c699194ad403a&query='

fetch(url)
.then((r)=>r.json())
.then((res)=>res.results.forEach(e=>createCard(e)))  

function createCard(film) {
    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.innerHTML=`
    <img src='${img_url+film.poster_path}'/>
    <h2>${film.title}</h2> 
    <p>${film.popularity}</p> 
    `
    card.addEventListener('click',()=>{
        let flId = film.id
        window.location.href='HTML.html?id='+flId
    })
    root.appendChild(card)
}

searchInp.addEventListener('keydown',(event)=>{
    if (event.keyCode === 13) {
        
        if (searchInp.value!=='') {
            while (root.firstChild) {
                root.removeChild(root.lastChild)
            }
        }
        fetch(search_url+searchInp.value)
        .then((r)=>r.json())
        .then((res)=>res.results.forEach(e=>createCard(e)))  
    }

})
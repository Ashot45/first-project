let mov_container = document.querySelector('.mov-container')
let mov_card = document.querySelector('.mov-card')
let description = document.querySelector('.description')
let actors = document.querySelector('.actors')
let filmId  = location.toString().split('=')[1]
let img_url = 'https://image.tmdb.org/t/p/original'
let api_key = 'api_key=7460d7b244aba833f74c699194ad403a'
let url = `https://api.themoviedb.org/3/movie/${filmId}?`
let urlV = `https://api.themoviedb.org/3/movie/${filmId}/videos?`
let actor = `https://api.themoviedb.org/3/movie/${filmId}/credits?`
let vid = description.querySelector(".vid")
fetch(urlV+api_key)
.then((r)=>r.json())
.then((res)=>{
   let div =document.createElement('div')
   div.setAttribute('class', 'div')
   let video = res.results[0].key
   div.innerHTML=`<button id="zoom">ZOOM</button><iframe onclick="active()" class="video"src="https://www.youtube.com/embed/${video}" </iframe>
   `
   vid.appendChild(div)
})
fetch(url+api_key)
.then((r)=>r.json())
.then((res)=>{
   mov_container.style.backgroundImage = `url(${img_url+res.backdrop_path})`
   mov_card.style.backgroundImage = `url(${img_url+res.poster_path})`
   let div_info = document.createElement('div')
   div_info.setAttribute('class', 'div_info')
   div_info.innerHTML = `<h2>${res.title}</h2>
   <h3>${res.overview}</h3>
   `
   vid.appendChild(div_info)
})  
fetch(actor+api_key)
.then((r)=>r.json())
.then((res)=>{
   res.cast.forEach((actor)=>{
      let divAct = document.createElement('div')
      divAct.setAttribute('class','divAct')
      divAct.innerHTML = `
      <img src='${img_url + actor.profile_path}'/>
      <h3>${actor.original_name}</h3>
      `
      actors.appendChild(divAct)
   })
})


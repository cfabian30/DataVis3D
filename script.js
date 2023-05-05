
//https://newsapi.org/
//Tutorial https://www.youtube.com/watch?v=j-uZMKgqOuY&t=5547s
const API_KEY = "d2368a032e5a45aa8b1c2354e8b3a52a"
const url = "https://newsapi.org/v2/everything?q="

async function fetchData(query){
    const res= await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data = await res.json()
   
    return data
}
fetchData("Violence").then(data => renderMain(data.articles))

//create news pull api
function renderMain(arr){
    let mainHTML = ''
    for(let i= 0 ; i < arr.length ;i++){
        if(arr[i].urlToImage){
        mainHTML += ` 
        <div class="card">
        <a href =${arr[i].url}>
        <img src=${arr[i].urlToImage} lazy="loading" />
        <h4>${arr[i].title}</h4>
      <div class="publishbyDate">
        <p>${arr[i].source.name}</p>
        <span>·</span>
        <p>${arr[i].publishedAt}</p>
      </div>
      <div class="desc">
        ${arr[i].description}
      </div>
      </a>
      </div>
      `
    }
}
document.querySelector("main").innerHTML = mainHTML
}
fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
.then((resultado)=>resultado.json())
.then((r)=>{
    for(let i = 0; i < r.count; i++) {
    console.log(r.results[i]['name'])
}
})

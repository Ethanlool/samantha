const apiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado")
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement(`div`)
        divItem.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Nombre=${item.name}</h5>
    <p class="card-text"><b>Estado=${item.status}</b></p>
    <p class="card-text"><b>Especie=${item.species}</b></p>
    <p class="card-text"><b>Genero=${item.gender}</b></p>
    <p class="card-text"><b>Localidad=${item.location}</b></p>
    <p class="card-text"><b>Origen=${item.origin}</b></p>
    <p class="card-text"><b>ID=${item.id}</b></p>
    <p class="card-text"><b>Creado=${item.created}</b></p>
    
  </div>
</div>
`
    
    divRes.appendChild(divItem);
});
}
apiRick(1);
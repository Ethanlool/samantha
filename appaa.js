const apiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/episode?page="+pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado")
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement(`div`)
        divItem.innerHTML=`
    <div class="card" style="width: 18rem;">
    <p><b>ID=${item.id}</b></p>
    <div class="card-body">
    <h5 class="card-title">Nombre=${item.name}</h5>
    <p class="card-text"><b>Datos=${item.air_date}</b></p>
    <p class="card-text"><b>Episodio=${item.episode}</b></p>
    <p class="card-text"><b>Creado=${item.created}</b></p>
</div>

`
    
    divRes.appendChild(divItem);
});
}
apiRick(1);
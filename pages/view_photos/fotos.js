
async function photos(){
    
    const url = "https://g6basutx8i.execute-api.sa-east-1.amazonaws.com/v1/";
    let fotos;
    

    await fetch(url+"all")
    .then(res=>{return res.json()})
    .then(jsonBody=>fotos=jsonBody)

    fotos.forEach((item)=>{
        const link = "https://fotos-duda.s3.sa-east-1.amazonaws.com/"+item;

        let stringHTML = `
            <li><a target="_blank" item=${item} data-fancybox>
                <img src="${link}" loading="lazy">
            </a></li>
        `;

    document.getElementById("album").innerHTML += stringHTML;
    })
}
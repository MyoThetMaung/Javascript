let apiCall = async() =>{
    //fetching data from api
    let response = await fetch("https://fakestoreapi.com/products",{
        method: "GET",
        "Content-Type": "application/json"
    });
    let responseJson = await response.json();
    
    //inserting data into table
    let tbody = document.getElementById('tbody');
    let lists = "";
    for(i=0; i<responseJson.length; i++){
        lists += `
            <tr>
                <td>${responseJson[i].id}</td>
                <td>${responseJson[i].title}</td>
                <td>${responseJson[i].price}</td>
                <td><img src="${responseJson[i].image}" onmouseover="bigImg(this)" onmouseout="normalImg(this)" class="img"></td>
                <td><a href="${responseJson[i].image}" target="blank"><button class="btn btn-sm btn-success">Look Image</button></a></td>
            </tr>
        `;
    }
    tbody.innerHTML = lists;
}
   
    function bigImg(x) {
        x.style.height = "250px";
        x.style.width = "250px";
    }
    function normalImg(x) {
        x.style.height = "120px";
        x.style.width = "120px";
    }
     
apiCall();


document.getElementById("btnLoad").addEventListener ("click", function(){
  loadDataFromAPI();
});

function loadDataFromAPI(){
    fetch('https://67b849e3699a8a7baef37134.mockapi.io/Todo')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        let html = [];

          json.forEach((todo) => {
              html.push("<div><div>" + todo.title + "</div><img width='80px' src='" + todo.image + "?id=" + Math.random() +  "'/><div>----</div></div>");
          });
          
          document.getElementById("content").innerHTML = html.join("");
      });
}
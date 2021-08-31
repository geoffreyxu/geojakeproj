loadXMLFeed = () => {
    const url = "rss.xml";
     fetch(url)
    .then(response=>response.text())
    .then(data=> {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        displayTrafficList(xml);
    });
  }
  
document.addEventListener("DOMContentLoaded", loadXMLFeed);
  
function displayTrafficList(x) {
    console.log(x);
    let list = document.getElementById('item');
    let item = x.getElementsByTagName('item');
    let itemNum = x.getElementsByTagName('item').length;
    console.log(itemNum);


    for (let i=0; i<itemNum; i++) {
        let li = document.createElement('li');
        li.className = "listItem";

        li.innerHTML = 
        `
        <h3>${item[i].getElementsByTagName('title')[0].innerHTML}</h3>
        <p>${item[i].getElementsByTagName('description')[0].innerHTML}</p>
        `;

        list.appendChild(li);
    }
    
}
setTimeout(function(){
    startAnimation(item);
}, 7000);

startAnimation = () => {

}
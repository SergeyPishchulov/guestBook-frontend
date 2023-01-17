const backend_url = 'http://158.160.51.241/' //balancer
//const backend_url = 'http://158.160.49.134/'

fetch(backend_url, {
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
let a = json['messages']
//console.log(a)
//a.sort((mes)=>mes.timestamp)
a=a.map((mes)=>mes.message)

for (const mesRecord of a) {
//      console.log(mesRecord)
      document.getElementById("mes-list").innerHTML+="<li>"+mesRecord+"</li>";
}
document.getElementById("replica-version").innerHTML+=" = " + json['replica_version'];
document.getElementById("replica-name").innerHTML ="Replica name = " + json['replica_name'];
}).catch((error) => {
      console.error('Error!:', error);
    });



const button = document.getElementById('send-message-btn');
button.addEventListener('click', async (event) => {
//    event.preventDefault();
//    console.log('clicked', document.getElementById('mes-text').value)
  const rawResponse = await fetch(backend_url, {
    method: 'POST',
    headers: {
//      'Accept': 'application/json',
//      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'message':document.getElementById('mes-text').value})
  });
  document.getElementById('mes-text').value = ""
  window.location.reload();
  const content = await rawResponse.json();

//  console.log(content);
});

//  const allButton = document.getElementsByClassName('button-test');
//  console.log(allButton[0]);

//  const prime = document.getElementById('prime');
// // console.log('prime');


// for(button of allButton) {
//     button.addEventListener("click", function(e) {
//       if(e.target.id == "prime") {
//         document.getElementById('title').style.color = 'red';
//       }
//       else {
//         document.getElementById('title').style.color = 'green';
//       }
//     })
// }

// let count = 0;
// document.getElementById('add').addEventListener('click', function(e) {
//     count++
//     // document.getElementById('count').innerText = count;
//     control('count')
// })


// document.getElementById('minus').addEventListener('click', function(e) {
//     count--
//     // document.getElementById('count').innerText = count;
//     control('count')
// })


let count = 0;
function add(e) {
    count++;  
    control('count');
}

function minus(prans) {
    count--; 
    control('count'); 
}


function control(id) {
    document.getElementById(id).innerText = count;
}
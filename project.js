
let count = 0;
document.getElementById("add-btn").addEventListener("click", function() {
    count++;
    const inputValue = document.getElementById("input-value").value;

    if(inputValue == "") {
        alert("please enter a value")
    } else {
      const mainContainer = document.getElementById("content-container");
      const tableContainer = document.createElement("tr")

      tableContainer.innerHTML = `<th scope="row">${count}</th>
      <td>${inputValue}</td>

      <td><button class="btn btn-danger delete-btn">Delete</button>
      <button class="btn btn-success done-btn">Done</button></td>`;

      mainContainer.appendChild(tableContainer);

      document.getElementById("input-value").value = "";


      const deleteBotton = document.getElementsByClassName("delete-btn");

      const doneBotton = document.getElementsByClassName("done-btn");

     for(const button of deleteBotton) {
        button.addEventListener("click", function(e) {
            e.target.parentNode.parentNode.style.display = "none";
        //    console.log(e.target.parentNode);
        }) 
     }
     for(const button of doneBotton) {
         button.addEventListener("click", function(e) {
             e.target.parentNode.parentNode.style.textDecoration = "line-through"
         })
     }

    } 
})
var list = document.getElementsByClassName("ul")[0];
var section = document.getElementsByClassName("section")[0];
section.appendChild(list);
var input = document.getElementsByClassName("input")[0];
var button = document.getElementsByClassName("button")[0];
button.addEventListener("click", function(){
    var listItem = document.createElement("li");
    var remBtn = document.createElement("button");
    listItem.textContent = input.value;
    list.appendChild(listItem).appendChild(remBtn);
    input.value = "";
    listItem.classList.add("content");
    remBtn.classList.add("remBtn");
    remBtn.textContent = "Remove";
    remBtn.addEventListener("click",function(){
            listItem.remove();
    })
    });


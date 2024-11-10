const item = document.querySelector("#item")
const todobox = document.querySelector("#to-do-box")


item.addEventListener(
    "keyup",
    function (event) {
        if (this.value == "" && event.key == "Enter") {
            alert("Enter Something here...");
        }
        else if (event.key == "Enter") {
            addtodo(this.value);
            this.value = "";
        }

    }
)
const addtodo = (item) => {
    const listitem = document.createElement("li");
    listitem.innerHTML = `
    ${item}
    <i>&times;</i>
    `;


    listitem.addEventListener("click", function () {
        this.classList.toggle("done");
    })


    listitem.querySelector("i").addEventListener("click",
        function () {
            listitem.remove();
        })

    todobox.appendChild(listitem);
} 

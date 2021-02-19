function able(){
    let input = document.querySelectorAll("input[type='text']")
    let button = document.querySelector("input[type='submit']")
    button.disabled = ""
    for(let i = 0; i < input.length; i++){
        if(input[i].value == ""){
            button.disabled = "disabled"
            break
        }
    }
}

function subscribe(){
    let key = 'Nome'
    let value = document.getElementById("storageValue").value;
    try {
        localStorage.setItem(key, value);                
    } catch (e) {
        document.getElementById("debug").innerHTML = "<strong> Iscrizione non riuscita </strong>"
    }
}

function sub(){
    let name = document.getElementById("storageValue").value;
    let button = document.getElementById("unsub")
    button.display = ""
    for(let i = 0; i < name.length; i++){
        if(name == "Deborah"){
            button.display = "display"
            break
        }
    }
}

function styleByTagSection(){
    let sec = document.getElementsByTagName("section")
    for(let i = 0; i<sec.length; i++){
        sec[i].style.color = 'red'
    }
}

function styleByTagTable(){
    let t = document.getElementsByTagName("table")
    for(let i = 0; i<t.length; i++){
        t[i].style.backgroundColor = 'white'
    }
}

function styleByMyClass(){
    let classe = document.getElementsByClassName("myClass")
    for(let i = 0; i<classe.length; i++){
        classe[i].style.backgroundColor = 'black'
    }
}
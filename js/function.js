const node_for_click= document.getElementById("for_click")

function find_edit(){
    const item  = document.getElementsByTagName('div')[4]
    console.log(item.innerText)
    item.innerText = 'Davydova'
    document.getElementsByTagName('div')[5].innerText='Victoria'
    document.getElementsByTagName('div')[6].innerText='Vadimovna'
}

node_for_click.addEventListener("click",find_edit)

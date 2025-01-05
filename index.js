let btn=document.querySelector(".btn")
let select=document.querySelector("select")
let preview=document.querySelector(".preview")

btn.addEventListener("click",function(e){
    let type=select.value
    let label=document.querySelector("input").value

    if(label){
       createField(type,label)
    }else{
        alert("Select label")
    }
})

function createField(type,label){
    let divEl=document.createElement("div")
    divEl.style.display="flex"
    

    if(type!="checkbox" && type!="radio")
    divEl.style.flexDirection="column"

    divEl.style.gap="3px"

    if(type=="checkbox" || type=="radio")
        divEl.style.gap="10px"
    
    divEl.style.marginTop="15px"
    let input=document.createElement("input")
    input.setAttribute("type",type)
    input.setAttribute("placeholder",type)
    input.setAttribute("outline","none")

    let lab=document.createElement("div")
    lab.innerHTML=label
    lab.style.display="flex"
    lab.style.alignItems="center"

    divEl.appendChild(lab)
    divEl.appendChild(input)

    preview.appendChild(divEl)

}
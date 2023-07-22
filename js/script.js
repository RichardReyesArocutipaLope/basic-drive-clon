const docsDetalles = document.getElementById("docs-detalles")
const closeDetalles=document.getElementById("close-detalles")
const docsMain=document.getElementById("docs-main")
const iconDetalles=document.getElementById("icon-detalles")

const activarDetalles=()=>{
    docsDetalles.classList.toggle('desactivado')
    docsMain.classList.toggle('docs-main-complete')
}

closeDetalles.addEventListener('click',activarDetalles)
iconDetalles.addEventListener('click',activarDetalles)

//menu desplegable header
const dhDesplegable=document.getElementById("dh-desplegable")
const docsTitle=document.getElementById("docs-title")
docsTitle.addEventListener('click',()=>{
    dhDesplegable.classList.toggle('dh-desplegable__active')
})

document.addEventListener('click',(e)=>{
    const dhDesplegable=document.getElementById("dh-desplegable")
    const docsTitle=document.getElementById("docs-title")
    const body=document.getElementById("body")
    click=e.target
    console.log(click.parentNode)
    let alerta=NaN
    let clickdos=click
    let alerta2=NaN
    while (alerta!=body) {
        console.log(click.parentNode)
        if(click!=dhDesplegable){
            console.log(click.parentNode)
            click=click.parentNode
            alerta=click
        }else{
            alerta=body
        }
    }

    while (alerta2!=body) {
        console.log(clickdos.parentNode)
        if(clickdos!=docsTitle){
            console.log(clickdos.parentNode)
            clickdos=clickdos.parentNode
            alerta2=clickdos
        }else{
            alerta2=body
        }
    }
    if(click!=dhDesplegable && dhDesplegable.classList[1] && clickdos!=docsTitle){
        dhDesplegable.classList.remove('dh-desplegable__active')
    }
})
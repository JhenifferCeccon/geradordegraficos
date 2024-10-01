Novidade! Atalhos do teclado … Os atalhos de teclado do Drive foram atualizados para oferecer navegação por letras iniciais
const getCSS = (variavel) =>{
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}
const tickConfig ={
    family: getCSS('--font'),
    size:16,
    color: getCSS('--primary-color')
}
export{getCSS,tickConfig}

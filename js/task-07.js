const fontSizeA = document.querySelector('#font-size-control')
const textA = document.querySelector('#text')

fontSizeA.addEventListener('input', () => {
    textA.style.fontSize = `${fontSizeA.value}px`
})
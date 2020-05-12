let element = document.getElementsByTagName('p')[0];
element.addEventListener('click', (e) => {
    let cont = e.path[0].innerText
    navigator.clipboard.writeText(cont)
    e.path[0].innerText = 'Copied to clipboard!'

});
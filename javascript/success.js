const result = JSON.parse(localStorage.getItem('change'))

console.log(result)

const idEl = document.querySelector('#ref')
idEl.style.fontWeight = 'bold'
idEl.textContent = result.uuid
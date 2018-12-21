const uuid = location.hash.substring(1)

console.log(uuid)

url = `http://localhost:3000/costcentre/${uuid}`

const getsingleRecord = async () => {
    const response = await fetch(url)

    if (response.status === 200) {
        const data = await response.json()
        console.log('returing data', data)

        const priorityEl = document.querySelector('#priority')
        const changeTypeEl = document.querySelector('#changeType')
        document.querySelector('#name').value = data[0].userName,
        document.querySelector('#email').value = data[0].email,
        document.querySelector('#telNumber').value = data[0].telNumber,
        document.querySelector('#directorate').value = data[0].directorate,
        document.querySelector('#businessRequirement').value = data[0].businessRequirement,
        priorityEl.value = data[0].priority,
        document.querySelector('#priorityJustification').value = data[0].priorityJustification,
        changeTypeEl.value = data[0].changeType,
        document.querySelector('#level').value = data[0].level,
        document.querySelector('#code').value = data[0].code,
        document.querySelector('#description').value = data[0].description,
        document.querySelector('#parentLevel').value = data[0].parentLevel,
        document.querySelector('#parentCode').value = data[0].parentCode,
        document.querySelector('#parentDescription').value = data[0].parentDescription, 
        document.querySelector('#dffType').value = data[0].dffType,
        document.querySelector('#enable').value = data[0].enable,
        document.querySelector('#costCentreEntity').value = data[0].costCentreEntity
        return data

    } else {
        throw new Error('Error')
    }
}

getsingleRecord()
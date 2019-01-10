document.querySelector('#submit').addEventListener('click', (e) => {
      
    const priorityEl = document.querySelector('#priority')
    const changeTypeEl = document.querySelector('#changeType')

    const object = {
        userName: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        telNumber: document.querySelector('#telNumber').value,
        directorate: document.querySelector('#directorate').value,
        businessRequirement: document.querySelector('#businessRequirement').value,
        priority: priorityEl.options[priorityEl.selectedIndex].value,
        priorityJustification: document.querySelector('#priorityJustification').value,
        changeType: changeTypeEl.options[changeTypeEl.selectedIndex].value,
        level: document.querySelector('#level').value,
        code: document.querySelector('#code').value,
        description: document.querySelector('#description').value,
        parentLevel: document.querySelector('#parentLevel').value,
        parentCode: document.querySelector('#parentCode').value,
        parentDescription: document.querySelector('#parentDescription').value,
        mentorMap: 'Mentor Map',
        dffType: document.querySelector('#dffType').value,
        enable: document.querySelector('#enable').value,
        costCentreEntity: document.querySelector('#costCentreEntity').value
    }
    
    const url = 'http://localhost:3000/costcentre'
    const params = {
        headers: {"Content-Type" : "application/json"
        },
        body: JSON.stringify(object),
        method: 'POST'
    }

    
    fetch(url,params)
    .then(data=> data.json()).then(res=> {
        
        console.log(res)

        localStorage.setItem('change', JSON.stringify(res))

        location.assign('./success.html')
        
    
    })

    
})

document.querySelector('#code').addEventListener('change', e => {
 if (e.target.value.length < 6) {
     console.log('codes must be 6 characters')
 }
})
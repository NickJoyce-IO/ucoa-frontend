console.log('This is the approvals page')


url = 'http://localhost:3000/costcentre'

const getChanges = async () => {
    const response = await fetch(url)

    if (response.status === 200) {
        const data = await response.json()
        console.log('returing data', data)
        return data
    } else {
        throw new Error('Error')
    }
}

const buildTable = (data) => {

    // build table
    const tblDiv = document.querySelector('#tableDiv')
    const tbl = document.createElement('table')
    tbl.classList.add('govuk-table')

    // create the header row elements and add the classes
    const trHeader = document.createElement('tr')
    trHeader.classList.add('govuk-table_row')
    const thId = document.createElement('th')
    thId.classList.add('govuk-table__header')
    thId.textContent = 'id'
    const thName = document.createElement('th')
    thName.classList.add('govuk-table__header')
    thName.textContent = 'Requestor'
    const thChangeType = document.createElement('th')
    thChangeType.classList.add('govuk-table__header')
    thChangeType.textContent = 'Change Type'
    const thCode = document.createElement('th')
    thCode.classList.add('govuk-table__header')
    thCode.textContent = 'Code'
    const thDescription = document.createElement('th')
    thDescription.classList.add('govuk-table__header')
    thDescription.textContent = 'Description'
    const thUpdated = document.createElement('th')
    thUpdated.classList.add('govuk-table__header')
    thUpdated.textContent = 'Updated'

    // add the header row to the table
    tbl.appendChild(trHeader)



    data.forEach(record => {

        // create table row for data to be populated into
        const tr = document.createElement('tr')
        tr.classList.add('govuk-table_row')

        // create the ID element and add the data
        const tdId = document.createElement('td')
        tdId.classList.add('govuk-table__cell')
        const tdLink = document.createElement('a')
        tdLink.setAttribute('href', `./edit.html#${record.uuid}`)
        tdLink.textContent = record.id
        tdId.appendChild(tdLink)
        tr.appendChild(tdId)

        // create the User Name element and add the data
        const tdUserName = document.createElement('td')
        tdUserName.classList.add('govuk-table__cell')
        tdUserName.textContent = record.userName
        tr.appendChild(tdUserName)

        // create the Change Type element and add the data
        const tdChangeType = document.createElement('td')
        tdChangeType.classList.add('govuk-table__cell')
        tdChangeType.textContent = record.changeType
        tr.appendChild(tdChangeType)

        // create the code element and add the data
        const tdCode = document.createElement('td')
        tdCode.classList.add('govuk-table__cell')
        tdCode.textContent = record.code
        tr.appendChild(tdCode)

        // create the description element and add the data
        const tdDescription = document.createElement('td')
        tdDescription.classList.add('govuk-table__cell')
        tdDescription.textContent = record.description
        tr.appendChild(tdDescription)

        // create the updated element and add the data
        const tdUpdated = document.createElement('td')
        tdUpdated.classList.add('govuk-table__cell')
        tdUpdated.textContent = new Date(record.updatedAt).toDateString()
        tr.appendChild(tdUpdated)


        // append the row to the table
        tbl.appendChild(tr)
    })

    // add the headers to the header row
    trHeader.appendChild(thCode)
    trHeader.appendChild(thDescription)
    trHeader.appendChild(thId)
    trHeader.appendChild(thName)
    trHeader.appendChild(thChangeType)
    trHeader.appendChild(thCode)
    trHeader.appendChild(thDescription)
    trHeader.appendChild(thUpdated)



    tblDiv.appendChild(tbl)

}


getChanges().then(data => buildTable(data))
    .catch(e => console.log(e))
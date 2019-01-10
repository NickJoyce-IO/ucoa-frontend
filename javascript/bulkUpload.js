document.querySelector('#upload').addEventListener('click', (e) => {
    console.log('pressed')

    const file = document.querySelector('#file-upload-1').files[0]
    //console.log(file)

    console.log('starting parse------------')
    let data = ''
    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            
            const data = results

            // set up the table and add it to the div
            const tbl = document.createElement('table')
            tbl.classList.add('govuk-table')
            dataDiv = document.querySelector('#data')
            
            // create the table row for the header
            const trHeader = document.createElement('tr')
            trHeader.classList.add('govuk-table_row')
            
            // add table header for change type
            const thChangeType = document.createElement('th')
            thChangeType.classList.add('govuk-table__header')
            thChangeType.textContent = 'Change Type'
            
            // add table header for level
            const thLevel = document.createElement('th')
            thLevel.classList.add('govuk-table__header')
            thLevel.textContent = 'Level'

            // add table header for code
            const thCode = document.createElement('th')
            thCode.classList.add('govuk-table__header')
            thCode.textContent = 'Code'

            // add table header for description
            const thDescription = document.createElement('th')
            thDescription.classList.add('govuk-table__header')
            thDescription.textContent = 'Description'

            // add table header for parent level
            const thParentLevel = document.createElement('th')
            thParentLevel.classList.add('govuk-table__header')
            thParentLevel.textContent = 'Parent Level'

            // add table header for parent code
            const thParentCode = document.createElement('th')
            thParentCode.classList.add('govuk-table__header')
            thParentCode.textContent = 'Parent Code'

            // add table header for parent description
            const thParentDescription = document.createElement('th')
            thParentDescription.classList.add('govuk-table__header')
            thParentDescription.textContent = 'Parent Description'

             // add table header for dfftype
             const thDffType = document.createElement('th')
             thDffType.classList.add('govuk-table__header')
             thDffType.textContent = 'DffType'

             // add table header for enable
             const thEnable = document.createElement('th')
             thEnable.classList.add('govuk-table__header')
             thEnable.textContent = 'Enable'

             // add table header for Cost Centre Entity
             const thCostCentreEntity = document.createElement('th')
             thCostCentreEntity.classList.add('govuk-table__header')
             thCostCentreEntity.textContent = 'Cost Centre Entity'

            
            tbl.appendChild(trHeader)
            trHeader.appendChild(thChangeType)
            trHeader.appendChild(thLevel)
            trHeader.appendChild(thCode)
            trHeader.appendChild(thDescription)
            trHeader.appendChild(thParentLevel)
            trHeader.appendChild(thParentCode)
            trHeader.appendChild(thParentDescription)
            trHeader.appendChild(thDffType)
            trHeader.appendChild(thEnable)
            trHeader.appendChild(thCostCentreEntity)

        
        results.data.forEach((row) => {
            console.log(row)

            const tr = document.createElement('tr')
            tr.classList.add('govuk-table_row')

            const tdChangeType= document.createElement('td')
            tdChangeType.classList.add('govuk-table__cell')
            tdChangeType.textContent = row.changeType
            tr.appendChild(tdChangeType)

            const tdLevel= document.createElement('td')
            tdLevel.classList.add('govuk-table__cell')
            tdLevel.textContent = row.level
            tr.appendChild(tdLevel)

            const tdCode= document.createElement('td')
            tdCode.classList.add('govuk-table__cell')
            tdCode.textContent = row.code
            tr.appendChild(tdCode)

            const tdDescription = document.createElement('td')
            tdDescription.classList.add('govuk-table__cell')
            tdDescription.textContent = row.description
            tr.appendChild(tdDescription)

            const tdParentLevel= document.createElement('td')
            tdParentLevel.classList.add('govuk-table__cell')
            tdParentLevel.textContent = row.parentLevel
            tr.appendChild(tdParentLevel)

            const tdParentCode= document.createElement('td')
            tdParentCode.classList.add('govuk-table__cell')
            tdParentCode.textContent = row.parentCode
            tr.appendChild(tdParentCode)

            const tdParentDescription = document.createElement('td')
            tdParentDescription.classList.add('govuk-table__cell')
            tdParentDescription.textContent = row.parentDescription
            tr.appendChild(tdParentDescription)

            const tdDffType = document.createElement('td')
            tdDffType.classList.add('govuk-table__cell')
            tdDffType.textContent = row.dffType
            tr.appendChild(tdDffType)

            const tdEnable = document.createElement('td')
            tdEnable.classList.add('govuk-table__cell')
            tdEnable.textContent = row.enable
            tr.appendChild(tdEnable)

            const tdCostCentreEntity = document.createElement('td')
            tdCostCentreEntity.classList.add('govuk-table__cell')
            tdCostCentreEntity.textContent = row.costCentreEntity
            tr.appendChild(tdCostCentreEntity)
            
            

            tbl.appendChild(tr)
            
         })
         dataDiv.appendChild(tbl)
         console.log(data)
         
        }
      })

    })

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
         results.data.forEach((row) => {
            console.log(row)
         })
        }
      })

    })

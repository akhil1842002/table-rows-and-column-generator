function TableRowColumnGenerator(numberOfRows=1,numberOfColumn=5){
    const tableDiv = document.querySelector('.table')
    let tableGenerate = document.createElement('table')
    tableGenerate.setAttribute('id','mainTable')
    tableDiv.appendChild(tableGenerate)

    for (i=1; i <= numberOfRows; i++){
        let tableRow = document.createElement('tr')

        for (j=1; j <= numberOfColumn; j++){
            let tableHeading = document.createElement('td')
            tableRow.appendChild(tableHeading)
            tableGenerate.appendChild(tableRow)
        }
    }

    const above = document.querySelector('#above')
    const below = document.querySelector('#below')

    above.addEventListener('click',e => {
        let firstRow = tableGenerate.insertRow(0)
        firstRow.style.backgroundColor = '#96eb42'
        for (aboveRow=1; aboveRow <= numberOfColumn; aboveRow++){
            firstRow.insertCell()
        }  
    })

    below.addEventListener('click',e => {
        let lastRow = tableGenerate.insertRow(-1)
        lastRow.style.backgroundColor = '#cee635'
        for (belowRow=1; belowRow <= numberOfColumn; belowRow++){
            lastRow.insertCell()
        }  
    })
}
TableRowColumnGenerator() // no of rows, no of column






















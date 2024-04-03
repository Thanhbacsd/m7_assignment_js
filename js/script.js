// SET AN ARRAY OF INPUTS' ID IN THE FORM
let items = ['department', 'email', 'extension', 'name', 'id']
// SET AN ARRAY OF COLUM'S NAMES IN THE TABLE
let colName = ['colId', 'colName', 'colExt', 'colEmail', 'colDepar']
// GET ADD EMPLOYEE FORM  FROM THE DOM
const $id = (id) => document.getElementById(id)
// GET ADD ELEMENTS AND EMPLOYEE TABLE FROM THE DOM
const $qr = (elem) => document.querySelector(elem)
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER AND SET ITS VALUE = 0
let counter = 0
// ADD A BORDER CLASS NAME FOR THE COUNTER OUTPUT
$id('empCount').className = "border border-primary border-3"
// ADD PADDING AND MARGIN FOR THE COUNTER OUTPUT
$id('empCount').style = 'padding: 5px; margin-left: 20px'
// DEFINE A FUNCTION TO UPDATE THE COUNTER OUTPUT
let counterUpdate = () => $id('empCount').textContent = counter
// CALL THE FUNCTION TO UPDATE THE VALUE OF COUNTER OUTPUT
counterUpdate()

// ADD EMPLOYEE
$qr('form').addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = $id('employees').insertRow(1)
    // THE FOR /IN LOOP GOES TO EVERY COLUM IN A ROW
    for(let i in colName){
        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        colName[i] = newRow.insertCell(colName[i])
        // GET THE VALUES FROM THE TEXT BOXES AND APPEND 
        //THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        colName[i].innerHTML = $id(items[i]).value
    }
     // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    // ADD BOOTSTRAP CLASSES NAME FOR THE DELETE BUTTON
    deleteBtn.className = 'btn btn-outline-danger btn-sm float-end' 
    // ADD BACKGROUND-COLOR FOR THE DELETE BUTTON
    deleteBtn.style = 'background: yellow;'
    // CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
    let textDelete = document.createTextNode('X')
    // APPEND TEXT NODE TO DELETE BUTTON
    deleteBtn.appendChild(textDelete)
    // APPEND DELETE BUTTON TO NEW ROW
    newRow.appendChild(deleteBtn)
    // RESET THE FORM
    $qr('form').reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    $id('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    counter++ 
    // UPDATE THE COUNTER
    counterUpdate()

})

// DELETE EMPLOYEE
$qr('table').addEventListener('click', (e) => {
    if (confirm('Are you sure you want to delete this employee?')) {
        // REMOVE THE SELECTED ROW
        const btn = e.target
        btn.closest('tr').remove()
        // REDUCE THE COUNTER
        counter-- 
        // UPDATE THE COUNTER
        counterUpdate()
    }
})

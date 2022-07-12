/* DOM Objects */
const form = document.querySelector(`.container__form`);
const inputs = document.querySelectorAll(`.fieldset__input`);
const tableBody = document.querySelector(`.table__body`);

/* Functions */

/* Create a new row element and add the necessary css class to it */
function createRow() {
  const newRow = document.createElement(`tr`);
  newRow.classList.add(`table__row`);
  return newRow;
}

/* Create a button, give it some removal logic then nest it in a cell / in a row */
function createButton(row) {
  const cell = document.createElement(`td`);
  cell.classList.add(`table__cell`);

  const button = document.createElement(`button`);
  button.textContent = `X`;
  button.type = `button`;
  button.classList.add(`table__button`);
  button.addEventListener("click", handlerRow);

  cell.append(button);
  row.append(cell);
  return row;
}

/* Create a cell for each input's data, add it content and css class then nest all cells in the row. Also reset each input's value.  */
function createCells(row) {
  let content = undefined;
  inputs.forEach((element) => {
    if (element.id === `input-amount`) {
      content = `$${element.value}`;
    } else {
      content = element.value;
    }
    element.value = ``;
    const newCell = document.createElement(`td`);
    newCell.textContent = content;
    newCell.classList.add(`table__cell`);
    row.append(newCell);
  });
  return row;
}

/* Check if the `No expenses added yet!` cell exist, if it is then remove it*/
function checkPlaceholderCell() {
  /* forEach() doesn't work on HTMLCollection but Array.from() provide a copy of it which also is an Array */
  Array.from(tableBody.children).forEach((element) => {
    if (element.textContent.includes(`No expenses added yet!`)) {
      element.remove();
    }
  });
}

/* Every time a row is removed, check if table still have one. If not, create one with the `placeholder` content's cell nested in it */
function checkRows() {
  if (!tableBody.childElementCount) {
    const row = document.createElement(`tr`);
    row.classList.add(`table__row`);
    const cell = document.createElement(`td`);
    cell.textContent = `No expenses added yet!`;
    cell.classList.add(`table__cell`);
    cell.setAttribute(`colspan`, 4);
    row.append(cell);
    tableBody.append(row);
  }
}

function addData() {
  const newRow = createRow();
  const partialRow = createCells(newRow);
  const completeRow = createButton(partialRow);
  tableBody.append(completeRow);
}

/* Handler Object whose method is called when form is submitted. All the app's logic go through it */
const handlerExpenses = {
  handleEvent: function (evt) {
    evt.preventDefault();
    checkPlaceholderCell();
    addData();
  },
};

/* Handler Object only tasked with managing the 'placeholder' cell */
const handlerRow = {
  handleEvent: function (evt) {
    const row = evt.target.parentElement.parentElement;
    row.remove();
    checkRows();
  },
};

form.addEventListener(`submit`, handlerExpenses);

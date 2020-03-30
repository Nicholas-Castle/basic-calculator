const elements = {
  inputView: [],
  inputArr: [],
  inputSelector: document.querySelector('input'),
  btn0: document.querySelector('.btn-0'),
  btnClear: document.querySelector('.btn-clear'),
  btnDelete: document.querySelector('.btn-delete'),
  btnEquals: document.querySelector('.btn-equals')
};

// turn inpurt array into a string
const stringify = () => {
  elements.inputSelector.value = elements.inputView.join('');
};

// add elements to the input view
addElements = () => {
  elements.inputSelector.value = elements.inputView;
};

// Num Keys
let btnArr = [
  document.querySelector('.btn-1'),
  document.querySelector('.btn-2'),
  document.querySelector('.btn-3'),
  document.querySelector('.btn-4'),
  document.querySelector('.btn-5'),
  document.querySelector('.btn-6'),
  document.querySelector('.btn-7'),
  document.querySelector('.btn-8'),
  document.querySelector('.btn-9')
];

btnArr.forEach(element => {
  element.addEventListener('click', () => {
    elements.inputView.push(parseFloat(element.value));
    addElements();
    stringify();
  });
});

// handle the zero button edge cases
elements.btn0.addEventListener('click', () => {
 if (!(elements.inputView[0] === 0) || (elements.inputView[1] > 0 || elements.inputView[1] === '.')){
    elements.inputView.push(parseFloat(elements.btn0.value));
    stringify();
  };
});

// clear view
clearInput = () => {
  elements.inputView = [];
  addElements()
}

elements.btnClear.addEventListener('click', clearInput);

// Delete an Item from the input
deleteItem = () => {
  elements.inputView.pop();
  addElements();
  stringify();
}

elements.btnDelete.addEventListener('click', deleteItem);

// Calculate input
calcInput = () => {
  const totalArr = elements.inputView.join('');
  const total = eval(totalArr);
  elements.inputView = [];
  elements.inputArr = [];
  elements.inputArr.push(parseFloat(total));
  elements.inputSelector.value = elements.inputArr;
};

elements.btnEquals.addEventListener('click', calcInput);

// operators
let operatorsArr = [
  document.querySelector('.btn-times'),
  document.querySelector('.btn-divide'),
  document.querySelector('.btn-minus'),
  document.querySelector('.btn-plus'),
  document.querySelector('.btn-dec')
];

addOperators = (element) => {
  elements.inputView.push(element.value);
  addElements();
  stringify();
}

operatorsArr.forEach(element => {
  element.addEventListener('click', () => {
    addOperators(element);
  });
});

// TODO addKey press inputs


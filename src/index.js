import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('tarantadong error');

console.log('1st intentional error');

cosnole.log('2nd intentional error');

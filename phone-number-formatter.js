'use strict';

module.exports = function(number) {
  number = number.replace(/\D/g,'');

  if (number.length === 0) {
    return '(   )    -    ';
  } else if (number.length < 3) {
    return '(' + number;
  } else if (number.length < 6) {
    return '(' + number.slice(0, 3) + ') ' + number.slice(3);
  } else {
    return '(' + number.slice(0, 3) + ') ' + number.slice(3, 6) + '-' + number.slice(6, 10);
  }
}

/* eslint-disable */ 
import operate from './operator';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {
        total: obj.total,
        next: obj.next,
        operation: obj.operation,
      };
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return {
          total: obj.total, 
          next: obj.next + buttonName,
          operation: obj.operation, 
        };
      }
      return { 
        next: buttonName,
        total: obj.total,
        operation: obj.operation, };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      return {
        operation: obj.operation,
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      operation: obj.operation,
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {
        total: obj.total,
        next: obj.next,
        operation: obj.operation,
        };
      }
      return { 
        next: obj.next + '.', 
        total: obj.total,
        operation: obj.operation,
      };
    }
    if (obj.operation) {
      return { 
        next: '0.',
        total: obj.total,
        operation: obj.operation, };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {
          total: obj.total,
          next: obj.next,
          operation: obj.operation,
        };
      }
      return { 
        total: obj.total + '.',
        next: obj.next,
        operation: obj.operation,};
    }
    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {
        total: obj.total,
        next: obj.next,
        operation: obj.operation,
      };
    }
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString(),
        total: obj.total,
        operation: obj.operation,};
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
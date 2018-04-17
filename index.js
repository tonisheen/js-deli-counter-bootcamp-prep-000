function takeANumber(deliLine, customer_name) {
  deliLine.push(customer_name);
  return deliLine.index(customer_name) + 1;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!'; 
  } else {
    return deliline.shift();
  }
}
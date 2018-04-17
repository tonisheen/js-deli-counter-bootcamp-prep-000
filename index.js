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

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  }
  let resp = "The line is currently: ";
  for (let counter = 0; counter < deliLine.length; counter++){
    resp += `${counter + 1}. ${deliLine[counter]},`
  }
  return resp.pop()
}
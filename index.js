var number = 1;
function takeANumber(line) {
 line.push(number++);
}

function nowServing(line) {
  if (line.length === 0)
    return "There is nobody waiting to be served!" ;
  else
    return (`Currently serving ${line.shift()}.`);
}
function currentLine(line) {
  if (line.length === 0)
    return "The line is currently empty.";
  else {
    var phrase = []
    for (let i = 0; i < line.length; i++) {
      let string = `${i+1}. ${line[i]}`
      phrase.push(string)
    }
    return `The line is currently: ${phrase}`
  }
}
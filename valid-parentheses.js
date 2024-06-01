var isValid = function (s) {
  stack = [];
  const parantes = "() {} []";
  let i = 0;

  while (s.length > i) {
    stack.push(s[i]);
    i++;
    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];

    let potParantes = open + close;

    if (parantes.includes(potParantes)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
};



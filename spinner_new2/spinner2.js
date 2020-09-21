process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spinner = function(sentence,printnl){
  let t = 0; 
  for (const char of sentence) {
    t = t + 200;
    setTimeout(() => {
      process.stdout.write("\r"+char);
    }, t)
  }
  printnl(t);
}

const printNewLine = function(t) {
  setTimeout(() => {
    process.stdout.write("\n");
  }, t)
}
spinner("|/-\\|/-\\|",printNewLine);
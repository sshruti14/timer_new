const sentence = "hello there from lighthouse labs";



// setTimeout(()=>{
//   for (const char of sentence) {

//     process.stdout.write(char);
//   }
  
// },500)

const typeWriter = function(sentence, printnl){
 
  let t =0;

  for (const char of sentence) {
    t = t+50 ;
    // process.stdout.write(char);
    setTimeout(()=>{
      process.stdout.write(char);
    },t)
  }

  printnl(t);
}

const printNewLine = function(t){
  setTimeout(()=>{
    process.stdout.write('\n');
  },t)
}


typeWriter(sentence,printNewLine);
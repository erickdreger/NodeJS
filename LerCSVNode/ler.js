
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



//rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
//  console.log(`Thank you for your valuable feedback: ${answer}`);

//  rl.close();
//});

rl.on('line', (line) => {
  console.log(`Received: ${line}`);

  switch (line.trim()) {
     case ';':
       console.log('Encontrei Ponto e virgula');
       break;
     default:
       console.log(` Olha o que veio '${line.trim()}'`);
       break;
   }



});

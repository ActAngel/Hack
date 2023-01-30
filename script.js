// array of hacks
const hacks = [
    { name: "hack1", description: "Description of hack 1", execute: function() { /* code to execute hack 1 */ } },
    { name: "hack2", description: "Description of hack 2", execute: function() { /* code to execute hack 2 */ } },
    // add more hacks here
  ];
  
  // function to display command prompt
  function displayPrompt() {
    let input = prompt("Enter a command:");
    handleInput(input);
    }

  
  // function to handle player's input
  function handleInput(input) {
    // check if input matches any of the hack names
    for (let i = 0; i < hacks.length; i++) {
      if (input === hacks[i].name) {
        // execute corresponding hack function
        let result = hacks[i].execute();
        // display result in output div
        document.getElementById("output").innerHTML += result + "<br>";
        return;
      }
    }
    // if no match is found, display error message
    document.getElementById("output").innerHTML += "Invalid command.<br>";
  }
  
  document.getElementById("start-button").addEventListener("click", function() {
    startGame();
  });
  
  document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("menu").style.display = "block";
  });

  const { exec } = require("child_process");

const commands = [
  { name: "ls", description: "List directory contents", execute: function() {
    exec("ls", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  } },
  // add more commands here
];




  
  
  
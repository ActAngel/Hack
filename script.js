// array of hacks
const hacks = [
    { name: "hack1", description: "Description of hack 1", execute: function() { /* code to execute hack 1 */ } },
    { name: "hack2", description: "Description of hack 2", execute: function() { /* code to execute hack 2 */ } },
    // add more hacks here
  ];
  
  // function to display command prompt
  function displayPrompt() {
    let hackInput = document.getElementById("input").value
    if(hackInput == "Hack"){
      let input = prompt("Enter a command:");
      handleInput(input);
    }
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
  
  
  
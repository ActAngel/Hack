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

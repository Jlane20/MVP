const { exec } = require("child_process");





//run this when received code and created file.
//after receiving code from the front end
    //create a <challengeName>.test.js file
    //run the command below
    //deal with results and send back to frontend
    //if valid give reward
    //if not valid give explanation why
//need to find a way to test only one file
exec("npm test", (err, stdout, stderr) => {
  if (stderr) {
    console.log(stderr.split(' ')[0]);
  }
});


const fs = require('fs');

const breedDetailsFromFile = function (breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      console.log("In readFile's Callback: it has the data.");
      callback(data); // Call the callback function with the data
    }
  });
};

// Pass a callback function to breedDetailsFromFile
breedDetailsFromFile('Bombay', (data) => {
  console.log('Return Value: ', data); // => This will now print out the breed details
});

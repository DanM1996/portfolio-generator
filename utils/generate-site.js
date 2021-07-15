const fs = require('fs');

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
           reject(err)
           // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
           return; 
        }

        // if everything went well, resolve the Promise and send the successfull data to the `.then()` method
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
});
};

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./dist/index.html', err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: "Successfully copied a file!"
            });
        });
    });
};
// This line of code...

// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };

// Does the same as this...
module.exports = { writeFile, copyFile };
// Shorthand property names (the code above) gives the writeFile and copyFile propety to both property name and its value, it just knows how to do it :)
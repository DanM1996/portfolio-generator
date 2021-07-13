// FOR EXAMPLE ONLY

// const printProfileData = profileDataArr => {
//     // This...
//     for(let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this...
//     // NOTE: forEach is used for arrays only
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);


const generatePage = (names, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${names}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

module.exports = generatePage;
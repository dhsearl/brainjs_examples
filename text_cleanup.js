// let lineNumber = 0;

// using (var newFile = File.AppendText("./new.csv"))
// {
//     foreach (var line in File.ReadLines("./siid_v7.csv"))
//     {
//         lineNumber++;

//         let updatedLine = line.Replace(',NA',"");

//         newFile.WriteLine(updatedLine);
//     }
// }

// const fs = require('fs')

// writeFile( Path, Data, Callback)
// if (str.charAt(0) === '"' && str.charAt(str.length -1) === '"')
// {
//     console.log(str.substr(1,str.length -2));
// }

// // remove boundary Quotes
// str = str.replace(/^"|"$/g, '');

const fs = require('fs');
const es = require('event-stream');
const path = require("path");

let lineCount = 0;
let csvPath = path.join(__dirname, "./siid_v11.csv");

fs.createReadStream(csvPath)
    .pipe(es.split())
    .pipe(es.mapSync( async (line) => {
        // lineCount += 1;
        line = await line.replace(/\,NA/g, '')
        // line = await line.substr(1,line.length -2)
        line = await line + '\n'
        await fs.appendFile('SIID_cleaned_v11.csv', line, function (err) {
            if (err) {
                console.log("failed at line:", lineCount);

            } else {

            }
        })

    }).on('error', (err) => {
        console.log('Error while reading file.', err);
    }).on('end', () => {
        console.log('Read entire file.')
    }));
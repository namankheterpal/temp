const fileName = './8aug.csv';


const Fs = require('fs');
const CsvReadableStream = require('csv-reader');


let inputStream = Fs.createReadStream(fileName, 'utf8');
let outputStream = Fs.createReadStream('Export.csv', 'utf8');

const input = {};
const output = {};



let skip = 1
inputStream
    .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        if (skip) {
            skip--;
            return
        }

        const sku = String(row[2]).toUpperCase();


        if (!sku) {
            console.error('sku not found', row[1])
        }

        input[sku] = input[sku] || 0;
        input[sku]++

    })
    .on('end', function () {

        console.log(Object.keys(input).length)
        skip = 1;

        outputStream
            .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
            .on('data', function (row) {
                if (skip) {
                    skip--;
                    return
                }

                const sku = String(row[30]).toUpperCase();


                if (!sku) {
                    console.error('sku not found', row[1])
                }
                output[sku] = true
                input[sku]--;
            })
            .on('end', function () {
                console.log(Object.keys(input).filter(s => input[s] > 0))

            })

    });












// [
//     '',
//     'Model',
//     'Sku',
//     'Size',
//     'Selling price',
//     'Payout',
//     'Issues?',
//     'Location',
//     'Owner',
//     'Insurance Price',
//     'Consign Date',
//     'Sell Date',
//     'Buy in',
//     'Checked out from store',
//     'Bought in'
//   ]







['554724130', '315122111/CW2288111', 'DD1391100']
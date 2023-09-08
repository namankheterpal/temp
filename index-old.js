const fileName = './Current.csv';


const Fs = require('fs');
const CsvReadableStream = require('csv-reader');
var csv_export=require('csv-export');


let inputStream = Fs.createReadStream(fileName, 'utf8');

const data  = []

const headers = [
    'Handle',
    'Title',
    'Body (HTML)',
    'Vendor',
    'Product Category',
    'Type',
    'Tags',
    'Published',
    'Option1 Name',
    'Option1 Value',
    'Option2 Name',
    'Option2 Value',
    'Option3 Name',
    'Option3 Value',
    'Variant SKU',
    'Variant Grams',
    'Variant Inventory Tracker',
    'Variant Inventory Qty',
    'Variant Inventory Policy',
    'Variant Fulfillment Service',
    'Variant Price',
    'Variant Compare At Price',
    'Variant Requires Shipping',
    'Variant Taxable',
    'Variant Barcode',
    'Image Src',
    'Image Position',
    'Image Alt Text',
    'Gift Card',
    'SEO Title',
    'SEO Description',
    'Google Shopping / Google Product Category',
    'Google Shopping / Gender',
    'Google Shopping / Age Group',
    'Google Shopping / MPN',
    'Google Shopping / AdWords Grouping',
    'Google Shopping / AdWords Labels',
    'Google Shopping / Condition',
    'Google Shopping / Custom Product',
    'Google Shopping / Custom Label 0',
    'Google Shopping / Custom Label 1',
    'Google Shopping / Custom Label 2',
    'Google Shopping / Custom Label 3',
    'Google Shopping / Custom Label 4',
    'Variant Image',
    'Variant Weight Unit',
    'Variant Tax Code',
    'Cost per item',
    'Price / International',
    'Compare At Price / International',
    'Status'
  ]

const outItem = () => ({
        'Handle': '',
        'Title': '',
        'Body (HTML)': '',
        'Vendor': '',
        'Product Category': '',
        'Type': '',
        'Tags': '',
        'Published': '',
        'Option1 Name': '',
        'Option1 Value': '',
        'Option2 Name': '',
        'Option2 Value': '',
        'Option3 Name': '',
        'Option3 Value': '',
        'Variant SKU': '',
        'Variant Grams': '',
        'Variant Inventory Tracker': '',
        'Variant Inventory Qty': '',
        'Variant Inventory Policy': '',
        'Variant Fulfillment Service': '',
        'Variant Price': '',
        'Variant Compare At Price': '',
        'Variant Requires Shipping': '',
        'Variant Taxable': '',
        'Variant Barcode': '',
        'Image Src': '',
        'Image Position': '',
        'Image Alt Text': '',
        'Gift Card': '',
        'SEO Title': '',
        'SEO Description': '',
        'Google Shopping / Google Product Category': '',
        'Google Shopping / Gender': '',
        'Google Shopping / Age Group': '',
        'Google Shopping / MPN': '',
        'Google Shopping / AdWords Grouping': '',
        'Google Shopping / AdWords Labels': '',
        'Google Shopping / Condition': '',
        'Google Shopping / Custom Product': '',
        'Google Shopping / Custom Label 0': '',
        'Google Shopping / Custom Label 1': '',
        'Google Shopping / Custom Label 2': '',
        'Google Shopping / Custom Label 3': '',
        'Google Shopping / Custom Label 4': '',
        'Variant Image': '',
        'Variant Weight Unit': '',
        'Variant Tax Code': '',
        'Cost per item': '',
        'Price / International': '',
        'Compare At Price / International': '',
        'Status': ''
});


const titles = {};

let skip = 1
inputStream
	.pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
	.on('data', function (row) {
        if(skip) {
            skip--;    
            return 
        }
        let item = outItem()

        // item['Variant SKU'] = row[0]
        const sku = String(row[2]).toUpperCase();
        const title = titles[sku] || row[1].replaceAll('"', '')

        item.Title = title
        item['Variant SKU'] =  titles[sku] ? '' : sku 
        item['Option1 Name'] = 'Groente'
        item['Option1 Value'] = row[3]
        item['Variant Price'] = row[4] // selling price
        item['Cost per item'] = row[5] //payout
        item.Vendor = row[7] //location
        item['Option2 Name'] = 'owner' 
        item['Option2 Value'] = row[8] //Owner 
        item['Option3 Name'] = 'Box Number' 
        item['Option3 Value'] = row[0] 

        item['Variant Inventory Qty'] = 1
        item['Variant Inventory Tracker'] = 'shopify'
        item['Variant Fulfillment Service'] = 'manual'
        item['Variant Inventory Policy'] = 'deny'

        const skuStr = String(row[2]).toUpperCase()
        const skuUrl =  skuStr.length === 9 ? skuStr.slice(0,-3) + '-' + skuStr.slice(-3,skuStr.length) : skuStr

        item['Image Src']=`https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/${skuUrl}/1.png`
        item.Status = 'active'
	    data.push(item)
	})
	.on('end', function () {

	    console.log(data.length, Object.keys(titles).length)

        csv_export.export({
            data
        },function(buffer){
         
          //this module returns a buffer for the csv files already compressed into a single zip.
          //save the zip or force file download via express or other server
          Fs.writeFileSync('./data.zip',buffer);
         
        });
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






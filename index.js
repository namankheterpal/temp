const fileName = "./8au.csv";

const Fs = require("fs");
const CsvReadableStream = require("csv-reader");
var csv_export = require("csv-export");

let inputStream = Fs.createReadStream(fileName, "utf8");

const data = [];

const headers = [
  "Handle",
  "Command",
  "Title",
  "Body HTML",
  "Vendor",
  "Type",
  "Tags",
  "Tags Command",
  "Status",
  "Published",
  "Published At",
  "Published Scope",
  "Template Suffix",
  "Gift Card",
  "Category: ID",
  "Category: Name",
  "Category",
  "Custom Collections",
  "Image Attachment",
  "Image Src",
  "Image Command",
  "Image Position",
  "Image Alt Text",
  "Variant ID",
  "Variant Command",
  "Option1 Name",
  "Option1 Value",
  "Option2 Name",
  "Option2 Value",
  "Option3 Name",
  "Option3 Value",
  "Variant Generate From Options",
  "Variant Position",
  "Variant SKU",
  "Variant Weight",
  "Variant Weight Unit",
  "Variant HS Code",
  "Variant Country of Origin",
  "Variant Province of Origin",
  "Variant Price",
  "Variant Compare At Price",
  "Variant Cost",
  "Variant Requires Shipping",
  "Variant Taxable",
  "Variant Tax Code",
  "Variant Barcode",
  "Variant Image",
  "Variant Inventory Tracker",
  "Variant Inventory Policy",
  "Variant Fulfillment Service",
  "Variant Inventory Qty",
  "Variant Inventory Adjust",
  "Metafield: title_tag [string]",
  "Metafield: description_tag [string]",
  "Variant Metafield: custom.harvest_year [number_integer]",
  "Variant Metafield: custom.harvest_region [single_line_text_field]",
  "Variant Metafield: custom.dimension_depth [dimension]",
  "Variant Metafield: custom.dimension_height [dimension]",
  "Variant Metafield: custom.dimension_width [dimension]",
  "Metafield Namespace",
  "Metafield Key",
  "Metafield Value",
  "Metafield Value Type",
];

const outItem = () => ({
  Handle: "",
  Command: "",
  Title: "",
  "Body HTML": "",
  Vendor: "",
  Type: "",
  Tags: "",
  "Tags Command": "",
  Status: "",
  Published: "",
  "Published At": "",
  "Published Scope": "",
  "Template Suffix": "",
  "Gift Card": "",
  "Category: ID": "",
  "Category: Name": "",
  Category: "",
  "Custom Collections": "",
  "Image Attachment": "",
  "Image Src": "",
  "Image Command": "",
  "Image Position": "",
  "Image Alt Text": "",
  "Variant ID": "",
  "Variant Command": "",
  "Option1 Name": "",
  "Option1 Value": "",
  "Option2 Name": "",
  "Option2 Value": "",
  "Option3 Name": "",
  "Option3 Value": "",
  "Variant Generate From Options": "",
  "Variant Position": "",
  "Variant SKU": "",
  "Variant Weight": "",
  "Variant Weight Unit": "",
  "Variant HS Code": "",
  "Variant Country of Origin": "",
  "Variant Province of Origin": "",
  "Variant Price": "",
  "Variant Compare At Price": "",
  "Variant Cost": "",
  "Variant Requires Shipping": "",
  "Variant Taxable": "",
  "Variant Tax Code": "",
  "Variant Barcode": "",
  "Variant Image": "",
  "Variant Inventory Tracker": "",
  "Variant Inventory Policy": "",
  "Variant Fulfillment Service": "",
  "Variant Inventory Qty": "",
  "Variant Inventory Adjust": "",
  "Metafield: title_tag [string]": "",
  "Metafield: description_tag [string]": "",
  "Variant Metafield: custom.onwer [single_line_text_field]": "",
  "Variant Metafield: custom.box_number [single_line_text_field]": "",
  "Variant Metafield: custom.payout [single_line_text_field]": "",
  "Variant Metafield: custom.location [single_line_text_field]": "",
  "Variant Metafield: custom.issues [single_line_text_field]": "",

  "Variant Metafield: custom.insurance_price [single_line_text_field]": "",
  "Variant Metafield: custom.consign_date [single_line_text_field]": "",
  "Variant Metafield: custom.sell_date [single_line_text_field]": "",
  "Variant Metafield: custom.buy_in [single_line_text_field]": "",
  "Variant Metafield: custom.bought_in [single_line_text_field]": "",

  "Metafield Namespace": "",
  "Metafield Key": "",
  "Metafield Value": "",
  "Metafield Value Type": "",
});

const titles = {};

const sizes = {};

let skip = 1;
inputStream
  .pipe(
    new CsvReadableStream({
      parseNumbers: true,
      parseBooleans: true,
      trim: true,
    })
  )
  .on("data", function (row) {
    if (skip) {
      skip--;
      return;
    }
    let item = outItem();

    item["Variant Metafield: custom.box_number [single_line_text_field]"] =
      row[0];

    const sku = String(row[2]).toUpperCase();

    if (!sku) {
      console.error("sku not found", row[1]);
    }

    titles[sku] = sku && titles[sku] ? titles[sku] : row[1].replaceAll('"', "");

    item.Title = titles[sku];
    item["Variant SKU"] = sku;
    item.Command = "MERGE";
    item.Published = "TRUE";
    item.Status = "Active";
    item["Published Scope"] = "global";
    item["Option1 Name"] = "Grootte";

    sizes[sku] = sku && sizes[sku] ? sizes[sku] : {};
    sizes[sku][row[3]] = sizes[sku][row[3]] || 0;
    sizes[sku][row[3]]++;
    item["Option1 Value"] = row[3] + " || " + sizes[sku][row[3]];

    if (!row[4]) {
      console.error("price not found", row[1]);
    }
    item["Variant Price"] = row[4]; // selling price

    item["Variant Metafield: custom.payout [single_line_text_field]"] = row[5]; //payout
    item["Variant Metafield: custom.issues [single_line_text_field]"] = row[6]; //payout
    item["Variant Metafield: custom.location [single_line_text_field]"] =
      row[7]; //location
    item["Variant Metafield: custom.onwer [single_line_text_field]"] = row[8]; //Owner

    item["Variant Metafield: custom.insurance_price [single_line_text_field]"] =
      row[9];
    item["Variant Metafield: custom.consign_date [single_line_text_field]"] =
      row[10];
    item["Variant Metafield: custom.sell_date [single_line_text_field]"] =
      row[11];
    item["Variant Metafield: custom.buy_in [single_line_text_field]"] = row[12];
    item["Variant Metafield: custom.bought_in [single_line_text_field]"] =
      row[13] + row[14];

    item["Variant Inventory Qty"] = 1;
    item["Variant Inventory Tracker"] = "shopify";
    item["Variant Fulfillment Service"] = "manual";
    item["Variant Inventory Policy"] = "deny";
    item["Variant Inventory Qty"] = 1;

    const skuStr = String(row[2]).toUpperCase();
    const skuUrl =
      skuStr.length === 9
        ? skuStr.slice(0, -3) + "-" + skuStr.slice(-3, skuStr.length)
        : skuStr;

    item[
      "Image Src"
    ] = `https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/${skuUrl}/1.png`;

    data.push(item);
  })
  .on("end", function () {
    // console.log({ sizes });
    Object.keys(sizes).map((sku) => {
      const rep = Object.keys(sizes[sku]).filter(
        (size) => sizes[sku][size] > 1
      );
      if (rep.length > 0) {
        console.log(sku, rep);
      }
    });

    // csv_export.export(
    //   {
    //     data: data,
    //   },
    //   function (buffer) {
    //     //this module returns a buffer for the csv files already compressed into a single zip.
    //     //save the zip or force file download via express or other server
    //     Fs.writeFileSync("./data.zip", buffer);
    //   }
    // );
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

// 37828301 [ '42.5' ]
// 408452017 [ '39' ]
// 408452140 [ '37.5', '38.5' ]
// 553558163 [ '40.5' ]
// 553560701 [ '38.5' ]
// 554724130 [ '45' ]
// 554724174 [ '45', '46', '45.5' ]
// 554725060 [ '36', '36.5' ]
// 554725078 [ '39' ]
// 554725130 [ '36', '38' ]
// 554725411 [ '36.5' ]
// 555088161 [ '43' ]
// 555088711 [ '43', '48.5' ]
// 555112401 [ '38', '37.5' ]
// 575441126 [ '39', '40' ]
// CW2288111 [ '38', '42.5' ]
// AA0287601 [ '38', '39', '36.5', '37.5', '38.5' ]
// AQ9129103 [ '38', '42', '36.5', '37.5', '38.5', '42.5' ]
// AT3745017 [ '19.5' ]
// AT3745063 [ '17', '18.5', '19.5' ]
// AT3745404 [ '16' ]
// AV2187140 [ '45' ]
// BB5350 [ '42' ]
// BQ4422001 [ '47.5' ]
// BQ6472115 [ '41', '36.5', '38.5' ]
// BQ6472186 [ '41', '42' ]
// BQ6472601 [ '36.5' ]
// BQ7670017 [ '25', '27' ]
// BY9612 [ '39 1/3', '43 1/3' ]
// CD0461151 [ '41', '35.5', '40.5' ]
// CD7418100 [ '31' ]
// CI6165005 [ '17', '18.5' ]
// CP9654 [ '39 1/3' ]
// CT1685100 [ '38' ]
// CT8012116 [ '42.5' ]
// CT8527016 [ '43' ]
// CW1590100 [ '38', '39', '38.5' ]
// CW1590103 [ '38.5' ]
// CW1590600 [ '38.5' ]
// CZ0775104 [ '38.5' ]
// CZ0790001 [ '44' ]
// DA0694004 [ '53' ]
// DB2179103 [ '39' ]
// DB2179107 [ '38.5' ]
// DC0774101 [ '41' ]
// DC0774132 [ '44.5' ]
// DC0774800 [ '38', '40' ]
// DC1788029 [ '41' ]
// DC8306001 [ '25' ]
// DD1391004 [ '41' ]
// DD1391100 [
//   '39',   '40',   '42',
//   '43',   '44',   '45',
//   '46',   '40.5', '44.5',
//   '45.5', '42.5'
// ]
// DD1391103 [ '45', '46', '44.5', '45.5' ]
// DD1391104 [ '44', '45', '46', '42.5' ]
// DD1391300 [ '40.5' ]
// DD1391601 [ '40', '45', '46' ]
// DD1391602 [ '42', '44', '42.5', '47.5' ]
// DD1399105 [ '47.5' ]
// DD1399401 [ '44' ]
// DD1503101 [ '38', '39', '40', '43', '42.5' ]
// DD1503103 [ '39', '41', '44', '44.5' ]
// DD1503108 [ '38' ]
// DD1503111 [ '38.5' ]
// DD1503114 [ '40', '42', '43', '38.5' ]
// DD1503116 [ '38', '40', '41', '42', '37.5', '38.5' ]
// DD1503117 [ '38', '38.5' ]
// DD1503118 [ '38', '39', '40', '40.5' ]
// DD1503200 [ '40.5' ]
// DD1503300 [ '42', '42.5', '44.5' ]
// DD1503801 [ '38.5' ]
// DD1873102 [ '36', '40', '41' ]
// DD2224200 [ '38', '39', '38.5', '40.5' ]
// DD2314106 [ '35' ]
// DD3363100 [ '40.5', '42.5' ]
// DD8959100 [ '38' ]
// DD9335641 [ '38' ]
// DH1348001 [ '36', '41', '42', '44', '37.5', '40.5' ]
// DH1348004 [ '39', '40' ]
// DH4403700 [ '41' ]
// DH6927017 [
//   '38',   '40',   '41',
//   '42',   '43',   '44',
//   '45',   '46',   '45.5',
//   '42.5', '47.5'
// ]
// DH6927061 [ '40', '42', '40.5' ]
// DH6927111 [ '46' ]
// DH6927140 [ '40', '42', '44.5' ]
// DH6931001 [ '41' ]
// DH7138006 [ '41', '45' ]
// DH7534200 [ '42.5' ]
// DH7863001 [ '36' ]
// DH9765001 [ '38', '38.5' ]
// DH9765003 [ '37.5' ]
// DH9765600 [ '36', '38', '39', '37.5', '36.5' ]
// DJ6188001 [ '44', '46', '44.5' ]
// DJ6188600 [ '46' ]
// DJ9786001 [ '40' ]
// DJ9955100 [ '41' ]
// DM0967100 [ '37.5' ]
// DM7866001 [ '44', '42.5' ]
// DM8998200 [ '42.5' ]
// DM9467700 [ '38' ]
// DN1431100 [ '38', '39', '37.5' ]
// DN2067600 [ '38' ]
// DN3707100 [ '41', '44', '48.5' ]
// DN4045001 [ '38' ]
// DO6288100 [ '38', '36.5' ]
// DO6485600 [ '39', '36.5', '38.5' ]
// DO7099100 [ '29.5' ]
// DO9392200 [ '36.5' ]
// DO9404400 [ '40.5' ]
// DO9549200 [ '41' ]
// DQ4909100 [ '37.5' ]
// DQ7576001 [ '40.5' ]
// DQ8423014 [ '38', '39', '40', '37.5', '38.5' ]
// DQ8423501 [ '37.5' ]
// DQ8423616 [ '39', '40', '38.5' ]
// DQ8426014 [ '44', '45' ]
// DQ9326100 [ '42', '47.5' ]
// DR5415103 [ '43' ]
// DR9654001 [ '41' ]
// DR9842400 [ '35.5', '36.5' ]
// DV0427301 [ '37.5' ]
// DV0831101 [ '45' ]
// DV0833100 [ '45' ]
// DV0834101 [ '44', '42.5' ]
// DV1308104 [ '44', '42.5', '44.5' ]
// DV1333100 [ '39', '40' ]
// DV1748601 [ '42.5' ]
// DV1753601 [ '40' ]
// DV3027001 [ '43' ]
// DV3742021 [ '46', '44.5', '42.5' ]
// DV7212300 [ '47.5' ]
// DV7411400 [ '38.5' ]
// DX2954001 [ '44' ]
// DX3382400 [ '38' ]
// DX5930001 [ '38', '40', '41', '38.5', '40.5', '37.5' ]
// DX5930100 [ '38', '41' ]
// DX9276100 [ '43' ]
// DZ2523001 [ '36', '42' ]
// DZ5485400 [
//   '38',   '39',   '40',
//   '41',   '43',   '44',
//   '45',   '46',   '47.5',
//   '40.5', '38.5', '42.5',
//   '44.5', '45.5'
// ]
// DZ5485612 [ '42.5' ]
// EG7491 [ '37 1/3' ]
// EG7596 [ '47 1/3' ]
// FB1843141 [ '39' ]
// FB3354001 [
//   '41',   '44',
//   '46',   '47',
//   '44.5', '45.5',
//   '48.5'
// ]
// FB8038001 [ '38.5' ]
// FB8915400 [ '45' ]
// FD0860001 [ '39' ]
// FD1232002 [ '39', '40' ]
// FD1412400 [ '27.5' ]
// FD1412612 [ '28', '31', '35' ]
// FD1413400 [ '25', '23.5' ]
// FD2596600 [ '39', '40' ]
// FD2597600 [ '28' ]
// FD8777100 [ '41', '42.5' ]
// FD9222180 [ '44' ]
// FD9749400 [ '46' ]
// FJ0704100 [ '38', '36.5', '38.5' ]
// FJ4668400 [ '40' ]
// FN3416001 [ '39' ]
// FN4193100 [ '45' ]
// FN7167100 [ '38', '38.5' ]
// FN7800400 [ '41', '42.5' ]
// FU7914 [ '45 1/3' ]
// FY4567 [ '48.5' ]
// FZ5896 [ '43', '44.5' ]
// FZ5904 [ '38', '43', '44.5' ]
// GV6842 [ '46' ]
// GW6373 [ '42 2/3' ]
// GX3791 [ '43 1/3' ]
// GY6162 [ '40' ]
// HP8739 [ '46' ]
// HP9744 [ '38 2/3', '39 1/3' ]
// HQ4540 [
//   '38',     '42',
//   '44',     '41 1/3',
//   '44 2/3', '42 2/3',
//   '43 1/3'
// ]
// HQ6316 [ '42', '44', '46', '42 2/3', '47 1/3' ]
// HQ6448 [
//   '39',   '42',
//   '43',   '46',
//   '47',   '40.5',
//   '44.5', '48.5'
// ]
// HQ7045 [ '41', '42', '44 2/3', '46 2/3' ]
// ID4126 [ '42', '43' ]
// ID4133 [ '38', '39', '42', '43', '46', '44.5' ]
// LAS33763 [ 'M' ]
// M2002RDA [ '43', '44', '45', '40.5', '41.5', '42.5' ]
// M2002RDJ [ '44', '44.5' ]
// GY0042 [ '38', '39 1/3' ]
// H03472 [ '43 1/3' ]
// IG5349 [ '46', '44.5' ]
// DZ4549100 [ '43' ]
// GV6840 [ '42' ]
// CT8532148 [ '40', '41', '45' ]
// FN6834412 [ '45' ]

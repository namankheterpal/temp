const Row = () => ({
  Handle: "",
  Title: "",
  "Body (HTML)": "",
  Vendor: "",
  "Product Category": "",
  Type: "",
  Tags: "",
  Published: "",
  "Option1 Name": "",
  "Option1 Value": "",
  "Option2 Name": "",
  "Option2 Value": "",
  "Option3 Name": "",
  "Option3 Value": "",
  "Variant SKU": "",
  "Variant Grams": "",
  "Variant Inventory Tracker": "",
  "Variant Inventory Qty": "",
  "Variant Inventory Policy": "",
  "Variant Fulfillment Service": "",
  "Variant Price": "",
  "Variant Compare At Price": "",
  "Variant Requires Shipping": "",
  "Variant Taxable": "",
  "Variant Barcode": "",
  "Image Src": "",
  "Image Position": "",
  "Image Alt Text": "",
  "Gift Card": "",
  "SEO Title": "",
  "SEO Description": "",
  "Google Shopping / Google Product Category": "",
  "Google Shopping / Gender": "",
  "Google Shopping / Age Group": "",
  "Google Shopping / MPN": "",
  "Google Shopping / AdWords Grouping": "",
  "Google Shopping / AdWords Labels": "",
  "Google Shopping / Condition": "",
  "Google Shopping / Custom Product": "",
  "Google Shopping / Custom Label 0": "",
  "Google Shopping / Custom Label 1": "",
  "Google Shopping / Custom Label 2": "",
  "Google Shopping / Custom Label 3": "",
  "Google Shopping / Custom Label 4": "",
  "Variant Image": "",
  "Variant Weight Unit": "",
  "Variant Tax Code": "",
  "Cost per item	Price / International": "",
  "Compare At Price / International": "",
  Status: "",
});

const fs = require("fs");
// const CsvReadableStream = require("csv-reader");

var csv_export = require("csv-export");

let data = [
  { filename: "3304-BLUE", price: "330" },
  // { filename: "4302", price: "400" },
  { filename: "4510", price: "430" },
  { filename: "4517", price: "400" },
  { filename: "5591", price: "530" },
  { filename: "AARADHNA", price: "500" },
  { filename: "AARVI", price: "400" },
  { filename: "ALISHA", price: "500" },
  { filename: "ASHVARIYA", price: "500" },
  { filename: "ASOPALAV", price: "400" },
  { filename: "BAHURANI RED", price: "400" },
  { filename: "BINDIYA", price: "400" },
  { filename: "BLACK BERRY", price: "500" },
  { filename: "BLACK BINDI", price: "400" },
  { filename: "BLACK DOT", price: "400" },
  { filename: "BLACK FLOWER", price: "500" },
  { filename: "BLACK KERI", price: "400" },
  { filename: "BLACK PAITHNI", price: "400" },
  { filename: "BLACK PAN", price: "500" },
  { filename: "BLUE SQUARE", price: "400" },
  { filename: "BLUEFULL", price: "380" },
  { filename: "BROWN DOT", price: "430" },
  { filename: "BUTTI", price: "500" },
  { filename: "CHAR MINAR", price: "400" },
  { filename: "COFFEE PAN", price: "400" },
  { filename: "COPER BINDI GREEN", price: "400" },
  { filename: "COPER BOX", price: "400" },
  { filename: "COPER ELEPHANT", price: "400" },
  { filename: "COPER GREEN GOLA", price: "400" },
  { filename: "COPER PAN BLACK", price: "400" },
  { filename: "COPER PAN", price: "400" },
  { filename: "COPER SQUARE", price: "400" },
  { filename: "COPER TEER", price: "400" },
  { filename: "CREAM MIX", price: "400" },
  { filename: "CREAM", price: "400" },
  { filename: "CREMY PINK", price: "500" },
  { filename: "FRIHEND GREEN", price: "400" },
  { filename: "GANGA", price: "330" },
  { filename: "GLORY", price: "550" },
  { filename: "GODDA", price: "500" },
  { filename: "GOLDEN", price: "500" },
  { filename: "GOPI PINK", price: "510" },
  { filename: "GREEN KERI", price: "430" },
  { filename: "GREEN KUKDO", price: "400" },
  { filename: "GREEN MOR", price: "400" },
  { filename: "GREEN PATTA", price: "400" },
  { filename: "GREENY", price: "500" },
  { filename: "GREY BUTTA", price: "400" },
  { filename: "GREY BUTTI", price: "400" },
  // { filename: "INDUJA", price: "400" },
  // { filename: "JAIKA", price: "350" },
  { filename: "JAMNA", price: "330" },
  { filename: "KAJAL", price: "520" },
  { filename: "KAJU KATRI", price: "420" },
  { filename: "KANIKA", price: "400" },
  { filename: "KARAGIRI", price: "400" },
  { filename: "KARISHMA", price: "500" },
  { filename: "KHICHA COPER", price: "600" },
  { filename: "KING PARI", price: "500" },
  { filename: "KOSATAGA", price: "400" },
  { filename: "LAXMI", price: "500" },
  { filename: "LEMON BUTTO", price: "500" },
  { filename: "Lemon_butti", price: "500" },
  { filename: "MAHARANI", price: "500" },
  { filename: "MANNAT GREEN PAN", price: "330" },
  { filename: "MAYRA PINK", price: "500" },
  { filename: "MIRA", price: "400" },
  { filename: "MOR", price: "500" },
  { filename: "NIRUPA", price: "500" },
  { filename: "ORANGE BLUE", price: "400" },
  { filename: "ORANGE BUTTI", price: "500" },
  { filename: "ORANGE JAL", price: "500" },
  { filename: "PAN GREEN", price: "380" },
  { filename: "PAN MAROON", price: "400" },
  { filename: "PARINITI", price: "400" },
  { filename: "PARVATI", price: "400" },
  // { filename: "PATTO", price: "400" },
  { filename: "PINK BINDI", price: "400" },
  { filename: "PINK ELEPHANT", price: "500" },
  { filename: "PINK LEAVES", price: "500" },
  { filename: "PINK PALLU", price: "500" },
  { filename: "PINK PENTHER", price: "400" },
  { filename: "PINK ROUND", price: "500" },
  { filename: "PINKY", price: "400" },
  { filename: "PISTA BUTTI", price: "500" },
  { filename: "PITCH BERRY", price: "500" },
  { filename: "PURPLE LINE", price: "400" },
  { filename: "PURPLE MINA", price: "400" },
  { filename: "RAJA RANI", price: "500" },
  { filename: "RAJVI", price: "400" },
  // { filename: "RAMA KERI", price: "400" },
  { filename: "RANI JAL", price: "400" },
  { filename: "RED BANDHNI", price: "500" },
  { filename: "RED BELL", price: "400" },
  { filename: "RED BINDI", price: "400" },
  { filename: "RED BUTTI", price: "400" },
  { filename: "RED MOR", price: "400" },
  { filename: "RED RANI", price: "400" },
  { filename: "RED ROUND", price: "400" },
  { filename: "SADHNA", price: "500" },
  { filename: "SAPTAPADI", price: "500" },
  { filename: "SARASVATI", price: "330" },
  { filename: "SAVARIYA", price: "500" },
  { filename: "SAVITRI", price: "400" },
  { filename: "SHUBH BUTTI", price: "400" },
  { filename: "SKY KHALIFA", price: "500" },
  // { filename: "TAJ", price: "400" },
  { filename: "TULSI", price: "400" },
  { filename: "WHITE BUTTA", price: "500" },
  { filename: "WHITE CHEX", price: "500" },
  { filename: "WINE GOLA", price: "400" },
  { filename: "YELLOW PATOLU", price: "500" },
  { filename: "YELLOW WELL", price: "400" },
  { filename: "ZALAK", price: "500" },
  { filename: "ZIGZAG LINE", price: "400" },
];

function capitalize(str) {
  const lowerCaseString = str.toLowerCase(), // convert string to lower case
    firstLetter = str.charAt(0).toUpperCase(), // upper case the first character
    strWithoutFirstChar = lowerCaseString.slice(1); // remove first character from lower case string

  return firstLetter + strWithoutFirstChar;
}

const NGROK = "https://raw.githubusercontent.com/namankheterpal/temp/main/SHOPDROP";

const imgNames = {
  4510: {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpg",
      "1 (5).jpg",
      "1 (6).jpg",
      "1 (7).jpg",
    ],
  },
  4517: {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (11).jpeg",
      "1 (12).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
  },
  5591: {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1(8).jpeg",
    ],
  },
  "3304-BLUE": {
    1: ["1 (1).jpg", "1 (2).jpeg", "1 (3).jpg", "1 (4).jpeg", "1 (5).jpeg"],
  },
  AARADHNA: {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
  },
  ALISHA: {
    1: [
      "1 (1).jpeg",
      "1 (1).jpg",
      "1 (10).jpeg",
      "1 (11).jpeg",
      "1 (2).jpg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
      "1(3).jpg",
    ],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg"],
    3: [
      "3 (1).jpg",
      "3 (2).jpg",
      "3 (3).jpg",
      "3 (4).jpg",
      "3 (5).jpg",
      "3 (6).jpg",
    ],
  },
  ASHVARIYA: {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "11 (4).jpeg"],
    2: ["2 (1).jpeg", "2 (4).jpeg", "2 (5).jpeg", "2 (6).jpeg"],
    3: ["3 (1).jpeg", "3 (4).jpeg", "3 (5).jpeg", "3 (6).jpeg"],
    4: ["4 (1).jpeg", "4 (4).jpeg", "4 (5).jpeg", "4 (6).jpeg"],
  },
  AARVI: {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (11).jpeg",
      "1 (12).jpeg",
      "1 (13).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
    ],
  },
  ASOPALAV: {
    1: ["1.jpeg"],
    2: ["2.jpg"],
    3: ["3.jpg"],
    4: ["4.jpeg"],
    5: ["5.jpeg"],
    6: ["6.jpeg"],
  },
  "BAHURANI RED": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
    ],
  },
  BINDIYA: {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
    2: [
      "2 (1).jpg",
      "2 (2).jpg",
      "2 (3).webp",
      "2 (4).jpg",
      "2 (5).webp",
      "2 (6).jpg",
      "2 (7).jpg",
    ],
  },
  "BLACK BERRY": {
    1: ["1 (5) (1).jpeg", "1 (6).jpeg", "1 (7).jpeg"],
    2: [
      "2 (1).jpeg",
      "2 (1).webp",
      "2 (2).jpeg",
      "2 (2).webp",
      "2 (3).jpeg",
      "2 (3).webp",
      "2 (4).jpeg",
      "2 (4).webp",
      "2 (5).webp",
      "2 (6).webp",
    ],
    3: ["3 (1).jpeg", "3 (2).jpeg", "3 (3).jpeg"],
  },
  "BLACK DOT": {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (11).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
  },
  "BLACK FLOWER": {
    1: ["1 (1).jpg", "1 (2).jpg", "1 (3).jpg", "1 (4).jpg", "1 (5).jpeg"],
  },
  "BLACK BINDI": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg"],
    2: [
      "2 (1).jpeg",
      "2 (2).jpeg",
      "2 (3).jpeg",
      "2 (4).jpeg",
      "2 (5).jpeg",
      "2 (6).jpeg",
    ],
  },
  "BLACK PAN": { 1: ["1.jpg"], 2: ["2.jpg"], 3: ["3.jpg"], 4: ["4.jpg"] },
  "BLACK PAITHNI": {
    1: ["1 (1).jpg", "1 (2).jpg", "1 (3).jpg", "1 (4).webp"],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg"],
    3: ["3 (1).webp", "3 (2).webp", "3 (3).webp", "3 (4).webp"],
  },
  "BLACK KERI": {
    1: ["1 (1).webp", "1 (2).webp", "1 (3).webp", "1 (4).webp", "1 (5).webp"],
    2: [
      "2 (1).jpg",
      "2 (1).webp",
      "2 (2).webp",
      "2 (3).webp",
      "2 (4).webp",
      "2 (5).webp",
      "2 (6).webp",
    ],
  },
  "BLUE SQUARE": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"],
  },
  BLUEFULL: { 1: ["1 (1).jpeg", "1 (1).jpg", "1 (2).jpg"] },
  "BROWN DOT": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
    ],
    2: [
      "2 (1).jpeg",
      "2 (2).jpeg",
      "2 (3).jpeg",
      "2 (4).jpeg",
      "2 (5).jpeg",
      "2 (6).jpeg",
      "2 (7).jpeg",
      "2 (8).jpeg",
    ],
    3: [
      "3 (1).jpeg",
      "3 (2).jpeg",
      "3 (3).jpeg",
      "3 (4).jpeg",
      "3 (5).jpeg",
      "3 (6).jpeg",
      "3 (7).jpeg",
      "3 (8).jpeg",
    ],
  },
  "COFFEE PAN": { 1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"] },
  "CHAR MINAR": { 1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"] },
  BUTTI: {
    1: ["1 (1).jpg", "1 (2).jpg", "1 (3).jpg", "1 (4).jpg", "1 (5).jpg"],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg", "2 (4).jpg", "2 (5).jpg"],
  },
  "COPER BINDI GREEN": {
    1: ["1 (1).jpg", "1 (2).jpg", "1 (3).jpg", "1 (4).jpg"],
    2: [
      "2 (1).jpg",
      "2 (2).jpg",
      "2 (3).jpg",
      "2 (4).jpg",
      "2 (5).jpg",
      "2 (6).jpg",
    ],
    3: [
      "3 (1).jpg",
      "3 (2).jpg",
      "3 (3).jpg",
      "3 (4).jpg",
      "3 (5).jpg",
      "3 (6).jpg",
    ],
    4: ["4 (1).jpeg", "4 (2).jpeg"],
    5: ["5 (1).jpeg", "5 (2).jpeg", "5 (3).jpeg", "5 (4).jpeg", "5 (5).jpeg"],
  },
  "COPER GREEN GOLA": {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
    2: ["2 (1).jpeg", "2 (2).jpeg", "2 (3).jpeg", "2 (4).jpeg"],
  },
  "COPER BOX": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
    2: [
      "2 (1).jpeg",
      "2 (2).jpeg",
      "2 (3).jpeg",
      "2 (4).jpeg",
      "2 (5).jpeg",
      "2 (6).jpeg",
      "2 (7).jpeg",
    ],
    3: ["3 (1).jpg", "3 (2).jpg", "3 (3).jpg", "3 (4).jpg"],
  },
  "COPER ELEPHANT": { 1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg"] },
  "COPER PAN": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"],
    2: [
      "2 (1).jpeg",
      "2 (2).jpeg",
      "2 (3).jpeg",
      "2 (4).jpeg",
      "2 (5).jpeg",
      "2 (6).jpeg",
      "2 (7).jpeg",
    ],
    3: ["3 (1).jpg", "3 (2).jpg"],
    4: [
      "4 (1).jpeg",
      "4 (2).jpeg",
      "4 (3).jpeg",
      "4 (4).jpeg",
      "4 (5).jpeg",
      "4 (6).jpeg",
      "4 (7).jpeg",
      "4 (8).jpeg",
      "4 (9).jpg",
    ],
  },
  "COPER TEER": { 1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"] },
  "COPER PAN BLACK": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
    2: ["2 (1).webp", "2 (2).webp", "2 (3).webp"],
    3: [
      "3 (1).jpeg",
      "3 (10).jpeg",
      "3 (2).jpeg",
      "3 (3).jpeg",
      "3 (4).jpeg",
      "3 (5).jpeg",
      "3 (6).jpeg",
      "3 (7).jpeg",
      "3 (8).jpeg",
      "3 (9).jpeg",
    ],
  },
  "CREAM MIX": { 1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"] },
  "COPER SQUARE": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
  },
  CREAM: {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
  },
  "FRIHEND GREEN": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
  },
  GLORY: {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg", "2 (4).jpg"],
  },
  GANGA: { 1: ["1 (1).JPG", "1 (2).jpg"] },
  GODDA: { 1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"] },
  "CREMY PINK": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
    2: [
      "2 (1).jpeg",
      "2 (10).jpeg",
      "2 (11).jpeg",
      "2 (2).jpeg",
      "2 (3).jpeg",
      "2 (4).jpeg",
      "2 (5).jpeg",
      "2 (6).jpeg",
      "2 (7).jpeg",
      "2 (8).jpeg",
      "2 (9).jpeg",
    ],
  },
  GOLDEN: {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
  },
  "GREEN KERI": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
  },
  "GOPI PINK": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
    ],
    2: ["2 (1).jpeg", "2 (2).jpeg", "2 (3).jpeg", "2 (4).jpeg", "2 (5).jpeg"],
  },
  "GREEN MOR": {
    1: ["1 (1).JPG", "1 (2).JPG", "1 (3).JPG", "1 (4).JPG", "1 (5).jpg"],
  },
  "GREEN PATTA": {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
  },
  "GREEN KUKDO": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
    ],
    2: [
      "2 (1).jpeg",
      "2 (2).jpeg",
      "2 (3).jpeg",
      "2 (4).jpeg",
      "2 (5).jpeg",
      "2 (6).jpeg",
    ],
    3: [
      "3 (1).jpeg",
      "3 (2).jpeg",
      "3 (3).jpeg",
      "3 (4).jpeg",
      "3 (5).jpeg",
      "3 (6).jpeg",
    ],
  },
  "GREY BUTTA": {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (11).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
    2: ["2 (1).jpeg", "2 (2).jpeg"],
    3: ["3 (1).jpeg", "3 (2).jpeg", "3 (3).jpeg", "3 (4).jpeg"],
    4: ["4 (1).jpg", "4 (1).webp", "4 (2).webp", "4 (3).webp"],
  },
  GREENY: {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
  },
  "GREY BUTTI": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
    ],
  },
  JAMNA: { 1: ["1 (1).jpg", "1 (2).jpg"] },
  "KAJU KATRI": { 1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg"] },
  KAJAL: {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1.jpeg"],
    2: ["2.jpeg"],
    3: ["3.jpeg"],
    4: ["4.jpeg"],
    5: ["5.jpeg"],
  },
  KARISHMA: {
    1: [
      "1 (1).jpg",
      "1 (2).jpg",
      "1 (3).jpg",
      "1 (4).jpg",
      "1 (5).jpg",
      "1 (6).jpg",
      "1 (7).jpg",
    ],
    2: ["2 (1).jpg", "2 (5).jpg", "2 (6).jpg", "2 (7).jpg"],
  },
  KARAGIRI: {
    1: [
      "1 (1).jpg",
      "1 (2).jpg",
      "1 (3).jpg",
      "1 (4).jpg",
      "1 (5).jpg",
      "1 (6).jpg",
      "1 (7).jpg",
    ],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg", "2 (4).jpg"],
    3: ["3 (1).webp", "3 (2).webp", "3 (3).webp", "3 (4).webp"],
    4: [
      "4 (1).webp",
      "4 (2).webp",
      "4 (3).webp",
      "4 (4).webp",
      "4 (5).webp",
      "4 (6).webp",
      "4 (7).webp",
      "4 (8).webp",
      "4 (9).webp",
    ],
  },
  KANIKA: {
    1: ["1 (1).jpg", "1 (2).jpg", "1 (3).jpg", "1 (4).jpg", "1 (5).jpg"],
    2: ["2 (1).png", "2 (2).png", "2 (3).png", "2 (4).png"],
    3: [
      "3 (1).jpeg",
      "3 (1).jpg",
      "3 (2).jpg",
      "3 (3).jpg",
      "3 (4).jpg",
      "3 (5).jpg",
    ],
  },
  "KHICHA COPER": {
    1: ["1.jpeg"],
    2: ["2.jpeg"],
    3: ["3.jpeg"],
    4: ["4.jpeg"],
  },
  KOSATAGA: {
    1: ["1 (1).jpeg", "1 (1).jpg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"],
  },
  "KING PARI": {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
    2: [
      "2 (1).jpeg",
      "2 (2).jpeg",
      "2 (3).jpeg",
      "2 (4).jpeg",
      "2 (5).jpeg",
      "2 (6).jpeg",
      "2 (7).jpeg",
      "2 (8).jpeg",
    ],
  },
  LAXMI: {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
  },
  Lemon_butti: {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (11).jpeg",
      "1 (12).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
  },
  MAHARANI: {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg", "2 (4).jpg"],
  },
  "LEMON BUTTO": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
    2: [
      "2 (1).jpg",
      "2 (10).jpg",
      "2 (2).jpg",
      "2 (3).jpg",
      "2 (4).jpg",
      "2 (5).jpg",
      "2 (6).jpg",
      "2 (7).jpg",
      "2 (8).jpg",
      "2 (9).jpg",
    ],
  },
  "MAYRA PINK": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg", "2 (4).jpg", "2 (5).jpg"],
  },
  "MANNAT GREEN PAN": { 1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg"] },
  MIRA: {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
  },
  "ORANGE BUTTI": { 1: ["1 (1).jpg", "1 (2).jpg", "1 (3).jpg", "1 (4).jpg"] },
  NIRUPA: {
    1: [
      "1 (1).jpeg",
      "1 (1).jpg",
      "1 (2).jpeg",
      "1 (2).jpg",
      "1 (3).jpeg",
      "1 (3).jpg",
      "1 (4).jpeg",
      "1 (4).jpg",
      "1 (5).jpeg",
      "1 (5).jpg",
      "1 (6).jpeg",
    ],
    2: ["2 (1).jpeg", "2 (2).jpeg", "2 (3).jpeg", "2 (4).jpeg", "2 (5).jpeg"],
  },
  MOR: {
    1: ["1 (1).jpg", "1 (2).jpg", "1 (3).jpg", "1 (4).jpg", "1 (5).jpg"],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg", "2 (4).jpg", "2 (5).jpg"],
  },
  "ORANGE BLUE": {
    1: ["1 (1).webp", "1 (2).webp", "1 (3).webp"],
    2: [
      "2 (1).jpg",
      "2 (2).jpg",
      "2 (3).jpg",
      "2 (4).jpg",
      "2 (5).jpg",
      "2 (6).jpg",
      "2 (7).jpg",
    ],
  },
  "ORANGE JAL": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
  },
  "PAN GREEN": {
    1: [
      "1 (1).jpg",
      "1 (2).jpg",
      "1 (3).jpg",
      "1 (4).jpg",
      "1 (5).jpg",
      "1 (6).jpg",
    ],
  },
  PARVATI: { 1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg"] },
  "PAN MAROON": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
  },
  "PINK BINDI": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
  },
  PARINITI: {
    1: ["1 (3).jpg"],
    2: ["2 (1).jpg"],
    3: ["3 (3).jpg"],
    4: ["4 (2).jpg"],
    5: ["5 (2).jpg"],
    6: ["6 (2).jpg"],
    7: ["7 (1).jpg"],
    8: ["8 (3).jpg"],
  },
  "PINK PALLU": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
  },
  "PINK ELEPHANT": {
    1: [
      "1 (1).jpg",
      "1 (2).jpg",
      "1 (3).jpg",
      "1 (4).jpg",
      "1 (5).jpg",
      "1 (6).jpg",
      "1 (7).jpg",
      "1 (8).jpg",
    ],
  },
  "PINK LEAVES": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
  },
  PINKY: {
    1: [
      "1 (1).jpg",
      "1 (10).jpg",
      "1 (2).jpg",
      "1 (3).jpg",
      "1 (4).jpg",
      "1 (5).jpg",
      "1 (6).jpg",
      "1 (7).jpg",
      "1 (8).jpg",
      "1 (9).jpg",
    ],
  },
  "PINK ROUND": {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (11).jpeg",
      "1 (12).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
    2: ["2 (1).jpeg", "2 (2).jpeg", "2 (3).jpeg", "2 (4).jpeg", "2 (5).jpeg"],
  },
  "PINK PENTHER": {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
    2: ["2 (2).jpeg", "2 (4).jpeg", "2 (6).jpeg", "2 (7).jpeg", "2.jpeg"],
    3: ["3 (1).jpeg", "3 (2).jpeg", "3 (3).jpeg", "3 (4).jpeg", "3.jpeg"],
  },
  "PURPLE LINE": { 1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg"] },
  "PISTA BUTTI": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
    ],
  },
  "PITCH BERRY": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"],
    2: ["2 (1).jpeg", "2 (2).jpeg", "2 (3).jpeg", "2 (4).jpeg", "2 (5).jpeg"],
    3: ["3 (1).webp", "3 (2).webp", "3 (3).webp", "3 (4).webp"],
  },
  "PURPLE MINA": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg"],
  },
  "RAJA RANI": {
    1: [
      "1 (1).jpeg",
      "1 (1).jpg",
      "1 (2).jpg",
      "1 (3).jpg",
      "1 (4).jpg",
      "1 (5).jpg",
      "1 (6).jpg",
      "1 (7).jpg",
      "1 (8).jpg",
      "1 (9).jpg",
    ],
  },
  "RANI JAL": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
  },
  RAJVI: {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
  },
  "RED BELL": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
    2: ["2.jpeg"],
  },
  "RED BINDI": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
    ],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg", "2 (4).jpg"],
  },
  "RED BANDHNI": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
  },
  "RED MOR": {
    1: [
      "1 (1).jpg",
      "1 (2).jpg",
      "1 (3).jpg",
      "1 (4).jpg",
      "1 (5).jpg",
      "1 (6).jpg",
    ],
  },
  "RED RANI": {
    1: [
      "1 (1).jpg",
      "1 (2).jpg",
      "1 (3).jpg",
      "1 (4).jpg",
      "1 (5).jpg",
      "1 (6).jpg",
    ],
  },
  "RED BUTTI": {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg"],
    2: [
      "2 (1).jpg",
      "2 (2).jpg",
      "2 (3).jpg",
      "2 (4).jpg",
      "2 (5).jpg",
      "2 (6).jpg",
    ],
  },
  SADHNA: {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
  },
  "RED ROUND": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
  },
  SARASVATI: { 1: ["1 (1).jpg", "1 (2).JPG"] },
  SAPTAPADI: {
    1: [
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
    ],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg", "2 (4).jpg", "2 (5).jpg"],
    3: ["3 (1).jpg", "3 (2).jpg", "3 (3).jpg", "3 (4).jpg", "3 (5).jpg"],
    4: ["4 (1).jpg", "4 (2).jpg", "4 (3).jpg", "4 (4).jpg", "4 (5).jpg"],
    5: ["5 (1).jpg", "5 (2).jpg", "5 (3).jpg", "5 (4).jpg", "5 (5).jpg"],
    6: ["6 (1).jpg", "6 (2).jpg", "6 (3).jpg", "6 (4).jpg"],
  },
  SAVARIYA: {
    2: ["2 (1).jpeg", "2 (2).jpeg", "2 (3).jpeg", "2 (4).jpeg", "2 (5).jpeg"],
    3: ["3 (1).jpeg", "3 (2).jpeg", "3 (3).jpeg", "3 (4).jpeg"],
  },
  SAVITRI: {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
    ],
  },
  TULSI: {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
    ],
  },
  "SKY KHALIFA": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
    2: ["2 (1).jpg", "2 (2).jpg", "2 (3).jpg", "2 (4).jpg", "2 (5).jpg"],
    3: ["3 (1).jpeg", "3 (2).jpeg"],
    4: ["4 (1).jpeg", "4 (2).jpeg", "4 (3).jpeg", "4 (4).jpeg"],
    5: ["5 (1).jpeg", "5 (2).jpeg", "5 (3).jpeg", "5 (4).jpeg"],
  },
  "SHUBH BUTTI": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpg",
      "1 (6).jpg",
      "1 (7).jpg",
      "1 (8).jpg",
    ],
  },
  "WHITE CHEX": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
    2: ["2 (1).jpeg", "2 (2).jpeg"],
  },
  "WHITE BUTTA": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
    ],
  },
  "WINE GOLA": {
    1: [
      "1 (1).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
    ],
    2: [
      "2 (1).jpeg",
      "2 (2).jpeg",
      "2 (3).jpeg",
      "2 (4).jpeg",
      "2 (5).jpeg",
      "2 (6).jpeg",
    ],
    3: ["3 (1).jpeg", "3 (2).jpeg", "3 (3).jpeg"],
    4: ["4 (1).jpeg", "4 (2).jpeg", "4 (3).jpeg", "4 (4).jpeg", "4 (5).jpeg"],
  },
  "YELLOW PATOLU": { 1: ["1 (1).JPG", "1 (2).JPG", "1 (3).JPG", "1 (4).JPG"] },
  "YELLOW WELL": {
    1: [
      "1 (1).jpeg",
      "1 (10).jpeg",
      "1 (11).jpeg",
      "1 (12).jpeg",
      "1 (13).jpeg",
      "1 (14).jpeg",
      "1 (15).jpeg",
      "1 (2).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
      "1 (9).jpeg",
    ],
  },
  ZALAK: {
    1: ["1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg"],
  },
  "ZIGZAG LINE": {
    1: [
      "1 (1).jpeg",
      "1 (3).jpeg",
      "1 (4).jpeg",
      "1 (5).jpeg",
      "1 (6).jpeg",
      "1 (7).jpeg",
      "1 (8).jpeg",
    ],
  },
};

// generate images names
// data.forEach(({ filename, price }) => {
//   fs.readdir("./SHOPDROP/" + filename + "=" + price, (err, files) => {
//     files.forEach((file) => {
//       if (file.indexOf(".mp4") > -1 || file.indexOf("DS") > -1) {
//         return;
//       }
//       const variant = file[0];
//       if (!Number.isInteger(Number(variant))) {
//         console.error("variant", variant, filename);
//       }
//       imgNames[filename] = imgNames[filename] || {};
//       imgNames[filename][variant] = imgNames[filename][variant] || [];
//       imgNames[filename][variant].push(file);
//     });
//     // if (filename == "ZIGZAG LINE") console.log(JSON.stringify(imgNames));
//   });
// });

const excelRow = [];

data.slice(11,data.length-1).forEach((item) => {
  const row = Row();
  row.Title = item.filename.split(" ").map(capitalize).join(" ");
  const Handle = row.Title.toLowerCase().split(' ').join('-');

  row.Handle = Handle

  row.Published = "true";
  row.Vendor = "ZeroSaree";
  row.Status = "active";
  row["Option1 Name"] = "Color";
  row["Gift Card"] = "false";
  excelRow.push(row);
  Object.keys(imgNames[item.filename]).forEach((variant) => {
    const images = imgNames[item.filename][variant];

    images.forEach((imageName,i) => {
      const row = Row();
      const imgSrc = new URL(
        NGROK + "/" + item.filename +"="+item.price+ "/" + imageName
      ).toString();

      if(i==0){console.log(i)
        row["Variant Price"] = +item.price + 800;
        row["Variant Compare At Price"] = +item.price + 1400;
        row["Variant Image"] = imgSrc;
        row["Variant SKU"] = item.filename.split(" ").join("");
        row["Option1 Value"] = variant;
        row["Variant Fulfillment Service"] = "manual";
        row["Variant Inventory Policy"] = "continue";
        row["Variant Inventory Qty"] = 100;
      }
     
      
      row.Handle = Handle
      row["Image Src"] = imgSrc;
      
      excelRow.push(row);
    });
  });
});

console.log(excelRow);
csv_export.export(
  {
    data: excelRow,
  },
  function (buffer) {
    //this module returns a buffer for the csv files already compressed into a single zip.
    //save the zip or force file download via express or other server
    fs.writeFileSync("./saree.zip", buffer);
  }
);

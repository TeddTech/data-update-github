var daff = require('daff');

var data1 = [
    ['Country','Capital'],
    ['Ireland','Dublin'],
    ['France','Paris'],
    ['Spain','Barcelona']
];
var data2 = [
    ['Country','Code','Capital'],
    ['Ireland','ie','Dublin'],
    ['France','fr','Paris'],
    ['Spain','es','Madrid'],
    ['Germany','de','Berlin']
];

var table1 = new daff.TableView(data1);
var table2 = new daff.TableView(data2);

var alignment = daff.compareTables(table1,table2).align();

var data_diff = [];
var table_diff = new daff.TableView(data_diff);

var flags = new daff.CompareFlags();
var highlighter = new daff.TableDiff(alignment,flags);
highlighter.hilite(table_diff);

// console.log("Program completed!")

console.log(data_diff);

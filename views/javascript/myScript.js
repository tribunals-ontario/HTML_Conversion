function toggleContrast(cont) {
  // if (cont.checked) {
  //   document.getElementById('pagestyle').setAttribute('href', 'http://www.sjto.gov.on.ca/documents/high_contrast.css');
  // } else {
  //   document.getElementById('pagestyle').setAttribute('href', 'http://www.sjto.gov.on.ca/documents/documents_style2.css');
  // }
  if (cont.checked) {
    document.getElementById('pagestyle').setAttribute('href', 'https://tribunals-ontario.github.io/HTML_Conversion/views/css/contrast_letter_styles.css');
  } else {
    document.getElementById('pagestyle').setAttribute('href', 'https://tribunals-ontario.github.io/HTML_Conversion/views/css/letter_styles.css');
	}
}
function resizeText(multiplier) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.05) + "em";
}
 function addRow()
{
   var arrTables = document.getElementById('myTable');
   var oRows = arrTables.rows;
   var numRows = oRows.length;

   var newRow = document.getElementById('myTable').insertRow( numRows );
   var cell1 = newRow.insertCell(0);
   var cell2 = newRow.insertCell(1);
   var cell3 = newRow.insertCell(2);

   cell1.innerHTML = 1;
   cell2.innerHTML = 1;
   cell3.innerHTML = 9;
}

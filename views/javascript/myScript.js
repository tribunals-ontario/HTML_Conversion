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
 function copyRow() {
            var html = $('#tbl tr:last').html();
            $('#tbl tr:last').after("<tr>" + html + "</tr>");
        }
function resizeText(multiplier) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.05) + "em";
}
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
function addRow()
{
   var arrTables = document.getElementById('myTable');
   var oRows = arrTables.rows;
   var numRows = oRows.length;

   var newRow = document.getElementById('myTable').insertRow( numRows );
   var cell1 = newRow.insertCell(0);
   var cell2 = newRow.insertCell(1);
   var cell3 = newRow.insertCell(2);

   cell1.innerHTML = numRows;
   cell2.innerHTML = numRows;
   cell3.innerHTML = numRows;
}
function addRow(tableID) {

			var table = document.getElementById(tableID);

			var rowCount = table.rows.length;
			var row = table.insertRow(rowCount);

			var colCount = table.rows[0].cells.length;

			for(var i=0; i<colCount; i++) {

				var newcell	= row.insertCell(i);

				newcell.innerHTML = table.rows[0].cells[i].innerHTML;
				//alert(newcell.childNodes);
				switch(newcell.childNodes[0].type) {
					case "text":
							newcell.childNodes[0].value = "";
							break;
					case "checkbox":
							newcell.childNodes[0].checked = false;
							break;
					case "select-one":
							newcell.childNodes[0].selectedIndex = 0;
							break;
				}
			}
		}
function deleteRow(tableID) {
			try {
			var table = document.getElementById(tableID);
			var rowCount = table.rows.length;

			for(var i=0; i<rowCount; i++) {
				var row = table.rows[i];
				var chkbox = row.cells[0].childNodes[0];
				if(null != chkbox && true == chkbox.checked) {
					if(rowCount <= 1) {
						alert("Cannot delete all the rows.");
						break;
					}
					table.deleteRow(i);
					rowCount--;
					i--;
				}


			}
			}catch(e) {
				alert(e);
			}
		}

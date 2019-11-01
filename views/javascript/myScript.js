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
// n =  new Date();
// y = n.getFullYear();
// m = n.getMonth() + 1;
// d = n.getDate();
// document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
var _counter = 0;


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
		
		var myText = 'Hello world!', 
    myHTML = '<b>'+myText+'</b>';

function openFile (textToEncode, contentType, newWindow) {
    // For window.btoa (base64) polyfills, see 
    // https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills
    var encodedText = window.btoa(textToEncode);
    var dataURL = 'data:' + contentType + ';base64,' + encodedText;
    if (newWindow) { // Not useful for application/octet-stream type
        window.open(dataURL); // To open in a new tab/window
    }
    else {
        window.location = dataURL; // To change the current page
    }
}
function Add() {
    var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function Add1() {

        var x = document.getElementById("myDIV3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    }function Add2() {

        var x = document.getElementById("myDIV4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    }function Add3() {

        var x = document.getElementById("myDIV5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    }function Add4() {

        var x = document.getElementById("myDIV6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    }function Add5() {

        var x = document.getElementById("myDIV7");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    }function Add6() {

        var x = document.getElementById("myDIV8");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    }function Add7() {

        var x = document.getElementById("myDIV9");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    }function Add8() {

        var x = document.getElementById("myDIV10");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    }
	

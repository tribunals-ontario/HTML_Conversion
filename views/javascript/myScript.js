function toggleContrast(cont) {
  // if (cont.checked) {
  //   document.getElementById('pagestyle').setAttribute('href', 'http://www.sjto.gov.on.ca/documents/high_contrast.css');
  // } else {
  //   document.getElementById('pagestyle').setAttribute('href', 'http://www.sjto.gov.on.ca/documents/documents_style2.css');
  // }
  if (cont.checked) {
    document.getElementById('pagestyle').setAttribute('href', '../../views/css/contrast_letter_styles.css');
  } else {
    document.getElementById('pagestyle').setAttribute('href', '../../views/css/letter_styles.css');
	}
}
function resizeText(multiplier) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.05) + "em";
}
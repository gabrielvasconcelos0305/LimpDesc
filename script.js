var list = [];
function carrinho(prod) {
    list = list.concat(prod);
    alert('Item adicionado');
}

function limpar() {
  list.length = 0;
}

function saveTextAsFile() {
    var textFileAsBlob = new Blob(list, {
      type: 'text/plain' //'text/csv' to .csv file
      });

    var fileNameToSaveAs = 'Lista de compras';
  
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
  
    downloadLink.click();
  }
  
  function destroyClickedElement(event) {
    document.body.removeChild(event.target);
  }
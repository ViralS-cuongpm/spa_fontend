export default {

  export(data, fileName) {
    const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });

    // IE 10+
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, fileName);
    } else {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.style.display = 'none';
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

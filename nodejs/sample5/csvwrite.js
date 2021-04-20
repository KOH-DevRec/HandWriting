class csvwrite{

  exportCSV(array1,array2,filename,download){
    var csv="";
    csv +='x,y,\n';
    for(var i=0;i<array1.length;i++){
      csv+=array1[i]+",";
      csv+=array2[i]+",";
      csv +='\n';
    }
    csv=csv.slice(0,-1);
    var download = document.getElementById(download);
    download.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    download.setAttribute('download', filename + histry_count+'.csv');
    var fs = require('fs');
    fs.writeFileSync( './csv/sample.csv', csv)
  }
}

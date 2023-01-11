let selectedFile;

document.getElementById('selectFile').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]

document.getElementById('submitFile').addEventListener("click", () => {
    // XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){

        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);

        fileReader.onload = (event)=>{
            let data = event.target.result;
            
            let workbook = XLSX.read(data,{type:"binary"});

            console.log("W", workbook);

            workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);

                console.log("R", rowObject);
                //   document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
            });
        }
    }
});


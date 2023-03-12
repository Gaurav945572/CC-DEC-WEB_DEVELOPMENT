var j=0;
function update(i) {
    if(i==0){
    let htmlCode=document.getElementById("html").value;
    let cssCode=document.getElementById("css").value;
    let javascriptCode=document.getElementById("javascript").value;
    let text=htmlCode+"<style>"+cssCode+"</style>"+"<scri"+"pt>"+javascriptCode+"</scri"+"pt>";
    let iframe=document.getElementById('viewer').contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
    }

    else if(i==1){

        let htmlCode=document.getElementById("html").value;
        let html=htmlCode.slice(0,html.length);
        document.getElementById("html").value=html;
        j=1;
    }
}
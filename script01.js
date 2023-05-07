var index = 0;   
function changecolors(){
    var colors = ["red","blue","yellow","green","orange","purple"];
    document.getElementBytagname("body")[0]
    style02.background = colors[index++];

    if(index > colors.length -1)
    index = 0;

}
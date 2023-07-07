
var editor=CodeMirror.fromTextArea(document.getElementById("editor"),{
     mode:"text/x-c++src",
     theme:"dracula",
     lineNumbers:true,
     autoCloseBrackets:true,
});
var width=window.innerWidth;
editor.setSize((0.7*width),"500");
var option=document.getElementById("autoSizingSelect");
option.addEventListener("change",function(){
    var val=option.value;
    if(val=="Java")
    {
        editor.setOption("mode","text/x-java");
    }
    else if(val=="Python")
    {
        editor.setOption("mode","text/x-python");
    }
    else
    {
        editor.setOption("mode","text/x-c++src");
    }
})
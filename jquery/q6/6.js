$(document).ready(function() {
    $("#b1").click(function() {
        
        $("div").replaceWith($("<p>"+$("div").text()+"</p>"));
    });
    
});
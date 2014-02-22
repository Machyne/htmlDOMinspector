$(document).ready(function() {
    var isDragging;
    $("#bar").mousedown(function() {
        isDragging = true;
        console.log("pressed");
    });

    $(document).mousemove(function(e) {
        if(isDragging) {
            var newHeight = Math.max(Math.min(e.pageY / $('body').height() *100, 96), 4);
            console.log("h: "+newHeight);
            $("#top").css("height", newHeight + "%");
            $("#bottom").css("height", (100 - newHeight) + "%");
        }
    });
    
    $(document).mouseup(function() {
        isDragging = false;
        console.log("pressed");
    });
});
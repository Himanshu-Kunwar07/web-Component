

$(document).ready(function(){
    var isAdvancedUpload = function(){
        var div = document.querySelector('drag-drop');
        return (('draggable' in div)||('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }();

    if(isAdvancedUpload){

        var droppedFiles = false;

        $form.on('drag dragstart dragend dragover dragenter dragleave drop', funtion(e){
            e.preventDeault();
            e.stopPropagation();
        })
        .on('dragover dragenter', function(){
            $form.addClass('is-dragover');
        })
        .on('dragleave dragend drop', function(){
            $form.removeClass('is-dragover');
        })
        .on('drop', function(e){
            droppedFiles = e.originalEvent.dataTransfer.files;
        });
    }
})
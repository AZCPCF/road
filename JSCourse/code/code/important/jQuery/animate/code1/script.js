$(document).ready(function() {
    $(".button").click(function() {
        $(".animation").animate({
            width : '100%' ,
            height : '550px',
            opacity : '0.8',
            margin : '0',
        }
        ,"slow"
        );
    })
})
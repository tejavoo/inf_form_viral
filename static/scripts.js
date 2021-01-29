// https://www.tutorialspoint.com/jquery/effect-scale.htm


// $(".in1").focus(function() { 
//     $(".im1").css("display", "block");
//     $(".im1").css("transition", "width 1s ease-in-out");
//     $(".im1").css("width", "60%"); 
//     $(".im1").css("width", "60%"); 
//     $("#main").css("background-color", "pink");
// });

// $(".in1").focusout(function() { 
//     // $(this).next("span").css("display", "inline"); 
//     $(".im1").css("display", "block");
//     $(".im1").css("width", "60%"); 
//     $("#main").css("background-color", "aqua");
// });


// $(".in2").focus(function() { 
//     $(".im2").css("display", "block");
//     $(".im2").css("transition", "width 1s ease-in-out");
//     $(".im2").css("width", "60%"); 
//     $(".im2").css("width", "60%"); 
//     $("#main").css("background-color", "#a8c753");
// });

// $(".in2").focusout(function() { 
//     // $(this).next("span").css("display", "inline"); 
//     $(".im2").css("display", "block");
//     $(".im2").css("width", "60%"); 
//     $("#main").css("background-color", "aqua");
// });

// $(".in3").focus(function() { 
//     $(".im3").css("display", "block");
//     $(".im3").css("transition", "width 1s ease-in-out");
//     $(".im3").css("width", "60%"); 
//     $(".im3").css("width", "60%"); 
//     $("#main").css("background-color", "#a8c753");
// });

// $(".in3").focusout(function() { 
//     // $(this).next("span").css("display", "inline"); 
//     $(".im3").css("display", "block");
//     $(".im3").css("width", "60%"); 
//     $("#main").css("background-color", "aqua");
// });

// $(".in4").focus(function() { 
//     $(".im4").css("display", "block");
//     $(".im4").css("transition", "width 1s ease-in-out");
//     $(".im4").css("width", "60%"); 
//     $(".im4").css("width", "60%"); 
//     $("#main").css("background-color", "#a8c753");
// });

// $(".in4").focusout(function() { 
//     // $(this).next("span").css("display", "inline"); 
//     $(".im4").css("display", "block");
//     $(".im4").css("width", "60%"); 
//     $("#main").css("background-color", "aqua");
// });

// $(".in5").focus(function() { 
//     $(".im5").css("display", "block");
//     $(".im5").css("transition", "width 1s ease-in-out");
//     $(".im5").css("width", "60%"); 
//     $(".im5").css("width", "60%"); 
//     $("#main").css("background-color", "#a8c753");
// });

// $(".in5").focusout(function() { 
//     // $(this).next("span").css("display", "inline"); 
//     $(".im5").css("display", "block");
//     $(".im5").css("width", "60%"); 
//     $("#main").css("background-color", "aqua");
// });

// $(".in6").focus(function() { 
//     $(".im6").css("display", "block");
//     $(".im6").css("transition", "width 1s ease-in-out");
//     $(".im6").css("width", "60%"); 
//     $(".im6").css("width", "60%"); 
//     $("#main").css("background-color", "#a8c753");
// });

// $(".in6").focusout(function() { 
//     // $(this).next("span").css("display", "inline"); 
//     $(".im6").css("display", "block");
//     $(".im6").css("width", "60%"); 
//     $("#main").css("background-color", "aqua");
// });

// $(".in7").focus(function() { 
//     $(".im7").css("display", "block");
//     $(".im7").css("transition", "width 1s ease-in-out");
//     $(".im7").css("width", "60%"); 
//     $(".im7").css("width", "60%"); 
//     $("#main").css("background-color", "#a8c753");
// });

// $(".in7").focusout(function() { 
//     // $(this).next("span").css("display", "inline"); 
//     $(".im7").css("display", "block");
//     $(".im7").css("width", "60%"); 
//     $("#main").css("background-color", "aqua");
// });

// $(".in8").focus(function() { 
//     $(".im8").css("display", "block");
//     $(".im8").css("transition", "width 1s ease-in-out");
//     $(".im8").css("width", "60%"); 
//     $(".im8").css("width", "60%"); 
//     $("#main").css("background-color", "#a8c753");
// });

// $(".in8").focusout(function() { 
//     // $(this).next("span").css("display", "inline"); 
//     $(".im8").css("display", "block");
//     $(".im8").css("width", "60%"); 
//     $("#main").css("background-color", "aqua");
// });

// $(".in8").focus(function() { 
//     $(".im8").css("display", "block");
//     $(".im8").css("transition", "width 1s ease-in-out");
//     $(".im8").css("width", "60%"); 
//     $(".im8").css("width", "60%"); 
//     $("#main").css("background-color", "#a8c753");
// });

// $(".in8").focusout(function() { 
//     // $(this).next("span").css("display", "inline"); 
//     $(".im8").css("display", "block");
//     $(".im8").css("width", "60%"); 
//     $("#main").css("background-color", "aqua");
// });
// // $(".in0").focus(function() { 
// //     $(".im1").css("display", "inline");
// //     $(".im1").css("transition", "width 1s ease-in-out");
// //     $(".im1").css("width", "100%"); 
// //     $("#main").css("background-color", "pink")
// // });

// // $(".in0").focusout(function() { 
// //     // $(this).next("span").css("display", "inline"); 
// //     $(".im1").css("display", "none");
// //     $(".im1").css("width", "50px"); 
// //     $("#main").css("background-color", "aqua")
// // });


$(window).ready(function() { 
    $("form").on("keypress", function (event) { 
        console.log("aaya"); 
        var keyPressed = event.keyCode || event.which; 
        if (keyPressed === 13) { 
            alert("You pressed the Enter key!!"); 
            event.preventDefault(); 
            return false; 
        } 
    }); 
    });

$(window).ready(function(){


// https://www.tutorialspoint.com/jquery/effect-scale.htm


$(".in0").focus(function() { 
    $(".im1").css("display", "block");
    $(".im1").animate({width:"60%",opacity:'1'},"slow");
    $(".im1").css("transition", "width 1s ease-in-out");
    $(".im1").css("width", "60%"); 
    $(".im1").css("width", "60%"); 
    // $("#main").css("background-color", "pink");
});

$(".in0").focusout(function() { 
    // $(this).next("span").css("display", "inline"); 
    $(".im1").css("display", "block");
    $(".im1").css("width", "60%"); 
    // $("#main").css("background-color", "aqua");
});


$(".in1").focus(function() { 
    $(".im2").css("display", "block");
    $(".im2").animate({width:"60%",opacity:'1'},"slow");
    $(".im2").css("width", "60%");
    $(".im2").css("width", "60%");
    // $("#main").css("background-color", "#a8c753");
});

$(".in1").focusout(function() { 
    // $(this).next("span").css("display", "inline"); 
    $(".im2").css("display", "block");
    $(".im2").css("width", "60%");
    // $("#main").css("background-color", "aqua");
});

$(".in2").focus(function() { 
    $(".im3").css("display", "block");
    $(".im3").animate({width:"60%",opacity:'1'},"slow");
    $(".im3").css("width", "60%");
    $(".im3").css("width", "60%");
    // $("#main").css("background-color", "#a8c753");
});

$(".in2").focusout(function() {
    // $(this).next("span").css("display", "inline");
    $(".im3").css("display", "block");
    $(".im3").css("width", "60%"); 
    // $("#main").css("background-color", "aqua");
});

$(".in3").focus(function() { 
    $(".im4").css("display", "block");
    $(".im4").animate({width:"60%",opacity:'1'},"slow");
    $(".im4").css("width", "60%"); 
    $(".im4").css("width", "60%"); 
    // $("#main").css("background-color", "#a8c753");
});

$(".in3").focusout(function() { 
    // $(this).next("span").css("display", "inline"); 
    $(".im4").css("display", "block");
    $(".im4").css("width", "60%"); 
    // $("#main").css("background-color", "aqua");
});

$(".in4").focus(function() { 
    $(".im5").css("display", "block");
    $(".im5").animate({width:"60%",opacity:'1'},"slow");
    $(".im5").css("width", "60%"); 
    $(".im5").css("width", "60%"); 
    // $("#main").css("background-color", "#a8c753");
});

$(".in4").focusout(function() { 
    // $(this).next("span").css("display", "inline"); 
    $(".im5").css("display", "block");
    $(".im5").css("width", "60%"); 
    // $("#main").css("background-color", "aqua");
});

$(".in5").focus(function() { 
    $(".im6").css("display", "block");
    $(".im6").animate({width:"60%",opacity:'1'},"slow");
    $(".im6").css("width", "60%"); 
    $(".im6").css("width", "60%"); 
    // $("#main").css("background-color", "#a8c753");
});

$(".in5").focusout(function() { 
    // $(this).next("span").css("display", "inline"); 
    $(".im6").css("display", "block");
    $(".im6").css("width", "60%"); 
    // $("#main").css("background-color", "aqua");
});

$(".in6").focus(function() { 
    $(".im7").css("display", "block");
    $(".im7").animate({width:"60%",opacity:'1'},"slow");
    $(".im7").css("width", "60%"); 
    $(".im7").css("width", "60%"); 
    // $("#main").css("background-color", "#a8c753");
});

$(".in6").focusout(function() { 
    // $(this).next("span").css("display", "inline"); 
    $(".im7").css("display", "block");
    $(".im7").css("width", "60%"); 
    // $("#main").css("background-color", "aqua");
});

$(".in7").focus(function() { 
    $(".im8").css("display", "block");
    $(".im8").animate({width:"60%",opacity:'1'},"slow");
    $(".im8").css("width", "60%"); 
    $(".im8").css("width", "60%"); 
    // $("#main").css("background-color", "#a8c753");
});

$(".in7").focusout(function() { 
    // $(this).next("span").css("display", "inline"); 
    $(".im8").css("display", "block");
    $(".im8").css("width", "60%"); 
    // $("#main").css("background-color", "aqua");
});

$(".in8").focus(function() { 
    $(".im9").css("display", "block");
    $(".im9").animate({width:"60%",opacity:'1'},"slow");
    $(".im9").css("width", "60%"); 
    $(".im9").css("width", "60%"); 
    // $("#main").css("background-color", "#a8c753");
});

$(".in8").focusout(function() { 
    // $(this).next("span").css("display", "inline"); 
    $(".im9").css("display", "block");
    $(".im9").css("width", "60%"); 
    // $("#main").css("background-color", "aqua");
});

});
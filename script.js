$("#hello").append(" <span>...Nope.</span>");
$("img").attr("src", "cool1.png");
$("img").removeClass("tableimg");
$("img").addClass("cool");
$(".cool").css({"width": "200px"});

$("#demo").html("<b>Lol</b> what's going on in here <em>huh??</em>");
$("#demo2").text("<b>Lol</b> what's going on in here <em>huh??</em>");
$("#demo2").addClass("moi");
$("#demo2").before("<h4 class='title'>This is how it looks like in editor:</h4>");

$(function(){
    let divi = $("<div class='new-div'></div>").html("This is a new div created with jQuery");
    $("#demo2").after(divi); 
});

$(function() {
    let slideIt = $("<br /> <br /><div id='slideIt'></div>").html("<p>Expand Content</p>");
    $(".todo-wrapper").after(slideIt);
});

$(function() {
    let expandableContent = $("<div id='text-area'></div>").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis imperdiet tellus non laoreet. Suspendisse sit amet diam sit amet libero pretium tristique. Morbi tristique cursus mi, ac venenatis est mattis in. Integer quis elementum libero. Aliquam eleifend lacinia orci bibendum finibus. Nullam eget tristique nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam non diam faucibus neque vulputate auctor fermentum eu ipsum. Maecenas sit amet nisl ut risus laoreet aliquet a id quam. Nullam eget sem vitae urna dapibus iaculis. Proin vel venenatis leo, sed hendrerit mauris.</p>");
    $("#slideIt").after(expandableContent);
});

$(function() {
    $("#slideIt").click(function() {
        $("#text-area").slideToggle(500);
    });
});

$(function() {
    let hideThis = $("<br /> <br /><div id='hideMe'></div>").html("Now I'm here!");
    $("#text-area").after(hideThis); 
});

$(function() {
    let hideButton = $("<br /> <p id='hideMe-click'></p>").html("Click!");
    $("#hideMe").after(hideButton); 
});

$(function(){
    $("#hideMe-click").click(function() {
        $("#hideMe").fadeToggle(1000);
    });
});

$(function() {
    let footer = $("<footer></footer>").html("This is footer.");
    $(".content-wrapper").after(footer);
});

$(function() {
    $("#color-button").click(function() {
        $(".new-div").toggleClass("bgcolor");
    });
});

$(function() {
    $("#delete-button").click(function() {
        $("body").empty();
        alert("You fool!");
    });
});

$(function() {
    $("#demo").click(function() {
        $("#demo").text("<b>Lol</b> what's going on in here <em>huh??</em>");
        $("#demo").click(function(){
            $("#demo").html("<b>Lol</b> what's going on in here <em>huh??</em>");
        });
    });
});

$(function() {
    $("#add").on("click", function() {
        let val = $("input").val();
        if(val !== '') {
            let elem = $("<li></li>").text(val);
            $(elem).append("<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("input").val("");
            $(".rem").on("click", function() {
                $(this).parent().remove();
            });
        }
    });
});

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
    let hideThis = $("<br /> <br /><div id='hideMe'></div>").html("Now I'm here!");
    $(".todo-wrapper").after(hideThis); 
});

$(function() {
    let hideButton = $("<br /> <p id='hideMe-click'></p>").html("Click!");
    $("#hideMe").after(hideButton); 
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

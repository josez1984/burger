$(document).ready(function() {    
    $("form").on("submit", function(e) {
        e.preventDefault();
        if(!$("#input-burger-name").val()) {
            return alert("Enter a burger name");
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: { 
                name: $("#input-burger-name").val() 
            }
        }).then(function() {
            location.reload();
        })
    });

    $("#ul-burgers").on("click", ".btn-burger-eat", function() {
        $.ajax("/api/burgers/eat", {
            type: "POST",
            data : {
                id: $(this).attr("data-id")
            }
        }).then(function() {
            location.reload();
        })
    })

});
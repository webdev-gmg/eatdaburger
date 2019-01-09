// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");
        console.log(id);
        let newDevoured = $(this).data("newdevoured");

        let newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(location.reload());
    });

    $("#submitBurger").on("click", function (event) {
        event.preventDefault();

        let newburger = {
            name: $("#burgerName").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(location.reload());
    });
});
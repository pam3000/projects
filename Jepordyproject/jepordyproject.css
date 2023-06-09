$(document).ready(function() {
    // Fetch the questions from a JSON file
    $.ajax({
        url: "questions.json",
        dataType: "json",
        success: function(data) {
            createBoard(data);
        },
        error: function() {
            alert("Failed to load questions.");
        }
    });

    // Create the game board dynamically
    function createBoard(categories) {
        var board = $(".board");

        categories.forEach(function(category) {
            var categoryElement = $("<div>").addClass("category").text(category.name);
            board.append(categoryElement);

            category.questions.forEach(function(question) {
                var questionElement = $("<div>").addClass("question").text("Click to reveal question");
                categoryElement.append(questionElement);

                questionElement.click(function() {
                    questionElement.text(question.question);
                    questionElement.off("click");
                });
            });
        });
    }
});

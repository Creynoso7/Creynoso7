    $(document).ready(function() {
    var answers = {
        q1: "Arteries",
        q2: "Tunica interna",
        q3: "4",
        q4: "4",
        q5: "4"
    };

    $('#submitQuiz').click(function() {
        var score = 0;
        var totalQuestions = 5;

        if ($('input[name="q1"]:checked').val() === answers.q1) {
            score++;
        }
        if ($('input[name="q2"]:checked').val() === answers.q2) {
            score++;
        }
        if ($('input[name="q3"]:checked').val() === answers.q3) {
            score++;
        }
        if ($('input[name="q4"]:checked').val() === answers.q4) {
            score++;
        }
        if ($('input[name="q5"]:checked').val() === answers.q5) {
            score++;
        }
            
        $('#result').html("You scored " + score + " out of " + totalQuestions);
    });
});

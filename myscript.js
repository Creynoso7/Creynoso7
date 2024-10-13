        $(document).ready(function() {
            var answers = {
                q1: "Arteries",
                q2: "4"
            };

            $('#submitQuiz').click(function() {
                var score = 0;
                var totalQuestions = 2;

                if ($('input[name="q1"]:checked').val() === answers.q1) {
                    score++;
                }
                if ($('input[name="q2"]:checked').val() === answers.q2) {
                    score++;
                }

                $('#result').html("You scored " + score + " out of " + totalQuestions);
            });
        });

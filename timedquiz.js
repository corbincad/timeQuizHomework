// var startButton = document.getElementById("startButton");
// var timeCount = document.getElementById("timeCount");
// var questions = document.getElementById("questions");
var card = $("#quiz-area")
var myQuestions = [

    {
        title: "Wrapping text in quotes turns the text into a:",
        choices: ["string", "boolean", "quotes"],
        answer: "string",
    },
    {
        title: "Does JavaScript use camel notation?",
        choices: ["no", "yes", "camels scare me"],
        answer: "yes",
    },
    {
        title: "Where is a good resource for finding bugs in code?",
        choices: ["Dreams", "Under a log", "'Inspect' tool"],
        answer: "'Inspect' tool",
    }]

        var timer;

        var game = {correct:0, incorrect:0, count:5, 
            countdown: function() {
                game.counter--;
                $("#counter-number").html(game.counter);
                if (game.counter === 0) {
                  game.done();
                }
              }, 

              start: function(){
                  timer = setInterval(game.countdown, 1000);
                $("#sub-wrapper").prepend('<h2>Timer:<span id="counter-number">5</span></h2>');
                $("#start").remove();
                for (var i = 0; i < myQuestions.length; i++){
                    card.append ("<h2>" + myQuestions[i].title + "</h2>")
                    for (var j = 0; j <myQuestions[i].choices.length; j++){
                        card.append("<input type='radio' name='question-" + i +
                        "' value='" + myQuestions[i].choices + "''>" + myQuestions[i].choices[j]);
                    }}
                    card.append("<button id='done'>done</button>")
                },

                done: function() {
                    var inputs = card.children("input:checked");
                    for (var i = 0; i < inputs.length; i++) {
                      if ($(inputs[i]).val() === myQuestions[i].answer) {
                        game.correct++;
                      } else {
                        game.incorrect++;
                      }
                    }
                    this.result();
                  },
                  result: function() {
                    clearInterval(timer);
                    $("#sub-wrapper h2").remove();
                    card.html("<h2>All Done!</h2>");
                    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
                    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
                  }
                };
                // CLICK EVENTS
                $(document).on("click", "#start", function() {
                  game.start();
                });
                $(document).on("click", "#done", function() {
                  game.done();
                });


        
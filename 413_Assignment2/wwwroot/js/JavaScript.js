
function calcGrades() {

    var assign;
    var proj;
    var quiz;
    var exam;
    var intexScore;

    assign = parseInt(document.getElementById("assignments").value) * .5;
    proj = parseInt(document.getElementById("projects").value) * .1;
    quiz = parseInt(document.getElementById("quizzes").value) * .1;
    exam = parseInt(document.getElementById("exams").value) * .2;
    intexScore = parseInt(document.getElementById("intex").value) * .1;

    if (!(assign > 0 && assign <= 50)) {
        alert("assignments grade is not filled out correctly");
        return false;
    }
    else if (!(proj >= 0 && proj <= 10)) {
        alert("project grades is not filled out correctly")
        return false;
    }
    else if (!(quiz >= 0 && quiz <= 10)) {
        alert("quiz grade is not filled out correctly");
        return false;
    }
    else if (!(exam >= 0 && exam <= 20)) {
        alert("exam grade is not filled out correctly");
        return false;
    }
    else if (!(intexScore >= 0 && intexScore <= 10)) {
        alert("Intex grade is not filled out correctly")
        return false;
    }


    var overall = assign + proj + quiz + exam + intexScore;

    alert("Overall Score: " + overall + "%");
}





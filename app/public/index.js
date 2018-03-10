
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    questions: [
        {
            type: "radiogroup",
            name: "car",
            title: "How clean is your bathroom at this very moment?",
            isRequired: true,
            colCount: 4,
            choices: [
                "Fithy - I am a bit of a slob.",
                "Meh - too tired to clean it today.",
                "Decent - you never do know when mom will stop by.",
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});

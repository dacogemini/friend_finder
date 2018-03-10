Survey
    .StylesManager
    .applyTheme("default");

var json = {


    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "checkbox",
        name: "How clean is your bathroom right now?",
        choices: [
         "Filthy",
         "Meh - could be better",
         "Spotless"
        ]
       },
       {
        type: "checkbox",
        name: "How important is money to you?",
        choices: [
         "Everything - can't live without it",
         "Somewhat - there are other things more important",
         "Not at all"
        ]
       },
       {
        type: "radiogroup",
        name: "clean",
        title: "How clean is your bathroom right now?",
        isRequired: true,
        colCount: 4,
        choices: [
            "Spotless",
            "Meh - Could be better",
            "Don't ask, don't tell",
            "Fithy - I am a lover not a cleaner",
        ]
       },
       {
        type: "radiogroup",
        name: "What is your idea of a good night out?",
        choices: [
         "Theater or Opera",
         "Romantic Dinner",
         "Concert",
         "Karaoke at the local pub"
        ]
       }
      ]
     }
    ]
   }
window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
const model = {
    // app nivå ting
    app: {
        currentPage: 'mainPage',
        loggedInUser: 'admin',

        userID: "admin",
        password: "team3erbest",
    },


    // inputfelter til hver side

    createPage: {
        title: 'Trivsel på jobb',
        question: 'Hvor fornøyd er du med dine kollegaer?',
        alts: 'Skriv inn alternativ...',

    },
    editCreatePage: {
        id: 1,
        title: '',
        question: '',
        answer: '',
    },
   // felles data

   pollsList: [
        {
            id: 1,
            title: model.createPage.title,
            totalVotes: 0,
            questions: [],
            votes: 0,
        },
   ],

   polls: [
       {
            title: "Skriv inn spørsmål...",
            alt1: {
                    name: 'Skriv inn alternativ...',

                  },
        },
    ],

    tempQuestions: [
            {
               question: 'Hvor mye liker du jobben din?',

               alts: [
                   "Lite",
                   "Middels",
                   "Mye",
                ],

            },
    ],

};







//  - - Team 3 er best - - //

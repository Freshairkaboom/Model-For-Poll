const model = {
    // app nivå ting
    app: {
        currentPage: 'mainView',
        loggedInUser: '',
        logInStatus: "Logg Ut",
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

    pollList: [
        {
            id: 1,
            title: 'Trivsel på jobb',
            totalVotes: 0,
            questions: [],
            votes: [],
        },
    ],

    tempQuestions: [
        {
            title: 'Trivsel på jobb',

            question: 'Hvor mye liker du jobben din?',

            alts: [
                "Lite",
                "Middels",
                "Mye",
            ],

        },
    ],

    userID: "admin",
    password: "team3erbest",

    //    polls: [
    //        {
    //             title: "Skriv inn spørsmål...",
    //             alt1: {
    //                     name: 'Skriv inn alternativ...',

    //                   },
    //         },
    //     ],



};







//  - - Team 3 er best - - //

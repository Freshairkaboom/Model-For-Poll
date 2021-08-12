function view() {

    switch (model.app.currentPage)
    {
        case 'mainView':
            mainView();
            break;

        case 'createPageView':
            createPageView();
            break;

        case 'answerPollView':
            answerPollView();
            break;

        case 'resultPageView':
            resultPageView();
            break;

        default:
            mainView();
            break;

    }

    // if (model.app.currentPage == 'mainView') mainView();
    // if (model.app.currentPage == 'createPageView') createPageView();
    // if (model.app.currentPage == 'answerPollView') answerPollView();
    // if (model.app.currentPage == 'resultPageView') resultPageView();
}
function mainView() {
    let app = document.getElementById('app');

    let html = `
        <h3>Admin</h3>

        ${buttonContainer()}

        <button>${model.app.logInStatus}</button>

        <div class="tableContainer">
            <div class="selectButtonContainer">
                ${createButtons()}
            </div>
            <div class="tableRowContainer">
                ${createTable()}
            </div>
        </div>

    `;

    app.innerHTML = html;
}

function createPageView() {

}

function answerPollView() {

}

function resultPageView() {

}


function buttonContainer() {

    if (model.loggedInUser == '') {
        return `
        <div class="buttonContainer">
            <button>Lag meningsmåling</button>
            <button>Steng meningsmåling</button>
            <button>Slett meningsmåling</button>
            <button>Se resultat</button>
        </div>
        `
    }
    else {
        return `
        <div class="buttonContainer">
            <button>Lag meningsmåling</button>
            <button>Steng meningsmåling</button>
            <button>Slett meningsmåling</button>
            <button>Se resultat</button>
        </div>
        `
    }
}

function createButtons() {

    let html = ``;

    for (i = 0; i < 5; i++) //model.pollList.length
    {
        html += `<button class="selectButton">Velg Poll ${i+1}</button>`;
    }

    return html;
}

function createTable() {

    let html = ``;

    for (i = 0; i < 5; i++) //model.pollList.length
    {
        html += pollData(i);
    }

    return html;
}

// sender med hvilken poll data skal hentes ifra. "Beskrivelse" og "Lenke" skal i stedet være data fra den spesifikke pollen
function pollData(poll) {
    return `
    <table style="width:100%">
    <tr>
      <th>Beskrivelse</th>
      <th><span>Lenke</span> <img class="cloud" src="/img/cloud.png"></th>
    </tr>`
}

{/* <span style="float: left">This is some text</span>
<span style="float: right"><img src="whatever.gif"></span> */}

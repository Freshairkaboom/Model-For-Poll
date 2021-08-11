const model = {
    // app-nivå ting
    app: {
        currentPage: 'main',
        loggedInUser: 'admin',
    },

    // inputfelter til hver side
    inputs: {
        productPage: {
            zipCode: 32,
            /*
                <input
                type"number"
                oninput="model.inputs.productPage.zipCode = this.valueAsNumber"
            */
           searchText: '',
        },
        shoppingCartPage: {

        },
        addPersonPage: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            /*
                const inputs = mode.inputs.addPersonPage;
                const newPerson = {
                    firstName: inputs.firstName,
                    ...
                };
                model.contacts.push(newPerson)
                inputs.firstName = '';
                ...

            */
        },
        editPersonPage: {
            id: 1,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            /*
                const inputs = mode.inputs.addPersonPage;
                const person = model.contacts.find(p=>p.id==inputs.id);
                person.firstName = inputs.firstName;
                ...
            */
        },
    },
    // felles data
    categories: [
        { id: 1, name: 'Gaming'},
        { id: 2, name: 'Gaming utstyr', parentId: 1},
        { id: 3, name: 'Gaming headset', parentId: 2},
    ],
    shoppingCart: [
        { productId: 1164911, count: 1, },
    ],
    products: [{
            id: 1164911,
            price: 700,
            fullprice: 1089,
            stock: 50,
            name: 'Razer BlackShark V2 Gaming Headset',
            description: 'Razer BlackShark V2 Gaming Headset 3.5mm minijack, dreibar mik, 7.1 surround gaming heradset',
            image: 'https://www.komplett.no/img/p/1200/1164911.jpg',
            categoryId: 3,
        }, ],
        contacts: [
            {firstName: 'Per', lastName: 'Olsen', email: '2@b.com', phone: '12345678',}
        ]

};

/*
    To spørsmål for hver side:
    1: Hvilke data trenger vi i Modellen for å kunne vise dette skjermbildet(query)
    2: Hva kan man gjøre på dette skjermbildes - og hvordan skal den andringen lagres i modellen?(command)
    3: Hvilke input-felt har vi på denne siden?
*/

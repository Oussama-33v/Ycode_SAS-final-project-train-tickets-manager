const prompte = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 0
    }
];

const tickets = [];
let count = 1;

function getUserInput(question) {
    let input = prompte(question);
    return input;
};

function printAllTrips() {
    console.log('*********** trajets disponibles **********');
    for (let trip in trips) {
        if (trips[trip].availableSeats > 0) {
            console.log(trips[trip].id,
                trips[trip].departure, '-->', trips[trip].destination,
                '\n Départ :', trips[trip].departureTime,
                '\n Arrivée :', trips[trip].arrivalTime,
                '\n Prix :', trips[trip].price,
                '\n Places disponibles :', trips[trip].availableSeats);
            console.log('___________________________________');
        }
        else {
            console.log(trips[trip].id,
                trips[trip].departure, '-->',
                trips[trip].destination,
                '\n Départ :', trips[trip].departureTime,
                '\n Arrivée :', trips[trip].arrivalTime,
                '\n Prix :', trips[trip].price,
                '\n Places disponibles :', 'no available places !');
            console.log('___________________________________');
        };
    };
};

function checkForTripsById(tripId, trips) {
    for (let trip in trips) {
        if (trips[trip].id === tripId) {
            return trips[trip];
        };
    };
    return null;
};

// function checkForAvailablePlaces(tripid, trips) {
//     for (let trip in trips) {
//         if (trips[trip].id === tripid) {);
//             return;
//         };
//     };

// };
function ticketGenerator(userName, tripFounded) {
    if (tripFounded === null) {
        return 'trip not found';
    }
    else if (tripFounded.availableSeats < 1) {
        return 'NO SEATS AVAILABLE FOR THE MOUMENT !!';
    }
    else {
        
        let ticket = {
            idTicket: count,
            userName: userName.toLowerCase(),
            start: tripFounded.departure,
            end: tripFounded.destination,
            tripId: tripFounded.id,
            seatNumber: 50 - tripFounded.availableSeats + 1,
            price: tripFounded.price
        };
        tickets.push(ticket);
        tripFounded.availableSeats -= 1;
        count ++;
        console.log('ticket generated with succes !');
        formatTicket(ticket);
        return;
    }
};

function formatTicket(ticket) {
    console.log(
        '---------------------------------------\n',
        'Ticket number :', ticket.idTicket, '\n',
        'Owner : ' , ticket.userName, '\n',
        ticket.start, ' -----> ', ticket.end, '\n',
        'Seat Number : ' , ticket.seatNumber, '\n',
        'Pice : ' , ticket.price , ' DH\n',
        '---------------------------------------');
};

function printTickets(arrayOfTickets) {
    console.log('============= TICKETS ============');
    for (let ticket in arrayOfTickets) {
        console.log(
            'Ticket number :' + arrayOfTickets[ticket].idTicket,
            'Owner :' + arrayOfTickets[ticket].userName,
            'Seat Number :' + arrayOfTickets[ticket].seatNumber,
            'Pice :' + arrayOfTickets[ticket].price + 'DH'
        );
    };
};

function canselTicket(teckitId, arrayOfTickets) {
    for (let ticket of arrayOfTickets) {
        if (ticket.idTicket === teckitId) {
            tickets.splice(teckitId -1, 1);
            return;
        };
    };
    return 'ticket not found !';
};

function searchTickertByUserName(username, arrayOfTickets) {
    let check;
    let ticketFounded = [];
    for (let ticket in tickets) {
        if (arrayOfTickets[ticket].userName === username.toLowerCase()) {
            check = true;
            ticketFounded.push(arrayOfTickets[ticket]);
        }
    }
    if (check) {
        return ticketFounded;
    }
    else {
        return 'ticket not found !';
    }
};

function filterTripsByStartCity(startCity, trips) {
    let citysfounded = [];
    for (let elem in trips) {
        if (trips[elem].departure === startCity) {
            citysfounded.push(trips[elem]);
        };
    };
    for (let city in citysfounded) {
        console.log('start :', citysfounded[city].departure, ' ------> ', citysfounded[city].destination,
            'Price :', citysfounded[city].price
        );

    };

};

function sortTripsByPrice(tripsSorted) {
    for (let i = 0; i < trips.length; i++) {
        for (let j = 0; j < tripsSorted.length - 1; j++) {
            if (tripsSorted[j].price > tripsSorted[j + 1].price) {
                let temp = tripsSorted[j];
                tripsSorted[j] = tripsSorted[j + 1];
                tripsSorted[j + 1] = temp;
            }
        }
    }
    return tripsSorted;
}

function printSortedtrips(trips){
    console.log('======= Trips Sorted ========');
    for(let trip in trips){
        console.log('start :',trips[trip].departure  ,' ====> ', 'end :',  trips[trip].destination, 'price :', trips[trip].price);
    }
    return;
}

let generalInput;
do {
    console.log('====================================');
    console.log('        RAILWAY MANAGER'             );
    console.log('====================================');

    console.log(
        '1 >> print all trips available:\n',
        '2 >> Buy a ticket :\n',
        '3 >> print all tickets :\n',
        '4 >> Cansle a ticket :\n',
        '5 >> Search for a teckit by owner username :\n',
        '6 >> filter trips\n',
        '7 >> Sort trip\n',
        '0 >> close app\n'
    );
    generalInput = +getUserInput('start App with your choices :  ');

    switch (generalInput) {
        case 1:
            printAllTrips();
            break;
        case 2:
            let id = +getUserInput('enter an identifire to start searching for trips !');
            let username = getUserInput('enter your full name !'.toLowerCase());
            let checkForTrip = checkForTripsById(id, trips);
            let ticket = ticketGenerator(username, checkForTrip);
            console.log(ticket);
            break;
        case 3:
            let listTickets = printTickets(tickets);
            console.log(listTickets);
            break;
        case 4:
            let idToCansel = +getUserInput('enter your ticket ID to cansel it !');
            let ticketCansled = canselTicket(idToCansel, tickets);
            console.log(ticketCansled);
            break;
        case 5:
            let searchuser = getUserInput('enter your username to start searching for your ticket');
            let tickedFounded = searchTickertByUserName(searchuser, tickets);
            console.log(tickedFounded);
            break;
        case 6:
            let city = getUserInput('enter city name to start searchint for available trips !');
            let cityfound = filterTripsByStartCity(city, trips);
            console.log(cityfound);
            break;
        case 7:
            let tripsToSort = sortTripsByPrice(trips);
            let tripsSorted = printSortedtrips(tripsToSort)
            console.log(tripsSorted);
            break;
        case 0:
            console.log('goodbye see you soon !');    
        default :
            console.log('Chois not found try again !');
    }
}
while (generalInput != 0)
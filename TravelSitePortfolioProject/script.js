//DUMMY DATA

const propertyListings = [
    {id: 1, price: 200, location: 'Lancashire, England',country: 'england', guests: '6', rating: '3.2', name: 'Uk Property 1', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1607900840367-a83dcd63296d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dWslMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 2, price: 62, location: 'Malmo, Sweden', country: 'sweden', guests: '2', rating: '4.0', name: 'Sweden Property 1', desc: 'A Lovely Property In The Heart of Sweden!', photo: 'https://images.unsplash.com/photo-1543766232-e46dc5f1e1e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {id: 3, price: 152, location: 'Milan, Italy', country: 'italy',  guests: '4', rating: '1.2', name: 'Italy Property 1', desc: 'A Lovely Property In The Heart of Italy!', photo: 'https://images.unsplash.com/photo-1631821938164-9383abac340c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbGlhbiUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 4, price: 17, location: 'Worcester, England', country: 'england',  guests: '12', rating: '5.0', name: 'Uk Property 2', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1604166168285-173fa2afad18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dWslMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 5, price: 44, location: 'Berlin, Germany', country: 'germany',  guests: '5', rating: '2.2', name: 'Germany Property 1', desc: 'A Lovely Property In The Heart of Germany!', photo: 'https://images.unsplash.com/photo-1552903023-dc7b4c9fa5bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVybGluJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'},
    {id: 6, price: 12, location: 'Copenhagen, Denmark', country: 'denmark',  guests: '2', rating: '1.5', name: 'Denmark Property 1', desc: 'A Lovely Property In The Heart of Denmark!', photo: 'https://images.unsplash.com/photo-1641735476734-8b2bb99e789f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {id: 7, price: 98, location: 'Bern, Switzerland', country: 'switzerland',  guests: '2', rating: '5.0', name: 'Switzerland Property 1', desc: 'A Lovely Property In The Heart of Switzerland!', photo: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'},
    {id: 8, price: 67, location: 'Dublin, Ireland', country: 'ireland',  guests: '6', rating: '4.5', name: 'Ireland Property 1', desc: 'A Lovely Property In The Heart of Ireland!', photo: 'https://images.unsplash.com/photo-1535901894529-2c756465f473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVibGluJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'},
    {id: 9, price: 94, location: 'Edinburgh, Scotland', country: 'scotland',  guests: '8', rating: '3.6', name: 'Scotland Property 1', desc: 'A Lovely Property In The Heart of Scotland!', photo: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'},
    {id: 10, price: 199, location: 'London, England', country: 'england',  guests: '4', rating: '4.7', name: 'England Property 3', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1550647512-8b8a24d4f646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'},
    {id: 11, price: 1456, location: 'Cornwall, England', country: 'england',  guests: '3', rating: '3.9', name: 'England Property 4', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1579297206620-c410c4af42e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {id: 12, price: 63, location: 'Munich, Germany', country: 'germany',  guests: '6', rating: '2.0', name: 'Germany Property 2', desc: 'A Lovely Property In The Heart of Germany!', photo: 'https://images.unsplash.com/photo-1591170715502-fbc32adc4f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'},
    {id: 13, price: 101, location: 'Florence, Italy', country: 'italy',  guests: '10', rating: '3.4', name: 'Italy Property 2', desc: 'A Lovely Property In The Heart of Italy!', photo: 'https://images.unsplash.com/photo-1579707501134-df74af0aeceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 14, price: 112, location: 'Naples, Italy', country: 'italy',  guests: '2', rating: '4.9', name: 'Italy Property 3', desc: 'A Lovely Property In The Heart of Italy!', photo: 'https://images.unsplash.com/photo-1558717574-d1ab176b0a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'},
    {id: 15, price: 245, location: 'Aalborg, Denmark', country: 'denmark',  guests: '4', rating: '3.2', name: 'Denmark Property 3', desc: 'A Lovely Property In The Heart of Denmark!', photo: 'https://images.unsplash.com/photo-1641735476702-0272b191c37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRhbmlzaCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 16, price: 72, location: 'Rome, Italy', country: 'Italy',  guests: '6', rating: '4.5', name: 'Italy Property 4', desc: 'A Lovely Property In The Heart of Italy!', photo: 'https://images.unsplash.com/photo-1512299643965-14849b46c71a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'},
    {id: 17, price: 101, location: 'Madrid, Spain', country: 'spain',  guests: '5', rating: '3.0', name: 'Spain Property 1', desc: 'A Lovely Property In The Heart of Spain!', photo: 'https://images.unsplash.com/photo-1617141372324-a37d164e08ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhbmlzaCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 18, price: 199, location: 'Barcelona, Spain', country: 'spain',  guests: '2', rating: '5.0', name: 'Spain Property 2', desc: 'A Lovely Property In The Heart of Spain!', photo: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80'},
    {id: 19, price: 245, location: 'York, England', country: 'england',  guests: '4', rating: '3.2', name: 'England Property 5', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1521543387600-c745f8e83d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'},
    {id: 20, price: 167, location: 'Zürich, Switzerland', country: 'switzerland',  guests: '4', rating: '1.1', name: 'Switzerland Property 2', desc: 'A Lovely Property In The Heart of Switzerland!', photo: 'https://images.unsplash.com/photo-1659784314587-eee44d3426c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {id: 21, price: 38, location: 'Cork, Ireland', country: 'ireland',  guests: '5', rating: '5.0', name: 'Ireland Property 2', desc: 'A Lovely Property In The Heart of Ireland!', photo: 'https://images.unsplash.com/photo-1565265652027-d0a5fdf66887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'},
    {id: 22, price: 905, location: 'Munich, Germany', country: 'germany',  guests: '8', rating: '3.5', name: 'Germany Property 3', desc: 'A Lovely Property In The Heart of Germany!', photo: 'https://images.unsplash.com/photo-1591170715502-fbc32adc4f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'},
    {id: 23, price: 444, location: 'Copenhagen, Denmark', country: 'denmark',  guests: '2', rating: '4.6', name: 'Denmark Property 4', desc: 'A Lovely Property In The Heart of Denmark!', photo: 'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRhbmlzaCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 24, price: 125, location: 'London, England', country: 'england',  guests: '3', rating: '2.2', name: 'England Property 6', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1539081628726-fabb7960a9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5nbGlzaCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 25, price: 99, location: 'Birmingham, England', country: 'england',  guests: '2', rating: '3.1', name: 'England Property 7', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1619103679013-5d489f7c9104?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZW5nbGlzaCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 26, price: 56, location: 'Seville, Spain', country: 'spain',  guests: '4', rating: '3.8', name: 'Spain Property 3', desc: 'A Lovely Property In The Heart of Spain!', photo: 'https://images.unsplash.com/photo-1575424909972-82cf8c74e559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'},
    {id: 27, price: 660, location: 'Stockholm, Sweden', country: 'sweden',  guests: '12', rating: '3.9', name: 'Sweden Property 2', desc: 'A Lovely Property In The Heart of Sweden!', photo: 'https://images.unsplash.com/photo-1563629149048-dd394ea56477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'},
    {id: 28, price: 339, location: 'Glasgow, Scotland', country: 'scotland',  guests: '10', rating: '4.1', name: 'Scotland Property 2', desc: 'A Lovely Property In The Heart of Scotland!', photo: 'https://images.unsplash.com/photo-1544372189-05953ca2f903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3003&q=80'},
    {id: 29, price: 89, location: 'Edinburgh, Scotland', country: 'scotland',  guests: '5', rating: '0.6', name: 'Scotland Property 3', desc: 'A Lovely Property In The Heart of Scotland!', photo: 'https://images.unsplash.com/photo-1479381554196-c22a51a2ff5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2NvdHRpc2glMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 30, price: 76, location: 'Leeds, England', country: 'england',  guests: '8', rating: '5.0', name: 'England Property 8', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1604166167486-af78ebd50897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'},
    {id: 31, price: 109, location: 'Burton, England', country: 'england',  guests: '4', rating: '4.9', name: 'England Property 9', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1606312321098-190837c01672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVuZ2xpc2glMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 32, price: 166, location: 'Barcelona, Spain', country: 'spain',  guests: '2', rating: '2.5', name: 'Spain Property 4', desc: 'A Lovely Property In The Heart of Spain!', photo: 'https://images.unsplash.com/photo-1495563893439-5e257f2bc3ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {id: 33, price: 295, location: 'Copenhagen, Denmark', country: 'denmark',  guests: '2', rating: '2.0', name: 'Denmark Property 5', desc: 'A Lovely Property In The Heart of Denmark!', photo: 'https://images.unsplash.com/photo-1617393382042-78ef6b24a356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'},
    {id: 34, price: 53, location: 'Malmo, Sweden', country: 'sweden',  guests: '12', rating: '3.0', name: 'Sweden Property 3', desc: 'A Lovely Property In The Heart of Sweden!', photo: 'https://images.unsplash.com/photo-1557434440-27ba0f1654e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'},
    {id: 35, price: 199, location: 'Berlin, Germany', country: 'germany',  guests: '6', rating: '3.8', name: 'Germany Property 4', desc: 'A Lovely Property In The Heart of Germany!', photo: 'https://images.unsplash.com/photo-1568454701425-7884edc57a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'},
    {id: 36, price: 12, location: 'Frankfurt, Germany', country: 'germany',  guests: '7', rating: '4.6', name: 'Germany Property 5', desc: 'A Lovely Property In The Heart of Germany!', photo: 'https://images.unsplash.com/photo-1569370029765-33aaab1f4851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'},
    {id: 37, price: 404, location: 'Galway, Ireland', country: 'ireland',  guests: '4', rating: '1.1', name: 'Ireland Property 3', desc: 'A Lovely Property In The Heart of Ireland!', photo: 'https://images.unsplash.com/photo-1587397070584-40a87629cbd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXJpc2glMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 38, price: 789, location: 'Aalborg, Denmark', country: 'denmark',  guests: '2', rating: '0.2', name: 'Denmark Property 6', desc: 'A Lovely Property In The Heart of Denmark!', photo: 'https://images.unsplash.com/photo-1650476973747-b7b2163a8bf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRhbmlzaCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 39, price: 666, location: 'Bradford, England', country: 'england',  guests: '1', rating: '0.0', name: 'England Property 10', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1587994786956-55fbdb9315aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291bmNpbCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},



]

//MAP LISTINGS TO PAGE

let listingDetails = propertyListings.map(({location, guests,rating, name,desc,photo,price})=> {
    return `
    <div class="columnFlex" id="masterListingContainer">
    <div class="listingImageContainer" id="listingImageContainer">
        <img src='${photo}' class='listingImage' />
    </div>
    <div class="listingInfoContainer">
        <div class="standardFlex">
        <h1 class="listingTitle">${location}</h1>
        <div class="listingRating">${rating}/5.0</div>
        </div>
        <div class="listingNameandDesc">${name}</div>
        <div class="listingNameandDesc">${desc}</div>
        <div class="listingPrice">£${price} Per Night</div>
    </div>
    </div>
    `
});

let joinedDetails = listingDetails.join('');
let listingContainer = document.getElementById('listingContainer');
listingContainer.innerHTML = joinedDetails

// EXPAND/CLOSE WHERE MENU

let whereMenu = 1;

const whereFilter = () => {

    if (whereMenu === 1) {
        document.getElementById('whereOptions').style.transform = 'translateY(10vh';
        document.getElementById('listingContainer').style.transform = 'translateY(10vh)';
        whereMenu++;
        return
    } if (whereMenu === 2) {
        document.getElementById('whereOptions').style.transform = 'translateY(-10vh';
        document.getElementById('listingContainer').style.transform = 'translateY(0vh)';
        whereMenu--;
        return
    }
}

// GUESTS FILTER

const showLoader = () => {
    document.querySelector('.loading').style.visibility = 'visible'
    document.querySelector('.loading').style.opacity = 1; 
}

const hideLoader = () => {
    document.querySelector('.loading').style.visibility = 'hidden'
    document.querySelector('.loading').style.opacity = 0;
}



document.getElementById('guestInput').addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let value = document.getElementById('guestInput').value;
        if (value.length === 0) {
            console.log('nothing found')
            listingContainer.innerHTML = joinedDetails
            return
        } else {  

            showLoader();

            setTimeout(hideLoader, 1000)

            const matchingGuests = propertyListings.filter(property => property.guests === value)

            let guestListingDetails = matchingGuests.map(({location, guests ,rating, name,desc,photo,price})=> {
                return `
                <div class="columnFlex" id="masterListingContainer">
                <div class="listingImageContainer" id="listingImageContainer">
                    <img src='${photo}' class='listingImage' />
                </div>
                <div class="listingInfoContainer">
                    <div class="standardFlex">
                    <h1 class="listingTitle">${location}</h1>
                    <div class="listingRating">${rating}/5.0</div>
                    </div>
                    <div class="listingNameandDesc">${name}</div>
                    <div class="listingNameandDesc">${desc}</div>
                    <div class="listingPrice">£${price} Per Night</div>
                </div>
                </div>
                `
            });

            let joinedGuestDetails = guestListingDetails.join('');
            let listingContainer = document.getElementById('listingContainer');
            listingContainer.innerHTML = joinedGuestDetails
        }
    }
});

//WHERE FILTER

const whereButton = (clickedId) => {
    if (document.getElementById('guestInput').value.length === 0) {

    if (clickedId === 'everywhere') {

        showLoader();

        setTimeout(hideLoader, 1000)

        let everywhereListings = propertyListings.map(({location, guests,rating, name,desc,photo,price})=> {
            return `
            <div class="columnFlex" id="masterListingContainer">
            <div class="listingImageContainer" id="listingImageContainer">
                <img src='${photo}' class='listingImage' />
            </div>
            <div class="listingInfoContainer">
                <div class="standardFlex">
                <h1 class="listingTitle">${location}</h1>
                <div class="listingRating">${rating}/5.0</div>
                </div>
                <div class="listingNameandDesc">${name}</div>
                <div class="listingNameandDesc">${desc}</div>
                <div class="listingPrice">£${price} Per Night</div>
            </div>
            </div>
            `
        });

        let everywhereJoinedDetails = everywhereListings.join('');
        let listingContainer = document.getElementById('listingContainer');
        listingContainer.innerHTML = everywhereJoinedDetails

        document.getElementById('whereOptions').style.transform = 'translateY(-10vh';
        document.getElementById('listingContainer').style.transform = 'translateY(0vh)';
        whereMenu--;

        return
    } else {

        showLoader();

        setTimeout(hideLoader, 1000)

    let matchingLocations = propertyListings.filter(listing => listing.country === clickedId)
    let locationListingDetails = matchingLocations.map(({location, guests ,rating, name,desc,photo,price})=> {
        return `
        <div class="columnFlex" id="masterListingContainer">
        <div class="listingImageContainer" id="listingImageContainer">
            <img src='${photo}' class='listingImage' />
        </div>
        <div class="listingInfoContainer">
            <div class="standardFlex">
            <h1 class="listingTitle">${location}</h1>
            <div class="listingRating">${rating}/5.0</div>
            </div>
            <div class="listingNameandDesc">${name}</div>
            <div class="listingNameandDesc">${desc}</div>
            <div class="listingPrice">£${price} Per Night</div>
        </div>
        </div>
        `
    });

    let joinedLocationDetails = locationListingDetails.join('');
    let listingContainer = document.getElementById('listingContainer');
    listingContainer.innerHTML = joinedLocationDetails
    document.getElementById('whereOptions').style.transform = 'translateY(-10vh';
    document.getElementById('listingContainer').style.transform = 'translateY(0vh)';
    whereMenu--;
}} else {
    if (clickedId === 'everywhere'){

        showLoader();

        setTimeout(hideLoader, 1000)
        
        const everywhereGuestsArray = propertyListings.filter(property => property.guests === document.getElementById('guestInput').value )

        let guestListingDetails = everywhereGuestsArray.map(({location, guests ,rating, name,desc,photo,price})=> {
            return `
            <div class="columnFlex" id="masterListingContainer">
            <div class="listingImageContainer" id="listingImageContainer">
                <img src='${photo}' class='listingImage' />
            </div>
            <div class="listingInfoContainer">
                <div class="standardFlex">
                <h1 class="listingTitle">${location}</h1>
                <div class="listingRating">${rating}/5.0</div>
                </div>
                <div class="listingNameandDesc">${name}</div>
                <div class="listingNameandDesc">${desc}</div>
                <div class="listingPrice">£${price} Per Night</div>
            </div>
            </div>
            `
        });

        let joinedGuestDetails = guestListingDetails.join('');
        let listingContainer = document.getElementById('listingContainer');
        listingContainer.innerHTML = joinedGuestDetails

    } else {

        showLoader();

        setTimeout(hideLoader, 1000)
    const guestsArray = propertyListings.filter(property => property.guests === document.getElementById('guestInput').value )
    const guestsandlocationArray = guestsArray.filter(property => property.country === clickedId)

    let guestListingDetails = guestsandlocationArray.map(({location, guests ,rating, name,desc,photo,price})=> {
        return `
        <div class="columnFlex" id="masterListingContainer">
        <div class="listingImageContainer" id="listingImageContainer">
            <img src='${photo}' class='listingImage' />
        </div>
        <div class="listingInfoContainer">
            <div class="standardFlex">
            <h1 class="listingTitle">${location}</h1>
            <div class="listingRating">${rating}/5.0</div>
            </div>
            <div class="listingNameandDesc">${name}</div>
            <div class="listingNameandDesc">${desc}</div>
            <div class="listingPrice">£${price} Per Night</div>
        </div>
        </div>
        `
    });

    let joinedGuestDetails = guestListingDetails.join('');
    let listingContainer = document.getElementById('listingContainer');
    listingContainer.innerHTML = joinedGuestDetails
    
}}
}



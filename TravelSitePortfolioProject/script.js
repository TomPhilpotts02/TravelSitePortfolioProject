const propertyListings = [
    {id: 1, price: 200, location: 'Lancashire, England', guests: 6, rating: '3.2', name: 'Uk Property 1', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1607900840367-a83dcd63296d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dWslMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 2, price: 62, location: 'Malmo, Sweden', guests: 2, rating: '4.0', name: 'Sweden Property 1', desc: 'A Lovely Property In The Heart of Sweden!', photo: 'https://images.unsplash.com/photo-1543766232-e46dc5f1e1e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {id: 3, price: 152, location: 'Milan, Italy', guests: 4, rating: '1.2', name: 'Italy Property 1', desc: 'A Lovely Property In The Heart of Italy!', photo: 'https://images.unsplash.com/photo-1631821938164-9383abac340c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbGlhbiUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 4, price: 17, location: 'Worcester, England', guests: 12, rating: '5.0', name: 'Uk Property 2', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1604166168285-173fa2afad18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dWslMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 5, price: 44, location: 'Berlin, Germany', guests: 5, rating: '2.2', name: 'Germany Property 1', desc: 'A Lovely Property In The Heart of Germany!', photo: 'https://images.unsplash.com/photo-1552903023-dc7b4c9fa5bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVybGluJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'},
    {id: 6, price: 12, location: 'Copenhagen, Denmark', guests: 2, rating: '1.5', name: 'Denmark Property 1', desc: 'A Lovely Property In The Heart of Denmark!', photo: 'https://images.unsplash.com/photo-1641735476734-8b2bb99e789f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {id: 7, price: 98, location: 'Bern, Switzerland', guests: 2, rating: '5.0', name: 'Switzerland Property 1', desc: 'A Lovely Property In The Heart of Switzerland!', photo: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'},
    {id: 8, price: 67, location: 'Dublin, Ireland', guests: 6, rating: '4.5', name: 'Ireland Property 1', desc: 'A Lovely Property In The Heart of Ireland!', photo: 'https://images.unsplash.com/photo-1535901894529-2c756465f473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVibGluJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'},
    {id: 9, price: 94, location: 'Edinburgh, Scotland', guests: 8, rating: '3.6', name: 'Scotland Property 1', desc: 'A Lovely Property In The Heart of Scotland!', photo: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'},
    {id: 10, price: 199, location: 'London, England', guests: 4, rating: '4.7', name: 'England Property 3', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1550647512-8b8a24d4f646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'},
    {id: 11, price: 1456, location: 'Cornwall, England', guests: 3, rating: '3.9', name: 'England Property 4', desc: 'A Lovely Property In The Heart of England!', photo: 'https://images.unsplash.com/photo-1579297206620-c410c4af42e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {id: 12, price: 63, location: 'Munich, Germany', guests: 6, rating: '2.0', name: 'Germany Property 2', desc: 'A Lovely Property In The Heart of Germany!', photo: 'https://images.unsplash.com/photo-1591170715502-fbc32adc4f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'},
    {id: 13, price: 101, location: 'Florence, Italy', guests: 10, rating: '3.4', name: 'Italy Property 2', desc: 'A Lovely Property In The Heart of Italy!', photo: 'https://images.unsplash.com/photo-1579707501134-df74af0aeceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {id: 14, price: 112, location: 'Naples, Italy', guests: 2, rating: '4.9', name: 'Italy Property 3', desc: 'A Lovely Property In The Heart of Italy!', photo: 'https://images.unsplash.com/photo-1558717574-d1ab176b0a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'},

]

let listingDetails = propertyListings.map(({location, guests,rating, name,desc,photo,price})=> {
    return `
    <div class="columnFlex" id="masterListingContainer">
    <div class="listingImageContainer">
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
console.log(joinedDetails)

let listingContainer = document.getElementById('listingContainer');
listingContainer.innerHTML = joinedDetails

const whereFilter = () => {
    
}
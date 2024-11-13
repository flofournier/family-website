// script.js

// Initialize the map and set its view to a central location (latitude, longitude) and zoom level
const map = L.map('map').setView([48.8566, 2.3522], 2); // Coordinates here are for Paris with a zoom level of 2

// Load and display map tiles from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Array of family photos with their location data
const familyPhotos = [
    {
       location: [37.7749, -122.4194], // San Francisco
        imageUrl: 'images/SF.jpg', // Path to the photo in your images folder
        description: 'SF'
    },
    {
        location: [42.2888, 3.2783], // Cadaqués, Spain
        imageUrl: 'images/Cadaques.jpg',
        description: 'Cadaques'
    },
    {
        location: [37.8651, -119.5383], // Yosemite National Park
        imageUrl: 'images/Yosemite.jpg',
        description: 'Yosemite'
    },
    // Add more photos with coordinates and descriptions as needed
];

// Add markers for each photo
familyPhotos.forEach(photo => {
    const marker = L.marker(photo.location).addTo(map);
    marker.bindPopup(`
        <div style="text-align:center;">
            <img src="${photo.imageUrl}" alt="${photo.description}" style="width:150px; height:auto;">
            <p>${photo.description}</p>
        </div>
    `);
});

// H Noh
// ITMD 541-01 Graduate Student

// Dictionary to store latitude and longitude for each cities in the dropdown list
const cityCoords = {
    chicago: { lat: 41.8781, lng: -87.6298 },
    newyork: { lat: 40.7128, lng: -74.0060 },
    dallas: { lat: 32.7767, lng: -96.7970 },
    losangeles: { lat: 34.0522, lng: -118.2437 },
    phoenix: { lat: 33.4484, lng: -112.0740 },
    houston: { lat: 29.7604, lng: -95.3698 },
    sandiego: { lat: 32.7157, lng: -117.1611 },
    philadelphia: { lat: 39.9526, lng: -75.1652 },
    sanantonio: { lat: 29.4241, lng: -98.4936 },
    austin: { lat: 30.2672, lng: -97.7431 }
};

let selectedCity = "";

// Toggle the dropdown list for cities
function getList() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Add click event listeners to each city link
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function () {
        const cityName = this.textContent;
        const cityId = this.getAttribute('href').substring(1);
        const coords = cityCoords[cityId]; // Look up coordinates

        if (coords) {
            selectedCity = cityName;
            document.getElementById('lat').innerText = coords.lat;
            document.getElementById('long').innerText = coords.lng;
            fetchSunData(coords.lat, coords.lng);  // Fetch data for selected city

            document.querySelector('.dropbtn').textContent = `🌍 ${cityName}`;
        }
        document.getElementById("myDropdown").classList.remove("show");
    });
});

// Function to get the user's current location
function getCurLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            document.getElementById('lat').innerText = lat;
            document.getElementById('long').innerText = lng;
            fetchSunData(lat, lng);

            document.querySelector('.dropbtn').textContent = "🌍 Select a City"; // Reset button text
            //throw popup for failed calls
        }, () => {
            alert('Cannot get the current location.');
        });
    } else {
        alert('There is a problem getting the current location. Please try again with different browser.');
    }
}

// Fetch data from the API
function fetchSunData(lat, lng) {
    fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                updateCard('Today', data.results);

                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const dateStr = tomorrow.toISOString().split('T')[0]; //drop timezone from the datetime

                fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=${dateStr}`)
                    .then(response => response.json())
                    .then(dataTomorrow => {
                        if (dataTomorrow.status === 'OK') {
                            updateCard('Tomorrow', dataTomorrow.results);
                        }
                    });
            }
        });
}

// Function to update the information in a each cards
function updateCard(day, results) {
    const cards = Array.from(document.querySelectorAll('.card'));
    const card = cards.find(c => c.querySelector('h2')?.innerText.includes(day)); // Find correct card by title
    if (!card) return;

    const spans = card.querySelectorAll('span');
    if (spans.length >= 7) {
        spans[0].innerText = results.sunrise;
        spans[1].innerText = results.sunset;
        spans[2].innerText = results.dawn;
        spans[3].innerText = results.dusk;
        spans[4].innerText = results.solar_noon;
        spans[5].innerText = results.day_length;
        spans[6].innerText = results.timezone;
    }
}

// To show today and tomorrow's date in each cards
function updateDates() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const todayStr = today.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    const tomorrowStr = tomorrow.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

    document.getElementById('todayTitle').innerText = `Today (${todayStr})`;
    document.getElementById('tomorrowTitle').innerText = `Tomorrow (${tomorrowStr})`;
}

// Initialize the dates when page loads
updateDates();

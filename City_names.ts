// Function to format city and country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with city-country pairs and print the returned value
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Paris', 'France'));
console.log(city_country('Tokyo', 'Japan'));
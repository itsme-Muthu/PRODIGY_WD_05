# PRODIGY_WD_05 - Prodigy Web Development Internship - Task 05

<h2>HTML :</h2>

<h4>Title:</h4>

- Displays "Current Weather Report" as the app title.

<h4>Card Container:</h4>

- Contains the main content of the weather application.
- Includes a search input for the user to enter a city name and a search button.
- Displays an error message if the city name is invalid.
- Shows weather information including an icon, temperature, city name, weather condition, humidity, and wind speed.

<h2>CSS :</h2>

<h4>General Styles:</h4>

- Resets margins, paddings, and sets the font family.
- Defines a linear gradient background for the body.

<h4>App Title:</h4>

- Styles the app title with font size, color, and margin adjustments.

<h4>Card Container:</h4>

- Styles the card with a background gradient, color, margin, padding, and text alignment.
- Adds rounded corners and a centered layout.

<h4>Search Input and Button:</h4>

- Styles the input field with padding, border-radius, and font size.
- Styles the button with a circular shape and background color.

<h4>Weather Information:</h4>

- Styles the weather icon, temperature, city name, and condition text with specific font sizes and margins.
- Displays additional weather details (humidity and wind speed) in a flexbox layout.

<h4>Error Message:</h4>

- Styles the error message with text alignment, font size, and margin adjustments.
- Initially hidden and only displayed if an invalid city name is entered.

<h2>JavaScript:</h2>

<h4>API Integration:</h4>

- Uses OpenWeatherMap API to fetch weather data for the specified city.
- API key and base URL are defined as constants.

<h4>Search Functionality:</h4>

- Captures user input (city name) from the search box.
- Executes an asynchronous function to fetch weather data for the entered city.
- Checks the response status to handle errors (e.g., city not found).

<h4>Display Weather Information:</h4>

- Updates the city name, temperature, humidity, wind speed, and weather condition based on the fetched data.
- Dynamically changes the weather icon based on the weather condition.
- Displays the weather information or an error message depending on the API response.

<h4>Event Listener:</h4>

- Adds a click event listener to the search button to trigger the weather data fetch when clicked.

<h2>Key Functional Elements:</h2>

<h4>API Call:</h4>

- Makes an HTTP GET request to fetch weather data.

<h4>Error Handling:</h4>

- Displays an error message if the API returns a 404 status (city not found).

<h4>Dynamic Content Update:</h4>

- Updates DOM elements with fetched data.
- Changes weather icon based on the weather condition.

These features ensure that the weather application provides a user-friendly interface to check current weather conditions for any city.

<h2>Sample Images: </h2>

![image](https://github.com/user-attachments/assets/9c888f27-9b83-4444-80bf-48fbc77c79d2)

<h4>For Valid Inputs: </h4>

![image](https://github.com/user-attachments/assets/341918d8-0eaf-4e37-b5f1-b8236fa67282)

![image](https://github.com/user-attachments/assets/e05cd480-a980-4c81-b0fa-3fa7206cf0ac)

<h4>For Invalid Inputs: </h4>

![image](https://github.com/user-attachments/assets/acde3532-24fd-4c3c-8880-76baaf411fd0)

# Weather Application

This project consists of two separate parts: a landing page built with pure JavaScript and a weather application built with React. The landing page features a button to load the weather app, which displays the user's current location, weather details, and a forecast for the next few days. When the app is closed, the landing page shows a summary of the weather details along with the last updated time.

## Demo

You can view a live demo of the application [here](https://weather-app-910511071.web.app/).

## Project Structure

- **Landing Page**: A simple page with a button that loads the weather app. Developed using pure JavaScript.
- **Weather App**: A React application that fetches and displays weather data for the user's current location, including a 5-day forecast.

## Features

- Displays current weather details based on the user's location.
- Provides a 5-day weather forecast.
- Stores the latest weather data in `localStorage` for quick access.
- Shows a summary of the weather on the landing page when the weather app is closed.
- Fully responsive design.

## Technologies Used

- **Landing Page**: HTML, CSS, JavaScript.
- **Weather App**: React, Tailwind CSS.
- **Testing**: Jest, React Testing Library.
- **Deployment**: Firebase Hosting, GitHub Actions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/moor-zaa/weather-application.git

# Weather-X

Weather-X is a weather forecasting application built with React.
It provides real-time weather data, 24-hour forecasts, and air quality information based on the user's geolocation.

## Features

- Real-time weather data: Displays the current temperature, humidity, pressure, wind speed, and cloudiness.
- 24-hour forecast: Provides a detailed forecast for the next 24 hours.
- Air quality information: Shows the current air quality index and the levels of various pollutants.
- Geolocation: Automatically detects the user's location to provide localized weather data.
- Dark mode: Includes a dark mode for better visibility in low light conditions.

## Environment Variables

The project uses the following environment variables, which are stored in a `.env` file:

- `VITE_WEATHER_API_KEY`: The API key for the OpenWeatherMap API.

## Installation

This project was bootstrapped with [Vite](https://vitejs.dev/).
To set up and run this project locally,
you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
Follow these steps:

1. Clone the repository: `git clone https://github.com/nureka-rodrigo/Weather-X.git`
2. Navigate into the project directory: `cd Weather-X`
3. Install the dependencies: `npm install`
4. Start the application: `npm run dev`

The application will start running on `http://localhost:3000`.

## Libraries

- [React](https://reactjs.org/): For building the user interface.
- [Tailwind CSS](https://tailwindcss.com/): For rapidly building custom designs.
- [Axios](https://axios-http.com/): For making HTTP requests to the OpenWeatherMap API.
- [React Icons](https://react-icons.github.io/react-icons/): For displaying various weather icons.
- [React Router](https://reactrouter.com/): For routing.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the terms of
the [MIT license](https://github.com/nureka-rodrigo/Weather-X/blob/main/LICENSE).
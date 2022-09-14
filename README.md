# Weather App

A small project made with React & Open Weather API

## Live at

https://weather-app-pedroguia1.vercel.app/

## Built with

- React (Typescript)
- Open Weather API
- Jest + React Testing Library & Enzyme
- React Query + Axios
- Redux Toolkit
- Sass

## Features

- Display current weather and 7 days forecast
- Fetches user location or uses Leiria as fallback
- Uses Google Maps API for locations searches
- Add or remove location from favorites
- Uses LocalStorage to persist favorites
- Displays a toast for every relevant user action

## Usage

Create .env file in weather-app's root directory and add the following:

```
REACT_APP_API_KEY={your-open-weather-api-key}
```

Install dependencies:

```
npm install
```

Start dev server:

```
npm run start
```

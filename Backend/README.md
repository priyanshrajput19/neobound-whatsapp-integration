# WhatsApp Dashboard Backend

## Project Structure

This backend follows industry-standard practices with a clean separation of concerns:

```
src/
├── config/
│   ├── config.js          # Environment variables and configuration
│   └── database.js        # Database connection setup
├── controllers/
│   └── businessController.js  # Business logic for API endpoints
├── middleware/
│   └── cors.js            # CORS middleware
├── models/
│   └── esResponse.js      # Database models
├── routes/
│   └── businessRoutes.js  # API route definitions
├── services/
│   └── facebookService.js # Facebook API integration
├── app.js                 # Entry point
```

## Key Features

- **Modular Architecture**: Clean separation of routes, controllers, services, and middleware
- **ES6 Modules**: Uses modern import/export syntax
- **Error Handling**: Proper error handling in controllers
- **Configuration Management**: Centralized configuration handling
- **Service Layer**: Facebook API calls are abstracted into services

## API Endpoints

- `POST /businessData` - Save business data and get access token
- `GET /businessData` - Retrieve all business data
- `GET /viewTemplates` - Get WhatsApp message templates
- `GET /health` - Health check endpoint

## Getting Started

1. Install dependencies: `npm install`
2. Set up environment variables in `.env` file
3. Run development server: `npm run dev`

## Environment Variables

Create a `.env` file with:
```
CLIENT_ID=your_facebook_client_id
CLIENT_SECRET=your_facebook_client_secret
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

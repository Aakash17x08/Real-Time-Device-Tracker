# Real-Time Device Tracker

A real-time device tracking application that uses **Socket.IO** for real-time communication and **Leaflet.js** for displaying the device's current location on a map. The application allows you to track the geographical position of a device and update its location on a map dynamically.

## Features

- **Real-Time Geolocation Tracking**: Tracks the device’s geolocation using the **Geolocation API** and sends updates to the server using **Socket.IO**.
- **Leaflet.js Integration**: Displays the device's current location on an interactive map using **Leaflet.js**.
- **Real-Time Updates**: As the device moves, the location is updated on the map in real-time.
- **Dynamic Map Centering**: The map centers itself around the device’s current location with every update.
- **Cross-Browser Compatibility**: Works across modern browsers that support the **Geolocation API**.

## Tech Stack

- **Frontend**:

  - **HTML5**: Markup structure for the user interface.
  - **Leaflet.js**: A JavaScript library for embedding interactive maps.
  - **Socket.IO Client**: A JavaScript library for real-time bidirectional communication with the server.
  - **CSS**: Styling for the user interface.

- **Backend**:
  - **Node.js**: JavaScript runtime for building the server-side application.
  - **Express**: Web framework for building the API and serving the frontend.
  - **Socket.IO**: Used on the server for handling real-time communication between clients and server.

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** and **npm** (Node Package Manager)

### Steps to Install

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/real-time-device-tracker.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd real-time-device-tracker
   ```

3. **Install dependencies**:
   Run the following command to install the necessary dependencies for both the frontend and backend.

   ```bash
   npm install
   ```

4. **Start the server**:
   Once the dependencies are installed, start the server with:

   ```bash
   npm start
   ```

   This will start the backend server on port `3000`.

5. **Open the application**:
   Navigate to `http://localhost:3000` in your web browser. The map will display, and the device's location will be updated in real-time as the geolocation changes.

## File Structure

```bash
real-time-device-tracker/
├── public/
│   ├── index.html      # Frontend HTML file
│   ├── script.js       # JavaScript file to handle geolocation and socket.io logic
│   └── style.css       # Styles for the frontend
├── server.js           # Backend server file (Node.js with Express and Socket.IO)
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## How it Works

1. **Geolocation API**: The **Geolocation API** is used to retrieve the device's current latitude and longitude. This data is sent to the server using **Socket.IO** every time the location updates.
2. **Socket.IO Client**: On the frontend, **Socket.IO** listens for geolocation data and updates the map in real-time by centering it around the new location and adding a marker.

3. **Leaflet.js**: **Leaflet.js** is used to display the map. It renders a map based on **OpenStreetMap** tiles and updates the marker’s position on the map as the device’s location changes.

4. **Socket.IO Server**: The **Socket.IO server** receives location data from the clients and can optionally broadcast this data to other connected clients for display (e.g., in a multi-device tracking scenario).

## Socket.IO Events

### Client-Side Events:

- **`sendLocation`**: Emitted by the client when the geolocation is updated.
  ```javascript
  socket.emit("sendLocation", { latitude, longitude });
  ```

### Server-Side Events:

- **`sendLocation`**: The server listens for location updates from clients.
  ```javascript
  socket.on("sendLocation", (data) => {
    console.log("Received location:", data);
  });
  ```

## Deployment

To deploy the application to a cloud provider (e.g., **Heroku**, **AWS**, **DigitalOcean**), follow these steps:

1. Push the code to a GitHub repository.
2. Set up a new application on your cloud provider.
3. Link your GitHub repository to the cloud provider’s deployment pipeline.
4. Ensure that the server is set to listen on the correct port (for **Heroku**, use `process.env.PORT`).
5. Deploy and access your application through the cloud provider’s URL.

## Contributing

We welcome contributions! If you would like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes.
4. Commit your changes and push them to your forked repository.
5. Submit a pull request for review.

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

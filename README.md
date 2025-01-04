# Real-Time Cryptocurrency Dashboard

My first personal portfolio project. I want to start from an idea and track my journey to a finished MVP that could be showcased to interested people.

## Idea

I want to create a dashboard that allows users (mostly traders or data analysts) to:

1. **Visualize live trading data**: Display real-time price, volume, and trading activity for cryptocurrencies.
2. **Optimize performance**: Handle large datasets efficiently (e.g., high-frequency trading data).
3. **Customizable UI/UX**: Design the UI for smooth, interactive user experience.

The most interesting challenge is performance optimization. I have never worked with vast datasets on time sensitive UIs. I want to  learn a deeper, architectural approach to software development and experience scalable solutions and technologies firsthand.

## Tech Stack

### Frontend

- React (for UI components)
- TypeScript (for type safety and scalability)
- D3.js or Regl (for data visualization—especially with large datasets)
- WebSockets (for real-time data streaming)

### Backend

- Node.js with Express (to serve data and handle API calls)
- Redis or WebSocket (for high-frequency data handling and efficient communication)
- Database (e.g., PostgreSQL or MongoDB, depending on the type of data you're storing)

### Performance

- Optimizations: Implement efficient algorithms for handling and visualizing large datasets.
- Lazy Loading / Virtualization: Use techniques to load only necessary data on the frontend to improve UI performance.

### Scalability

Design the system for future scalability, simulating data fetching from multiple cryptocurrency exchanges in real-time. Not specific technologies, but the best interplay of different solutions and approaches, that I will find out during development.

## Key Features

1. **Real-Time Data Feed**: Use WebSockets to push data from the server to the client.
2. **Data Aggregation**: Aggregate high-frequency data into meaningful statistics (e.g., moving averages, order book depth) to make the data more digestible.
3. **Trading Data Visualizations**: Use D3.js or Regl for visualizing large datasets such as candlestick charts, trade volume, or price movement.
4. **UI Optimization**: Ensure that the UI can handle a large amount of data efficiently and provide quick interactions (like zoom, pan, and filter).

## Current road map

**Step 1 - Backend**:

- Create an API to fetch cryptocurrency trading data from Binance.
- Implement WebSocket connections to stream real-time data to the frontend.
- Use Redis or in-memory storage to handle the data flow efficiently.

**Step 2 - Frontend**:

- Build interactive visualizations (using D3.js or Regl) for live price data, order books, or trade history.
- Implement performance optimizations for handling large datasets (pagination, virtualized lists, etc.).
- Ensure responsiveness and interactivity for a seamless user experience.

**Step 3 - UI/UX**:

- Focus on clean, intuitive design suitable for traders and analysts.
- Allow for customization of displayed data (e.g., filters, time ranges).
- Optimize for performance and usability.

**Step 4 - Showcase**:

- Document your project, explaining the architecture, performance optimizations, and key features.
- Provide code examples to demonstrate how you solved performance challenges and managed high-frequency data.

## How to run locally

Need to install dependencies and run both server and client separately from their root folders.

Clone repo.

```sh
cd client-crypto-dashboard
npm install
npm run dev
```

```sh
cd server-crypto-dashboard
npm install
npm run dev
```

## Dev log

### Week 1

Set up this repo with 2 projects - bare-bones ts-node server with express.js and ts-react client with a vite template.

Wrote simple websocket logic to get a single currency pair data stream from Binance and retransmit it with my own websocket from the server to the client. Works nicely, works locally.

Server is not necessary for the dashboard, because there are many open and free APIs for fast direct access to trading data, but I see a potential scenario where I would want to do additional manipulation of the data before sending it to the client. The server might also be used for security when the code is deployed to a public url and might also help with performance optimization, e. g. by handling data sorting or other expensive operations.

D3.js seems like a good tool, but it manipulates the DOM directly, so I have doubts it can scale smoothly to enormous datasets. Need to try it out.

Regl sounds more up to the task, because it uses WebGL, but seems to require some knowledge of a lower level language, looks like C++. I will try it any case to compare to D3.js.

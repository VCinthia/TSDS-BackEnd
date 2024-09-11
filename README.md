# Order Management System

This project is an assignment for the Backend subject in the 4th semester of the Higher Technical Degree in Software Development. It simulates an order management system that handles and tracks the placement of video game-related orders. The project includes three main JavaScript files: order.js, objectData.js, and helperFunctions.js.

## order.js

This file defines the Order class, which represents an order. Each order contains:

- **name**: The name or unique ID of the order.
- **content**: A description of the video game ordered (name and genre).
- **price**: The price of the video game (in dollars).

## objectData.js

This file contains data related to video games, including:

- **names**: An array of video game names.
- **genres**: An array of video game genres.
- **prices**: An array of video game prices.

These arrays are used to randomly generate orders.

## helperFunctions.js

This file contains various utility functions to handle the process of placing and tracking orders. The functions include:

- **getRandomElement()**: Returns a random element from an array or generates a random ID.
- **wait()**: Simulates a delay using setTimeout.
- **updateOrderStatus()**: Updates the order status and logs it to the console.
- **trackOrderProcess()**: Tracks the order's progress through different states (Received, Preparing, Completed, Delivered).
- **placeOrder()**: Simulates placing an order with a random delay.
- **generateRandomOrder()**: Generates a random order with a name, content, and price.
- **handleOrder()**: Handles the process of placing and tracking an order.
- **generateOrdersContinuously()**: Continuously generates orders at random intervals.


## How to Run the Project

To run the project, you need to have Node.js installed. Follow these steps:

Clone or download the repository.
- https://github.com/VCinthia/TSDS-BackEnd

Open a terminal and navigate to the project directory.
Run the following command to execute the order generation process:

```bash
  node helperFunctions.js
```

This will start generating orders with random video games, genres, and prices, and will track their status (Received, Preparing, Completed, Delivered).
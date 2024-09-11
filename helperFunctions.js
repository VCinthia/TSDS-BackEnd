const Order = require('./order.js');
const { names, genres, prices } = require('./objectData.js');

// Generic function to get a random element from an array or generate a unique ID
// If `length` is greater than 0, it generates an ID of the given length with random characters (letters and numbers)
function getRandomElement(array, length = 0) {
  if (length > 0) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Characters used to generate the ID
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  } else {
    // If no length is provided, return a random element from the provided array
    return array[Math.floor(Math.random() * array.length)];
  }
}

// Function to simulate a delay (wait) for a given number of milliseconds
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// Function to update the order status and print it to the console
function updateOrderStatus(order, status) {
  console.log(`Order ${order.name}: ${status}.`);
}

// Simulate the process of tracking the order through various states
async function trackOrderProcess(order) {
  const states = ['Received', 'Preparing', 'Completed', 'Delivered'];
  const delays = [1000, 3000, 1000, 1000];
  // Iterate over each state and simulate waiting for the corresponding time before updating the status
  for (let i = 0; i < states.length; i++) {    
    await wait(delays[i]);
    updateOrderStatus(order, states[i]);
    console.log(`Order ${order.name}: Update after ${Math.round(delays[i] / 1000)} s.`);
  }
}


// Simulate placing an order with a random delay between 1 and 10 seconds
async function placeOrder(order) {
  const randomTime = Math.floor(Math.random() * 10) + 1;
  await wait(randomTime * 1000); 
  console.log(` ****************************** \n\n Order placed successfully! \n Order data: ${JSON.stringify(order)} after ${randomTime} seconds.\n\n ****************************** `);
}

// Generate a random order with a unique ID, random content, and a random price
function generateRandomOrder() {
  const orderName = getRandomElement([], 6); // Generate a unique ID of 6 characters
  const orderContent = [getRandomElement(names), getRandomElement(genres)];
  const orderPrice = getRandomElement(prices);
  
  return new Order(orderName, orderContent, orderPrice);
}

// Handle the process of placing and tracking an order
async function handleOrder() {
  const order = generateRandomOrder();
  await placeOrder(order);
  await trackOrderProcess(order);
}

// Function to generate a random interval between 1 and 10 seconds
function getRandomInterval() {
  return Math.floor(Math.random() * 10 + 1) * 1000; 
}


// Function to continuously generate orders with random delays between each order
function generateOrdersContinuously() {
  let i = 1;
  setInterval(() => {
    handleOrder(i);
    i++;
  }, getRandomInterval());
}

// Initialize the continuous order generation
generateOrdersContinuously();
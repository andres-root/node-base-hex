import { parentPort } from 'worker_threads';

// Function to simulate heavy computation
const heavyComputation = (): number => {
  // Simulate heavy computation (for example, by performing a complex calculation)
  // Here we're just blocking the thread for demonstration purposes
  const start = Date.now();
  while (Date.now() - start < 10000); // Block for 10 seconds
  return Date.now() - start; // Return the simulated computation time
};

// Post the result back to the main thread
const result = heavyComputation();
if (parentPort) {
  parentPort.postMessage(result);
} else {
  throw new Error('Worker was not executed as a thread worker');
}

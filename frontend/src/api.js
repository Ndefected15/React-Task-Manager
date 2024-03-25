const fetch = require('node-fetch'); // If running in Node.js environment
// Or use fetch directly if in a browser environment

const taskData = {
  description: 'Task description',
  status: 'To Do',
  priority: 1,
  due_date: '2024-03-25'
};

fetch('http://localhost:3000/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(taskData),
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});

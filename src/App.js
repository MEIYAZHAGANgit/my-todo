body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
}

.todo-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 50px;
}

h1 {
  text-align: center;
  color: #333;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

input,
textarea {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
}

.add-btn,
.update-btn {
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
}

.task-list {
  list-style-type: none;
  padding: 0;
}

.task-item {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.edit-btn,
.delete-btn {
  padding: 10px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
}

.edit-btn {
  background-color: #2196f3;
  color: #fff;
}

.delete-btn {
  background-color: #f44336;
  color: #fff;
}

# 📝 Task Manager

A **full-stack web application** for managing tasks, allowing users to **create, edit, delete, and mark tasks as completed**. This project demonstrates my skills in developing both backend and frontend components using modern web development practices.

## 🚀 Deployment

### Frontend:

- **Live App**: [View Live](https://shubchak19-task-manager-frontend.vercel.app)

### Backend:

- **Live API**: [View Live](https://shubchak19-task-manager-backend.vercel.app)

## 🚀 Features

✅ **Task Management** – Create, edit, delete, and mark tasks as completed.
✅ **List Management** – Create, delete lists.
✅ **User Friendly UI** – A responsive and functional UI built for a seamless user experience.

## 🛠️ Technologies Used

### Backend:

- **Node.js** - For Backend Implementation
- **Express.js** - For API Development
- **TypeScript** - For static typing for better code maintainability
- **MongoDB** (with Mongoose) - For secure and scalable data storage

### Frontend:

- **React** - For building a dynamic UI
- **Redux Toolkit** - For efficient state management
- **React Router** - For client-side routing
- **TypeScript** - For static typing for better code maintainability
- **Vite** - For fast development and optimized builds
- **Tailwind CSS** - For Modern and responsive styling
- **Axios** - For API requests

## 📂 Installation & Setup

### Prerequisites:

- Node.js installed
- MongoDB database (local or Atlas)
- Git

### Steps to Run the Project:

#### Clone the Repository:

```sh
git clone https://github.com/shubchak19/Task-manager.git
cd Task-manager
```

#### Set Up the Backend:

1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure the database URL:(contact me for the url)
   ```env
   MONGO_URI=""
   FRONTEND_URL=""
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

#### Set Up the Frontend:

1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure the URL:(contact me for the url)
   ```env
   VITE_BACKEND_URL=""
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

#### Open the Application:

- **Frontend**: Visit `http://localhost:5173`
- **Backend API**: Runs on `http://localhost:5000`

## 📡 API Endpoints

#### Retrieve All lists

- URL: `GET /api/lists/`
- Response: Returns an array of all lists with all the tasks.

#### Create a new list

- URL: `POST /api/lists/`
- Request Body:
  ```json
  {
    "id": "list1",
    "name": "Tasks"
  }
  ```
- Response: Returns the created list.

#### Delete a list

- URL: `DELETE /api/lists/:listId`
- Response: Status code 204.

#### Create a Task

- URL: `POST /api/lists/:listId/tasks/`
- Request Body:
  ```json
  {
    "id": "task1",
    "title": "Buy groceries",
    "description": "Get fruits and vegetables",
    "completed": false
  }
  ```
- Response: Returns the created task.

#### Update a Task

- URL: `PUT /api/lists/:listId/tasks/:taskId`
- Request Body:
  ```json
  {
    "id": "task1"
    "title": "Buy groceries and dairy",
    "completed": true
  }
  ```
- Response: Returns the updated task.

#### Delete a Task

- URL: `DELETE /api/lists/:listId/tasks/:taskId`
- Response: Status code 204.

## 🖼️ Frontend Screenshots
![screencapture-shubchak19-task-manager-frontend-vercel-app-2025-03-27-14_13_43](https://github.com/user-attachments/assets/df79c892-5c2d-4cba-90a1-040ec15e37c3)
![screencapture-shubchak19-task-manager-frontend-vercel-app-2025-03-27-14_14_21](https://github.com/user-attachments/assets/109b4f7b-b931-4456-b68f-716957ab7632)
![screencapture-shubchak19-task-manager-frontend-vercel-app-2025-03-27-14_14_00](https://github.com/user-attachments/assets/b5349ce5-6162-41cc-a9c8-b3083b4113d2)


## 🔍 How to Test

- Use **Postman** or **curl** for testing API endpoints.
- Alternatively, interact with the app via the web interface.

## 🙋‍♂️ Author

👤 **Shubham Chakrawarty**\
🔗 [LinkedIn](https://www.linkedin.com/in/shubham-chakrawarty)\
🔗 [GitHub](https://github.com/shubchak19)

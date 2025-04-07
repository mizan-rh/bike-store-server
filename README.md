# 🚴 Bike Store Management System
live link: https://bike-store-b4a2-server.vercel.app

The **Bike Store Management System** is a full-stack web application designed to manage the inventory, orders, and revenue of a bike store. This project includes features like inventory tracking, order placement, and revenue calculation using Node.js, Express, MongoDB, and React.

---

## 📋 Features

### 1. Inventory Management
- Track the stock availability of bikes.
- Automatically update stock levels when an order is placed.
- Mark bikes as out of stock when inventory reaches zero.

### 2. Order Management
- Place customer orders with details like quantity, total price, and customer email.
- Prevent orders if the requested quantity exceeds available stock.
- Retrieve all orders with timestamps for management.

### 3. Revenue Calculation
- Calculate total revenue based on all customer orders.
- Dynamically fetch data from the database using aggregation pipelines.

---

## 🛠️ Technologies Used

### Backend:
- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM library for MongoDB.

### Frontend (Optional for full-stack projects):
- **React.js**: For creating the user interface.
- **Tailwind CSS**: For styling the application.

### Other Tools:
- **Postman**: For API testing.
- **Git**: Version control.
- **ESLint**: For code linting and formatting.

---

## 🗃️ API Endpoints

### 1. **Place an Order**
- **Endpoint**: `/api/orders`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 2400
  }
  ```
- **Response**:
  ```json
  {
    "message": "Order created successfully",
    "status": true,
    "data": {
      "_id": "648b45f5e1234b56789a6789",
      "email": "customer@example.com",
      "product": "648a45e5f0123c45678d9012",
      "quantity": 2,
      "totalPrice": 2400,
      "createdAt": "2024-11-19T12:00:00.000Z",
      "updatedAt": "2024-11-19T12:00:00.000Z"
    }
  }
  ```

### 2. **Calculate Revenue**
- **Endpoint**: `/api/orders/revenue`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "message": "Revenue calculated successfully",
    "status": true,
    "data": {
      "totalRevenue": 3600
    }
  }
  ```

---

## 🌟 Getting Started

### Prerequisites:
- Node.js
- MongoDB
- Postman (for testing APIs)

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bike-store-management-system.git
   cd bike-store-management-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   Create a `.env` file in the root and configure:
   ```plaintext
   MONGO_URI=your_mongo_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. (Optional) If a frontend is included:
   Navigate to the frontend directory and start the React app:
   ```bash
   cd client
   npm start
   ```

---

## 🤬 Testing

- Use Postman to test the APIs.
- Ensure the MongoDB database is running for seamless functionality.

---

## 🙌 Contributing

Feel free to fork the repository and submit pull requests for any enhancements or bug fixes.

---



## 📞 Contact

For any inquiries, contact:
- **Name**: Mist. Rebeka Sultana
- **Email**: rebakpi@gmail.com



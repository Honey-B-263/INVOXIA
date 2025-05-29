# 🌐 INVOXIA
---
A scalable and tax-compliant backend billing system built with **Node.js** and **Express.js**, and **MongoDB**. It provides seamless cart, billing, tax computation, and order management functionality for both products and services.

## 🔧 Features

### ✅ User-Focused Functionality
- User account creation and authentication
- View available **products** and **services**
- Add/remove/clear items in cart
- View live bill summary (price, tax, total)
- Confirm orders

### 🧾 Intelligent Tax System

**Products:**

| Price Range              | Tax Code | Tax Applied   |
|--------------------------|----------|---------------|
| > ₹1000 and ≤ ₹5000      | PA       | 12% of price  |
| > ₹5000                  | PB       | 18% of price  |
| ≤ ₹1000                  | PC       | Flat ₹200     |

**Services:**

| Price Range              | Tax Code | Tax Applied   |
|--------------------------|----------|---------------|
| > ₹1000 and ≤ ₹8000      | SA       | 10% of price  |
| > ₹8000                  | SB       | 15% of price  |
| ≤ ₹1000                  | SC       | Flat ₹100     |

🧠 _Tax is applied individually to each product/service item, not on the total bill._

---

## 📁 Project Structure

```

├── controllers/            # Route handlers for business logic
│   ├── cartController.js       # Handles cart add/remove/clear logic
│   ├── orderController.js      # Manages order confirmation and admin views
│   ├── productController.js    # Exposes product-related endpoints
│   ├── serviceController.js    # Exposes service-related endpoints
│   └── userController.js       # Handles user registration and login
│
├── middleware/             # Reusable middleware
│   ├── authMiddleware.js       # JWT-based auth protection
│   └── errorMiddleware.js      # Centralized error handling
│
├── models/                 # Mongoose schemas
│   ├── cartItem.js             # Represents cart items
│   ├── order.js                # Represents confirmed orders
│   ├── product.js              # Product schema with pricing
│   ├── service.js              # Service schema with pricing
│   └── user.js                 # User model with auth fields
│
├── public/                    # Static files (images, scripts, styles)
│   ├── index.html
│   ├── p1.png
│   ├── s1.png
│   ├── script.js
│   └── styles.css
│
├── routes/                    # API route definitions
│   ├── cartRoutes.js              # Routes for cart operations
│   ├── orderRoutes.js             # Routes for order confirmation/admin
│   ├── productRoutes.js           # Routes for product endpoints
│   ├── serviceRoutes.js           # Routes for service endpoints
│   └── userRoutes.js              # Routes for user registration/login
│
├── utils/                     # Utility functions
│   └── taxCalculator.js           # Tax logic based on price rules
│
├── testData.js                # Sample data for testing the APIs
├── .env                       # Environment variables
├── .gitignore                 # Ignored files/folders for Git
├── app.js                     # Entry point of the application
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Dependency tree lock file
└── postman via api access link # Postman collection for API testing
|
│
├── app.js                  # Entry point of the application
├── .env                    # Environment variables
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation

```


yaml
---

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose**
- **JWT**-based Authentication
- **RESTful** API design
- **Postman** for API testing

---

## 🔐 Authentication

- JWT-secured login and route access
- Middleware-based route protection for users and admin

---

## 🧪 Quality & Best Practices

- Modular architecture
- Clear controller separation
- Clean, consistent commit history
- Follows best practices in:
  - **Functionality and robustness**
  - **Code clarity and readability**
  - **Version control discipline**
  - **Maintainability**

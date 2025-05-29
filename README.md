#INVOXIA
A scalable and tax-compliant backend billing system built with Node.js and Express.js to manage user orders, product/service carts, and tax-based billing computations.

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

plotline-zentrabill/
├── controllers/
│ ├── cartController.js
│ ├── orderController.js
│ ├── productController.js
│ ├── serviceController.js
│ └── userController.js
│
├── middleware/
│ ├── authMiddleware.js
│ └── errorMiddleware.js
│
├── models/
│ ├── cartItem.js
│ ├── order.js
│ ├── product.js
│ ├── service.js
│ └── user.js
│
├── public/
│ ├── index.html
│ ├── p1.png
│ └── s1.png
│
├── app.js
├── .env
├── package.json
└── README.md

yaml
Copy
Edit

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

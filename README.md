# Solar Terrace Calculator

A full-stack web application to help users calculate the recommended solar panel capacity for their terrace, estimate savings, and store user details and calculations in a MongoDB database.

---

## 📁 Project Structure

```
solar-terrace-calculator/
│
├── server/                      # Backend (Node.js/Express/MongoDB)
│   ├── models/
│   │   ├── SolarCalculation.js  # Mongoose schema for calculations
│   │   └── db.js                # MongoDB connection logic
│   ├── routes/
│   │   └── saveCalculation.js   # API route to save calculation
│   ├── app.js                   # Express app entry point
│   └── package.json             # Backend dependencies
│
└── src/                         # Frontend (React)
    └── pages/
        └── Index.tsx            # Main calculator page
    └── ...                      # Other frontend files
```

---

## 🚀 Features

- User inputs terrace size, monthly power consumption, and contact info.
- Calculates recommended solar panel capacity and estimated savings.
- Saves all user details and calculation results to MongoDB.
- Modern React frontend, Express backend, and MongoDB database.

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or [MongoDB Atlas](https://www.mongodb.com/atlas/database))
- [Git](https://git-scm.com/)

---

## 📝 How to Clone and Run

### 1. **Clone the Repository**

```sh
git clone https://github.com/Anurag6596/solar-terrace-calculator.git
cd solar-terrace-calculator
```

### 2. **Setup the Backend**

```sh
cd server
npm install
```

- Create a `.env` file in the `server` folder with:
  ```
  MONGODB_URI=mongodb://localhost:27017/solar
  ```
  *(Or use your MongoDB Atlas URI)*

- Start the backend server:
  ```sh
  node app.js
  ```
  or (for auto-reload):
  ```sh
  npx nodemon app.js
  ```

### 3. **Setup the Frontend**

```sh
cd ../
# If using React with Vite or Create React App:
npm install
npm run dev
# or
npm start
```

- The frontend will run on `http://localhost:3000` or `http://localhost:8080` depending on your setup.

---

## 🌐 Deployment

- **Frontend:** Deploy the `src` folder (build output) to [Netlify](https://netlify.com/) or [Vercel](https://vercel.com/).
- **Backend:** Deploy the `server` folder to [Render](https://render.com/), [Railway](https://railway.app/), or similar Node.js hosting.
- **Database:** Use [MongoDB Atlas](https://www.mongodb.com/atlas/database) for a free cloud MongoDB instance.

---

## ⚙️ Configuration

- Update CORS origins in `server/app.js` for your production frontend domain.
- Update `MONGODB_URI` in your `.env` for production.

---

## 🙋‍♂️ Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📞 Contact

For questions, open an issue or contact the maintainer.

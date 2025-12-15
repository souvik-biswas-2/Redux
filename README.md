# Ekart for Developers - Full Stack E-Commerce Platform

A modern, full-stack e-commerce platform built with React, Redux, Express.js, and Tailwind CSS. Learn Redux state management while building a real shopping cart application.

## 🎯 Features

### Frontend
- ✅ Modern React with Vite
- ✅ Redux for state management
- ✅ Light/Dark theme toggle with persistence
- ✅ Responsive design with Tailwind CSS
- ✅ Shopping cart functionality
- ✅ Product filtering and search
- ✅ Lucide React icons
- ✅ React Router for navigation

### Backend
- ✅ Express.js REST API
- ✅ CORS enabled for frontend integration
- ✅ 10 sample products
- ✅ Product search & filtering
- ✅ Category-based filtering
- ✅ Error handling & validation
- ✅ Development and production ready

### Pages
- 🏠 **Home** - Hero section with features overview
- 📦 **Products** - Browse all products with ratings (fetched from backend)
- 🛒 **Cart** - Shopping cart with quantity management
- 📧 **Contact** - Contact form with business information
- ℹ️ **About** - Company information and team details

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

#### 1. Clone or Extract Project
```bash
# Navigate to project root
cd Redux
```

#### 2. Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Start development server
npm run dev
# Backend runs on http://localhost:5000
```

#### 3. Setup Frontend (New Terminal)

```bash
# Navigate to frontend folder
cd redux-project

# Install dependencies
npm install

# Start development server
npm run dev
# Frontend runs on http://localhost:5173
```

Visit `http://localhost:5173` in your browser! 🎉

---

## 📚 Backend Documentation

### 🔧 Backend Stack
- Express.js - Web framework
- CORS - Cross-origin resource sharing
- dotenv - Environment variables
- Nodemon - Development auto-reload

### 📁 Backend Structure
```
backend/
├── server.js              # Main server
├── package.json           # Dependencies
├── .env                   # Environment config
├── .gitignore
├── README.md
├── routes/
│   └── products.js        # Product endpoints
└── data/
    └── products.js        # Product data
```

### 🌐 API Endpoints

#### 1. Get All Products
```
GET /api/products
```
Returns all 10 products with details

**Response:**
```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "id": 1,
      "name": "React Starter Kit",
      "price": 29.99,
      "rating": 4.8,
      "image": "bg-blue-500",
      "description": "Complete React setup with best practices",
      "category": "framework",
      "inStock": true,
      "reviews": 142
    }
  ]
}
```

#### 2. Get Single Product
```
GET /api/products/:id
```
Example: `GET /api/products/1`

#### 3. Get Products by Category
```
GET /api/products/category/:category
```
Example: `GET /api/products/category/framework`

**Available Categories:**
- `framework` - React, Next.js, Vue
- `state-management` - Redux, Zustand
- `styling` - Tailwind CSS, styled-components
- `utilities` - API tools, helpers
- `testing` - Jest, Vitest
- `devops` - Docker, CI/CD
- `learning` - Courses, tutorials
- `api` - GraphQL, REST
- `databases` - SQL, NoSQL

#### 4. Search Products
```
GET /api/products/search/query?q=search_term
```
Example: `GET /api/products/search/query?q=react`

#### 5. Health Check
```
GET /api/health
```
Returns server status

### 📦 Sample Products
The backend includes 10 pre-loaded products:

1. React Starter Kit - $29.99 ⭐ 4.8
2. Redux Manager Pro - $39.99 ⭐ 4.9
3. Tailwind CSS Theme - $24.99 ⭐ 4.7
4. API Integration Pack - $34.99 ⭐ 4.8
5. Testing Suite Bundle - $44.99 ⭐ 4.9
6. DevOps Toolkit - $49.99 ⭐ 4.8
7. TypeScript Advanced Course - $54.99 ⭐ 4.9
8. GraphQL Essentials - $39.99 ⭐ 4.7
9. Next.js Pro Template - $59.99 ⭐ 4.9
10. Database Design Guide - $29.99 ⭐ 4.8

### 🔧 Environment Configuration

**`.env` file:**
```
PORT=5000
NODE_ENV=development
```

### 📜 Available Backend Scripts

```bash
npm start     # Run production server
npm run dev   # Run with auto-reload (nodemon)
```

---

## 📚 Frontend Documentation

### 🔧 Frontend Stack
- React 19 with Vite
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons
- React DOM for rendering

### 📁 Frontend Structure
```
redux-project/
├── src/
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   ├── index.css                  # Global styles
│   ├── components/
│   │   ├── Header.jsx             # Navigation header
│   │   └── Footer.jsx             # Footer
│   ├── pages/
│   │   ├── Home.jsx               # Home page
│   │   ├── Product.jsx            # Products listing
│   │   ├── Cart.jsx               # Shopping cart
│   │   ├── Contact.jsx            # Contact form
│   │   └── About.jsx              # About page
│   ├── context/
│   │   └── ThemeContext.jsx       # Light/Dark theme
│   ├── redux/
│   │   ├── store.js               # Redux store
│   │   └── slice.js               # Redux slice
│   └── app/
│       └── ThemeContext.jsx       # Theme setup
├── package.json
├── vite.config.js
└── index.html
```

### 🎨 Pages Overview

#### Home Page (`/`)
- Hero section with call-to-action
- Features section (Quality Code, Lightning Fast, Easy Deploy)
- Call-to-action section
- Fully responsive design

#### Products Page (`/product`)
- Displays all products from backend API
- Product cards with:
  - Product image placeholder
  - Star ratings
  - Price
  - Description
  - Add to cart button
- Loading state with spinner
- Error handling with retry
- Dynamic product count

#### Cart Page (`/cart`)
- View all cart items
- Quantity controls (+ / -)
- Remove item functionality
- Order summary with:
  - Subtotal
  - Tax (10%)
  - Free shipping
  - Total price
- Empty cart state
- Features section

#### Contact Page (`/contact`)
- Contact information cards
  - Address: Hyderabad, India
  - Email: souvik@dev.com
  - Phone: +91 8918818386
- Contact form with validation
- Map location placeholder

#### About Page (`/about`)
- Company mission statement
- Core values (Quality First, Community Driven, Innovation)
- Team information
- Contact details
- Company story/history

### 🎨 Design Features

#### Theme System
- Light mode (default)
- Dark mode with smooth transitions
- Theme preference saved to localStorage
- Auto-detect system preference
- Toggle button in header (Sun/Moon icons)

#### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Touch-friendly buttons and controls

#### Colors & Styling
- Primary: Indigo (#6366f1)
- Secondary: Purple (#a855f7)
- Light bg: White (#ffffff)
- Dark bg: Gray-950 (#030712)
- Tailwind CSS utilities

### ⚙️ Available Frontend Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### 🛒 Redux Setup

The project uses Redux Toolkit for state management:

**Store Location:** `src/redux/store.js`
**Slice Location:** `src/redux/slice.js`

Ready for you to implement:
- Add to cart functionality
- Remove from cart
- Update quantities
- Cart total calculations
- Persist cart state

### 🔌 API Integration

The frontend fetches products from the backend:

```javascript
// In Product.jsx
const response = await fetch('http://localhost:5000/api/products');
const data = await response.json();
setProducts(data.data);
```

**Base URL:** `http://localhost:5000`

---

## 🔄 Full Workflow

### Running Both Frontend & Backend

#### Terminal 1 - Backend:
```bash
cd backend
npm install
npm run dev
```
✅ Backend running on `http://localhost:5000`

#### Terminal 2 - Frontend:
```bash
cd redux-project
npm install
npm run dev
```
✅ Frontend running on `http://localhost:5173`

#### Browser:
Open `http://localhost:5173` and start shopping! 🛍️

---

## 📱 Features in Action

### Light/Dark Theme
- Click Sun/Moon icon in header
- Theme persists across page refreshes
- All pages support dark mode

### Shopping Cart (Redux Ready)
- Add products from product page
- Manage quantities in cart
- See live total calculation
- Remove items with trash icon
- Cart counts in header badge

### Product Catalog
- Browse all 10 products
- See ratings and reviews count
- Filter by category (coming with Redux)
- Search functionality (backend ready)

---

## 🐛 Troubleshooting

### Backend Issues

**Port 5000 already in use:**
```bash
# Find and kill process
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5000
kill -9 <PID>
```

**Frontend can't connect to backend:**
1. Ensure backend is running: `npm run dev` in `backend/` folder
2. Check backend URL in Product.jsx: `http://localhost:5000`
3. CORS should be enabled automatically
4. Check browser console for errors

**Module not found errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Frontend Issues

**Vite port already in use:**
```bash
# The frontend will auto-use port 5174 if 5173 is taken
# Or specify custom port:
npm run dev -- --port 3000
```

**Dark mode not working:**
- Check if ThemeContext is properly imported
- Ensure `dark` class is on html element
- Clear browser cache and localStorage

---

## 📦 Dependencies

### Backend
- express@^4.18.2
- cors@^2.8.5
- dotenv@^16.3.1
- nodemon@^3.0.2 (dev)

### Frontend
- react@^19.2.0
- react-dom@^19.2.0
- @reduxjs/toolkit@^2.11.1
- react-redux@^9.2.0
- react-router-dom@^7.10.1
- lucide-react@^0.561.0
- tailwindcss@^4.1.18
- @tailwindcss/vite@^4.1.18

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

```bash
# Build for production
npm run build

# Deploy the dist folder
```

### Backend Deployment (Heroku/Railway/Render)

```bash
# Prepare for deployment
# Update .env for production
NODE_ENV=production
PORT=5000

# Deploy repository
```

---

## 📝 Learning Path

This project is perfect for learning:

1. **React Fundamentals**
   - Components and hooks
   - State management
   - Routing

2. **Redux**
   - Actions and reducers
   - Store setup
   - Async thunks

3. **Full Stack Development**
   - Frontend-Backend communication
   - API integration
   - Error handling

4. **Tailwind CSS**
   - Utility-first styling
   - Dark mode
   - Responsive design

5. **Backend Development**
   - Express.js basics
   - RESTful APIs
   - Data management

---

## 🤝 Next Steps

1. ✅ Run both frontend and backend
2. ✅ Browse products on the frontend
3. ✅ Implement Redux cart functionality
4. ✅ Add product filtering
5. ✅ Implement checkout flow
6. ✅ Add authentication
7. ✅ Deploy to production

---

## 📧 Support

For issues or questions:
1. Check the individual README files in `backend/` and `redux-project/`
2. Review API endpoints documentation
3. Check browser console for errors
4. Ensure both servers are running

---

## 📄 License

MIT License - Feel free to use this for learning and projects!

---

## 🎉 Ready to Code?

```bash
# Start building!
cd backend && npm run dev
# In another terminal
cd redux-project && npm run dev
```

Happy coding! 🚀

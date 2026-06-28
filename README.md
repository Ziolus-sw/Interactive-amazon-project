🛒 Interactive Amazon Project

A fully interactive Amazon-inspired e-commerce web application built using HTML, CSS, and Modern JavaScript (ES6+).

This project recreates the core shopping experience of an online marketplace while focusing on software engineering principles such as modular architecture, Object-Oriented Programming, code reusability, and automated testing.

The project was built as part of my journey to strengthen my frontend development skills by implementing real-world application features from scratch.

---

🚀 Features

🛍️ Product Catalog

- Dynamically renders products on the home page.
- Product information is loaded from a JSON-based data source.
- Displays:
  - Product images
  - Ratings
  - Prices
  - Product names

🛒 Shopping Cart

- Add products to cart.
- Update product quantities.
- Remove products from cart.
- Cart quantity automatically updates in the navigation bar.
- Cart data is persisted using Local Storage.

💳 Checkout System

- Interactive checkout page.
- Order summary generation.
- Payment summary calculation.
- Shipping cost calculation.
- Tax calculation.
- Grand total calculation.

🚚 Delivery Options

Users can choose different delivery methods during checkout.

Features include:

- Multiple shipping options.
- Delivery date calculation.
- Shipping price updates in real time.

📦 Order Management

- Place orders.
- View previously placed orders.
- Track shipped orders.

🔍 Order Tracking

Dedicated order tracking page that allows users to:

- View order details.
- Track delivery progress.

---

🏗️ Project Structure
<pre>
Interactive-amazon-project
│
├── amazon.html              # Main shopping page
├── checkout.html            # Checkout page
├── orders.html              # Orders page
├── tracking.html            # Order tracking page
│
├── backend/
│   └── products.json        # Product database
│
├── data/
│   ├── cart.js              # Cart functionality
│   ├── products.js          # Product data handling
│   └── deliveryOptions.js   # Delivery option logic
│
├── script/
│   ├── checkout/
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   │
│   ├── utils/               # Utility/helper functions
│   ├── amazon.js            # Main application logic
|   └── checkout.js          # Order checkout page logic 
│
├── styles/                  # CSS styling files
│
├── images/                  # Product and UI assets
│
├── test/                    # Project test files
├── test-jasmine/            # Jasmine testing setup
│
└── README.md
</pre>
---

🧠 JavaScript Concepts Practiced

This project was primarily developed to practice and strengthen understanding of:

- DOM Manipulation
- Event Handling
- ES6 Modules
- Import / Export
- Local Storage
- Asynchronous JavaScript
- Object-Oriented Programming
- Classes
- Inheritance
- Polymorphism
- Encapsulation
- Code Reusability
- Separation of Concerns
- State Management
- Modular Architecture

---

🧩 Object-Oriented Programming

This project incorporates Object-Oriented Programming concepts including:

Classes

Used to model application entities and encapsulate related behavior.

Inheritance

Implemented to promote code reuse and create specialized behavior from base classes.

Polymorphism

Used to allow objects to share common interfaces while implementing different behaviors.

These concepts helped improve maintainability and scalability of the application.

---

🧪 Testing

This project uses Jasmine for automated testing.

The testing setup validates core application functionality and reinforces Test-Driven Development principles.

Topics Practiced

- Unit Testing
- Test Suites
- Expectations
- Assertions
- Test Isolation

To run the tests:

Open:

test-jasmine/test.html

or

test.html

in your browser.

---

🛠️ Technologies Used

Technology| Purpose
HTML5| Structure
CSS3| Styling
JavaScript (ES6+)| Application Logic
JSON| Product Data Storage
Jasmine| Automated Testing
Git| Version Control
GitHub| Repository Hosting

---

▶️ Running the Project Locally

Clone the repository

git clone https://github.com/Ziolus-sw/Interactive-amazon-project.git

Navigate into the project folder

cd Interactive-amazon-project

Open the project in VS Code

code .

Run the project

Because this project uses JavaScript modules, it is recommended to run it using a local server.

Using VS Code Live Server

1. Install the Live Server extension.
2. Open "amazon.html".
3. Right-click inside the file.
4. Select Open with Live Server.

---

📸 Screenshots
<pre>

Home Page
.
.
<img width="1896" height="973" alt="image" src="https://github.com/user-attachments/assets/0d8ac30e-8299-439e-bd17-d8fc0b54c243" />
.
.  
Checkout Page
.
. 
<img width="1895" height="972" alt="image" src="https://github.com/user-attachments/assets/03b98da4-03cc-449d-a3d3-8a1341969a78" />
.
. 
Orders Page

....

Tracking Page

...
---
</pre>
📚 What I Learned

Through this project I gained hands-on experience with:

- Building large JavaScript applications.
- Structuring scalable frontend projects.
- Writing modular and reusable code.
- Implementing Object-Oriented Programming.
- Managing application state.
- Writing automated tests.
- Using Git and GitHub in real projects.

---

👨‍💻 Author

Yashdeep

Software development enthusiast passionate about building projects and continuously improving programming skills.

GitHub: https://github.com/Ziolus-sw

---

⭐ If you found this project interesting, feel free to star the repository.

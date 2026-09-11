Markdown
# 🚆 Railway Manager — Train Ticket Management CLI

A lightweight, interactive Node.js console application designed to manage train schedules and ticket bookings in the terminal. Developed as the SAS 1 Final Project for YouCode[cite: 1].

---

## 📌 Features

- **View Trips:** Browse all available predefined routes with departure/arrival times, pricing, and available seats[cite: 1].
- **Book Tickets:** Reserve a seat on an existing route with automatic seat assignment and stock validation[cite: 1].
- **List Tickets:** Display all currently booked passenger tickets[cite: 1].
- **Cancel Tickets:** Cancel reservations by ticket ID and automatically restore available trip capacity[cite: 1].
- **Search Tickets:** Find booked tickets by passenger name[cite: 1].
- **Filter Trips:** Filter routes dynamically by departure city[cite: 1].
- **Sort Trips:** Sort available trips by price (ascending order)[cite: 1].
- **Statistics (Bonus):** Overview of total tickets sold, revenue generated, and top-selling routes[cite: 1].

---

## 🛠️ Tech Stack & Concepts

- **Runtime:** Node.js[cite: 1]
- **Language:** JavaScript (ES6+)[cite: 1]
- **Input Handling:** `prompt-sync` (or Node.js `readline`)[cite: 1]
- **Core Concepts:**
  - Control Flow (`if/else`, `switch`, loops)[cite: 1]
  - Array & Object Manipulation (`filter`, `map`, `find`, `splice`, `reduce`)[cite: 1]
  - Modular Functions & State Management[cite: 1]

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Oussama-33v/Ycode_SAS-final-project-train-tickets-manager.git](https://github.com/Oussama-33v/Ycode_SAS-final-project-train-tickets-manager.git)
   cd Ycode_SAS-final-project-train-tickets-manager
Install dependencies:

Bash
npm install prompt-sync
Run the application:

Bash
node index.js
(Replace index.js with your main file name if different, e.g., app.js or main.js)

💻 CLI Menu Overview
When running the application, you will be prompted with the main menu[cite: 1]:

Plaintext
=================================
        RAILWAY MANAGER
=================================
1. Afficher les trajets
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
0. Quitter
=================================
📂 Project Structure
Plaintext
├── index.js          # Main application logic & menu loop
├── package.json      # Project dependencies and configuration
└── README.md         # Project documentation

👤 Author
Oussama Akharraz — GitHub Profile
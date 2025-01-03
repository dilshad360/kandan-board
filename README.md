
# Kandan Board 

A simple Kanban board built with React, using draggable cards for task management. The board supports task creation, moving tasks across columns (To Do, In Progress, Done), and persistent data using local storage.

## Features

* **Responsive Design**: Optimized for both desktop and mobile devices
* **Drag and Drop**: Cards can be moved between columns (To Do, In Progress, Done)
* **Task Creation**: Easily add new tasks through a modal
* **Local Storage**: Tasks and their states are persisted in the browser's local storage

## Screenshots

![Kanban Board](./screenshots/kanban-board.png)

## Prerequisites

* Node.js (version 14.0 or higher)
* npm (version 6.0 or higher)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/kanban-board.git
   ```

2. **Navigate into the project folder**:
   ```bash
   cd kanban-board
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the project**:
   ```bash
   npm run dev
   ```

This will start the development server and open the application in your browser. By default, the app will be available at http://localhost:3000.



## Usage

### Adding Tasks

* Click on the "Add New Task" button to open a modal
* Fill in the task title and description
* Submit to add the task to the "To Do" column

### Moving Tasks

* Drag and drop tasks from one column to another (e.g., from "To Do" to "In Progress")

### Persisting Data

* Task data is saved to local storage, so your changes will persist even after refreshing the page

## Technologies Used

* **React**: The frontend framework used to build the application
* **React DnD**: A library used for drag-and-drop functionality
* **Tailwind CSS**: A utility-first CSS framework for styling
* **Local Storage**: For persisting tasks across sessions
* **Vite**: Next generation frontend tooling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* React Documentation
* Vite Documentation
* React DnD Documentation
* Tailwind CSS Documentation

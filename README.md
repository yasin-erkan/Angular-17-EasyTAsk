# Task Management App

A modern task management application showcasing Angular 17's latest features and best practices.

## 🎥 Preview

![App Preview](src/assets/Angular-17_easy_Task.mp4)

## ✨ Features

- User-based task management with real-time updates
- Task creation and completion tracking with persistent storage
- Tasks automatically saved to localStorage
- Modern, responsive UI with card-based design
- Built with Angular 17's latest features
- Component-based architecture with proper separation of concerns

## 🛠️ Technical Highlights

- **Angular 17 Features**

  - Default standalone components
  - New control flow syntax (`@if`, `@for`)
  - Built-in date pipe formatting
  - Signals for state management
  - Improved template type checking

- **Architecture**

  - Standalone components by default (no NgModule required)
  - Service-based state management
  - Event-driven component communication
  - Type-safe templates and models

- **Components**
  - Shared card component for consistent UI
  - Task component with completion handling
  - User selection with dynamic task filtering
  - Modular form for new task creation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/task-management-app.git
```

2. Install dependencies

```bash
cd task-management-app
npm install
```

3. Start the development server

```bash
npm start
# or
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 📁 Project Structure

```
src/
├── app/
│   ├── header/              # App header component
│   ├── tasks/
│   │   ├── task/           # Individual task component
│   │   ├── tasks.service.ts # Task state management
│   │   └── tasks.ts        # Task list component
│   ├── user/               # User selection component
│   ├── new.task/           # New task form component
│   └── shared/
│       └── card/           # Reusable card component
├── assets/                 # Static files and images
└── styles.css             # Global styles
```

## 💡 Key Components

### TaskComponent

- Displays individual task details
- Handles task completion
- Uses shared card component
- Implements date formatting

### TasksService

- Manages task state with localStorage persistence
- Handles CRUD operations with automatic saving
- Filters tasks by user
- Provides real-time updates
- Restores tasks state on page reload

### CardComponent

- Reusable UI component
- Consistent styling across app
- Content projection support

## 🔧 Development

### Code Style

- Follows official Angular style guide
- Uses TypeScript strict mode
- Implements proper component isolation
- Maintains clean component communication

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Best Practices Demonstrated

- Proper component isolation
- Type-safe templates
- Service-based state management with persistence
- Event-driven architecture
- Consistent error handling
- Responsive design patterns
- Modern Angular patterns
- Data persistence with localStorage
- State restoration on app initialization

---

⭐️ If you find this project helpful, please consider giving it a star!

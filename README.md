# 🎨 ExcaliSketch

An Excalidraw clone built with React and TypeScript. Rough.js is used for the sketchy, hand-drawn style. This isn't responsive.

## 📦 Technologies

- `Vite`
- `React.js`
- `TypeScript`
- `CSS`
- `Rough.js`
- `Vitest`

## ✨ Features

Here's what you can do with ExcaliSketch:

- **Choose a Tool**: You have pencils, lines, rectangles, and text tools. Pick one and start creating.

- **Draw and Move**: Click and drag on the canvas to draw. To move something, select it and drag it to a new spot. Also, resize elements by dragging the corners. Resizing only works on rectangles or lines.

- **Edit Text**: Click on the canvas and start typing to add text to your drawings. You can also edit existing text.

- **Zoom**: Use Ctrl + Scroll or click on the buttons to zoom in for detail or out to see the whole picture.

- **Pan**: Hold the Space bar and drag or use the middle mouse button to move around the whiteboard canvas.

### 🎯 Keyboard Shortcuts:

Speed up your work with these shortcuts:

- **Canvas Navigation**: Press the Space bar and drag or use the middle mouse button.
- **Undo**: Ctrl + Z.
- **Redo**: Ctrl + Y or Ctrl + Shift + Z.
- **Zoom In**: Ctrl + Plus.
- **Zoom Out**: Ctrl + Minus.

## 📚 What I Learned

During this project, I've picked up important skills and a better understanding of complex ideas, which improved my logical thinking.

### 🧠 useHistory Hook:

- **Logical Thinking**: Creating the `useHistory` hook taught me to think about how to manage saving, undoing, and redoing actions. I had to really understand how to track changes and plan out user actions.

### 📏 Coordinates and Measurements:

- **Accuracy**: I've become better at working with shapes and points, like knowing if a point is inside a shape. This required careful measurements.
- **Math Skills**: I used math functions to make sure everything was placed correctly and to calculate distances.

### 🎨 Discovering Rough.js:

- **New Tools**: I found out about Rough.js, which lets me make graphics look hand-drawn. This was a new and exciting tool for me.

### 🔍 Deep Dive into Functions:

- **Complex Functions**: I spent time understanding the `getSvgPathFromStroke` function, which turns drawing movements into smooth paths.

### ✏️ Managing Points and Drawing:

- **Working with Points**: I learned how to collect and use points from drawings, which involved understanding and managing data to reflect what the user does.

### 🎣 React Hooks and Rendering:

- **New Knowledge**: I learned about `useLayoutEffect`, which helps make sure changes are done before the screen updates. This was useful for certain drawing functions.

### 🎡 Advanced Event Handling:

- **User Interaction**: I worked with the wheel event listener, which allowed me to add zooming and panning features. This made the app more interactive and user-friendly.

### 📈 Overall Growth:

Each part of this project helped me understand more about building apps, managing complex information, and improving user experience. It was more than just making a tool. It was about solving problems, learning new things, and improving my skills for future work.


## 💭 How can it be improved?

- Add more colors to the color picker.
- Add more tools like a circle, eraser, and more.
- Add more shapes like triangles, stars, and more.
- Add more keyboard shortcuts to make things faster.
- Add more themes like dark mode, light mode, and more.
- Add more text options like font size, font color, and more.
- Instead of have any in two places, create a type for the rough.js elements.

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.

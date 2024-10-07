# Text Editor

A powerful and modern text editor built using React and enhanced with Tailwind CSS for an improved interface appearance. This project also integrates Tiptap to provide rich text editing capabilities.

link to project: https://shivamsan.github.io/INSCRIBE/

## Features

- **Rich Text Editing**: Powered by Tiptap, providing a highly customizable and extendable text editor.
- **Responsive Design**: Tailwind CSS ensures the editor looks great on all devices.
- **User-friendly Interface**: Intuitive design for easy use, with accessible formatting options.
- **Real-time Updates**: Reflects changes instantly as you type.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shivamsan/INSCRIBE.git
   cd text-editor
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:5173/INSCRIBE/` to see the text editor in action.

## Adding Tailwind CSS

To add Tailwind CSS to the project, follow these steps:

1. **Install Tailwind CSS:**

   ```bash
   npm install tailwindcss
   ```

2. **Create a Tailwind configuration file:**

   ```bash
   npx tailwindcss init
   ```

3. **Configure Tailwind to remove unused styles in production:**

   ```javascript
   // tailwind.config.js
   module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. **Include Tailwind in your CSS:**
   ```css
   /* src/index.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Adding Tiptap

To add Tiptap to the project, follow these steps:

1. **Install Tiptap and its dependencies:**

   ```bash
   npm install @tiptap/react @tiptap/starter-kit
   ```

2. **Create a Tiptap editor instance:**

   ```javascript
   // src/components/Editor.js
   import React from "react";
   import { useEditor, EditorContent } from "@tiptap/react";
   import StarterKit from "@tiptap/starter-kit";

   const Editor = () => {
     const editor = useEditor({
       extensions: [StarterKit],
       content: "<p>Hello World!</p>",
     });

     return (
       <div className="editor">
         <EditorContent editor={editor} />
       </div>
     );
   };

   export default Editor;
   ```

3. **Use the editor component in your application:**

   ```javascript
   // src/App.js
   import React from "react";
   import Editor from "./components/Editor";
   import "./index.css";

   const App = () => {
     return (
       <div className="App">
         <h1 className="text-3xl font-bold underline">My Text Editor</h1>
         <Editor />
       </div>
     );
   };

   export default App;
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

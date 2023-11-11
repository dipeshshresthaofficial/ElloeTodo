# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Learnings

1. Never update state inside a loop because the state are asynchronous and setting them inside a loop will not guarantee that the state will be updated correctly. Instead use a local variable of type similar to state, update that local variable and at the end of loop update the state. (MainContainer.jsx)

2. Inside return() statement of component make use of ternary operator for if-else conditions. (MainContainer.jsx)
3. Convert JS timestamp to normal date. we can use ".toJSON()"
    e.g., const todayDate = new Date(); // Sat Nov 11 2023 16:33:12 GMT-0500
            const dateInNormalFormatAsStringType = new Date().toJSON() // '2023-11-11T21:34:31.404Z'
            const justDateAsStringType = new Date().toJSON().slice(0,10) // '2023-11-11'

            // Retrieve date input field value
            const dateFieldRef = document.getElementById("date")
            console.log(dateFieldRef.value) // it will display value in "yyyy-mm-dd" format.
            console.log(dateFieldRef.valueAsNumber) // it will display value in timestamp.

            // Convert timestamp value to normal date
            console.log(new Date(dateFieldRef.valueAsNumber).toJSON().slice(0, 10)) 

            // Converting date format from one type to another using MOMENT library
            console.log(moment("2023-11-28","YYYY-MM-DD").format("MM/DD/YYYY")) // converting from "YYYY-MM-DD" to "MM/DD/YYYY" type
# ElloeTodo

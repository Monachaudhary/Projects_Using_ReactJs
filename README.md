# Basic Projects with React Hooks

This repository contains two basic projects built using React: a Background Color Changer and a Password Generator. Both projects demonstrate the use of React hooks.

## Background Color Changer

### Description
The Background Color Changer project allows users to change the background color of a webpage by clicking on a button. It uses the `useState` hook to manage the color state and update it based on user interactions.

### How it Works
1. The initial background color is set to a default value (e.g., white).
2. When the user clicks the "Change Color" button, the `changeColor` function is triggered.
3. The `changeColor` function generates a random color using the `randomColor` function.
4. The `randomColor` function uses the `useState` hook to update the color state with the newly generated random color.
5. The background color of the webpage is updated to the new random color.

### Technologies Used
- React
- useState hook

## Password Generator

### Description
The Password Generator project generates a random password based on user preferences such as length and character types. It utilizes the `useState` and `useEffect` hooks to manage state and handle password generation.

![image](https://github.com/Monachaudhary/Projects_Using_ReactJs/assets/96776726/b7117764-0909-43d0-9cc4-b391a2c87fa2)

### How it Works
1. The user selects the desired password length and character types (uppercase, lowercase, numbers, and special characters).
2. The `generatePassword` function is triggered when the user clicks the "Generate Password" button.
3. The `generatePassword` function uses the `useState` hook to manage the password state and the `useEffect` hook to update the password when the user selects different options.
4. The password is generated based on the selected criteria and displayed to the user.

### Technologies Used
- React
- useState hook
- useEffect hook
- useCallback hook

## Running the Projects
1. Clone the repository to your local machine.
2. Navigate to the project directory (`background-color-changer` or `password-generator`).
3. Install dependencies using `npm install`.
4. Run the project using `npm start `.

Feel free to explore the code in each project's directory to understand how React hooks are implemented and used.

Happy coding!

import "../Form.css";
export const loginFields = [
  {
    inputType: "input",
    placeholder: "Email",
    type: "email",
    name: "email",
    className: "inputField",
    // style : {backgroundColor : 'red', padding : 12}
  },
  {
    inputType: "input",
    placeholder: "User Name",
    type: "text",
    name: "userName",
    className: "inputField",
  },
  {
    inputType: "drop-down",
    placeholder: "Select Gender",
    options: [
      {
        label: "Male",
        value: "Male",
      },
      {
        label: "Female",
        value: "Female",
      },
      {
        label: "Other",
        value: "Other",
      }
    ],
    name : 'gender',
    className: "drop-down",
  },
  {
    inputType: "input",
    placeholder: "Password",
    type: "password",
    name: "password",
    secureTextEntry: true,
    className: "inputField",
  },
  {
    inputType: "input",
    placeholder: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    secureTextEntry: true,
    className: "inputField",
  },
  {
    inputType: "button",
    title: "Login",
    value: "Login",
    name: "login",
    className: "button",
  },
  {
    inputType: "button",
    title: "Register",
    name: "register",
    className: "button",
  },
];

import '../Form.css'
export const loginFields = [
  {
    inputType: "input",
    placeholder: "Email",
    type: "email",
    name: "email",
    className : 'inputField',
    // style : {backgroundColor : 'red', padding : 12}
  },
  {
    inputType: "input",
    placeholder: "Password",
    type: "password",
    name: "password",
    secureTextEntry: true,
  },
  {
    inputType: "input",
    placeholder: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    secureTextEntry: true,
  },
  {
    inputType: "button",
    title: "Login",
    value: "Login",
    name: "login",
  },
  {
    inputType: "button",
    title: "Register",
    name: "register",
  },
];

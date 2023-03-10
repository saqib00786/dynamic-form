import "../Form.css";
export const loginFields = [
  {
    placeholder: "Email",
    type: "email",
    name: "email",
    className: "inputField",
    // style : {backgroundColor : 'red', padding : 12}
  },
  {
    placeholder: "User Name",
    type: "text",
    name: "userName",
    className: "inputField",
  },
  {
    inputType: "select",
    placeholder: "Select Gender",
    label : 'Gender',
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
      },
    ],
    name: "gender",
    className: "drop-down",
  },
  {
    placeholder: "Password",
    type: "password",
    name: "password",
    className: "inputField",
  },
  {
    placeholder: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    className: "inputField",
  },
  {
    inputType: "button",
    label: "Login",
    // value: "Login",
    name: "submit",
    className: "button",
  },
];

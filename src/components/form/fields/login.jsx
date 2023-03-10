import "../Form.css";
import { UserProfession } from "./UserProfession";
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
    label: "Gender",
    options: [
      {
        label: "Male",
        value: 1,
      },
      {
        label: "Female",
        value: 2,
      },
      {
        label: "Other",
        value: 3,
      },
    ],
    name: "gender",
    className: "drop-down",
  },
  {
    inputType: "select",
    placeholder: "Select User",
    label: "User",
    options: [],
    url: "https://jsonplaceholder.typicode.com/users",
    name: "user",
    className: "drop-down",
  },
  {
    inputType: "select",
    placeholder: "Select Profession",
    label: "Profession",
    options: UserProfession,
    name: "profession",
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

import "./App.css";
import Form from "./components/form/Form";
import { loginFields } from "./components/form/json/login";
import { RegisterFields } from "./components/form/json/register";

function App() {
  const handleLogin = () => {
    console.log("Login");
  };
  const handleRegister = () => {
    console.log("Register");
  };
  return (
    <div className="App">
      <Form
        FormFields={loginFields}
        handleClick={handleLogin}
        handleRegister={handleRegister}
      />
    </div>
  );
}

export default App;

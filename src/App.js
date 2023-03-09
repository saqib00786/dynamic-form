import "./App.css";
import Form from "./components/form/Form";
import { loginFields } from "./components/form/json/login";
import { RegisterFields } from "./components/form/json/register";

function App() {
  return (
    <div className="App">
      <div className="login">
        <Form FormFields={loginFields} />
      </div>

      <div className="signUp">
        <Form FormFields={RegisterFields} />
      </div>
    </div>
  );
}

export default App;

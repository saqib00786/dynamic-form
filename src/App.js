import "./App.css";
import Form from "./components/form/Form";
import { loginFields } from "./components/form/json/login";
import { RegisterFields } from "./components/form/json/register";

function App() {
  return (
    <div className="App">
      <Form FormFields={loginFields} />
    </div>
  );
}

export default App;

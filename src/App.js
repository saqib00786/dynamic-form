import { Formik } from "formik";
import "./App.css";
import Form from "./components/form/Form";
import { loginFields } from "./components/form/fields/login";
import { RegisterFields } from "./components/form/fields/register";

function App() {
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };
  
  let initialFields = {
    ...loginFields,
  };
  return (
    <div className="App">
      <Formik initialValues={initialFields} onSubmit={onSubmit}>
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          setFieldValue,
        }) => (
          <Form
            fields={loginFields}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            errors={errors}
            setFieldValue={setFieldValue}
          />
        )}
      </Formik>
    </div>
  );
}

export default App;

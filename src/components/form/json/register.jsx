export const RegisterFields = [
    {
        inputType: "input",
        placeholder: "Email",
        type : 'email',
        name: "email",
      },
      {
        inputType: "input",
        placeholder: "Password",
        type : 'password',
        name: "password",
        secureTextEntry: true,
      },
      {
        inputType :'input',
        placeholder : 'Confirm Password',
        type : 'password',
        name : 'confirmPassword',
        secureTextEntry : true
      },
      {
        inputType : 'button',
        title : 'Register',
        name : 'register'
      },
      {
        inputType : 'text',
        title : 'Already have an account?',
        name : 'alreadyHaveAccount'
      }
]
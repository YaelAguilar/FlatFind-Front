import RegisterForm from "../components/organisms/RegisterForm";

function RegisterContainer() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Registrarse</h1>
        <RegisterForm></RegisterForm>
      </div>
    );
  }
  
  export default RegisterContainer;
  
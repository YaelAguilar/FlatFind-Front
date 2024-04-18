import LoginForm from "../components/organisms/LoginForm";

function LoginContainer() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
        <LoginForm></LoginForm>
      </div>
    );
  }
  
  export default LoginContainer;
  
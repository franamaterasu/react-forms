import "./app.scss";
import Image from "./components/image";
import Login from "./components/login";

const App = () => {
  const handleFormClick = (loginData) => {
    const userLogin = loginData.user.user;
    const emailLogin = loginData.email.email;
    const pwdLogin = loginData.pwd.pwd;

    userLogin === null || userLogin === undefined
      ? console.log("Name is empty...")
      : console.log(`Name: ${userLogin}`);
    emailLogin === null || emailLogin === undefined
      ? console.log("Email is empty or wrong format...")
      : console.log(`Email: ${emailLogin}`);
    pwdLogin === null || pwdLogin === undefined
      ? console.log("Password is empty...")
      : console.log(`Password: ${pwdLogin}`);
  };

  return (
    <div className="app">
      <Image />
      <Login handleFormClick={handleFormClick} />
    </div>
  );
};

export default App;

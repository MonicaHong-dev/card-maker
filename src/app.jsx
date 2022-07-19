import "./App.css";
import Login from "./components/login/login";

function App({ googleLogIn }) {
  const gLogIn = async () => {
    const { displayName, email } = await googleLogIn();
    console.log(displayName + "!!" + email);
  };
  return (
    <>
      <Login googleLogIn={gLogIn} />
    </>
  );
}

export default App;

// sec 13: Class-based component
// url: /class-app
import '../App.css';
import Users from "../components/Users";

function ClassBasedApp() {
  return (
    <div className='opt-app'>
      <Users />
    </div>
  );
}

export default ClassBasedApp;
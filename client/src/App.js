import Users from './components/userComponent'

import RegistrationComponent from './components/registration'
function App() {
  
  function submit(){
    
  }

  return (
    <div className="App">
      <RegistrationComponent text={"email"}/>
      <RegistrationComponent text={"username"}/>
      <RegistrationComponent text={"password"}/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;

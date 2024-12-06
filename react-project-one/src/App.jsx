import UserCard from "./components/UserCard"
import isagi from "./assets/isagi.jpg"
import nagi from "./assets/nagi.jpg"
import rin from "./assets/rin.jpg"
import './App.css'
function App() {
  

  return (
    <div className="container">
      <UserCard name="ISAGI" description ="egoist"  image={isagi}/>

      <UserCard name="NAGI" description ="lazy" image={nagi}/>
      
      <UserCard name="ITOSHI RIN" description ="revenge"image={rin} />
    </div>
  )
}

export default App

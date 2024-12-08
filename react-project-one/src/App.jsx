import UserCard from "./components/UserCard"
import isagi from "./assets/isagi.jpg"
import nagi from "./assets/nagi.jpg"
import rin from "./assets/rin.jpg"
import sae from "./assets/sae.jpg"
import './App.css'
function App() {
  

  return (
    <div className="container">
      <UserCard name="ISAGI" description ="egoist"  image={isagi} style = {{"border-radius":"10px"}}/>

      <UserCard name="NAGI" description ="lazy" image={nagi} style = {{"border-radius":"10px"}}/>
      
      <UserCard name="ITOSHI RIN" description ="revenge"image={rin} style = {{"border-radius":"10px"}} />

      <UserCard name="ITOSHI SAE" description ="prodigy"image={sae} style = {{"border-radius":"10px"}} />
    </div>
  )
}

export default App

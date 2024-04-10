import './App.css'
import  {useEffect} from "react";
import AddItem from "./Componenets/AddItem.jsx";

const telegram = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        telegram.ready();
    }, []);

    const onCheckout = () => {
        telegram.MainButton.text = "Checkout right Now"
        telegram.MainButton.text = "Love is here for you"
    }
  return (
    <div>
      <AddItem/>
    </div>
  )
}

export default App

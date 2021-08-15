import './App.css';
import ItemList from "./Components/ItemList";

function App() {
let product = [
  {
  Image: './T86.jpg',
  name: 'Toyota-86-GT',
  price: '$30,000',
},
{
  Image: './Tsu.jpg',
  name: 'Toyota-Supra-2019',
  price: '$100,000',
},
{
  Image: './LFA.jpg',
  name: 'Lexus LFA',
  price: '$375,000',
}
]

  return (
    <div className="App">
      <ItemList Items={product} />
    </div>
  );
}

export default App;

import Banner from "../component/Banner";
import Cart from "../component/Cart";
import ShoppingList from "../component/ShoppingList";
import CareScale from "../component/CareScale";
import { plantList } from '../datas/plantList';
import Recommendation from "../component/Recommendation";
function App() {
  return <div><Banner /><Cart /><ShoppingList /><Recommendation /><CareScale careType='light' scaleValue= {plantList.light} /><CareScale careType='water' scaleValue={plantList.water}/></div>
}

export default App

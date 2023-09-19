import logo from '../assets/logo.png'
import Banner from "../component/Banner";
//import Cart from "../component/Cart";
import ShoppingList from "../component/ShoppingList";
//import CareScale from "../component/CareScale";
//import { plantList } from '../datas/PlantList';
//import Recommendation from "../component/Recommendation";
//import PlantItem from "./PlantItem";
function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* <Cart /> */}
			<ShoppingList />
			
		</div>
	)
}
export default App

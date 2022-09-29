import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePge from './pages/HomePge'
import { GlobalStyles } from './global.style'

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<GlobalStyles />

				<Routes>
					<Route path="/" element={<HomePge />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App

//https://codesandbox.io/s/ytzx1?file=/src/components/HashLinkPage.tsx

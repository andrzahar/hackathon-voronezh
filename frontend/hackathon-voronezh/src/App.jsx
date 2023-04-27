import './App.css'
import Header from "./components/Header/Header.jsx";
import {RenderRoutes} from "./routes/RenderRoutes.jsx";

function App() {
    return (
        <>
            <Header/>
            <RenderRoutes />
        </>
    )
}

export default App


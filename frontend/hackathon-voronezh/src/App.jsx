import './App.css'
import Header from "./components/Header/Header.jsx";
import WelcomePage from "./components/WelcomePage/WelcomePage.jsx";
import {Route, Router, Routes} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";

function App() {
    return (
        <>
            <Header/>
            {/*<WelcomePage/>*/}
            {/*<Routes>*/}
                {/*<Route>*/}
                    <div className="App">
                        <Sidebar />
                        <Routes>
                            <Route path={'/calendar'} element={<Calendar/>}/>
                        </Routes>
                    </div>
                {/*</Route>*/}
            {/*</Routes>*/}

        </>
    )
}

export default App


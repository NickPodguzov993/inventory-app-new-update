import Wrapper from "./components/Wrapper";
import Header from "./Layout/Header/Header.tsx";
import NavBar from "./Layout/NavBar/NavBar.tsx";
import {Route, Routes} from "react-router-dom";
import Equipment from "./Pages/Equipment.tsx";
import Users from "./Pages/Users.tsx";

function App() {
    return (
        <Wrapper>
            <Header/>
            <div className="fr w-full ">
                <NavBar/>
                <Routes>
                    <Route path={'/equipment'} element={<Equipment/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                </Routes>
            </div>
        </Wrapper>
    )
}

export default App

import {Route, Routes} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./Layout/Header/Header.tsx";
import NavBar from "./Layout/NavBar/NavBar.tsx";
import {UserContextProvider} from "./Context/UsersContext.tsx";
import {EquipmentsContextProvider} from "./Context/EquipmentsContext.tsx";
import EquipmentsPage from "./Pages/EquipmentsPage/EquipmentsPage.tsx";
import UsersPage from "./Pages/UsersPage/UsersPage";

export type EqiupmentStatusType = "Закреплeно" | "Резерв" | "Требует ремонта" | "Списано" | "В другом офисе"
export type EqiupmentTypesType = "Ноутбуки" | "Аксессуары" | "Мониторы" | "Принтеры" | "Системный блок"
export type UsersStatusType = "IT-пацаны" | "Дизайнеры" | "Бухгалтерия" | "HR-девчули"
export type HistoryType = {
    date: string,
    status: EqiupmentStatusType,
    ownerId: string | null
    dataNote: string | null
}

export type EquipmentType = {
    id: string,
    title: string,
    status: EqiupmentStatusType,
    type: EqiupmentTypesType
    ownerId: string | null
    history: HistoryType[] | null
    note: string | null
}

export type UsersType = {
    id: string, email: string, name: string, isWorking: boolean, department: UsersStatusType, equipments?: EquipmentType[]
}

function App() {


    return (
        <EquipmentsContextProvider>
            <UserContextProvider>
                <Wrapper>
                    <Header/>
                    <div className="fr w-full">
                        <NavBar/>
                        <Routes>
                            <Route path={'/equipment'} element={<EquipmentsPage/>}/>
                            <Route path={'/'}
                                   element={<UsersPage/>}/>
                        </Routes>
                    </div>
                </Wrapper>
            </UserContextProvider>
        </EquipmentsContextProvider>
    )
}

export default App


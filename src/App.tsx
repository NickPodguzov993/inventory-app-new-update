import {Route, Routes} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./Layout/Header/Header.tsx";
import NavBar from "./Layout/NavBar/NavBar.tsx";
import UsersPage from "./Pages/UsersPage/UsersPage.tsx";
import {v1} from 'uuid';
import {UserContextProvider} from "./Context/UsersContext.tsx";
import {EquipmentsContextProvider} from "./Context/EquipmentsContext.tsx";
import EquipmentsPage from "./Pages/EquipmentsPage/EquipmentsPage.tsx";


export type EquipmentType = {
    id: string,
    title: string,
    status: "Закреплeно" | "Резерв" | "Требует ремонта" | "Списано" | "В другом офисе",
    type: "Ноутбуки" | "Аксессуары" | "Мониторы" | "Принтеры" | "Системный блок",
    owner?: UsersType | null,
    history?: {date: string, status: string, owner: string | null}[]
}

export type UsersType = {
    id: string, email: string, name: string, isWorking: boolean, department: string, equipment?: EquipmentType[]
    // допилить возможность отсутсвия техники у юзера
}

function App() {

    const mockEquipments: EquipmentType[] = [
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки",
            owner: {id: v1(), name: "Станислав", isWorking: true, department: "IT-пацаны",email: "info@fintech.com",}},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары",
            owner: {id: v1(), name: "Станислав", isWorking: true, department: "IT-пацаны",email: "info@fintech.com",}},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы"},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры"},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки"},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки"},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары"},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы",
            owner: {id: v1(), name: "Станислав", isWorking: true, department: "IT-пацаны",email: "info@fintech.com",}},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры"},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки"},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки"},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары"},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы"},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры"},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки"},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки"},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары"},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы"},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры"},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки"},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки"},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары"},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы"},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры"},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки"},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки"},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары"},
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы"},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры"},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки"},
    ]
    const mockUsers: UsersType[] = [
        {
            id: v1(), name: "Станислав", isWorking: true, department: "IT-пацаны",
            equipment: [{id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы"},],
            email: "info@fintech.com",
        },
        {
            id: v1(), name: "Николай", isWorking: true, department: "IT-пацаны", equipment: [
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Божинов Вадим",
            isWorking: false,
            department: "Дизайнеры",
            equipment: [
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Глав Бух",
            isWorking: true,
            department: "Бухгалтерия",
            equipment: [{id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Душный Дед",
            isWorking: true,
            department: "IT-пацаны",
            equipment: [{id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Никита 1С",
            isWorking: true,
            department: "Бухгалтерия",
            equipment: [{id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Даша Улыбка",
            isWorking: false,
            department: "HR-девчули",
            equipment: [{id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Аксессуары"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Митрошина Тест",
            isWorking: true,
            department: "Бухгалтерия",
            equipment: [{id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Аксессуары"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Виктория Орлова",
            isWorking: true,
            department: "Дизайнеры",
            equipment: [{id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Аксессуары"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Виктория Крят",
            isWorking: false,
            department: "Дизайнеры",
            equipment: [{id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Аксессуары"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Алёна Альмеко",
            isWorking: true,
            department: "HR-девчули",
            equipment: [{id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Аксессуары"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Артём Бэк",
            isWorking: true,
            department: "IT-пацаны",
            equipment: [{id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы"},
                {id: v1(), title: "Asus", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Принтеры"}],
            email: "info@fintech.com"
        },
        {
            id: v1(),
            name: "Пал Саныч",
            isWorking: true,
            department: "IT-пацаны",
            equipment: [{id: v1(), title: "МакБук", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы"},
                {id: v1(), title: "Наушники", status: "Закреплeно", type: "Аксессуары"}],
            // realEquipment: [mockEquipments],
            email: "info@fintech.com"
        }
    ];


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
                                   element={<UsersPage mockEquipments={mockEquipments} mockUsers={mockUsers}/>}/>
                        </Routes>
                    </div>
                </Wrapper>
            </UserContextProvider>
        </EquipmentsContextProvider>
    )
}

export default App


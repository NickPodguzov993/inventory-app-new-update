import React, {createContext} from "react";
import {v1} from "uuid";
import {UsersType} from "../App.tsx";

interface childrenProps {
    children: React.ReactNode
}

// Создаем объект контекста
const UserContext = createContext<UsersType[]>([]);

// Используем провайдер для передачи значения контекста дочерним компонентам
const UserContextProvider = ({children}: childrenProps) => {
    // Ваш код для определения массива, который будет передан через контекст
    const mockUsers: UsersType[] = [
        {
            id: v1(), name: "Станислав",
            isWorking: true,
            department: "IT-пацаны", equipment: [
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы"},
                {id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Ноутбуки"},
                {id: v1(), title: "Xerox", status: "Закреплeно", type: "Принтеры"}],
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
            department: "IT-пацаны",
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
    return <UserContext.Provider value={mockUsers}>{children}</UserContext.Provider>;
};

export {UserContext, UserContextProvider};

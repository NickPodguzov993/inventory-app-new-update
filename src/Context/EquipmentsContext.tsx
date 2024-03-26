// Контекст с массивом оборудования

import React, {createContext} from "react";
import {v1} from "uuid";
import {EquipmentType} from "../App.tsx";

interface childrenProps {
    children: React.ReactNode
}

// Создаем объект контекста
const EquipmentsContext = createContext<EquipmentType[]>([]);

// Используем провайдер для передачи значения контекста дочерним компонентам
const EquipmentsContextProvider = ({children}: childrenProps) => {
    // Ваш код для определения массива, который будет передан через контекст
    const mockEquipments: EquipmentType[] = [
        {
            id: v1(),
            title: "Наушники JBL",
            status: "Закреплeно",
            type: "Ноутбуки",
            owner: {id: v1(), name: "Станислав", isWorking: true, department: "IT-пацаны", email: "info@fintech.com",},
            history: [{date: "11.11.2023", status: "Закреплeно", owner: "Станислав"},
                {date: "19.02.2024", status: "Требует ремонта", owner: null},
                {date: "27.03.2024", status: "Резерв", owner: null},
                {date: "01.14.2024", status: "Закреплeно", owner: "Пал Саныч"},]
        },
        {
            id: v1(), title: "Ноутбук F+", status: "Закреплeно", type: "Аксессуары",
            owner: {id: v1(), name: "Станислав", isWorking: true, department: "IT-пацаны", email: "info@fintech.com",}
        },
        {id: v1(), title: "Монитор MSI", status: "Требует ремонта", type: "Мониторы"},
        {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры"},
        {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки"},
        {id: v1(), title: "Наушники JBL", status: "Закреплeно", type: "Ноутбуки"},
        {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Аксессуары"},
        {
            id: v1(), title: "Монитор MSI", status: "Закреплeно", type: "Мониторы",
            owner: {id: v1(), name: "Станислав", isWorking: true, department: "IT-пацаны", email: "info@fintech.com",}
        },
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
    return <EquipmentsContext.Provider value={mockEquipments}>{children}</EquipmentsContext.Provider>;
};

export {EquipmentsContext, EquipmentsContextProvider};
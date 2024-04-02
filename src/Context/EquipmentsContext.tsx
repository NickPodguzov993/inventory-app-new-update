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
                status: "Списано",
                type: "Аксессуары",
                note: "Buy this shed for Designers",
                ownerId: null,
                history: [{
                    date: "11.11.2022",
                    status: "Закреплeно",
                    ownerId: null,
                    dataNote: "Today we buy this shed for Designers"
                },
                    {date: "03.05.2022", status: "Требует ремонта", ownerId: null, dataNote: "something сломалось"},
                    {date: "05.08.2023", status: "Резерв", ownerId: null, dataNote: "something починили"},
                    {date: "15.11.2023", status: "Закреплeно", ownerId: null, dataNote: "Передали новому Владельцу"},
                    {date: "21.12.2023", status: "Закреплeно", ownerId: null, dataNote: "Сменили владельца"},
                    {date: "01.04.2024", status: "Списано", ownerId: null, dataNote: "Отжила своё"},
                ]
            },
            {
                id: v1(),
                title: "Ноутбук F+",
                status: "Закреплeно",
                type: "Ноутбуки",
                ownerId: null,
                note: null,
                history: null,

            },
            {
                id: v1(),
                title: "Монитор MSI",
                status: "Требует ремонта",
                type: "Мониторы",
                ownerId: null,
                note: null,
                history: null
            },
            {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: null, note: null, history: null},
            {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Наушники JBL",
                status: "Закреплeно",
                type: "Аксессуары",
                ownerId: null,
                note: null,
                history: null
            },
            {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Монитор MSI",
                status: "Закреплeно",
                type: "Мониторы",
                ownerId: null,
                note: null,
                history: null

            },
            {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: null, note: null, history: null},
            {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Наушники JBL",
                status: "Закреплeно",
                type: "Аксессуары",
                ownerId: null,
                note: null,
                history: null
            },
            {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Принтер НР",
                status: "Требует ремонта",
                type: "Принтеры",
                ownerId: null,
                note: null,
                history: null
            },
            {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: null, note: null, history: null},
            {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Наушники JBL",
                status: "Закреплeно",
                type: "Аксессуары",
                ownerId: null,
                note: null,
                history: null
            },
            {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Клавиатура механическая",
                status: "Требует ремонта",
                type: "Аксессуары",
                ownerId: null,
                note: null,
                history: null
            },
            {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: null, note: null, history: null},
            {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Наушники JBL",
                status: "Закреплeно",
                type: "Ноутбуки",
                ownerId: null,
                note: null,
                history: null
            },
            {id: v1(), title: "Наушники F+", status: "Резерв", type: "Аксессуары", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Системный блок ПК-2",
                status: "Требует ремонта",
                type: "Мониторы",
                ownerId: null,
                note: null,
                history: null
            },
            {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: null, note: null, history: null},
            {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Наушники MI",
                status: "Закреплeно",
                type: "Аксессуары",
                ownerId: null,
                note: null,
                history: null
            },
            {id: v1(), title: "Колонка F+", status: "Резерв", type: "Аксессуары", ownerId: null, note: null, history: null},
            {id: v1(), title: "LG", status: "Требует ремонта", type: "Мониторы", ownerId: null, note: null, history: null},
            {id: v1(), title: "Xerox", status: "Списано", type: "Принтеры", ownerId: null, note: null, history: null},
            {id: v1(), title: "МакБук", status: "В другом офисе", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Принтер LG",
                status: "В другом офисе",
                type: "Принтеры",
                ownerId: null,
                note: null,
                history: null
            },
            {
                id: v1(),
                title: "Наушники вакумные",
                status: "В другом офисе",
                type: "Аксессуары",
                ownerId: null,
                note: null,
                history: null
            },
            {
                id: v1(),
                title: "Наушники большие",
                status: "Списано",
                type: "Аксессуары",
                ownerId: null,
                note: null,
                history: null
            },
        ]
        return <EquipmentsContext.Provider value={mockEquipments}>{children}</EquipmentsContext.Provider>;
    }
;

export {EquipmentsContext, EquipmentsContextProvider};
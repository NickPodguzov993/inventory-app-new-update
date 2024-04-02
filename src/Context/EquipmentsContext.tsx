// Контекст с массивом оборудования

import {createContext, useState} from "react";
import {v1} from "uuid";
import {EquipmentType, UsersType} from "../App.tsx";

interface childrenProps {
    children: React.ReactNode
}

export interface IContext {
    initialValue: EquipmentType[];
    currentUser: UsersType | null;
    handleAddEquip?: (unknown) => void;
    handleRemoveEquip:(unknown) => void;
    setCurrentUser?: (unknown) => void;
}
// Создаем объект контекста
const EquipmentsContext = createContext<IContext | null>(null);

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
                ownerId: '',
                history: [{
                    date: "11.11.2022",
                    status: "Закреплeно",
                    ownerId: '',
                    dataNote: "Today we buy this shed for Designers"
                },
                    {date: "03.05.2022", status: "Требует ремонта", ownerId: '', dataNote: "something сломалось"},
                    {date: "05.08.2023", status: "Резерв", ownerId: '', dataNote: "something починили"},
                    {date: "15.11.2023", status: "Закреплeно", ownerId: '', dataNote: "Передали новому Владельцу"},
                    {date: "21.12.2023", status: "Закреплeно", ownerId: '', dataNote: "Сменили владельца"},
                    {date: "01.04.2024", status: "Списано", ownerId: '', dataNote: "Отжила своё"},
                ]
            },
            {
                id: v1(),
                title: "Ноутбук F+",
                status: "Закреплeно",
                type: "Ноутбуки",
                ownerId: '',
                note: null,
                history: null,

            },
            {
                id: v1(),
                title: "Монитор MSI",
                status: "Требует ремонта",
                type: "Мониторы",
                ownerId: '',
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
                ownerId: '',
                note: null,
                history: null
            },
            {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Монитор MSI",
                status: "Закреплeно",
                type: "Мониторы",
                ownerId: '',
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
                ownerId: '',
                note: null,
                history: null
            },
            {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Принтер НР",
                status: "Требует ремонта",
                type: "Принтеры",
                ownerId: '',
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
                ownerId:'',
                note: null,
                history: null
            },
            {id: v1(), title: "Ноутбук F+", status: "Резерв", type: "Ноутбуки", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Клавиатура механическая",
                status: "Требует ремонта",
                type: "Аксессуары",
                ownerId:'',
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
                ownerId: '',
                note: null,
                history: null
            },
            {id: v1(), title: "Наушники F+", status: "Резерв", type: "Аксессуары", ownerId: null, note: null, history: null},
            {
                id: v1(),
                title: "Системный блок ПК-2",
                status: "Требует ремонта",
                type: "Мониторы",
                ownerId: '',
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
                ownerId: '',
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
                ownerId:'',
                note: null,
                history: null
            },
            {
                id: v1(),
                title: "Наушники вакумные",
                status: "В другом офисе",
                type: "Аксессуары",
                ownerId: '',
                note: null,
                history: null
            },
            {
                id: v1(),
                title: "Наушники большие",
                status: "Списано",
                type: "Аксессуары",
                ownerId: '',
                note: null,
                history: null
            },
        ]

    const [initialValue, setInitialValue] = useState<EquipmentType[]>(mockEquipments)
    const [currentUser, setCurrentUser] = useState(null)

    const handleAddEquip = (cards) => {
        setInitialValue(initialValue.map(item => {
            const card = cards.find(elem => elem.id === item.id)
            if(card){
                return {...item, ownerId: currentUser.id}
            }
            return item
        }))
    }

    const handleRemoveEquip = () => {
        // return initialValue.filter(f=>f.id !== id2)
        console.log('12334')
    }

    return <EquipmentsContext.Provider value={{
        initialValue: initialValue,
        currentUser: currentUser,
        handleAddEquip: handleAddEquip,
        setCurrentUser: setCurrentUser,
        handleRemoveEquip:handleRemoveEquip
    }}

    >{children}</EquipmentsContext.Provider>;
    }
;

export {EquipmentsContext, EquipmentsContextProvider};
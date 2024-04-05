
import {useContext, useMemo, useState} from "react";

import {EquipmentsContext} from "../../Context/EquipmentsContext.tsx";
import EquipmentFilterType from "../Filters/EquipmentFilterType.tsx";
import SelectEquipmentCard from "./SelectEquipmentCard.tsx";
import EditButton from "../Buttons/EditButton.tsx";
import Search from "../SVG/Search";


type PropsType = {
    close: () => void
}
const SelectionOfEquipment = ({close}: PropsType) => {
    const {initialValue, handleAddEquip} = useContext(EquipmentsContext)
    const [checkedItems, setCheckedItems] = useState([])

    const handleCheckItem = (id) => {
        const item = initialValue.find(item => item.id === id)
        const index: number = checkedItems.findIndex(item => item.id === id)
        setCheckedItems(item && index >= 0 ? checkedItems.filter(item => item.id !== id) : [...checkedItems, item])
    }

    console.log('check',checkedItems)

    const handleConfirm = () => {
        if(handleAddEquip) {
            handleAddEquip(checkedItems)
            setCheckedItems([])
            close()
        }
    }

    const [searchEquip, setSearchEquip] = useState('')


    const getSearchEquip = useMemo(()=> {
        console.log('1234')
        return initialValue.filter(equip => equip.title.toLowerCase().includes(searchEquip.toLowerCase()))
    },[searchEquip])

    return (
        <div className="flex flex-col">
            <div
                className="w-[360px] h-auto rounded-t-[40px] p-8 bg-white shadow flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-gray-800 text-2xl font-bold font-['Roboto']">Выберите технику</div>

                <div className="flex flex-row justify-between border rounded-[40px] h-12 w-full items-center">
                    <input
                        value={searchEquip}
                        onChange={e => setSearchEquip(e.target.value)}
                        type="text" placeholder={"Поиск"} className="ml-4 text-base font-normal font-['Roboto']
     w-full  border-slate-300
    focus:placeholder:text-slate-400 outline-0 focus:placeholder:pl-4
    sm:placeholder:hover:text-zinc-700"/>
                    <div ><Search/></div>
                </div>
                <EquipmentFilterType equipment={getSearchEquip}></EquipmentFilterType>
            </div>
            <div
                className="w-[360px] overflow-y-scroll bg-[#ECEFF1] rounded-b-[40px] p-8 flex-col justify-between items-start gfap-4 inline-flex">
                <div className="overflow-y-scroll flex flex-col w-full gap-2">
                    {getSearchEquip?.filter(item => item.ownerId === '').map(item =>
                        <SelectEquipmentCard item={item} checkedItems={checkedItems} handleCheckItem={handleCheckItem} />)}
                </div>
                <div className="w-full">
                <EditButton title={"Добавить"} open={handleConfirm}/>
                </div>
            </div>
        </div>
    );
};

export default SelectionOfEquipment;

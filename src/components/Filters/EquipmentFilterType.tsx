// блок фильтрации оборудования на главной странице оборудования
import FilterButton from "../Buttons/FilterButton.tsx";
import {useContext} from "react";
import {EquipmentsContext} from "../../Context/EquipmentsContext";
import {EquipmentType} from "../../App";

type Props = {
    close?: () => void,
    setEquipmentListType: (type: string) => void
    filterType: string;
}
const EquipmentFilterType = ({close, setEquipmentListType, filterType}: Props) => {
    const {initialValue} = useContext(EquipmentsContext)
    function getUniqueEquipments(allEquipments: EquipmentType[]): string[] {
        const uniqueEquipments: string[] = [];
        allEquipments.forEach(d => {
            if (!uniqueEquipments.includes(d.type)) {
                uniqueEquipments.push(d.type);
            }
        });
        return uniqueEquipments;
    }

    const uniqueEquipments = getUniqueEquipments(initialValue);


    return (
        <div className="user_filter_container">
            <FilterButton setFilter={setEquipmentListType} close={close} title={"Все"}/>
            {uniqueEquipments.map((u, index) => (
                <FilterButton setFilter={setEquipmentListType} close={close} key={index} title={u} filter={filterType}/>
            ))}
        </div>
    );
};

export default EquipmentFilterType;
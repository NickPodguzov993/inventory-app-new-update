// блок фильтрации оборудования на главной странице оборудования

import {EquipmentType} from "../../App.tsx";
import FilterButton from "../Buttons/FilterButton.tsx";
import {useContext} from "react";
import {EquipmentsContext} from "../../Context/EquipmentsContext.tsx";

type Props = {
    close?: () => void
}
const EquipmentFilterType = ({close}: Props) => {

    const allEquipments = useContext(EquipmentsContext)
    function getUniqueEquipments(allEquipments: EquipmentType[]): string[] {
        const uniqueEquipments: string[] = [];
        allEquipments.forEach(d => {
            if (!uniqueEquipments.includes(d.type)) {
                uniqueEquipments.push(d.type);
            }
        });
        return uniqueEquipments;
    }

    const uniqueEquipments = getUniqueEquipments(allEquipments);

    return (
        <div className="user_filter_container">
            <FilterButton close={close} title={"Все"}/>
            {uniqueEquipments.map((u, index) => (
                <FilterButton close={close} key={index} title={u}/>
                // нужно кей нормальный присобачить.
            ))}
        </div>
    );
};

export default EquipmentFilterType;
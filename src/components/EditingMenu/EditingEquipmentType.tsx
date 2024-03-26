// компонента фильтрует все виды категорий техники и мапит полученный массив в кнопки

import {EquipmentType} from "../../App.tsx";
import {useContext} from "react";
import {EquipmentsContext} from "../../Context/EquipmentsContext.tsx";
import EquipmentChoiceTypeButton from "../Buttons/EquipmentChoiceTypeButton.tsx";

type Props = {
    close?: () => void,
    title?: string
}
const EditingEquipmentType = ({title}: Props) => {
    const allEquipments = useContext(EquipmentsContext)

    function getUniqueEquipments(allEquipments: EquipmentType[]): string[] {
        const uniqueEquipments: string[] = [];
        allEquipments.forEach((d) => {
            if (!uniqueEquipments.includes(d.type)) {
                uniqueEquipments.push(d.type);
            }
        });
        return uniqueEquipments;
    }

    const uniqueEquipments = getUniqueEquipments(allEquipments);

    return (
        <div className="fc gap-2">
            <div className="text-gray-800 text-2xl font-bold font-['Roboto']">{title}</div>
            <div className="user_filter_container">
                {uniqueEquipments.map((u, index) => (
                    <EquipmentChoiceTypeButton key={index} title={u}/>
                    // нужно кей нормальный присобачить.
                ))}
            </div>
        </div>
    );
};

export default EditingEquipmentType;

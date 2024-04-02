// компонента фильтрует все виды категорий техники и мапит полученный массив в кнопки

import {EqiupmentTypesType, EquipmentType} from "../../App.tsx";
import {useContext} from "react";
import {EquipmentsContext} from "../../Context/EquipmentsContext.tsx";
import EquipmentChoiceTypeButton from "../Buttons/EquipmentChoiceTypeButton.tsx";

type Props = {
    title: string
    equipType: EqiupmentTypesType
    handleChangeEquipType: (type: EqiupmentTypesType) => void
}
const EditingEquipmentType = ({title, handleChangeEquipType, equipType}: Props) => {
    const allEquipments = useContext(EquipmentsContext)
    function getUniqueEquipments(allEquipments: EquipmentType[]): string[] {
        const uniqueEquipments: EqiupmentTypesType[] = [];
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
                    <EquipmentChoiceTypeButton
                        handleChange={handleChangeEquipType}
                        equipTitle={equipType}
                        key={index}
                        title={u}/>
                ))}
            </div>
        </div>
    );
};

export default EditingEquipmentType;

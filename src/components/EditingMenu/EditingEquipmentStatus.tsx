// компонента фильтрует все виды статуса техники и мапит полученный массив в кнопки

import {useContext} from "react";
import {EquipmentsContext} from "../../Context/EquipmentsContext.tsx";
import EquipmentChoiceTypeButton from "../Buttons/EquipmentChoiceTypeButton.tsx";
import {EqiupmentStatusType, EqiupmentTypesType, EquipmentType} from "../../App.tsx";

type Props = {
    title: string
    equipStatus: EqiupmentTypesType | EqiupmentStatusType
    handleChangeEquipStatus: (status: EqiupmentStatusType) => void
}
const EditingEquipmentStatus = ({title, handleChangeEquipStatus, equipStatus}: Props) => {
    const allEquipments = useContext(EquipmentsContext)

    function getUniqueEquipments(allEquipments: EquipmentType[]): string[] {
        const uniqueEquipments: EqiupmentStatusType[] = [];
        allEquipments.forEach((d) => {
            if (!uniqueEquipments.includes(d.status)) {
                uniqueEquipments.push(d.status);
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
                    <EquipmentChoiceTypeButton equipTitle={equipStatus}
                                               key={index}
                                               title={u}
                                               handleChange={handleChangeEquipStatus}/>
                ))}
            </div>
        </div>
    );
};

export default EditingEquipmentStatus;

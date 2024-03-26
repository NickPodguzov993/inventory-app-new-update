import EditInput from "../Inputs/EditInput.tsx";
import {EquipmentType} from "../../App.tsx";

type PropsType = {
    equipment: EquipmentType
}
const EditingEquipmentMenuTitle = ({equipment} : PropsType) => {
    return (
        <div className="flex flex-row gap-8 w-full">
            <img src="https://via.placeholder.com/160x160" alt="QR-code"/>
            <div className="justify-between fc w-full">
                <EditInput item={equipment.title} label={"Название оборудования"}/>
                <EditInput item={equipment.id} label={"ID"}/>
            </div>
        </div>
    );
};

export default EditingEquipmentMenuTitle;
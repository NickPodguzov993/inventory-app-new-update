import EditInput from "../Inputs/EditInput.tsx";
import {EquipmentType} from "../../App.tsx";

type PropsType = {
    equipment: EquipmentType
    equipTitle: string
    onChange: (title: string) => void
    note: string | null
    changeNote: (note: string) => void
}
const EditingEquipmentMenuTitle = ({equipTitle, onChange, note, changeNote} : PropsType) => {
    return (
        <div className="flex flex-row gap-8 w-full">
            <img src="https://via.placeholder.com/160x160" alt="QR-code"/>
            <div className="justify-between fc w-full">
                <EditInput onChange={onChange} item={equipTitle} label={"Название оборудования"} error={false}/>
                <EditInput onChange={changeNote} item={note} label={"Заявка"}/>
            </div>
        </div>
    );
};

export default EditingEquipmentMenuTitle;
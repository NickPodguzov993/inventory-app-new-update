import Edit from "../SVG/Edit.tsx";
import EquipmentTypeCard from "../ItemCards/EquipmentTypeCard.tsx";

type propsType = {
    label: string,
    type: string,
    edit: () => void
}
const EditingEquipmentTypeButton = ({label, type, edit}: propsType) => {
    return (
        <div className="fc gap-2">
            <div className="text-neutral-400 text-xs font-medium font-['Roboto']">{label}</div>
            <div onClick={edit} className="items-center fr gap-2 cursor-pointer border border-[#ECEFF1] rounded-[10px] pl-2 pr-1 py-1">
                <EquipmentTypeCard type={type}/>
                <Edit/>
            </div>
        </div>
    );
};

export default EditingEquipmentTypeButton;
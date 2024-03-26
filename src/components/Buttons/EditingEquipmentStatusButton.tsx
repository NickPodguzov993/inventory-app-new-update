import Edit from "../SVG/Edit.tsx";
import EquipmentStatusCard from "../ItemCards/EquipmentStatusCard.tsx";

type propsType = {
    label: string,
    status: string,
    edit: () => void
}
const EditingEquipmentStatusButton = ({label, status, edit}: propsType) => {
    return (
        <div className="fc gap-2">
            <div className="text-neutral-400 text-xs font-medium font-['Roboto']">{label}</div>
            <div onClick={edit} className="fr gap-2 cursor-pointer items-center border border-[#ECEFF1] rounded-[10px] pl-2 pr-1 py-1 ">
                <EquipmentStatusCard title={status}/>
                <Edit/>
            </div>
        </div>
    );
};

export default EditingEquipmentStatusButton;




import {EquipmentType} from "../../App.tsx";
import FilterButton from "../Buttons/FilterButton.tsx";

type PropsType = {
    status: EquipmentType[];
}
const EquipmentsStatusFilter = ({status}: PropsType) => {
    function getUniqueEquipments(equipment: EquipmentType[]): string[] {
        const uniqueEquipments: string[] = [];
        equipment.forEach((d) => {
            if (!uniqueEquipments.includes(d.status)) {
                uniqueEquipments.push(d.status);
            }
        });
        return uniqueEquipments;
    }

    const uniqueEquipments = getUniqueEquipments(status);

    return (
        <div className="user_filter_container">
            <FilterButton title={"Все"}/>
            {uniqueEquipments.map((u, index) => (
                <FilterButton key={index} title={u}/>
            ))}
        </div>
    );
};

export default EquipmentsStatusFilter;
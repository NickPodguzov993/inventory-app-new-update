
import {useContext} from "react";
import {EquipmentsContext} from "../../Context/EquipmentsContext.tsx";
import EquipmentFilterType from "../../components/Filters/EquipmentFilterType.tsx";
import EquipmentsStatusFilter from "../../components/Filters/EquipmentsStatusFilter.tsx";
import EquipmentTitle from "./EquipmentTitle.tsx";
import EquipmentList from "./EquipmentList.tsx";



const EquipmentsPage = () => {
    const allEquipments = useContext(EquipmentsContext)
    return (
        <div className="users_page">
            <EquipmentTitle equipment={allEquipments}/>
            <div className="fr justify-between w-full">
                <EquipmentFilterType/>
                <EquipmentsStatusFilter status={allEquipments}/>
            </div>
            <EquipmentList equipments={allEquipments}/>
        </div>
    );
};

export default EquipmentsPage;

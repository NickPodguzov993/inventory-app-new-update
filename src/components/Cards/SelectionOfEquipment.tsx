import EquipmentSearch from "../Search/EquipmentSearch.tsx";
import {useContext} from "react";
import {EquipmentType} from "../../App.tsx";
import {EquipmentsContext} from "../../Context/EquipmentsContext.tsx";
import EquipmentFilterType from "../Filters/EquipmentFilterType.tsx";
import SelectEquipmentCard from "./SelectEquipmentCard.tsx";
import EditButton from "../Buttons/EditButton.tsx";

type PropsType = {
    close: () => void
}
const SelectionOfEquipment = ({close}: PropsType) => {
    const allEquipments: EquipmentType[] = useContext(EquipmentsContext) as EquipmentType[]
    return (
        <div className="flex flex-col">
            <div
                className="w-[360px] h-auto rounded-t-[40px] p-8 bg-white shadow flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-gray-800 text-2xl font-bold font-['Roboto']">Выберите технику</div>
                <EquipmentSearch/>
                <EquipmentFilterType equipment={allEquipments}></EquipmentFilterType>
            </div>
            <div
                className="w-[360px] overflow-y-scroll bg-[#ECEFF1] rounded-b-[40px] p-8 flex-col justify-between items-start gfap-4 inline-flex">
                <div className="overflow-y-scroll flex flex-col w-full gap-2">
                    {allEquipments.map(e => <SelectEquipmentCard title={e.title}/>)}
                </div>
                <div className="w-full">
                <EditButton title={"Добавить"} open={close}/>
                </div>
            </div>
        </div>
    );
};

export default SelectionOfEquipment;
// список всего отфильтрованного оборцдования оборудования
import {useState} from "react";
import {EquipmentType} from "../../App.tsx";
import ArrowToRight from "../../components/SVG/ArrowToRight.tsx";
import EquipmentStatusCard from "../../components/ItemCards/EquipmentStatusCard.tsx";
import EquipmentTypeCard from "../../components/ItemCards/EquipmentTypeCard.tsx";
import SelectedEquipmentCard from "../../components/Cards/SelectedEquipmentCard.tsx";

type PropsType = {
    equipments: EquipmentType[];
    saveEquipChanges: (equip: EquipmentType) => void;
}
const EquipmentList = ({equipments, saveEquipChanges}: PropsType) => {
    const [selectedEquipment, setSelectedEquipment] = useState<EquipmentType | null>(null);
    return (
        <div className="fr flex-wrap gap-4">
            {equipments.map(e => (
                <div
                    onClick={() => setSelectedEquipment(e)} key={e.id}
                    className="equipment_list_card">
                    <div
                        className="equipment_card_id">
                        {e.id}
                    </div>
                    <div
                        className="equipment_list_title">
                        {e.title}
                    </div>
                    <div className="show_details_block">
                        <div className="justify-start items-start flex">
                            <div
                                className="w-[120px] h-[42px] px-4 bg-sky-100 flex rounded-[100px] justify-center items-center text-blue-600 text-sm font-bold font-['Roboto']">
                                Подробнее
                            </div>
                            <ArrowToRight/>
                        </div>
                    </div>
                    <div className="equipment_status_block">
                        <EquipmentStatusCard title={e.status}/>
                        <EquipmentTypeCard type={e.type}/>
                    </div>
                </div>
            ))}
            {selectedEquipment ?
                <SelectedEquipmentCard
                    equipment={selectedEquipment}
                    saveEquipChanges={saveEquipChanges}
                    closeCard={() => setSelectedEquipment(null)}/> : null}
        </div>
    );
};

export default EquipmentList;


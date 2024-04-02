import {EquipmentType} from "../../App.tsx";

type PropsType = {
    equipment: EquipmentType[]
}
const EquipmentTitle = ({equipment}: PropsType) => {
    return (
        <div className="flex flex-row gap-[10px] items-center">
            <h1>Техника</h1>
            <div
                className="flex items-center justify-center text-base text-gray font-black w-9 h-7 px-4 bg-stone-300 rounded-[100px]">
                {equipment.length}
            </div>
        </div>
    );
};

export default EquipmentTitle;
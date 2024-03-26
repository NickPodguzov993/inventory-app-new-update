
import Copy from "../SVG/Copy.tsx";
import {EquipmentType} from "../../App.tsx";
import EquipmentTypeCard from "../ItemCards/EquipmentTypeCard.tsx";
import EquipmentStatusCard from "../ItemCards/EquipmentStatusCard.tsx";

type PropsType = {
    item: EquipmentType
}
const EquipmentCartTitle = ({item}: PropsType) => {
    
    return (
        <div className="flex flex-row gap-8 w-[576px] h-40">
            <img src="https://via.placeholder.com/160x160" alt="QR-code"/>
            <div className="flex flex-col justify-between">
                <div className="flex flex-row justify-between w-96">
                    <div
                        className="text-[#263238] text-base font-medium font-['Roboto Condensed'] flex flex-row gap-[2px] items-center">{item.id}<Copy/>
                    </div>
                </div>
                <div className="text-[#212121] text-[32px] font-bold font-['Roboto']">{item.title}</div>
                <div className="flex-row flex justify-between">
                    <EquipmentStatusCard title={item.status}/>
                    <EquipmentTypeCard type={item.type}/>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCartTitle;
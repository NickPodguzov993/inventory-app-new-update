type PropsType = {
    type: string
}
const EquipmentTypeCard = ({type}: PropsType) => {
    let color = "";
    if (type === "Ноутбуки") {
        color = "#8D53FF";
    } else if (type === "Аксессуары") {
        color = "#F96692";
    } else if (type === "Принтеры") {
        color = "#00B8FF";
    } else if (type === "Мониторы") {
        color = "#6075F0";
    }
    return (
        <div className="h-7 justify-center items-center inline-flex gap-1">
            <div
                style={{backgroundColor: color}}
                className={`h-[22px] px-2 py-1 rounded justify-center text-white items-center 
                inline-flex text-gray-800 text-xs font-bold font-['Roboto Condensed']`}>{type}</div>
        </div>
    );
};

export default EquipmentTypeCard;
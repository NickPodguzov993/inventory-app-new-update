//  карточка-кнопка статуса оборудования

type PropsType = {
    title: string
}
const EquipmentStatusCard = ({title}: PropsType) => {
    let color = "";
    if (title === "Закреплeно") {
        color = "#FFA500";
    } else if (title === "Списано") {
        color = "#FF1744";
    } else if (title === "Требует ремонта") {
        color = "#00FFF9";
    } else if (title === "Резерв") {
        color = "#76FF03";
    } else if (title === "В другом офисе") {
        color = "#4900FF";
    }
    return (
        <div className="h-7 justify-center items-center inline-flex gap-1">
            <div className={`w-2 h-2 rounded-[100px]`} style={{backgroundColor: color}}/>
            <div className="text-gray-800 text-xs font-bold font-['Roboto Condensed']">{title}</div>
        </div>
    );
};

export default EquipmentStatusCard;
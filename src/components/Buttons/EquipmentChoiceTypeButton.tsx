// кнопка с инпутом для выбора категории оборудования

type PropsType = {
    title: string
}
const EquipmentChoiceTypeButton = ({title}: PropsType) => {
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
        <div className="h-12 px-4 rounded-[20px] border hover:border-blue-600 border-[#CFD8DC] duration-300 justify-center gap-2 inline-flex items-center">
            <input type="checkbox"/>
            <div className={"text-center text-gray-800 text-base font-bold font-['Roboto']"}>{title}</div>
            <div className="w-4 h-4 rounded-[100px]" style={{backgroundColor: color}} />
        </div>
    );
};

export default EquipmentChoiceTypeButton;
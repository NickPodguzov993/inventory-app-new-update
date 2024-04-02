// кнопка с инпутом для выбора категории оборудования



import {EqiupmentStatusType, EqiupmentTypesType} from "../../App.tsx";

type PropsType = {
    title: EqiupmentTypesType | EqiupmentStatusType
    handleChange:  (type: EqiupmentTypesType | EqiupmentStatusType) => void
    equipTitle: EqiupmentTypesType | EqiupmentStatusType
}
const EquipmentChoiceTypeButton = ({title, equipTitle, handleChange}: PropsType) => {
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
    const handleChangeTitle = () => {
        handleChange(title)
    }
    return (
        <button
            onClick={handleChangeTitle}
            className={title === equipTitle ? "active_editing_type_button"
                : "editing_type_button"}>
            <input type="checkbox" checked={title === equipTitle}/>
            <div className={"text-center text-gray-800 text-base font-bold font-['Roboto']"}>{title}</div>
            <div className="w-4 h-4 rounded-[100px]"
                style={{backgroundColor: color}}
            />
        </button>
    );
};

export default EquipmentChoiceTypeButton;
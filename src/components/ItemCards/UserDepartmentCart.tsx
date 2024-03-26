type PropsType = {
    department: string
}
const UserDepartmentCart = ({department}: PropsType) => {
    let color = "";
    if (department === "IT-пацаны") {
        color = "#8D53FF";
    } else if (department === "Бухгалтерия") {
        color = "#F96692";
    } else if (department === "HR-девчули") {
        color = "#00B8FF";
    } else if (department === "Дизайнеры") {
        color = "#6075F0";
    }
    return (
        <div className="h-7 justify-center items-center inline-flex gap-1">
            <div
                style={{backgroundColor: color}}
                className={`h-[22px] px-2 py-1 rounded justify-center text-white items-center 
                inline-flex text-gray-800 text-xs font-bold font-['Roboto Condensed']`}>{department}</div>
        </div>
    );
};

export default UserDepartmentCart;
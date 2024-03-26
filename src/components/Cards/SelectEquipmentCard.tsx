
type PropsType = {
    title: string
}
const SelectEquipmentCard = ({title} : PropsType) => {
    return (
       <div className="w-full h-[60px] bg-white rounded-[20px] p-2.5 gap-4 items-center inline-flex">
           <input type="checkbox"/>
            <div className="text-neutral-800 text-xs font-normal font-['Roboto']">{title}</div>
       </div>
    );
};

export default SelectEquipmentCard;
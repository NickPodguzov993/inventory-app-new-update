
type PropsType = {
    edit: () => void,
    owner: string | null
}
const EditingEquipmentOwnerCard = ({edit, owner}: PropsType) => {

    if (!owner) {
        owner = "Добавить пользователя"
    }

    return (
        <div className="fc gap-4">
            <div className="text-[#444345] text-lg font-bold font-['Roboto']">Пользователь</div>
            <div onClick={edit}
                 className="cursor-pointer w-60 h-[99px] p-8 bg-sky-100 rounded-[20px] flex-col justify-center items-start gap-4 inline-flex">
                <div className="ext-[#212121] text-xs font-medium font-['Roboto']">{owner}</div>
                {/*<div className="text-[#2962FF] text-xs font-medium font-['Roboto Condensed']">{owner}</div>*/}
            </div>
        </div>
    );
};

export default EditingEquipmentOwnerCard;
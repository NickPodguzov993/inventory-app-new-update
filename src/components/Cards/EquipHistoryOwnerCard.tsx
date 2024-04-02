import SelectUser from "../SVG/SelectUser.tsx";

type PropsType = {
    user: string
}
const EquipHistoryOwnerCard = ({user}: PropsType) => {
    return (
        <div className="fr gap-4 items-center">
            <SelectUser/>
            <div>{user}</div>
        </div>
    );
};

export default EquipHistoryOwnerCard;
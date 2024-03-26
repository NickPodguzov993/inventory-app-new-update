import UserStatusFilter from "../Filters/UserStatusFilter.tsx";

type PropsType = {
    close: () => void
}
const UserStatusSelectionCard = ({close}: PropsType) => {
    return (
        <div className="flex flex-col">
            <div
                className="w-[360px] h-full rounded-[40px] p-8 bg-white shadow flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-gray-800 text-2xl font-bold font-['Roboto']">Выберите статус</div>
                <UserStatusFilter close={close} />

            </div>
        </div>
    );
};

export default UserStatusSelectionCard;
import SelectUser from "../../components/SVG/SelectUser.tsx";

type PropsType = {
    history?: { date: string, status: string, owner: string | null }[]
}

const EquipmentHistory = ({history}: PropsType) => {

    return (
        <div className="fc py-4 w-full">
            <div className="fr py-4 justify-between w-full">
                <div>История</div>
                <div>Фильтр для периода</div>
            </div>
            <div className="p-4 w-full bg-[#F8F8F8] rounded-[20px] justify-between items-center inline-flex">
               <div className="w-1/4 history_columns">Дата</div>
               <div className="w-1/4 history_columns">Статус</div>
               <div className="w-2/4 history_columns">За кем (было) закреплено</div>
            </div>
            <div className="fc w-full">
                {!history && <div className="text-center w-full mt-[30px] text-neutral-800 text-[32px] font-bold font-['Roboto']">История отсутствует</div>}
                {history?.map(h => (
                    <div
                        key={h.date}
                        className="fr px-4 py-4 justify-between w-full border-b border-[#E3F2FD]"
                    >
                        <div className="w-1/4">{h.date}</div>
                        <div className="w-1/4">{h.status}</div>
                        <div className="w-2/4">
                            <div className="fr gap-4 items-center">{h.owner && <SelectUser/>}{h.owner}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EquipmentHistory;
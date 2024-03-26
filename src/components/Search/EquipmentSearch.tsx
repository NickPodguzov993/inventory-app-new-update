import Search from "../SVG/Search.tsx";

const EquipmentSearch = () => {
    return (
        <div className="flex flex-row justify-between border rounded-[40px] h-12 w-full items-center">
            <input type="text" placeholder={"Поиск"} className="ml-4 text-base font-normal font-['Roboto']
     w-full  border-slate-300
    focus:placeholder:text-slate-400 outline-0 focus:placeholder:pl-4
    sm:placeholder:hover:text-zinc-700"/>
            <Search/>
        </div>
    );
};

export default EquipmentSearch;
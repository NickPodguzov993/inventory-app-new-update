import Search from "../SVG/Search.tsx";


type EquipmentSearchType = {
    searchEquip: string
    setSearchEquip: (e:string)=> void
}

const EquipmentSearch = ({searchEquip,setSearchEquip}:EquipmentSearchType) => {


    return (
        <div className="flex flex-row justify-between border rounded-[40px] h-12 w-full items-center">
            <input
                value={searchEquip}
                onChange={e => setSearchEquip(e.target.value)}
                type="text" placeholder={"Поиск"} className="ml-4 text-base font-normal font-['Roboto']
     w-full  border-slate-300
    focus:placeholder:text-slate-400 outline-0 focus:placeholder:pl-4
    sm:placeholder:hover:text-zinc-700"/>
          <div><Search/></div>
        </div>
    );
};

export default EquipmentSearch;
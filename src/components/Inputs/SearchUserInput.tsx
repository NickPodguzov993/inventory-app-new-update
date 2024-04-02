import Search from "../SVG/Search.tsx";
import {OwnerType} from "../EditingMenu/EditingEquipmentOwner.tsx";
import {ChangeEvent, useState} from "react";

type PropsType = {
    search: (text: string, workingUsers: OwnerType[]) => void
    workingUsers: OwnerType[]
}

const SearchUserInput = ({search, workingUsers}: PropsType) => {
    const [searchText, setSearchText] = useState("")
    const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value)
        search(e.currentTarget.value, workingUsers)
    }

return (
    <div className="w-full h-12 rounded-[40px] border border-[#CFD8DC] justify-between items-center inline-flex">
        <input type="text" placeholder="Поиск" className="pl-4 rounded-[40px] outline-0" value={searchText}
               onChange={handleChangeSearchInput}/>
        <Search/>
    </div>
);
}
;

export default SearchUserInput;
import Search from "../SVG/Search.tsx";

const SearchUserInput = () => {
    return (
        <div className="w-full h-12 rounded-[40px] border border-[#CFD8DC] justify-between items-center inline-flex">
            <input type="text" placeholder="Поиск" className="pl-4 rounded-[40px] outline-0"/>
            <Search/>
        </div>
    );
};

export default SearchUserInput;
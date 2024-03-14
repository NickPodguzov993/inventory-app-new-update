import Search from "../../components/SVG/Search.tsx";
import Logo from "../../components/SVG/Logo.tsx";
import Bell from "../../components/SVG/Bell.tsx";

const Header = () => {
    return (
        <div className="w-full mx-auto">
            <div className="header">
                <div className="my-auto"><Logo/></div>
                <div className="relative flex my-auto flex-row">
                    <input className="border pl-4 rounded-[20px] border-gray w-[430px] h-12"
                           type="text"
                           placeholder="Поиск"/>
                    <button
                        className="absolute right-0 bg-gray flex items-center justify-center rounded-[20px] w-[76px] h-12">
                        <Search/>
                    </button>
                </div>
                <div className="flex flex-row gap-6 my-auto w-[304px] justify-center items-center">
                    <button className="black_button">Создать заявку</button>
                    <Bell/>
                    <div
                        className="w-12 h-12 text-center px-[9px] py-2.5 bg-gray rounded-[100px] border border-zinc-300">ИИ
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;
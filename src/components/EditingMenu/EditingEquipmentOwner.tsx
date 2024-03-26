// Карт очка выбора нового владельца оборудования
import SearchUserInput from "../Inputs/SearchUserInput.tsx";
import {useContext} from "react";
import {UserContext} from "../../Context/UsersContext.tsx";
import {UsersType} from "../../App.tsx";
import UserDepartmentCart from "../ItemCards/UserDepartmentCart.tsx";
import SelectUser from "../SVG/SelectUser.tsx";

const EditingEquipmentOwner = () => {
    const allUsers = useContext(UserContext);
    // вместо контекста запрос на серврер или оставить контекст, а в нем уже реализовать запросы.Redux
    const workingUsers: UsersType[] = [];
    for (const user of allUsers) {
        // Если значение поля isWorking равно true, то добавляем пользователя в новый массив workingUsers
        if (user.isWorking) {
            workingUsers.push(user);
        }
    }
    return (
        <div
            className="h-full w-[360px] rounded-[40px] bg-[#EDEDED]  shadow flex-col items-start">
            <div className="w-full p-8 fc gap-6 bg-white rounded-t-[40px]">
                <div className="text-[#263238] text-xl font-bold font-['Roboto']">Выбор Сотрудника</div>
                <SearchUserInput/>
            </div>
            <div className="w-full h-full rounded-b-[40px] p-8 fc gap-2 overflow-y-hidden">
                {workingUsers.map(u => (
                    <div
                        key={u.id}
                        className="p-[10px] fr items-center gap-2 h-[60px] bg-white rounded-[20px] duration-300 hover:border border-[#2962FF]">
                        <input type="checkbox"/>
                        <div className="bg-[#EDEDED] w-[140px] rounded-[100px] p-1 text-center fr items-center gap-2">
                            <SelectUser/> <div className="text-start text-black text-xs font-normal font-['Roboto']">{u.name}</div>
                        </div>
                        <UserDepartmentCart department={u.department}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditingEquipmentOwner;
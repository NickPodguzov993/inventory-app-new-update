// Главная страница пользователей

import UserFilter from "../../components/Filters/UserFilter.tsx";
import {EquipmentType, UsersType} from "../../App.tsx";
import UserStatusFilter from "../../components/Filters/UserStatusFilter.tsx";
import UsersList from "./UsersList.tsx";


type Props = {
    mockEquipments: EquipmentType[];
    mockUsers: UsersType[];
};
const UsersPage = ({mockUsers, mockEquipments}: Props) => {

    return (
        <div className="users_page">
            <div className="flex flex-row gap-[10px] items-center">
                <h1>Сотрудники</h1>
                <div
                    className="flex items-center justify-center text-base text-gray font-black w-9 h-7 px-4 bg-stone-300 rounded-[100px]">
                    {mockUsers.length}
                </div>
            </div>
            <div className="fr justify-between w-full">
                <UserFilter />
                <UserStatusFilter />
            </div>
            <UsersList mockUsers={mockUsers} mockEquipments={mockEquipments}/>
        </div>
    );
};

export default UsersPage;
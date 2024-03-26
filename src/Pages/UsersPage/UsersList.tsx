import {EquipmentType, UsersType} from "../../App.tsx";
import UserCard from "../../components/Cards/UserCard.tsx";
import {useContext, useState} from "react";
import {UserContext} from "../../Context/UsersContext.tsx";

type Props = {
    mockUsers: UsersType[]; mockEquipments: EquipmentType[];
}
const UsersList = ({mockUsers, mockEquipments}: Props) => {
    const [selectedUser, setSelectedUser] = useState<UsersType | null>(null);
    const allUsers = useContext(UserContext)
    const [users, setUserts] = useState<UsersType[]>(allUsers)

    const filteredUsers = []
    for (let i = 0; i < allUsers.length; i++)

    // const setFilteredUsers = ({arr, string}) => {
    //     return filteredUsers
    // }

    return (
        <>
            <div className="fr flex-wrap gap-8">{mockUsers.map(u => (
                // тут должны принимать массив уже отфильтрованных юзеров
                <div onClick={() => setSelectedUser(u)} key={u.id}
                     className="cursor-pointer w-[296px] bg-white rounded-[40px] p-8 fc justify-between h-[200px]">
                    <div>{u.name}</div>
                    <div className="fr justify-between">
                        <div className="is_working">{u.isWorking ?
                            <div className="w-2 h-2 relative bg-lime-500 rounded-[100px]"/> : <div
                                className="w-2 h-2 relative bg-rose-600 rounded-[100px]"/>} {u.isWorking ? "Работает" : "Не работает"}</div>
                        <div className="department">{u.department}</div>
                    </div>
                </div>
            ))}  </div>
            {selectedUser ? <UserCard user={selectedUser} mockEquipments={mockEquipments}
                                      closeCard={() => setSelectedUser(null)}/> : null}
        </>
    );
};

export default UsersList;
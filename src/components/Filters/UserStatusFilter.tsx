import {UsersType} from "../../App.tsx";
import FilterButton from "../Buttons/FilterButton.tsx";
import {useContext} from "react";
import {UserContext} from "../../Context/UsersContext.tsx";

type Props = {
    close?: () => void
}
const UserStatusFilter = ({close} : Props) => {
    const usersStatus = useContext(UserContext)
    function getUniqueDepartments(isWorking: UsersType[]): boolean[] {
        const uniqueDepartments: boolean[] = [];
        isWorking.forEach((d) => {
            if (!uniqueDepartments.includes(d.isWorking)) {
                uniqueDepartments.push(d.isWorking);
            }
        });
        return uniqueDepartments;
    }

    const uniqueDepartments = getUniqueDepartments(usersStatus);

    return (
        <div className="user_filter_container">
            {uniqueDepartments.map(u => (
                <FilterButton
                    close={close}
                    title={u ? "Работает" : "Не работает"}/>
            ))}
        </div>
    );
};

export default UserStatusFilter;
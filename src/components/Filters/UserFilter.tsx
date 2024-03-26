import {UsersType} from "../../App.tsx";
import FilterButton from "../Buttons/FilterButton.tsx";
import {useContext} from "react";
import {UserContext} from "../../Context/UsersContext.tsx";

type PropsType = {
    close?: () => void
}
const UserFilter = ({close}: PropsType) => {
    const departmentsArray = useContext(UserContext)
    function getUniqueDepartments(departmentsArray: UsersType[]): string[] {
        const uniqueDepartments: string[] = [];
        departmentsArray.forEach((d) => {
            if (!uniqueDepartments.includes(d.department)) {
                uniqueDepartments.push(d.department);
            }
        });
        return uniqueDepartments;
    }

    const uniqueDepartments = getUniqueDepartments(departmentsArray);

    return (
        <div className="user_filter_container">
            <FilterButton title={"Все"} />
            {uniqueDepartments.map(u => (
                <FilterButton close={close} title={u}/>
            ))}
        </div>
    );
};

export default UserFilter;
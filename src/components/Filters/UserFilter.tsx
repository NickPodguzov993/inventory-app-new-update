import {UsersType} from "../../App.tsx";
import FilterButton from "../Buttons/FilterButton.tsx";
import {useContext} from "react";
import {UserContext} from "../../Context/UsersContext.tsx";

type PropsType = {
    close?: () => void,
    setFilter: (department: string) => void;
}
const UserFilter = ({close, setFilter}: PropsType) => {
    const departmentsArray = useContext(UserContext)
    function getUniqueDepartments(setFilter: UsersType[]): string[] {
        const uniqueDepartments: string[] = [];
        setFilter.forEach((d) => {
            if (!uniqueDepartments.includes(d.department)) {
                uniqueDepartments.push(d.department);
            }
        });
        return uniqueDepartments;
    }

    const uniqueDepartments = ['Все', ...getUniqueDepartments(departmentsArray)] ;
    console.log(uniqueDepartments)


    return (
        <div className="user_filter_container">
            {/*<FilterButton  setFilter={setFilter} title={"Все"} />*/}
            {uniqueDepartments.map(u => (
                <FilterButton close={close} setFilter={setFilter} title={u} />
            ))}
        </div>
    );
};

export default UserFilter;
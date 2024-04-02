import FilterButton from "../Buttons/FilterButton.tsx";

type PropsType = {
    statusFilters: string[]
    setEquipmentListStatus: (status: string) => void
    filterStatus: string
}
const EquipmentsStatusFilter = ({statusFilters, setEquipmentListStatus, filterStatus}: PropsType) => {

    return (
        <div className="user_filter_container">
            {/*<FilterButton title={"Все"} setFilter={setEquipmentListStatus}/>*/}
            {statusFilters.map((u, index) => (
                <FilterButton key={index} title={u} setFilter={setEquipmentListStatus} filter={filterStatus}/>
            ))}
        </div>
    );
};

export default EquipmentsStatusFilter;
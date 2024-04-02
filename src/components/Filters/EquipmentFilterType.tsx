// блок фильтрации оборудования на главной странице оборудования
import FilterButton from "../Buttons/FilterButton.tsx";

type Props = {
    close?: () => void,
    typesFilters: string[],
    setEquipmentListType: (type: string) => void
    filterType: string;
}
const EquipmentFilterType = ({close, typesFilters, setEquipmentListType, filterType}: Props) => {
    return (
        <div className="user_filter_container">
            {/*<FilterButton setFilter={setEquipmentListType} close={close} title={"Все"}/>*/}
            {typesFilters.map((u, index) => (
                <FilterButton setFilter={setEquipmentListType} close={close} key={index} title={u} filter={filterType}/>
            ))}
        </div>
    );
};

export default EquipmentFilterType;
import EquipmentFilterType from "../../components/Filters/EquipmentFilterType.tsx"
import EquipmentsStatusFilter from "../../components/Filters/EquipmentsStatusFilter.tsx"
import {EquipmentType} from "../../App.tsx";
import {useContext} from "react";
import {EquipmentsContext, IContext} from "../../Context/EquipmentsContext.tsx";

type PropsType = {
    setEquipmentListStatus: (status: string) => void
    setEquipmentListType: (status: string) => void
    filterType: string
    filterStatus: string
}
const EquipmentsListFilters = ({setEquipmentListStatus, setEquipmentListType, filterType, filterStatus}: PropsType) => {
    const {allEquipments} = useContext(EquipmentsContext) as IContext
    function getEquipmentsStatusFilters(allEquipments: EquipmentType[]): string[] {
        const equipmentsStatusFilters: string[] = [];
        allEquipments.forEach((d) => {
            if (!equipmentsStatusFilters.includes(d.status)) {
                equipmentsStatusFilters.push(d.status);
            }
        });
        return ["Все", ...equipmentsStatusFilters];
    }
    const equipmentsStatusFilters = getEquipmentsStatusFilters(allEquipments);
    function getEquipmentsTypeFilters(allEquipments: EquipmentType[]): string[] {
        const equipmentsStatusFilters: string[] = [];
        allEquipments.forEach((d) => {
            if (!equipmentsStatusFilters.includes(d.type)) {
                equipmentsStatusFilters.push(d.type);
            }
        });
        return ["Все", ...equipmentsStatusFilters]
    }

    const equipmentsTypesFilters = getEquipmentsTypeFilters(allEquipments);
    return (
        // тут локально держать переменную текущих настроек фильтрации
        <div className="fr justify-between w-full">
            <EquipmentFilterType
                setEquipmentListType={setEquipmentListType}
                typesFilters={equipmentsTypesFilters}
                filterType={filterType}/>
            <EquipmentsStatusFilter
                setEquipmentListStatus={setEquipmentListStatus}
                filterStatus={filterStatus}
                statusFilters={equipmentsStatusFilters}/>
        </div>
    );
};

export default EquipmentsListFilters;
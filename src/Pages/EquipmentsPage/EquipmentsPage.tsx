import {useContext, useState} from "react";
import {EquipmentsContext} from "../../Context/EquipmentsContext.tsx";
import EquipmentTitle from "./EquipmentTitle.tsx";
import EquipmentList from "./EquipmentList.tsx";
import EquipmentsListFilters from "./EquipmentsListFilters.tsx";
import {EquipmentType} from "../../App.tsx";


const EquipmentsPage = () => {
    const allEquipments = useContext(EquipmentsContext)
    const [equipList, setEquipList] = useState<EquipmentType[]>(allEquipments)
    const [filteredEquipmentList, setFilteredEquipmentList] = useState<EquipmentType[]>(equipList)
    const [filterType, setFilterType] = useState<string>("Все")
    const [filterStatus, setFilterStatus] = useState<string>("Все")

    const saveEquipChanges = (item: EquipmentType) => {
        const equipment = allEquipments.find(equip => equip.id === item.id)

        if (equipment) {
            equipment.history = item.history
            equipment.note = item.note
            equipment.status = item.status
            equipment.title = item.title
            equipment.ownerId = item.ownerId
            equipment.type = item.type
            setEquipList([...allEquipments])
        }
        alert(`${item.id}`)
    }
    const handleChangeTypeFilter = (type: string) => {
        if (type === "Все" && filterStatus === "Все") {
            setFilteredEquipmentList(equipList)
            setFilterType(type)
        }
        if (type === "Все" && filterStatus !== "Все") {
            const doubleFilteredList = equipList.filter(equip => equip.status === filterStatus)
            setFilteredEquipmentList(doubleFilteredList)
            setFilterType(type)
        }
        if (type !== "Все" && filterStatus !== "Все") {
            setFilterType(type)
            const doubleFilteredList = equipList.filter(equip => equip.status === filterStatus && equip.type === type)
            setFilteredEquipmentList(doubleFilteredList)
        }
        if (type !== "Все" && filterStatus === "Все") {
            setFilterType(type)
            const doubleFilteredList = equipList.filter(equip => equip.type === type)
            setFilteredEquipmentList(doubleFilteredList)
        }
    }
    const handleChangeStatusFilter = (status: string) => {
        if (status === "Все" && filterType === "Все") {
            setFilteredEquipmentList(equipList)
            setFilterStatus(status)
        }
        if (status === "Все" && filterType !== "Все") {
            const doubleFilteredList = equipList.filter(equip => equip.type === filterType)
            setFilteredEquipmentList(doubleFilteredList)
            setFilterStatus(status)
        }
        if (status !== "Все" && filterType !== "Все") {
            setFilterStatus(status)
            const doubleFilteredList = equipList.filter(equip => equip.status === status && equip.type === filterType)
            setFilteredEquipmentList(doubleFilteredList)
        }
        if (status !== "Все" && filterType === "Все") {
            setFilterStatus(status)
            const doubleFilteredList = equipList.filter(equip => equip.status === status)
            setFilteredEquipmentList(doubleFilteredList)
        }
    }

    return (
        <div className="equipments_page">
            <EquipmentTitle equipment={filteredEquipmentList}/>
            <EquipmentsListFilters
                filterType={filterType}
                filterStatus={filterStatus}
                setEquipmentListType={handleChangeTypeFilter}
                setEquipmentListStatus={handleChangeStatusFilter}/>
            <EquipmentList
                saveEquipChanges={saveEquipChanges}
                equipments={filteredEquipmentList}/>
        </div>
    );
};

export default EquipmentsPage;


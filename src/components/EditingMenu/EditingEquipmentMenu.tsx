// Меню редактирования оборудования открываеться после нажития "Редактировать"

import {EqiupmentStatusType, EqiupmentTypesType, EquipmentType, HistoryType} from "../../App.tsx";
import Close from "../SVG/Close.tsx";
import EditButton from "../Buttons/EditButton.tsx";
import CancelButton from "../Buttons/CancelButton.tsx";
import {useState} from "react";
import EditingEquipmentMenuTitle from "./EditingEquipmentMenuTitle.tsx";
import EditingEquipmentTypeButton from "../Buttons/EditingEquipmentTypeButton.tsx";
import EditCard from "../Cards/EditCard.tsx";
import HelpBlock from "../Cards/HelpBlock.tsx";
import EditingEquipmentType from "./EditingEquipmentType.tsx";
import EditingEquipmentStatusButton from "../Buttons/EditingEquipmentStatusButton.tsx";
import EditingEquipmentStatus from "./EditingEquipmentStatus.tsx";
import EditingEquipmentOwnerCard from "../Cards/EditingEquipmentOwnerCard.tsx";
import EditingEquipmentOwner from "./EditingEquipmentOwner.tsx";
import SaveChangesModal from "../Modal/SaveChangesModal.tsx";
import EditInput from "../Inputs/EditInput.tsx";

type PropsType = {
    close: () => void,
    equipment: EquipmentType
    saveEquipChanges: (equip: EquipmentType) => void;
}
export type EquipStatus = "Закреплeно" | "Резерв" | "Требует ремонта" | "Списано" | "В другом офисе"
export type EquipType = "Ноутбуки" | "Аксессуары" | "Мониторы" | "Принтеры" | "Системный блок"
const EditingEquipmentMenu = ({equipment, close, saveEquipChanges}: PropsType) => {
    const [openSelectionOfType, setOpenSelectionOfType] = useState<boolean>(false)
    const [openSelectionOfStatus, setOpenSelectionOfStatus] = useState<boolean>(false)
    const [openSelectionOfUser, setOpenSelectionOfUser] = useState<boolean>(false)
    const [equipTitle, setEquipTitle] = useState<string>(equipment.title)
    const [equipType, setEquipType] = useState<EqiupmentTypesType>(equipment.type)
    const [equipStatus, setEquipStatus] = useState<EquipStatus>(equipment.status)
    const [equipOwner, setEquipOwner] = useState<string | null>(equipment.ownerId)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [equipHistory, setEquipHistory] = useState<HistoryType[] | null>(equipment.history)
    const [currentEquip, setCurrentEquip] = useState<EquipmentType>(equipment)
    const [equipNote, setEquipNote] = useState(equipment.note)
    const [equipDateNote, setEquipDateNote] = useState<string>("")
    const [dataNoteError, setDataNoteError] = useState<boolean>(false)

    const handleChangeEquipTitle = (title: string) => {
        setEquipTitle(title)
    }
    const handleChangeEquipNote = (note: string) => {
        setEquipNote(note)
    }
    const handleChangeDateNote = (dateNote: string) => {
        setEquipDateNote(dateNote)
        if (dateNote !== "") {
            setDataNoteError(false)
        }
    }
    const handleAddEquipHistory = (equipDateNote: string) => {
        const updateEquipHistory = equipHistory
        if (updateEquipHistory) {
            const currentDate = new Date().toDateString()
            setEquipHistory([
                ...updateEquipHistory,
                {
                    date: currentDate,
                    status: equipStatus,
                    dataNote: equipDateNote,
                    ownerId: equipOwner
                }])
            console.log(equipHistory)
        }
    }
    const comboFunction = () => {
        handleAddEquipHistory(equipDateNote)
        handleSaveEquipChanges()
    }
    const handleSaveEquipChanges = () => {
        const changedEquip = currentEquip
        if (changedEquip && equipDateNote.trim() !== "") {
            // handleAddEquipHistory(equipDateNote)
            changedEquip.title = equipTitle
            changedEquip.note = equipNote
            changedEquip.status = equipStatus
            changedEquip.ownerId = equipOwner
            changedEquip.type = equipType
            changedEquip.history = equipHistory
            setModalOpen(true)
            setEquipDateNote("")
            saveEquipChanges(changedEquip)
        } else {
            setDataNoteError(true)
        }

    }
    const closeModalWindow = () => {
        setModalOpen(false)
    }
    const handleChangeEquipType = (type: EqiupmentTypesType) => {
        setEquipType(type)
        setOpenSelectionOfType(false)
    }
    const handleChangeEquipStatus = (status: EqiupmentStatusType) => {
        setEquipStatus(status)
        if (status === "Требует ремонта" || status === "Списано" || status === "Резерв") {
            setEquipOwner(null)
        }
        setOpenSelectionOfStatus(false)
    }
    const handleSetEquipOwner = (owner: string) => {
        setEquipOwner(owner)
        setOpenSelectionOfUser(false)
    }

    const handleOpenSelectionOfType = () => {
        setOpenSelectionOfType(!openSelectionOfType)
        setOpenSelectionOfStatus(false)
        setOpenSelectionOfUser(false)
    }
    const handleOpenEquipmentStatus = () => {
        setOpenSelectionOfStatus(!openSelectionOfStatus)
        setOpenSelectionOfUser(false)
        setOpenSelectionOfType(false)
    }
    const handleOpenUser = () => {
        setOpenSelectionOfUser(!openSelectionOfUser)
        setOpenSelectionOfType(false)
        setOpenSelectionOfStatus(false)
    }

    return (
        <div className="h-full flex flex-row gap-[1px] relative">
            {modalOpen ?
                <SaveChangesModal close={closeModalWindow}/>
                : null}
            <div
                className="w-[640px] h-full p-8 bg-white rounded-r-[40px] flex-col items-start justify-between inline-flex">
                <div className="fc gap-8 w-full">
                    <EditingEquipmentMenuTitle
                        note={equipNote}
                        changeNote={handleChangeEquipNote}
                        equipTitle={equipTitle}
                        equipment={equipment}
                        onChange={handleChangeEquipTitle}/>
                    <div className="fc gap-8">
                        <div className="fr gap-8">
                            <EditingEquipmentTypeButton label={"Категория"} edit={handleOpenSelectionOfType}
                                                        type={equipType}/>
                            <EditingEquipmentStatusButton label={"Статус оборудования"} edit={handleOpenEquipmentStatus}
                                                          status={equipStatus}/>
                        </div>
                        <EditingEquipmentOwnerCard edit={handleOpenUser}
                                                   owner={equipOwner}/>
                    </div>
                </div>
                <div className="flex flex-row w-full gap-2">
                    <EditButton
                        title={"Сохранить"}
                        save={comboFunction}/>
                    <CancelButton
                        title={"Сбросить изменения"}/>
                </div>
            </div>
            {openSelectionOfUser ? <EditingEquipmentOwner SetEquipOwner={handleSetEquipOwner}/>
                : <EditCard>
                    {openSelectionOfType &&
                        <EditingEquipmentType
                            equipType={equipType}
                            handleChangeEquipType={handleChangeEquipType}
                            title={"Выберите категорию"}/>}
                    {openSelectionOfStatus &&
                        <EditingEquipmentStatus
                            equipStatus={equipStatus}
                            handleChangeEquipStatus={handleChangeEquipStatus}
                            title={"Выберите статус"}/>}
                    <HelpBlock title={"Внесите изменения, введите примечание и нажмите сохранить"}/>
                    <EditInput item={equipDateNote} label={"Введите примечание"} onChange={handleChangeDateNote}
                               error={dataNoteError}/>
                    <div className="w-full h-auto bg-gray rounded-[40px] overflow-y-scroll">
                        {equipHistory?.map((eh, index )=> (
                            <div
                                key={index}
                                className="fr gap-4 p-4">
                                <div>{eh.date}</div>
                                <div>{eh.dataNote}</div>
                            </div>
                        ))}
                    </div>
                    <Close close={close}/>
                </EditCard>}
        </div>
    );
};

export default EditingEquipmentMenu;

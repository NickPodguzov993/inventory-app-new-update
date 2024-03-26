// Меню редактирования оборудования открываеться после нажития "Редактировать"

import {EquipmentType} from "../../App.tsx";
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

type PropsType = {
    close: () => void,
    equipment: EquipmentType
}
const EditingEquipmentMenu = ({equipment, close}: PropsType) => {
    const [openSelectionOfType, setOpenSelectionOfType] = useState<boolean>(false)
    const [openSelectionOfStatus, setOpenSelectionOfStatus] = useState<boolean>(false)
    const [openSelectionOfUser, setOpenSelectionOfUser] = useState<boolean>(false)
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
            <div
                className="w-[640px] h-full p-8 bg-white rounded-r-[40px] flex-col items-start justify-between inline-flex">
                <div className="fc gap-8 w-full">
                    <EditingEquipmentMenuTitle equipment={equipment}/>
                    <div className="fc gap-8">
                        <div className="fr gap-8">
                            <EditingEquipmentTypeButton label={"Категория"} edit={handleOpenSelectionOfType}
                                                        type={equipment.type}/>
                            <EditingEquipmentStatusButton label={"Статус оборудования"} edit={handleOpenEquipmentStatus}
                                                          status={equipment.status}/>
                        </div>
                        <EditingEquipmentOwnerCard edit={handleOpenUser}
                                                   owner={equipment.owner}/>
                    </div>
                </div>
                <div className="flex flex-row w-full gap-2">
                    <EditButton
                        title={"Сохранить"}
                        open={close}/>
                    <CancelButton
                        title={"Сбросить изменения"}/>
                </div>
            </div>
            {openSelectionOfUser ? <EditingEquipmentOwner/>
                : <EditCard>
                    {openSelectionOfType ?
                        <EditingEquipmentType title={"Выберите категорию"}/>
                        : null}
                    {openSelectionOfStatus ?
                        <EditingEquipmentStatus title={"Выберите статус"}
                        /> : null}
                    <HelpBlock title={"Текст подсказки"}/>
                </EditCard>}
            <Close close={close}/>
        </div>
    );
};

export default EditingEquipmentMenu;
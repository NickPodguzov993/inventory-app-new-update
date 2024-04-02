// карточка-модалка выбранного оборудования

import {EquipmentType} from "../../App.tsx";
import EditButton from "../Buttons/EditButton.tsx";
import {useState} from "react";
import Close from "../SVG/Close.tsx";
import EquipmentCartTitle from "./EquipmentCartTitile.tsx";
import EquipmentHistory from "../../Pages/EquipmentsPage/EquipmentHistory.tsx";
import EditingEquipmentMenu from "../EditingMenu/EditingEquipmentMenu.tsx";

type PropsType = {
    closeCard: () => void,
    equipment: EquipmentType;
    saveEquipChanges:  (equip: EquipmentType) => void;
}
const SelectedEquipmentCard = ({closeCard, equipment, saveEquipChanges}: PropsType) => {
    const [openEditMenu, setOpenEditMenu] = useState<boolean>(false)
    const handleOpenEditMenu = () => {
        setOpenEditMenu(true)
    }
    const handleCloseMenu = () => {
        setOpenEditMenu(false)
    }
    return (
        <div
            className="fixed w-full h-full inset-0 flex flex-row items-start justify-start z-30 bg-black bg-opacity-40">
            {openEditMenu ?
                <EditingEquipmentMenu close={handleCloseMenu} equipment={equipment} saveEquipChanges={saveEquipChanges}/>
                : <div
                    className="flex flex-col justify-between relative sm:w-[640px] h-[900px] sm:h-full w-full py-8 px-4 sm:p-8 gap-8 bg-white sm:rounded-r-[40px]">
                    <Close close={closeCard}/>
                    <div className="h-full fc justify-between">
                        <div className="fc gap-8 overflow-y-scroll">
                            <EquipmentCartTitle item={equipment}/>
                            <EquipmentHistory history={equipment.history}/>
                        </div>
                        <EditButton title={"Редактировать"} open={handleOpenEditMenu}/>
                    </div>
                </div>}
        </div>
    );
};
export default SelectedEquipmentCard;
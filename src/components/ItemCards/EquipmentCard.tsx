
const EquipmentCard = () => {
    return (
        <div className="h-dvh rounded-r-[40px] bg-white w-[640px] fc absolute left-0 p-8">
            <div className="equipment_card_title">
                <img src={''} alt="qr-code"/>
                <div className="fc justify-between">
                    <div>id item</div>
                    <div>item name</div>
                    <div>item status</div>
                </div>
            </div>
            <div>History Item</div>
        </div>
    );
};

export default EquipmentCard;
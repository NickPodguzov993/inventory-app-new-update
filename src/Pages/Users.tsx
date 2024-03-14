
const Users = () => {

    const mockUsers = [
        {id: 1, name: "Иванов Иван Иванович", isWorking: true, department: "IT-пацаны"},
        {id: 2, name: "Иванов Иван Иванович", isWorking: true, department: "HR-девчули"},
        {id: 3, name: "Иванов Иван Иванович", isWorking: false, department: "Дизайнеры"},
        {id: 4, name: "Иванов Иван Иванович", isWorking: true, department: "Бухгалтерия"},
        {id: 5, name: "Иванов Иван Иванович", isWorking: true, department: "IT-отдел"},
        {id: 6, name: "Иванов Иван Иванович", isWorking: true, department: "Бухгалтерия"},
        {id: 7, name: "Иванов Иван Иванович", isWorking: false, department: "HR-девчули"},
        {id: 8, name: "Иванов Иван Иванович", isWorking: true, department: "Бухгалтерия"},
        {id: 9, name: "Иванов Иван Иванович", isWorking: true, department: "Дизайнеры"},
        {id: 10, name: "Иванов Иван Иванович", isWorking: false, department: "Дизайнеры"},
        {id: 11, name: "Иванов Иван Иванович", isWorking: true, department: "HR-девчули"},
        {id: 12, name: "Иванов Иван Иванович", isWorking: true, department: "IT-отдел"}
    ]

    return (
        <div className="users_page">
           <div className="flex flex-row gap-[10px] items-center">
               <h1>Сотрудники</h1>
               <div className="flex items-center justify-center text-base text-gray font-black w-9 h-7 px-4 bg-stone-300 rounded-[100px]">{mockUsers.length}</div>
           </div>
            <div></div>
        </div>
    );
};

export default Users;
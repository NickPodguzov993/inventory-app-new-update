import {NavLink} from "react-router-dom";
import mail from '../../components/SVG/Mail.tsx'
import computer from '../../components/SVG/Computer.tsx'
import profile from '../../components/SVG/Profile.tsx'
import box from '../../components/SVG/Box.tsx'

const NavBar = () => {

    const links = [
        {id: 1, title: "Заявки", href: "/applications", svg: mail},
        {id: 2, title: "Поступления", href: "/receipts", svg: box},
        {id: 3, title: "Сотрудники", href: "/users", svg: profile},
        {id: 4, title: "Техника", href: "/equipment", svg: computer}
    ]


    return (
        <div className="w-24 flex justify-end">
            <nav className="nav_bar">
                {links.map(l => (
                    <NavLink to={l.href} key={l.id} className="nav_bar_link">
                    <span>
                        <l.svg/>
                    </span>
                        <div>{l.title}</div>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default NavBar;
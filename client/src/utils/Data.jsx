import { TbUfo } from "react-icons/tb";
import { GiWindow } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { FaHouseFloodWater } from "react-icons/fa6";
import { GiBlockHouse } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { FaSnowboarding } from "react-icons/fa";
export const MenuNav = [{
    text: 'Anywhere',
},{
    text: 'Any week',
},{
    text: 'Any guests',
}]

export const MenuList = [
    {
        logo: <TbUfo />,
        text: "OMG!",
        url: '/'
    },
    {
        logo: <GiWindow />,
        text: "Amazing-views",
        url: '/amazing-views'
    },
    {
        logo: <FaSwimmingPool />,
        text: "Amazing-pools",
        url: '/amazing-pools'
    },
    {
        logo: <FaHouseFloodWater />,
        text: "Houseboats",
        url: '/houseboats'
    },
    {
        logo: <GiBlockHouse />,
        text: "Arctic",
        url: '/arctic'
    },
    {
        logo: <GiFamilyHouse />,
        text: "Mainsions",
        url : '/mainsions'
    },    
    {
        logo: <FaHouseMedicalFlag />,
        text: "Luxe",
        url: '/luxe'
    },    
    {
        logo: <FaSnowboarding />,
        text: "Snow",
        url : '/snow'
    }        
]
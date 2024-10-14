import { TbUfo } from "react-icons/tb";
import { GiWindow } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { FaHouseFloodWater } from "react-icons/fa6";
import { GiBlockHouse } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { FaSnowboarding } from "react-icons/fa";
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'


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

export const CardImg = [
    {
        id:0,
        name: 'Canmore',
        type: 'Pet Friendly Accommodation',
        host: 'Marc Gene',
        category: 'Popular',
        url: 
            [
               img1
            ,
            
                img2
            ,
            
               img3
            ]
    },
    {
        id:1,
        name: 'Donkey',
        type: 'Apartment for rent',
        host: 'Benalmadena',
        category: 'Popular',
        url: 
        [
            img1
        ,
        
            img2
        ,
        
           img3
        ]
    },
    {
        id:2,
        name: 'Donkey',
        type: 'Apartment for rent',
        host: 'Benalmadena',
        category: 'Culture and Arts',
        url: 
        [
            img1
        ,
        
            img2
        ,
        
            img3
        ]
    }
]

export const MenuSuppot = [
    {
        text: 'Popular'
    },
    {
        text: 'Culture and Arts'
    },
    {
        text: 'Outdoor'
    },
    {
        text: 'Mountain'
    },
    {
        text: 'Beach'
    },
    {
        text: 'Category'
    },
    {
        text: 'Things to experience'
    },
]


export const FooterMenu = [{
    text: "Suport",
    type: [
        "Help Center",
        "AirCover",
        "Anti-discrimination",
        "Support for people with disabilities",
        "Cancellation options",
        "Neighborhood Concern Report",
    ]},{
    text: "Reception",
    type: [
        "Rent your home ",
        "AirCover for Homeowners",
        "Resources for hospitality",
        "Community Forum",
        "Responsible hospitality",
        "Take a free course on the job of Hospitality"
    ]
    },{
    text: "AboutUs",
    type: [
        "News page",
        "New Features",
        "Career opportunities",
        "Investor",
    ]
    }
]
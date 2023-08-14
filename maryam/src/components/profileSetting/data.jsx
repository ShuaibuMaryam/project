import {BsPersonSquare} from "react-icons/bs";
import {ImAddressBook} from "react-icons/im";
import {FaEnvelopeOpenText} from "react-icons/fa";
import {RiEditCircleFill, RiChatHeartFill} from "react-icons/ri";
export const sideBarData = [
    {
        icon:<BsPersonSquare/>,
        title: "My Account",
        link: "/my-account",
    },
    {
        icon:<RiEditCircleFill/>,
        title: "My Orders",
        link: "/order",
    },
    {
        icon:<ImAddressBook/>,
        title: "Address Book",
        link: "/address-book",
    },
    {
        icon: <RiChatHeartFill/>,
        title: "My Product Reviews",
        link: "/product-reviews",
    },
    {
        icon:<FaEnvelopeOpenText/>,
        title: "Newsletter Subscriptions",
        link: "/newsletter",
    },
];

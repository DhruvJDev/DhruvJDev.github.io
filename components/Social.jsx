// "use client";
import Link from "next/link";

import {FaGithub, FaLinkedIn, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/DhruvJDev"},
    {icon: <FaLinkedIn />, path: "https://www.linkedin.com/in/its-dhruv-jindal/"},
    {icon: <FaYoutube />, path: ""},
    {icon: <FaTwitter />, path: ""},
]

// const Social = ({containerStyles, iconStyles}) => {
//     return (
//     <div className={containerStyles}>
//         {socials.map ((item, index) => {
//             return (
//                 <Link key={index} href={item.path} className={iconStyles}>
//                     {item.icon}
//                 </Link>
//             );
//         })};
//     </div>
//     );
// };


// const Social = ({ containerStyles, iconStyles }) => {
//     return (
//         <div className={containerStyles}>
//             {socials.map((item, index) => (
//                 <Link key={index} href={item.path} legacyBehavior>
//                     <a className={iconStyles}>
//                         {item.icon}
//                     </a>
//                 </Link>
//             ))}
//         </div>
//     );
// };



const Social = () => {
    return <div>Social</div>
}

export default Social;
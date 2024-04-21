// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";


// import { CiLogin } from "react-icons/ci";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import { GoSignIn } from "react-icons/go";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

// import InfoIcon from "@mui/icons-material/Info";

// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Contact Us",
//       icon: <PhoneRoundedIcon />,
//     },
//     {
//       text: "Community",
//       icon: <InfoIcon />,
//     },
//     {
//       text: "Login",
//       icon: <CiLogin />,
//     },
//     {
//       text: "Sign Up",
//       icon: <GoSignIn />,
//     },
 
//   ];
//   return (
//     <nav>
//       <div className="nav-logo-container">
//         LOGO
//       </div>
//       <div className="navbar-links-container">
//         <a className="primary-navbutton" href="">Contact Us</a>
//         <a className="primary-navbutton"href="">Community</a>
//         <a className="primary-navbutton" href="">Login</a>
//         <a className="primary-navbutton bluebtn" href="" style={{color: "white"}}>Sign Up</a>
        
//         {/* <button className="primary-button">Bookings Now</button> */}
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar

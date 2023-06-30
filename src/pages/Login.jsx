// import React, { useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { useSnapshot } from "valtio";

// import { CustomButton } from "../components";
// import {
//   headContainerAnimation,
//   headContentAnimation,
//   headTextAnimation,
//   slideAnimation,
// } from "../config/motion";
// import { getContrastingColor } from '../config/helpers';
// import state from "../store";

// const Login = () => {
//   const snap = useSnapshot(state);

//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/api/v1/login", {
//         email,
//       });
//       const { message } = response.data;
//       if (message === "Login successful") {
//         // Redirect to home.jsx
//         window.location.href = "/home";
//       } else {
//         setError("Invalid email. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <AnimatePresence>
//       {snap.intro && (
//         <motion.section className="home" {...slideAnimation("left")}>
//           <motion.header {...slideAnimation("down")}>
//             <img
//               src="./threejs.png"
//               alt="logo"
//               className="w-8 h-8 object-contain"
//             />
//           </motion.header>

//           <motion.div className="home-content" {...headContainerAnimation}>
//             <motion.div {...headTextAnimation}>
//               <h1 className="head-text">
//                 LET'S <br className="xl:block hidden" /> LOGIN
//               </h1>
//             </motion.div>
//             <motion.div
//               {...headContentAnimation}
//               className="flex flex-col gap-5"
//             >
//               <input
//                 type="text"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={{ height: '40px', borderRadius: '4px', outline: 'none', padding: '0 10px' }}
//               />

//               <button
//                 className={`px-2 py-1.5 flex-1 rounded-md`}
//                 style={{ backgroundColor: snap.color, color: getContrastingColor(snap.color) }}
//                 onClick={handleLogin}
//               >
//                 Login
//               </button>
//               {error && <p>{error}</p>}
//             </motion.div>
//           </motion.div>
//         </motion.section>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Login;

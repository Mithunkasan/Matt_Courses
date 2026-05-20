/* eslint-disable @next/next/no-img-element */
// 'use client'
// import React, { useState, useEffect } from 'react';
// import { Fab, Zoom, styled } from '@mui/material';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import ChatIcon from '@mui/icons-material/Chat';
// import CloseIcon from '@mui/icons-material/Close';
// import Chatbot from '../app/bot/Chatbot';

// const MainFab = styled(Fab)({
//   position: 'fixed',
//   bottom: 24,
//   right: 24,
//   zIndex: 9999,
// });

// const ChildFab = styled(Fab)({
//   position: 'absolute',
//   transition: 'transform 0.3s ease, opacity 0.3s ease',
// });

// const RadialMenu: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [showChatbot, setShowChatbot] = useState(false);

//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   const handleChatbotClick = () => {
//     setOpen(false);
//     setShowChatbot(true);
//   };

//   const handleWhatsAppClick = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <MainFab color="primary" onClick={toggleMenu}>
//         {open ? <CloseIcon /> : <ChatIcon />}
//       </MainFab>

//       {/* WhatsApp Button */}
//       <Zoom in={open} timeout={300}>
//         <ChildFab
//           color="success"
//           sx={{
//             bottom: open ? 100 : 24,
//             right: open ? 24 : 24,
//             opacity: open ? 1 : 0,
//             transform: open ? 'translateY(-76px)' : 'translateY(0)',
//           }}
//           onClick={handleWhatsAppClick}
//         >
//           <WhatsAppIcon />
//         </ChildFab>
//       </Zoom>

//       {/* Chatbot Button */}
//       <Zoom in={open} timeout={300}>
//         <ChildFab
//           color="secondary"
//           sx={{
//             bottom: open ? 180 : 24,
//             right: open ? 24 : 24,
//             opacity: open ? 1 : 0,
//             transform: open ? 'translateY(-156px)' : 'translateY(0)',
//           }}
//           onClick={handleChatbotClick}
//         >
//           <ChatIcon />
//         </ChildFab>
//       </Zoom>

//       {/* Chatbot Component */}
//       {showChatbot && (
//         <Chatbot onClose={() => setShowChatbot(false)} />
//       )}

//       {/* WhatsAppConnect Component - modified to be controlled */}
//       <WhatsAppConnect isOpen={!open && !showChatbot} />
//     </>
//   );
// };

// // Modified WhatsAppConnect component to accept isOpen prop
// const WhatsAppConnect: React.FC<{ isOpen?: boolean }> = ({ isOpen = true }) => {
//   const phoneNumber = "8523970571";
//   const preFilledMessage = "Hello! I need more information.";

//   const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${preFilledMessage}`;

//   return (
//     <Zoom in={isOpen} timeout={300}>
//       <Fab
//         color="success"
//         href={whatsappUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         sx={{
//           position: "fixed",
//           bottom: 24,
//           right: 24,
//           zIndex: 9998,
//         }}
//       >
//         <WhatsAppIcon />
//       </Fab>
//     </Zoom>
//   );
// };

// export default RadialMenu;



"use client"

import React, { useState, useEffect } from "react"
// import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { Message as MessageIcon, Close as CloseIcon } from "@mui/icons-material"
import {Chatbot}   from "../app/bot/Chatbot"
import { styled } from "@mui/material/styles"
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingContainer = styled("div")({
  position: "fixed",
  bottom: "24px",
  right: "24px",
  zIndex: 50,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

const MenuItemsContainer = styled("div")(({ open }: { open: boolean }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "12px",
  transition: "all 0.3s ease",
  opacity: open ? 1 : 0,
  transform: open ? "translateY(0)" : "translateY(40px)",
  pointerEvents: open ? "auto" : "none",
}))

const MainButton = styled(IconButton)(({ open }: { open: boolean }) => ({
  width: "56px",
  height: "56px",
  backgroundColor: "#1976d2",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  transition: "transform 0.3s ease",
  transform: open ? "rotate(45deg)" : "rotate(0deg)",
}))

const ChatbotContainer = styled("div")({
  position: "fixed",
  bottom: "24px",
  right: "24px",
  zIndex: 40,
  animation: "zoomIn 0.3s ease",
  "@keyframes zoomIn": {
    from: { transform: "scale(0.9)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
  },
})

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: "-12px",
  right: "-12px",
  width: "32px",
  height: "32px",
  backgroundColor: "#f44336",
  "&:hover": {
    backgroundColor: "#d32f2f",
  },
})

const RadialMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleChatbotClick = () => {
    setIsOpen(false)
    setShowChatbot(true)
  }

  const handleCloseChatbot = () => {
    setShowChatbot(false)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "8523970571"
    const text = encodeURIComponent("Hello! I need more information.")
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${text}`
      
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`, "_blank")
    }
  }

  return (
    <>
      <FloatingContainer>
        <MenuItemsContainer open={isOpen}>
  <IconButton
    onClick={handleChatbotClick}
    sx={{
      width: "48px",
      height: "48px",
      backgroundColor: "#1976d2",
      "&:hover": {
        backgroundColor: "#1565c0",
      },
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    }}
  >
    {/* Use either an img tag or MUI Icon - choose one */}
    {/* Option 1: Using an image */}
    <img 
      src="/image/chatbot.png" 
      alt="Chatbot" 
      style={{ width: "24px", height: "24px" }}
    />
    
    {/* Option 2: Using MUI Icon (recommended if you have the icon) */}
    {/* <ChatIcon sx={{ color: "white", width: "24px", height: "24px" }} /> */}
  </IconButton>

  <IconButton
    onClick={handleWhatsAppClick}
    sx={{
      width: "48px",
      height: "48px",
      backgroundColor: "#4CAF50",
      "&:hover": {
        backgroundColor: "#388E3C",
      },
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    }}
  >
    <WhatsAppIcon sx={{ color: "white", width: "24px", height: "24px" }} />
  </IconButton>
</MenuItemsContainer>

        <MainButton open={isOpen} onClick={toggleMenu}>
          {isOpen ? (
            <CloseIcon sx={{ color: "white", width: "24px", height: "24px" }} />
          ) : (
            <MessageIcon  sx={{ color: "white", width: "24px", height: "24px" }} />
          )}
        </MainButton>
      </FloatingContainer>

      {mounted && showChatbot && (
        <ChatbotContainer>
          <div style={{ position: "relative" }}>
            <Chatbot />
            <CloseButton onClick={handleCloseChatbot}>
              <CloseIcon sx={{ color: "white", width: "16px", height: "16px" }} />
            </CloseButton>
          </div>
        </ChatbotContainer>
      )}
    </>
  )
}

export default RadialMenu
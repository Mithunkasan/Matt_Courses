'use client'
import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppConnect: React.FC = () => {
  const phoneNumber = "8523970571 "; // Replace with your WhatsApp number (with country code)
  const preFilledMessage = "Hello! I need more information."; // Pre-filled message when the user clicks the button

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${preFilledMessage}`;

  return (
    <Fab
      color="success"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppConnect;
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Container, styled } from "@mui/material";
import Image from "next/image";

// Define the styled components
const MarqueeContainer = styled(Box)(({  }) => ({
  width: "100%",
  overflow: "hidden",
  padding: "40px 0",
  backgroundColor: "#ffffff",
  position: "relative",
}));

const MarqueeTrack = styled(Box)<{ direction: "left" | "right" }>(({ direction }) => ({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  animation: `${direction === "left" ? "marqueeLeft" : "marqueeRight"} 30s linear infinite`,
  "@keyframes marqueeLeft": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
  "@keyframes marqueeRight": {
    "0%": { transform: "translateX(-50%)" },
    "100%": { transform: "translateX(0)" },
  },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 40px",
  transition: "all 0.3s ease",
  filter: "grayscale(100%) brightness(1.5) opacity(0.7)",
  "&:hover": {
    filter: "grayscale(0%) brightness(1) opacity(1)",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 20px",
  },
}));

// Define the logo data
const logos = [
  { name: "Java", src: "/image/java.png", width: 170, height: 70 },
  { name: "Python", src: "/image/python.png", width: 170, height: 70 },
  { name: "C++", src: "/image/c.png", width: 170, height: 70 },
  { name: "PHP", src: "/image/php.png", width: 170, height: 70 },
  { name: "Robotics", src: "/image/robo.png", width: 170, height: 70 },
  { name: "Digital Marketing ", src: "/image/dig.png", width: 170, height: 70 },
];

export default function MarqueeSection() {
  const [direction, setDirection] = useState<"left" | "right">("left");
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Change direction every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(prev => prev === "left" ? "right" : "left");
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  // Create a duplicate set of logos for seamless looping
  const allLogos = [...logos, ...logos];

  return (
    <MarqueeContainer>
      <Container className="" maxWidth="xl" sx={{ overflow: "hidden" }}>
        <MarqueeTrack 
          ref={trackRef} 
          direction={direction}
          sx={{
            animationPlayState: "running",
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {allLogos.map((logo, index) => (
            <LogoWrapper className="" key={`${logo.name}-${index}`}>
              <Box
                component="div"
                sx={{
                  position: "relative",
                  width: { xs: logo.width * 0.7, sm: logo.width * 0.8, md: logo.width },
                  height: { xs: logo.height * 0.7, sm: logo.height * 0.8, md: logo.height },
                }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </LogoWrapper>
          ))}
        </MarqueeTrack>
      </Container>
    </MarqueeContainer>
  );
}

// // components/Chatbot.tsx
// 'use client';
// import { useState, useRef, useEffect } from 'react';
// import data from '../bot/data.json';
// import { 
//   Button,
//   TextField,
//   IconButton,
//   Card,
//   CardHeader,
//   CardContent,
//   Typography,
//   Box,
//   Avatar
// } from '@mui/material';
// import { Close, Height, Send } from '@mui/icons-material';

// export default function Chatbot({ onClose }: { onClose: () => void }) {
//   const [messages, setMessages] = useState([
//     { text: "Hello! My name is Sun. How can I help you?", sender: 'bot' }
//   ]);
//   const [input, setInput] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//  const getBotResponse = (userInput: string) => {
//   const inputLower = userInput.toLowerCase();
  
//   // Check for greetings
//   if (inputLower.includes('hi') || inputLower.includes('hello') || inputLower.includes('hey')) {
//     return data.greetings[Math.floor(Math.random() * data.greetings.length)];
//   }
  
//   // Check for farewells
//   if (inputLower.includes('bye') || inputLower.includes('goodbye') || inputLower.includes('see you')) {
//     return data.farewells[Math.floor(Math.random() * data.farewells.length)];
//   }
  
//   // Check for course-related queries
//   if (inputLower.includes('course') || inputLower.includes('courses') || 
//       inputLower.includes('offer') || inputLower.includes('programs') ||
//       inputLower.includes('what do you teach')) {
//     return `We offer the following courses:\n\n${data.courses.join('\n')}`;
//   }
  
//   // Check if user is asking about a specific course
//   const matchedCourse = data.courses.find(course => 
//     inputLower.includes(course.toLowerCase())
//   );
//   if (matchedCourse) {
//     return `We offer a ${matchedCourse} course. Would you like more information about it?`;
//   }
  
//   // Check specific questions
//   if (inputLower.includes('payment') || inputLower.includes('pay') || inputLower.includes('credit card')) {
//     return data.responses.payment;
//   }
  
//   if (inputLower.includes('program') || inputLower.includes('main') || inputLower.includes('offer')) {
//     return data.responses.program;
//   }
  
//   if (inputLower.includes('contact') || inputLower.includes('email') || inputLower.includes('reach')) {
//     return data.responses.contact;
//   }
  
//   // Default response
//   return data.responses.default;
// };

//   const handleSend = () => {
//     if (input.trim() === '') return;
    
//     // Add user message
//     const userMessage = { text: input, sender: 'user' };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
    
//     // Simulate typing delay
//     setTimeout(() => {
//       const botResponse = { 
//         text: getBotResponse(input),
//         sender: 'bot' 
//       };
//       setMessages(prev => [...prev, botResponse]);
//     }, 500);
//   };

//   return (
//     <Box
//       sx={{
//         position: 'fixed',
//         bottom: 24,
//         right: 16,

//         zIndex: 9999,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-end',
//         marginBottom: 8,
      
//         gap: 2
//       }}
//     >
//       {isOpen ? (
//         <Card
//           sx={{
//             width: { xs: '90vw', sm: 350 },
//             height: 500,
//             display: 'flex',
//             flexDirection: 'column',
//             borderRadius: 4,
//             boxShadow: 6
//           }}
//         >
//           <CardHeader
//             avatar={
//               <Avatar sx={{ bgcolor: '#1976d2' }}>S</Avatar>
//             }
//             action={
//               <IconButton onClick={() => setIsOpen(false)}>
//                 <Close />
//               </IconButton>
//             }
//             title="Support Chat"
//             titleTypographyProps={{ fontWeight: 'bold' }}
//             sx={{
//               bgcolor: '#1976d2',
//               color: 'white',
//               borderTopLeftRadius: 'inherit',
//               borderTopRightRadius: 'inherit',
//               '& .MuiCardHeader-avatar': {
//                 mr: 1
//               }
//             }}
//           />
//           <CardContent
//             sx={{
//               flex: 1,
//               p: 0,
//               display: 'flex',
//               flexDirection: 'column',
//               overflow: 'hidden'
//             }}
//           >
//             <Box
//               sx={{
//                 flex: 1,
//                 p: 2,
//                 overflowY: 'auto',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 1.5
//               }}
//             >
//               {messages.map((msg, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
//                     maxWidth: '80%',
//                     p: 1.5,
//                     borderRadius: 4,
//                     bgcolor: msg.sender === 'user' ? '#1976d2' : '#e0e0e0',
//                     color: msg.sender === 'user' ? 'white' : 'text.primary',
//                     wordBreak: 'break-word'
//                   }}
//                 >
//                   <Typography variant="body1">{msg.text}</Typography>
//                 </Box>
//               ))}
//               <div ref={messagesEndRef} />
//             </Box>
//             <Box
//               sx={{
//                 p: 2,
//                 borderTop: '1px solid',
//                 borderColor: 'divider',
//                 display: 'flex',
//                 gap: 1
//               }}
//             >
//               <TextField
//                 fullWidth
//                 size="small"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                 placeholder="Type your message..."
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: 4
//                   }
//                 }}
//               />
//               <Button
//                 variant="contained"
//                 onClick={handleSend}
//                 sx={{
//                   minWidth: 'auto',
//                   borderRadius: 4,
//                   p: '8px 12px'
//                 }}
//               >
//                 <Send fontSize="small" />
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       ) : (
//         <Button
//           variant="contained"
//           onClick={() => setIsOpen(true)}
  
//           sx={{
//             borderRadius: 50,
//             px: 1,
//             py: 1,
           
//             textTransform: 'none',
//             fontWeight: 'bold',
//             boxShadow: 4
//           }}
//         >
//  <img src="\image\chatbot.png" alt="Chatbot"  width={47} 
//               height={48}
//               style={{ objectFit: 'contain' }} />
//         </Button>
//       )}
//     </Box>
//   );
// }



"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  TextField,
  Box,
  Typography,
} from "@mui/material"
import { Send as SendIcon } from "@mui/icons-material"
import { styled } from "@mui/material/styles"
import data from '../bot/data.json';

// Optimized styled components
const ChatCard = styled(Card)({
  width: "350px",
  height: "500px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  overflow: "hidden",
  "@media (max-width: 400px)": {
    width: "300px",
  },
})

const ChatHeader = styled(CardHeader)({
  backgroundColor: "#1976d2",
  color: "white",
  padding: "12px 16px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
})

const ChatContent = styled(CardContent)({
  flex: 1,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: "#f5f5f5",
})

const MessagesContainer = styled(Box)({
  flex: 1,
  padding: "16px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: "2px",
  },
})

const MessageBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'sender',
})<{ sender: "user" | "bot" }>(({ sender, theme }) => ({
  maxWidth: "80%",
  padding: "10px 14px",
  borderRadius: sender === "user" ? "14px 14px 0 14px" : "14px 14px 14px 0",
  wordBreak: "break-word",
  alignSelf: sender === "user" ? "flex-end" : "flex-start",
  backgroundColor: sender === "user" ? theme.palette.primary.main : "#ffffff",
  color: sender === "user" ? "white" : theme.palette.text.primary,
  boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
  position: "relative",
  animation: "messageAppear 0.2s ease-out",
  "@keyframes messageAppear": {
    from: { opacity: 0, transform: "translateY(4px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    [sender === "user" ? "right" : "left"]: 0,
    width: "8px",
    height: "8px",
    backgroundColor: sender === "user" ? theme.palette.primary.main : "#ffffff",
    transform: sender === "user" 
      ? "translateX(4px) rotate(45deg)" 
      : "translateX(-4px) rotate(45deg)",
    zIndex: -1,
  },
}))

const InputContainer = styled(Box)({
  padding: "12px 16px",
  borderTop: "1px solid #e0e0e0",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  backgroundColor: "white",
})

const TypingIndicator = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "4px",
  padding: "8px 12px",
  "& div": {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    animation: "typingPulse 1s infinite ease-in-out",
    "&:nth-child(2)": {
      animationDelay: "0.2s",
    },
    "&:nth-child(3)": {
      animationDelay: "0.4s",
    },
  },
  "@keyframes typingPulse": {
    "0%, 100%": { opacity: 0.4, transform: "translateY(0)" },
    "50%": { opacity: 1, transform: "translateY(-2px)" },
  },
}))

export function Chatbot() {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot'; id: string }>>([
    { text: "Hello! My name is Sun. How can I help you?", sender: "bot", id: "initial" }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Memoized bot response function
  const getBotResponse = useCallback((userInput: string) => {
    const inputLower = userInput.toLowerCase()
    
    // Simplified response logic for better performance
    if (/hi|hello|hey/.test(inputLower)) {
      return data.greetings[Math.floor(Math.random() * data.greetings.length)]
    }
    if (/bye|goodbye|see you/.test(inputLower)) {
      return data.farewells[Math.floor(Math.random() * data.farewells.length)]
    }

    if (/matt|matteg|mg/.test(inputLower)) {
      return data.matt[Math.floor(Math.random() * data.matt.length)]
    }

  if (/team|Leadership|mattmanagement/.test(inputLower)) {
      return data["Team "][Math.floor(Math.random() * data["Team "].length)]
    }


    

    if (/course|program|offer|teach/.test(inputLower)) {
      return `We offer these courses:\n\n${data.courses.join("\n")}`
    }
    
    if (/payment|pay|credit/.test(inputLower)) return data.responses.payment
    if (/contact|email|reach/.test(inputLower)) return data.responses.contact
    
   
    return data.responses.default
  }, [])

  // Optimized scroll behavior
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      messagesContainerRef.current?.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth"
      })
    })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  // Optimized send handler
  const handleSend = useCallback(() => {
    if (!input.trim()) return

    const userMessage = { 
      text: input, 
      sender: "user" as const,
      id: Date.now().toString()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsTyping(false)
        const botResponse = {
          text: getBotResponse(input),
          sender: "bot" as const,
          id: Date.now().toString()
        }
        setMessages(prev => [...prev, botResponse])
      }, 800)
    })
  }, [input, getBotResponse])

  return (
    <ChatCard>
      <ChatHeader
        avatar={
          <Avatar sx={{ 
            bgcolor: "white", 
            color: "#1976d2",
            width: 32,
            height: 32
          }}>
            <Typography variant="body2" fontWeight="bold">S</Typography>
          </Avatar>
        }
        title="Support Chat"
        titleTypographyProps={{ fontWeight: "bold" }}
      />

      <ChatContent>
        <MessagesContainer ref={messagesContainerRef}>
          {messages.map((msg) => (
            <MessageBubble 
              key={msg.id}
              sender={msg.sender}
            >
              <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                {msg.text}
              </Typography>
            </MessageBubble>
          ))}
          
          {isTyping && (
            <MessageBubble sender="bot">
              <TypingIndicator>
                <div />
                <div />
                <div />
              </TypingIndicator>
            </MessageBubble>
          )}
          
          <div ref={messagesEndRef} />
        </MessagesContainer>

        <InputContainer>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            size="small"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
          />
          <IconButton
            onClick={handleSend}
            disabled={!input.trim()}
            sx={{
              width: "36px",
              height: "36px",
              backgroundColor: "#1976d2",
              color: "white",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
              "&:disabled": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            <SendIcon sx={{ fontSize: "18px" }} />
          </IconButton>
        </InputContainer>
      </ChatContent>
    </ChatCard>
  )
}
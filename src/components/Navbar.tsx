/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
// "use client"
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Box,
//   Container,
//   useMediaQuery,
//   useTheme,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Collapse,
//   Link as MuiLink,
//   Popover,
//   Grid,
//   Paper,
//   Fade,
//   Chip,
// } from "@mui/material"
// import {
//   Menu as MenuIcon,
//   KeyboardArrowDown as KeyboardArrowDownIcon,
//   ExpandLess,
//   ExpandMore,
//   Code as CodeIcon,
//   SmartToy as SmartToyIcon,
//   Cloud as CloudIcon,
//   Business as BusinessIcon,
//   ChevronRight as ChevronRightIcon,
//   Close as CloseIcon,
// } from "@mui/icons-material"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import React, { useState } from "react"

// type props = {
//   position: string;
// }

// const navItems = [
//   { label: "Home", path: "/", hasDropdown: false },
//   { label: "Courses", path: "/courses", hasDropdown: true },
//   { label: "About us", path: "/aboutUs", hasDropdown: false },
//   { label: "Our Instructors", path: "/ourInstructors", hasDropdown: false },
//   { label: "Contact", path: "/Contacts", hasDropdown: false },
// ]

// interface CategoryItem {
//   title: string
//   link: string
//   hasMore?: boolean
//   isPopular?: boolean
// }

// interface Category {
//   title: string
//   icon: React.ReactNode
//   items: CategoryItem[]
//   color: string
// }

// const categories: Category[] = [
//   {
//     title: "FullStack Development",
//     icon: <CodeIcon />,
//     color: "#3B82F6",
//     items: [
//       { title: "Java Fullstack", link: "/courses/full-stack-development-mern-mean-lamp-", isPopular: true },
//       { title: "Python Fullstack", link: "/courses/python-fullstack-development", isPopular: true },
//       { title: "PHP", link: "/courses/mobile-development" },
//       { title: "Mean Stack", link: "/courses/programming-languages" },
//       { title: "Mern Stack", link: "/courses/web-development", isPopular: true },
//       { title: "UI/UX Designing", link: "/courses/ui-ux-design", isPopular: true },
//       { title: "Security Awareness", link: "/courses/security-awareness" },
//       { title: "Computer Graphics", link: "/courses/office-applications" },
//       { title: "Software Architecture", link: "/courses/security-awareness" },
//       { title: "Frontend Development", link: "/courses/front-end-development", isPopular: true },
//       { title: "Backend Development", link: "/courses/back-end-development" },
//       { title: "Manual Testing", link: "/courses/manual-testing-and-automation-testing" },
//       { title: "Automated Testing", link: "/courses/manual-testing-and-automation-testing" },
//       { title: "Tableau", link: "/courses/office-applications" },
//       { title: "Game Development", link: "/courses/mobile-app-development-android-ios-" },
//       {
//         title: "Mobile App Development", link: "/courses/mobile-app-development-android-ios-",
//         isPopular: true
//       },
//     ],
//   },
//   {
//     title: "Data, Cloud & Technologies",
//     icon: <BusinessIcon />,
//     color: "#8B5CF6",
//     items: [
//       { title: "DevOps / CI / CD", link: "/courses/client-os", isPopular: true },
//       { title: "Data Structures & Algorithms", link: "/courses/data-structures-and-algorithms" },
//       { title: "Configuration Management", link: "/courses/configuration-management" },
//       { title: "Containers", link: "/courses/containers" },
//       { title: "IT Automation", link: "/courses/it-automation" },
//       { title: "Network Architecture", link: "/courses/network-architecture" },
//       { title: "Virtualization", link: "/courses/virtualization" },
//       { title: "Research Analyst", link: "/courses/network-architecture" },
//       { title: "Data Analyst", link: "/courses/virtualization" },
//       { title: "Cloud Computing", link: "/courses/cloud-architecture", isPopular: true },
//       { title: "Database Management", link: "/courses/database-management" },
//       { title: "AI for Software Engineers", link: "/courses/generative-ai", isPopular: true },
//       { title: "Artificial Intelligence", link: "/courses/artificial-intelligence", isPopular: true },
//       { title: "Blockchain", link: "/courses/blockchain-development" },
//     ],
//   },
//   {
//     title: "Cybersecurity & Ethical Hacking",
//     icon: <SmartToyIcon />,
//     color: "#F59E0B",
//     items: [
//       { title: "Ethical Hacking", link: "/courses/certifications", isPopular: true },
//       { title: "Cybersecurity Fundamentals", link: "/courses/security-architecture" },
//     ],
//   },
//   {
//     title: "Embedded & Hardware Design",
//     icon: <SmartToyIcon />,
//     color: "#84CC16",
//     items: [
//       { title: "Embedded Systems", link: "/courses/generative-ai" },
//       { title: "Microcontroller Programming", link: "/courses/artificial-intelligence" },
//       { title: "Digital Electronics & Logic Design", link: "/courses/generative-ai" },
//       { title: "DSP for Hardware Applications", link: "/courses/artificial-intelligence" },
//       { title: "Power Electronics & Design", link: "/courses/generative-ai" },
//       { title: "Digital Fabrication & PCB", link: "/courses/artificial-intelligence" },
//       { title: "PCB Design & Manufacturing", link: "/courses/generative-ai" },
//     ],
//   },
//   {
//     title: "Networking & Security",
//     icon: <CloudIcon />,
//     color: "#F97316",
//     items: [
//       { title: "Networking with Hardware", link: "/courses/cloud-architecture" },
//       { title: "Wireless Communication", link: "/courses/database-management" },
//       { title: "Hardware & Network Security", link: "/courses/cloud-architecture" },
//       { title: "Electronics & Communication", link: "/courses/database-management" },
//     ],
//   },
//   {
//     title: "Emerging Technologies",
//     icon: <BusinessIcon />,
//     color: "#6366F1",
//     items: [
//       { title: "Robotics", link: "/courses/ui-ux-design", isPopular: true },
//       { title: "Advanced Robotics & Hardware Integration", link: "/courses/security-awareness" },
//       { title: "IoT Development", link: "/courses/office-applications" },
//       { title: "AI in Hardware Design", link: "/courses/security-awareness" },
//       { title: "Augmented Reality", link: "/courses/cloud-architecture" },
//       { title: "Virtual Reality", link: "/courses/database-management" },
//     ],
//   },
//   {
//     title: "Digital Marketing",
//     icon: <CloudIcon />,
//     color: "#DC2626",
//     items: [
//       { title: "Digital Marketing", link: "/courses/cloud-architecture", isPopular: true },
//       { title: "Video Editing", link: "/courses/database-management" },
//       { title: "Content Creation", link: "/courses/cloud-architecture" },
//     ],
//   },
// ]

// const courseCategories = [
//   {
//     label: "Software",
//     path: "/software",
//     content: categories.filter((cat) =>
//       [
//         "FullStack Development",
//         "Data, Cloud & Technologies",
//         "Cybersecurity & Ethical Hacking"
//       ].includes(cat.title),
//     ),
//   },
//   {
//     label: "Hardware",
//     path: "/hardware",
//     content: categories.filter((cat) =>
//       ["Embedded & Hardware Design", "Networking & Security", "Emerging Technologies"].includes(cat.title),
//     ),
//   },
//   {
//     label: "Digital Marketing",
//     path: "/courses/digital-marketing",
//     content: categories.filter((cat) => ["Digital Marketing"].includes(cat.title)),
//   },
// ]

// const Navbar = ({ position }: props) => {
//   const router = useRouter()
//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"))

//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [coursesMenuAnchor, setCoursesMenuAnchor] = useState<null | HTMLElement>(null)
//   const [activeCategory, setActiveCategory] = useState<string | null>(null)
//   const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)
//   const [hasHoveredCategory, setHasHoveredCategory] = useState(false)

//   const handleCategoryHover = (label: string) => {
//     setActiveCategory(label)
//     setHasHoveredCategory(true)
//   }

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen)
//   }

//   const handleCoursesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setCoursesMenuAnchor(event.currentTarget)
//     handleCategoryHover('Software')
//   }

//   const handleCoursesMenuClose = () => {
//     setCoursesMenuAnchor(null)
//     setActiveCategory(null)
//   }

//   const isCoursesMenuOpen = Boolean(coursesMenuAnchor)

//   const drawer = (
//     <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
//       <Box
//         sx={{
//           p: 3,
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           borderBottom: "1px solid #f0f0f0",
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <img src="/image/logo.png" alt="Matt" width={40} height={40}
//             onClick={() => router.push('/')}
//           />
//           <Box sx={{ ml: 1.5 }}>
//             <Typography variant="h6" sx={{ fontWeight: 300, color: "#1a1a1a", fontSize: "1.1rem" }}
//               onClick={() => router.push('/')}
//             >
//               MATT ACADEMY
//             </Typography>
//             <Typography
//               variant="caption"
//               sx={{
//                 color: "#666",
//                 letterSpacing: 1.2,
//                 textTransform: "uppercase",
//                 fontSize: "0.7rem",
//                 fontWeight: 500,
//               }}
//             >
//               GROW YOUR SKILLS
//             </Typography>
//           </Box>
//         </Box>
//         <IconButton onClick={handleDrawerToggle} sx={{ color: "#666" }}>
//           <CloseIcon />
//         </IconButton>
//       </Box>

//       <List sx={{ py: 1, flex: 1 }}>
//         {navItems.map((item) =>
//           item.label === "Courses" ? (
//             <React.Fragment key={item.label}>
//               <ListItem
//                 component="div"
//                 onClick={(e) => {
//                   e.stopPropagation()
//                   setMobileCoursesOpen(!mobileCoursesOpen)
//                 }}
//                 sx={{
//                   cursor: 'pointer',
//                   mx: 2,
//                   mb: 0.5,
//                   borderRadius: "12px",
//                   py: 1.5,
//                   transition: "all 0.2s ease",
//                   "&:hover": {
//                     backgroundColor: "#f8f9fa",
//                     transform: "translateX(4px)",
//                   },
//                 }}
//               >
//                 <ListItemText
//                   primary={item.label}
//                   primaryTypographyProps={{
//                     fontWeight: 600,
//                     fontSize: "0.95rem",
//                     color: "#1a1a1a",
//                   }}
//                 />
//                 {mobileCoursesOpen ? (
//                   <ExpandLess sx={{ color: theme.palette.primary.main }} />
//                 ) : (
//                   <ExpandMore sx={{ color: "#666" }} />
//                 )}
//               </ListItem>
//               <Collapse in={mobileCoursesOpen} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   {courseCategories.map((category) => (
//                     <ListItem
//                       key={category.label}
//                       component="div"
//                       sx={{
//                         mx: 2,
//                         mb: 0.5,
//                         ml: 4,
//                         borderRadius: "8px",
//                         py: 1.25,
//                         transition: "all 0.2s ease",
//                         "&:hover": {
//                           backgroundColor: theme.palette.primary.main + "10",
//                           color: theme.palette.primary.main,
//                         },
//                       }}
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         router.push(category.path)
//                         setMobileOpen(false)
//                       }}
//                     >
//                       <ListItemText
//                         primary={category.label}
//                         primaryTypographyProps={{
//                           fontSize: "0.875rem",
//                           fontWeight: 500,
//                         }}
//                       />
//                       <ChevronRightIcon fontSize="small" />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Collapse>
//             </React.Fragment>
//           ) : (
//             <ListItem
//               key={item.label}
//               component="div"
//               sx={{
//                 mx: 2,
//                 mb: 0.5,
//                 borderRadius: "12px",
//                 py: 1.5,
//                 transition: "all 0.2s ease",
//                 "&:hover": {
//                   backgroundColor: "#f8f9fa",
//                   transform: "translateX(4px)",
//                 },
//               }}
//             >
//               <Link href={item.path} passHref legacyBehavior>
//                 <MuiLink underline="none" color="inherit" sx={{ width: "100%" }}>
//                   <ListItemText
//                     primary={item.label}
//                     primaryTypographyProps={{
//                       fontWeight: 600,
//                       fontSize: "0.95rem",
//                       color: "#1a1a1a",
//                     }}
//                   />
//                 </MuiLink>
//               </Link>
//             </ListItem>
//           ),
//         )}
//       </List>
//     </Box>
//   )

//   return (
//     <AppBar
//       position={position}
//       color="default"
//       elevation={0}
//       sx={{
//         backgroundColor: "rgba(255, 255, 255, 0.95)",
//         backdropFilter: "blur(10px)",
//         borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
//         py: "8px",
//         top: 0,
//         zIndex: theme.zIndex.drawer + 1,
//         transition: "all 0.3s ease",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", minHeight: "64px" }}>
//           {/* Logo */}
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             {isMobile && (
//               <IconButton
//                 color="inherit"
//                 onClick={handleDrawerToggle}
//                 sx={{
//                   mr: 1.5,
//                   p: 1,
//                   borderRadius: "12px",
//                   "&:hover": {
//                     backgroundColor: "rgba(0, 0, 0, 0.04)",
//                   },
//                 }}
//                 edge="start"
//               >
//                 <MenuIcon />
//               </IconButton>
//             )}
//             <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
//               <Box
//                 component="img"
//                 src="/image/logo.png"
//                 alt="Matt"
//                 sx={{
//                   height: 48,
//                   width: 48,
//                   mr: 1.5,
//                   transition: "transform 0.2s ease",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                   },
//                 }}
//                 onClick={() => router.push('/')}
//               />
//               <Box sx={{ display: { xs: "none", sm: "block", cursor: 'pointer' } }}>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: 700,
//                     color: "#1a1a1a",
//                     fontSize: "1.5rem",
//                     lineHeight: 1.2,
//                     letterSpacing: "-0.02em",
//                   }}
//                   onClick={() => router.push('/')}
//                 >
//                   MATT ACADEMY
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     display: "block",
//                     color: "#666",
//                     letterSpacing: 1.5,
//                     textTransform: "uppercase",
//                     fontSize: "0.7rem",
//                     fontWeight: 600,
//                     mt: -0.5,
//                   }}
//                 >
//                   GROW YOUR SKILLS
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>

//           {/* Desktop Navigation */}
//           {!isMobile && (
//             <Box sx={{ display: "flex", ml: 6 }}>
//               {navItems.map((item) =>
//                 item.label === "Courses" ? (
//                   <Box key={item.label} sx={{ position: "relative" }}>
//                     <Button
//                       color="inherit"
//                       onClick={handleCoursesMenuOpen}
//                       sx={{
//                         mx: 1,
//                         px: 2,
//                         py: 1,
//                         borderRadius: "12px",
//                         color: isCoursesMenuOpen ? theme.palette.primary.main : "#374151",
//                         fontWeight: 600,
//                         fontSize: "15px",
//                         textTransform: "none",
//                         minWidth: "auto",
//                         transition: "all 0.2s ease",
//                         position: "relative",
//                         "&:hover": {
//                           color: theme.palette.primary.main,
//                           backgroundColor: theme.palette.primary.main + "08",
//                           transform: "translateY(-1px)",
//                         },
//                         "&::after": {
//                           content: '""',
//                           position: "absolute",
//                           bottom: 0,
//                           left: "50%",
//                           transform: "translateX(-50%)",
//                           width: isCoursesMenuOpen ? "80%" : "0%",
//                           height: "2px",
//                           backgroundColor: theme.palette.primary.main,
//                           transition: "width 0.3s ease",
//                         },
//                       }}
//                       endIcon={
//                         <KeyboardArrowDownIcon
//                           sx={{
//                             transition: "transform 0.2s ease",
//                             transform: isCoursesMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
//                           }}
//                         />
//                       }
//                     >
//                       {item.label}
//                     </Button>

//                     <Popover
//                       open={isCoursesMenuOpen}
//                       anchorEl={coursesMenuAnchor}
//                       onClose={() => {
//                         handleCoursesMenuClose()
//                         setHasHoveredCategory(false)
//                       }}
//                       onMouseLeave={() => {
//                         handleCoursesMenuClose()
//                         setHasHoveredCategory(false)
//                       }}
//                       anchorOrigin={{
//                         vertical: "bottom",
//                         horizontal: "left",
//                       }}
//                       transformOrigin={{
//                         vertical: "top",
//                         horizontal: "left",
//                       }}
//                       TransitionComponent={Fade}
//                       sx={{
//                         "& .MuiPopover-paper": {
//                           minWidth: hasHoveredCategory ? "95vw" : "200px",
//                           maxWidth: "1400px",
//                           padding: theme.spacing(3),
//                           overflowY: "auto",
//                           maxHeight: "calc(100vh - 120px)",
//                           borderRadius: "16px",
//                           boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                           mt: 1,
//                           border: "1px solid rgba(0, 0, 0, 0.05)",
//                           background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
//                         },
//                       }}
//                     >
//                       <Grid container spacing={3}>
//                         {/* Categories Column */}
//                         <Grid component="div" item xs={3}>
//                           <Typography
//                             variant="h6"
//                             sx={{
//                               mb: 2,
//                               color: "#1a1a1a",
//                               fontWeight: 700,
//                               fontSize: "1.1rem",
//                             }}
//                           >
//                             Course Categories
//                           </Typography>
//                           <List disablePadding>
//                             {courseCategories.map((category) => (
//                               <ListItem
//                                 key={category.label}
//                                 button
//                                 selected={activeCategory === category.label}
//                                 onMouseEnter={() => handleCategoryHover(category.label)}
//                                 onClick={() => {
//                                   router.push(category.path)
//                                   handleCoursesMenuClose()
//                                   setHasHoveredCategory(false)
//                                 }}
//                                 sx={{
//                                   borderRadius: "12px",
//                                   mb: 1,
//                                   px: 2,
//                                   py: 1.5,
//                                   transition: "all 0.2s ease",
//                                   "&.Mui-selected": {
//                                     backgroundColor: theme.palette.primary.main + "15",
//                                     color: theme.palette.primary.main,
//                                     transform: "translateX(4px)",
//                                     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//                                   },
//                                   "&:hover": {
//                                     backgroundColor: theme.palette.primary.main + "10",
//                                     transform: "translateX(4px)",
//                                   },
//                                 }}
//                               >
//                                 <ListItemText
//                                   primary={category.label}
//                                   primaryTypographyProps={{
//                                     fontWeight: activeCategory === category.label ? 700 : 600,
//                                     fontSize: "0.95rem",
//                                   }}
//                                 />
//                                 <ChevronRightIcon
//                                   fontSize="small"
//                                   sx={{
//                                     opacity: activeCategory === category.label ? 1 : 0.5,
//                                     transition: "opacity 0.2s ease",
//                                   }}
//                                 />
//                               </ListItem>
//                             ))}
//                           </List>
//                         </Grid>

//                         {/* Content Column */}
//                         <Grid item xs={9}>
//                           {activeCategory && (
//                             <Fade in={Boolean(activeCategory)} timeout={300}>
//                               <Box>
//                                 <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                                   <Typography
//                                     variant="h5"
//                                     sx={{
//                                       color: theme.palette.primary.main,
//                                       fontWeight: 700,
//                                       fontSize: "1.3rem",
//                                     }}
//                                   >
//                                     {activeCategory} Courses
//                                   </Typography>
//                                   <Chip
//                                     label="Popular"
//                                     size="small"
//                                     sx={{
//                                       ml: 2,
//                                       backgroundColor: theme.palette.primary.main + "20",
//                                       color: theme.palette.primary.main,
//                                       fontWeight: 600,
//                                     }}
//                                   />
//                                 </Box>
//                                 <Grid container spacing={3}>
//                                   {courseCategories
//                                     .find((c) => c.label === activeCategory)
//                                     ?.content.map((category, index) => (
//                                       <Grid item xs={12} sm={6} md={4} key={index}>
//                                         <Paper
//                                           elevation={0}
//                                           sx={{
//                                             p: 2.5,
//                                             borderRadius: "16px",
//                                             border: "1px solid rgba(0, 0, 0, 0.06)",
//                                             transition: "all 0.3s ease",
//                                             height: "100%",
//                                             "&:hover": {
//                                               transform: "translateY(-4px)",
//                                               boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
//                                               borderColor: category.color + "40",
//                                             },
//                                           }}
//                                         >
//                                           <Box
//                                             sx={{
//                                               display: "flex",
//                                               alignItems: "center",
//                                               mb: 2,
//                                               pb: 1.5,
//                                               borderBottom: "2px solid",
//                                               borderColor: category.color + "20",
//                                             }}
//                                           >
//                                             <Box
//                                               sx={{
//                                                 background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}CC 100%)`,
//                                                 borderRadius: "12px",
//                                                 p: 1,
//                                                 mr: 1.5,
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 justifyContent: "center",
//                                                 color: "white",
//                                                 minWidth: "40px",
//                                                 minHeight: "40px",
//                                                 boxShadow: `0 4px 12px ${category.color}40`,
//                                               }}
//                                             >
//                                               {category.icon}
//                                             </Box>
//                                             <Typography
//                                               variant="h6"
//                                               component="h3"
//                                               sx={{
//                                                 fontWeight: 700,
//                                                 fontSize: "1rem",
//                                                 color: "#1a1a1a",
//                                                 lineHeight: 1.3,
//                                               }}
//                                             >
//                                               {category.title}
//                                             </Typography>
//                                           </Box>

//                                           <List disablePadding dense>
//                                             {category.items.map((item, itemIndex) => (
//                                               <ListItem
//                                                 key={itemIndex}
//                                                 component="a"
//                                                 href={item.link}
//                                                 disablePadding
//                                                 sx={{
//                                                   py: 0.75,
//                                                   px: 1,
//                                                   mb: 0.5,
//                                                   borderRadius: "8px",
//                                                   color: "#374151",
//                                                   textDecoration: "none",
//                                                   transition: "all 0.2s ease",
//                                                   "&:hover": {
//                                                     color: category.color,
//                                                     backgroundColor: category.color + "08",
//                                                     transform: "translateX(4px)",
//                                                   },
//                                                 }}
//                                               >
//                                                 <ListItemText
//                                                   primary={
//                                                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                                                       <Typography
//                                                         variant="body2"
//                                                         sx={{
//                                                           fontSize: "0.85rem",
//                                                           fontWeight: 500,
//                                                           flex: 1,
//                                                         }}
//                                                       >
//                                                         {item.title}
//                                                       </Typography>
//                                                       {item.isPopular && (
//                                                         <Chip
//                                                           label="Popular"
//                                                           size="small"
//                                                           sx={{
//                                                             height: "20px",
//                                                             fontSize: "0.7rem",
//                                                             backgroundColor: "#fef3c7",
//                                                             color: "#d97706",
//                                                             fontWeight: 600,
//                                                           }}
//                                                         />
//                                                       )}
//                                                     </Box>
//                                                   }
//                                                 />
//                                                 <ChevronRightIcon
//                                                   fontSize="small"
//                                                   sx={{
//                                                     color: category.color,
//                                                     opacity: 0.7,
//                                                     transition: "all 0.2s ease",
//                                                   }}
//                                                 />
//                                               </ListItem>
//                                             ))}
//                                           </List>
//                                         </Paper>
//                                       </Grid>
//                                     ))}
//                                 </Grid>
//                               </Box>
//                             </Fade>
//                           )}
//                         </Grid>
//                       </Grid>
//                     </Popover>

//                   </Box>
//                 ) : (
//                   <Button
//                     key={item.label}
//                     sx={{
//                       mx: 1,
//                       px: 2,
//                       py: 1,
//                       borderRadius: "12px",
//                       color: "#374151",
//                       fontWeight: 600,
//                       fontSize: "15px",
//                       textTransform: "none",
//                       minWidth: "auto",
//                       transition: "all 0.2s ease",
//                       position: "relative",
//                       "&:hover": {
//                         color: theme.palette.primary.main,
//                         backgroundColor: theme.palette.primary.main + "08",
//                         transform: "translateY(-1px)",
//                       },
//                     }}
//                   >
//                     <Link href={item.path} passHref legacyBehavior>
//                       <MuiLink underline="none" color="inherit">
//                         {item.label}
//                       </MuiLink>
//                     </Link>
//                   </Button>
//                 ),
//               )}
//             </Box>
//           )}

//           {/* Right Section - Can add search, user menu, etc. */}
//           <Box sx={{ display: "flex", alignItems: "center", minWidth: "100px", justifyContent: "flex-end" }}>
//             {/* Placeholder for future features like search, user menu, etc. */}
//           </Box>
//         </Toolbar>
//       </Container>

//       {/* Mobile Drawer */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           display: { xs: "block", md: "none" },
//           "& .MuiDrawer-paper": {
//             boxSizing: "border-box",
//             width: 320,
//             backgroundColor: "#ffffff",
//             borderRadius: "0 16px 16px 0",
//             boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </AppBar>
//   )
// }

// export default Navbar

// onClick={() =>router.push('/')}

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown, ChevronRight, Code, Cpu, Terminal, BrainCircuit, Layers } from "lucide-react"
import Head from "next/head"

interface NavbarProps {
  position?: string
}

const navItems = [
  { label: "Home", path: "/", hasDropdown: false },
  { label: "Courses", path: "/courses", hasDropdown: true },
  { label: "About us", path: "/aboutUs", hasDropdown: false },
  { label: "Contact", path: "/Contacts", hasDropdown: false },
]

interface CourseItem {
  title: string
  path: string
}

interface Category {
  category: string
  icon: React.ComponentType<any>
  color: string
  courses: CourseItem[]
}

const categorizedCourses: Category[] = [
  {
    category: "Hardware & Embedded",
    icon: Cpu,
    color: "from-blue-600 to-indigo-600",
    courses: [
      { title: "Basic Electronics", path: "/courses/basic-electronics" },
      { title: "PCB Designing", path: "/courses/pcb-designing" },
      { title: "Robotics", path: "/courses/robotics" },
      { title: "Internet of Things (IoT)", path: "/courses/iot" },
      { title: "Drone Technology", path: "/courses/drone-technology" },
      { title: "Embedded Systems", path: "/courses/embedded-systems" },
    ]
  },
  {
    category: "Programming Languages",
    icon: Terminal,
    color: "from-amber-500 to-orange-500",
    courses: [
      { title: "C Programming", path: "/courses/c-programming" },
      { title: "C++ Programming", path: "/courses/cpp-programming" },
      { title: "Java Programming", path: "/courses/java-programming" },
      { title: "Python Programming", path: "/courses/python-programming" },
    ]
  },
  {
    category: "Analytics & AI",
    icon: BrainCircuit,
    color: "from-emerald-500 to-teal-500",
    courses: [
      { title: "Data Analysis", path: "/courses/data-analysis" },
      { title: "Data Science", path: "/courses/data-science" },
      { title: "Machine Learning", path: "/courses/machine-learning" },
      { title: "Artificial Intelligence", path: "/courses/artificial-intelligence" },
      { title: "Power BI", path: "/courses/power-bi" },
      { title: "MATLAB", path: "/courses/matlab" },
    ]
  },
  {
    category: "Software & Cyber",
    icon: Layers,
    color: "from-pink-500 to-rose-500",
    courses: [
      { title: "Python Full Stack", path: "/courses/python-fullstack-development" },
      { title: "MERN Stack", path: "/courses/Mern-stack" },
      { title: "Fullstack Development", path: "/courses/full-stack-development" },
      { title: "Cyber Security", path: "/courses/cyber-security" },
      { title: "Linux Administration", path: "/courses/linux" },
      { title: "RPA (Automation)", path: "/courses/rpa" },
      { title: "Digital Marketing", path: "/courses/digital-marketing" },
    ]
  }
]

export default function Navbar({ position = "fixed" }: NavbarProps) {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleCourseClick = (path: string) => {
    router.push(path)
    setIsMobileMenuOpen(false)
    setIsCoursesOpen(false)
  }

  const handleNavClick = (path: string) => {
    router.push(path)
    setIsMobileMenuOpen(false)
  }

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* Google Fonts Import */}
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Custom Styles */}
      <style jsx global>{`
        .rowdies-font {
          font-family: 'Rowdies', sans-serif;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        .mobile-menu-enter {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
        }
        
        .mobile-menu-enter-active {
          max-height: 100vh;
          opacity: 1;
        }
        
        .mobile-menu-exit {
          max-height: 100vh;
          opacity: 1;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
        }
        
        .mobile-menu-exit-active {
          max-height: 0;
          opacity: 0;
        }

        .backdrop-blur-custom {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hover-lift {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-1px);
        }

        .gradient-bg {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }

        .text-shadow {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Navbar */}
      <nav
        className={`${
          position === "fixed" ? "fixed" : "sticky"
        } top-0 left-0 right-0 z-[2000] glass-effect border-b border-gray-200/80 transition-all duration-300 shadow-sm`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="mx-auto px-3 sm:px-4 lg:px-[6%]">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <div className="flex items-center cursor-pointer group" style={{ minWidth: "200px" }}>
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="Matt Academy"
                    className="h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12 transition-all duration-200 group-hover:scale-105 rounded-lg shadow-sm"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
                    }}
                    onClick={() => router.push("/")}
                  />
                </div>
                <div className="ml-2 sm:ml-3">
                  <h1
                    className="rowdies-font text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 leading-tight tracking-tight text-shadow"
                    style={{
                      fontFamily: "'Rowdies', sans-serif",
                      letterSpacing: "-0.02em",
                      fontSize: "clamp(12px, 3vw, 24px)",
                    }}
                  >
                    MATT ACADEMY
                  </h1>
                  <p
                    className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-gray-600 uppercase tracking-wider font-semibold -mt-0.5 sm:-mt-1 hidden xs:block"
                    style={{
                      letterSpacing: "0.15em",
                      fontSize: "clamp(7px, 1.8vw, 12px)",
                    }}
                  >
                    Grow Your Skills
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-center max-w-2xl">
              {navItems.map((item) =>
                item.label === "Courses" ? (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base xl:text-lg font-semibold text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all duration-200 group hover-lift whitespace-nowrap cursor-pointer"
                        style={{
                          fontSize: "clamp(14px, 1.5vw, 18px)",
                          fontWeight: "600",
                        }}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-[95vw] max-w-4xl p-6 mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl custom-scrollbar overflow-y-auto max-h-[85vh]"
                      align="center"
                      style={{
                        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-1.5 shadow-sm text-white">
                          <Code className="h-4 w-4" />
                        </div>
                        <h3 className="text-base lg:text-lg font-bold text-gray-900">Explore Professional Course Pathways</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {categorizedCourses.map((cat) => {
                          const IconComponent = cat.icon;
                          return (
                            <div key={cat.category} className="space-y-3">
                              <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                                <div className={`p-1 bg-gradient-to-br ${cat.color} rounded text-white`}>
                                  <IconComponent className="h-3.5 w-3.5" />
                                </div>
                                <h4 className="text-xs font-bold text-gray-800 tracking-wide uppercase">
                                  {cat.category}
                                </h4>
                              </div>
                              <div className="space-y-0.5">
                                {cat.courses.map((course) => (
                                  <DropdownMenuItem
                                    key={course.title}
                                    className="p-0 cursor-pointer focus:bg-transparent"
                                    onClick={() => handleCourseClick(course.path)}
                                  >
                                    <div className="flex items-center justify-between w-full py-1.5 px-2 rounded-lg hover:bg-blue-50/70 transition-all duration-200 group text-left">
                                      <span className="font-semibold text-gray-600 group-hover:text-blue-600 transition-colors text-xs leading-snug">
                                        {course.title}
                                      </span>
                                      <ChevronRight className="h-3 w-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 flex-shrink-0" />
                                    </div>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="px-2 lg:px-3 xl:px-4 py-2 text-sm lg:text-base xl:text-lg font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 hover-lift whitespace-nowrap cursor-pointer"
                    onClick={() => handleNavClick(item.path)}
                    style={{
                      fontSize: "clamp(14px, 1.5vw, 18px)",
                      fontWeight: "600",
                    }}
                  >
                    {item.label}
                  </Button>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 hover-lift"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  background: isMobileMenuOpen ? "rgba(59, 130, 246, 0.1)" : "transparent",
                }}
              >
                <div className="relative">
                  {isMobileMenuOpen ? (
                    <X
                      className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-gray-700 transition-all duration-200"
                      style={{
                        transform: "rotate(0deg)",
                        transition: "transform 0.2s ease-in-out",
                      }}
                    />
                  ) : (
                    <Menu
                      className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-gray-700 transition-all duration-200"
                      style={{
                        transform: "rotate(0deg)",
                        transition: "transform 0.2s ease-in-out",
                      }}
                    />
                  )}
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-200/50 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div className="custom-scrollbar" style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 space-y-1 sm:space-y-2">
              {navItems.map((item) =>
                item.label === "Courses" ? (
                  <Collapsible key={item.label} open={isCoursesOpen} onOpenChange={setIsCoursesOpen}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between p-2 sm:p-3 text-left font-semibold text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 hover-lift"
                        style={{
                          fontSize: "clamp(15px, 4vw, 18px)",
                          fontWeight: "600",
                        }}
                      >
                        <span>{item.label}</span>
                        <div
                          className="transition-transform duration-200"
                          style={{ transform: isCoursesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        >
                          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 mt-1 sm:mt-2 ml-3 sm:ml-4 border-l border-gray-100 pl-2">
                      {categorizedCourses.map((cat) => {
                        const IconComponent = cat.icon;
                        return (
                          <Collapsible key={cat.category} className="w-full">
                            <CollapsibleTrigger asChild>
                              <Button
                                variant="ghost"
                                className="w-full justify-between p-2 text-left font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200"
                                style={{ fontSize: "14px" }}
                              >
                                <div className="flex items-center gap-2">
                                  <div className={`p-1 bg-gradient-to-br ${cat.color} rounded text-white`}>
                                    <IconComponent className="h-3 w-3" />
                                  </div>
                                  <span>{cat.category}</span>
                                </div>
                                <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="space-y-1 mt-1 ml-6 border-l border-gray-100 pl-2">
                              {cat.courses.map((course) => (
                                <Button
                                  key={course.title}
                                  variant="ghost"
                                  className="w-full justify-start p-1.5 text-left hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all duration-200 text-xs font-medium"
                                  onClick={() => handleCourseClick(course.path)}
                                >
                                  <span className="flex-1">{course.title}</span>
                                  <ChevronRight className="h-3 w-3 text-blue-500 opacity-60 flex-shrink-0" />
                                </Button>
                              ))}
                            </CollapsibleContent>
                          </Collapsible>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="w-full justify-start p-2 sm:p-3 text-left font-semibold text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 hover-lift"
                    onClick={() => handleNavClick(item.path)}
                    style={{
                      fontSize: "clamp(15px, 4vw, 18px)",
                      fontWeight: "600",
                    }}
                  >
                    <span>{item.label}</span>
                  </Button>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            background: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />
      )}
    </>
  )
}


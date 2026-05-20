// import React from 'react'

// const Popover = () => {
//   return (
//     <div>
//       <Popover
//         open={isCoursesMenuOpen}
//         anchorEl={coursesMenuAnchor}
//         onClose={() => {
//           handleCoursesMenuClose()
//           setHasHoveredCategory(false)
//         }}
//         onMouseLeave={() => {
//           handleCoursesMenuClose()
//           setHasHoveredCategory(false)
//         }}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//         TransitionComponent={Fade}
//         sx={{
//           "& .MuiPopover-paper": {
//             minWidth: hasHoveredCategory ? "95vw" : "200px",
//             maxWidth: "1400px",
//             padding: theme.spacing(3),
//             overflowY: "auto",
//             maxHeight: "calc(100vh - 120px)",
//             borderRadius: "16px",
//             boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//             mt: 1,
//             border: "1px solid rgba(0, 0, 0, 0.05)",
//             background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
//           },
//         }}
//       >
//         <Grid container spacing={3}>
//           {/* Categories Column */}
//           <Grid component="div" item xs={3}>
//             <Typography
//               variant="h6"
//               sx={{
//                 mb: 2,
//                 color: "#1a1a1a",
//                 fontWeight: 700,
//                 fontSize: "1.1rem",
//               }}
//             >
//               Course Categories
//             </Typography>
//             <List disablePadding>
//               {courseCategories.map((category) => (
//                 <ListItem
//                   key={category.label}
//                   button
//                   selected={activeCategory === category.label}
//                   onMouseEnter={() => handleCategoryHover(category.label)}
//                   onClick={() => {
//                     router.push(category.path)
//                     handleCoursesMenuClose()
//                     setHasHoveredCategory(false)
//                   }}
//                   sx={{
//                     borderRadius: "12px",
//                     mb: 1,
//                     px: 2,
//                     py: 1.5,
//                     transition: "all 0.2s ease",
//                     "&.Mui-selected": {
//                       backgroundColor: theme.palette.primary.main + "15",
//                       color: theme.palette.primary.main,
//                       transform: "translateX(4px)",
//                       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//                     },
//                     "&:hover": {
//                       backgroundColor: theme.palette.primary.main + "10",
//                       transform: "translateX(4px)",
//                     },
//                   }}
//                 >
//                   <ListItemText
//                     primary={category.label}
//                     primaryTypographyProps={{
//                       fontWeight: activeCategory === category.label ? 700 : 600,
//                       fontSize: "0.95rem",
//                     }}
//                   />
//                   <ChevronRightIcon
//                     fontSize="small"
//                     sx={{
//                       opacity: activeCategory === category.label ? 1 : 0.5,
//                       transition: "opacity 0.2s ease",
//                     }}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </Grid>

//           {/* Content Column */}
//           <Grid item xs={9}>
//             {activeCategory && (
//               <Fade in={Boolean(activeCategory)} timeout={300}>
//                 <Box>
//                   <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         color: theme.palette.primary.main,
//                         fontWeight: 700,
//                         fontSize: "1.3rem",
//                       }}
//                     >
//                       {activeCategory} Courses
//                     </Typography>
//                     <Chip
//                       label="Popular"
//                       size="small"
//                       sx={{
//                         ml: 2,
//                         backgroundColor: theme.palette.primary.main + "20",
//                         color: theme.palette.primary.main,
//                         fontWeight: 600,
//                       }}
//                     />
//                   </Box>
//                   <Grid container spacing={3}>
//                     {courseCategories
//                       .find((c) => c.label === activeCategory)
//                       ?.content.map((category, index) => (
//                         <Grid item xs={12} sm={6} md={4} key={index}>
//                           <Paper
//                             elevation={0}
//                             sx={{
//                               p: 2.5,
//                               borderRadius: "16px",
//                               border: "1px solid rgba(0, 0, 0, 0.06)",
//                               transition: "all 0.3s ease",
//                               height: "100%",
//                               "&:hover": {
//                                 transform: "translateY(-4px)",
//                                 boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
//                                 borderColor: category.color + "40",
//                               },
//                             }}
//                           >
//                             <Box
//                               sx={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 mb: 2,
//                                 pb: 1.5,
//                                 borderBottom: "2px solid",
//                                 borderColor: category.color + "20",
//                               }}
//                             >
//                               <Box
//                                 sx={{
//                                   background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}CC 100%)`,
//                                   borderRadius: "12px",
//                                   p: 1,
//                                   mr: 1.5,
//                                   display: "flex",
//                                   alignItems: "center",
//                                   justifyContent: "center",
//                                   color: "white",
//                                   minWidth: "40px",
//                                   minHeight: "40px",
//                                   boxShadow: `0 4px 12px ${category.color}40`,
//                                 }}
//                               >
//                                 {category.icon}
//                               </Box>
//                               <Typography
//                                 variant="h6"
//                                 component="h3"
//                                 sx={{
//                                   fontWeight: 700,
//                                   fontSize: "1rem",
//                                   color: "#1a1a1a",
//                                   lineHeight: 1.3,
//                                 }}
//                               >
//                                 {category.title}
//                               </Typography>
//                             </Box>

//                             <List disablePadding dense>
//                               {category.items.map((item, itemIndex) => (
//                                 <ListItem
//                                   key={itemIndex}
//                                   component="a"
//                                   href={item.link}
//                                   disablePadding
//                                   sx={{
//                                     py: 0.75,
//                                     px: 1,
//                                     mb: 0.5,
//                                     borderRadius: "8px",
//                                     color: "#374151",
//                                     textDecoration: "none",
//                                     transition: "all 0.2s ease",
//                                     "&:hover": {
//                                       color: category.color,
//                                       backgroundColor: category.color + "08",
//                                       transform: "translateX(4px)",
//                                     },
//                                   }}
//                                 >
//                                   <ListItemText
//                                     primary={
//                                       <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                                         <Typography
//                                           variant="body2"
//                                           sx={{
//                                             fontSize: "0.85rem",
//                                             fontWeight: 500,
//                                             flex: 1,
//                                           }}
//                                         >
//                                           {item.title}
//                                         </Typography>
//                                         {item.isPopular && (
//                                           <Chip
//                                             label="Popular"
//                                             size="small"
//                                             sx={{
//                                               height: "20px",
//                                               fontSize: "0.7rem",
//                                               backgroundColor: "#fef3c7",
//                                               color: "#d97706",
//                                               fontWeight: 600,
//                                             }}
//                                           />
//                                         )}
//                                       </Box>
//                                     }
//                                   />
//                                   <ChevronRightIcon
//                                     fontSize="small"
//                                     sx={{
//                                       color: category.color,
//                                       opacity: 0.7,
//                                       transition: "all 0.2s ease",
//                                     }}
//                                   />
//                                 </ListItem>
//                               ))}
//                             </List>
//                           </Paper>
//                         </Grid>
//                       ))}
//                   </Grid>
//                 </Box>
//               </Fade>
//             )}
//           </Grid>
//         </Grid>
//       </Popover>
//     </div>
//   )
// }

// export default Popover
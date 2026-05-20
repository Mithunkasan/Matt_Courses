// "use client"

// import { useState } from "react"
// import {
//   Box,
//   Grid,
//   Container,
//   FormControl,
//   Select,
//   MenuItem,
// } from "@mui/material"
// import type { SelectChangeEvent } from "@mui/material"
// import { Course, courses } from "../lib/types"
// import { CourseCard } from "./Coursepage"
// import { FiltersSidebar } from "./filtersection"
// import { PaginationControls } from "../components/paginationcontrols"

// const CourseListing = () => {
//   const [sortOption, setSortOption] = useState<string>("newest")
//   const [page, setPage] = useState<number>(1)
//   const coursesPerPage = 6

//   const handleSortChange = (event: SelectChangeEvent) => {
//     setSortOption(event.target.value)
//   }

//   const handlePageChange = (value: number) => {
//     setPage(value)
//   }

//   // Calculate pagination
//   const indexOfLastCourse = page * coursesPerPage
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
//   const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)
//   const totalPages = Math.ceil(courses.length / coursesPerPage)

//   return (
//     <Container sx={{ py: 4 }}>
//       <Grid container spacing={3}>
//         {/* Left sidebar - filters */}
//         <Grid item xs={12} md={3}>
//           <FiltersSidebar />
//         </Grid>

//         {/* Main content - course cards */}
//         <Grid item xs={12} md={9}>
//           <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
//             <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
//               <Select
//                 value={sortOption}
//                 onChange={handleSortChange}
//                 displayEmpty
//                 inputProps={{ "aria-label": "Sort courses" }}
//               >
//                 <MenuItem value="newest">Release Date (newest first)</MenuItem>
//                 <MenuItem value="oldest">Release Date (oldest first)</MenuItem>
//                 <MenuItem value="popular">Most Popular</MenuItem>
//                 <MenuItem value="title">Title A-Z</MenuItem>
//               </Select>
//             </FormControl>
//           </Box>

//           <Grid container spacing={3}>
//             {currentCourses.map((course) => (
//               <Grid item xs={12} sm={6} md={4} key={course.id}>
//                 <CourseCard course={course} />
//               </Grid>
//             ))}
//           </Grid>

//           <PaginationControls
//             page={page}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//           />
//         </Grid>
//       </Grid>
//     </Container>
//   )
// }

// export default CourseListing
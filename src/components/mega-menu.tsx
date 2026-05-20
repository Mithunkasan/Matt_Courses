"use client"

import type * as React from "react"
import { useState } from "react"
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Popover,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import {
  Code as CodeIcon,
  Shield as ShieldIcon,
  Settings as SettingsIcon,
  SmartToy as SmartToyIcon,
  // Storage as StorageIcon,
  Cloud as CloudIcon,
  Business as BusinessIcon,
  ChevronRight as ChevronRightIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material"

interface CategoryItem {
  title: string
  link: string
  hasMore?: boolean
}

interface Category {
  title: string
  icon: React.ReactNode
  items: CategoryItem[]
}

const categories: Category[] = [
  {
    title: "Hardware & Embedded",
    icon: <SettingsIcon />,
    items: [
      { title: "Basic Electronics", link: "/courses/basic-electronics" },
      { title: "PCB Designing", link: "/courses/pcb-designing" },
      { title: "Robotics", link: "/courses/robotics" },
      { title: "Internet of Things (IoT)", link: "/courses/iot" },
      { title: "Drone Technology", link: "/courses/drone-technology" },
      { title: "Embedded Systems", link: "/courses/embedded-systems" },
    ],
  },
  {
    title: "Programming Languages",
    icon: <CodeIcon />,
    items: [
      { title: "C Programming", link: "/courses/c-programming" },
      { title: "C++ Programming", link: "/courses/cpp-programming" },
      { title: "Java Programming", link: "/courses/java-programming" },
      { title: "Python Programming", link: "/courses/python-programming" },
    ],
  },
  {
    title: "Analytics & AI",
    icon: <SmartToyIcon />,
    items: [
      { title: "Data Analysis", link: "/courses/data-analysis" },
      { title: "Data Science", link: "/courses/data-science" },
      { title: "Machine Learning", link: "/courses/machine-learning" },
      { title: "Artificial Intelligence", link: "/courses/artificial-intelligence" },
      { title: "Power BI", link: "/courses/power-bi" },
      { title: "MATLAB", link: "/courses/matlab" },
    ],
  },
  {
    title: "Software & Cyber",
    icon: <ShieldIcon />,
    items: [
      { title: "Python Full Stack", link: "/courses/python-fullstack-development" },
      { title: "MERN Stack", link: "/courses/Mern-stack" },
      { title: "Fullstack Development", link: "/courses/full-stack-development" },
      { title: "Cyber Security", link: "/courses/cyber-security" },
      { title: "Linux Administration", link: "/courses/linux" },
      { title: "RPA (Automation)", link: "/courses/rpa" },
      { title: "Digital Marketing", link: "/courses/digital-marketing" },
    ],
  },
]

const MegaMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={handleClick}
        aria-label="courses menu"
        aria-controls={open ? "mega-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          color: "#444",
          "&:hover": { color: "primary.main" },
          fontSize: "15px",
        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Courses
      </Button>

      <Popover
        id="mega-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          top: '9%',
          left: '14%',
          '& .MuiPopover-paper': {
            width: isMobile ? '90vw' : '70%',
            minWidth: 'auto',
            padding: theme.spacing(2),
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 100px)',
            borderRadius: '8px',
            boxShadow: theme.shadows[6],
          },
        }}
      >
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{
                padding: theme.spacing(1),
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  pb: 0.5,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#1976d2",
                    borderRadius: 1,
                    p: 0.5,
                    mr: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    minWidth: "32px",
                    minHeight: "32px",
                  }}
                >
                  {category.icon}
                </Box>
                <Typography variant="h6" component="h3" fontWeight="bold" fontSize="0.95rem">
                  {category.title}
                </Typography>
              </Box>

              <List disablePadding dense>
                {category.items.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    component="a"
                    href={item.link}
                    disablePadding
                    sx={{
                      py: 0.25,
                      px: 0.5,
                      color: "text.primary",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#ff3366",
                        backgroundColor: "action.hover",
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        variant: "body2",
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.8125rem",
                        },
                      }}
                    />
                    {item.hasMore && <ChevronRightIcon fontSize="small" sx={{ color: "#ff3366", ml: 0.5 }} />}
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 1,
            pt: 1,
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            component="a"
            href="/all-courses"
            sx={{
              color: "#ff3366",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "0.9rem",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            All courses
            <KeyboardArrowRightIcon fontSize="small" sx={{ ml: 0.5 }} />
          </Typography>
        </Box>
      </Popover>
    </Box>
  )
}

export default MegaMenu
"use client"

import { Box, Stack, Typography, Pagination } from "@mui/material"

interface PaginationControlsProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const PaginationControls = ({
  page,
  totalPages,
  onPageChange,
}: PaginationControlsProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}>
      <Stack spacing={2}>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
          Page {page} of {totalPages}
        </Typography>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => onPageChange(value)}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
        />
      </Stack>
    </Box>
  )
}
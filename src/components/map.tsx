'use client';
import React from 'react';
import { Box, Paper, Typography, Container, useTheme, useMediaQuery } from '@mui/material';

interface GoogleMapEmbedProps {
  title?: string;
  location?: string;
  mapUrl: string;
  height?: string;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  title = 'MATT ENGINEERING SOLUTIONS',
  location = '3rd Floor, Pillars gate, Opposite to Anna stadium, Vadasery, Nagercoil, Tamil Nadu 629001, India',
  mapUrl = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2343254457896!2d77.42951736084642!3d8.179133351678264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f10719c72bc5%3A0xfe6f2ea178738dd0!2sScala%20Architects%20%26%20Construction!5e0!3m2!1sen!2sin!4v1741354781850!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  height = '450px',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Paper 
        elevation={3} 
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}
      >
        {title && (
          <Box 
            sx={{ 
              p: isMobile ? 2 : 3, 
              borderBottom: `1px solid ${theme.palette.divider}` 
            }}
          >
            <Typography 
              variant={isMobile ? "h6" : "h5"} 
              component="h2" 
              fontWeight="medium"
            >
              {title}
            </Typography>
            {location && (
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ mt: 1 }}
              >
                {location}
              </Typography>
            )}
          </Box>
        )}
        
        <Box 
          sx={{ 
            position: 'relative',
            width: '100%',
            height: isMobile ? '300px' : isTablet ? '400px' : height,
            '& iframe': {
              border: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }
          }}
        >
          <iframe
            src={mapUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Google Maps - ${title}`}
            aria-label={`Location of ${title} on Google Maps`}
          />
        </Box>
      </Paper>
    </Container>
  );
};

// Usage Example Component
export const MapPage: React.FC = () => {
  return (
    <Box sx={{ width: '100%', my: 4 }}>
      <GoogleMapEmbed 
        title="SCALA ARCHITECTS"
        location="159C, JESSICA COMPLEX, GANESAPURAM ROAD, NAGERCOIL, 629001"
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0756027508656!2d80.1743!3d13.0842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261db24a0e59b%3A0x8a41c2ea7c08adcd!2sBARA%20Architects!5e0!3m2!1sen!2sin!4v1708450932051!5m2!1sen!2sin"
      />
    </Box>
  );
};

export default GoogleMapEmbed;
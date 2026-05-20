"use client"

import type React from "react"
import { useState } from "react"
import { Box, Container, Grid, Typography, TextField, Button, Paper, styled } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import emailjs from '@emailjs/browser'

// Custom styled components
const BlueUnderline = styled("div")({
  width: "40px",
  height: "4px",
  backgroundColor: "#1976d2",
  marginTop: "8px",
  marginBottom: "20px",
})

const IconCircle = styled(Box)({
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  backgroundColor: "#1976d2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  marginRight: "16px",
})

const ContactForm = styled("form")({
  width: "100%",
  marginTop: "16px",
})

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    // Get credentials from environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS configuration is missing');
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      publicKey
    );

    setSubmitStatus({
      success: true,
      message: 'Our team will get back to you soon!',
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error('Error sending email:', error);
    setSubmitStatus({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid size={{ xs: 12, md: 5 }} sx={{width:"500px"}}>
          <Typography variant="h4" component="h2" fontWeight="bold" color="#0A2540">
            Keep In Touch With Us
          </Typography>
          <BlueUnderline />
          <Typography variant="body1" color="black" paragraph>
            Reach out to us for course details, support, or any collaboration opportunities.
          </Typography>

          <Box display="flex" alignItems="center" mb={3} mt={4}>
            <IconCircle>
              <LocationOnIcon />
            </IconCircle>
            <Box>
              <Typography variant="body1" color="#0A2540">3rd floor,Pillars Gate,</Typography>
              <Typography variant="body1" color="#0A2540">Vadasery,Kanyakumari Dist,</Typography>
              <Typography variant="body1" color="#0A2540">Tamil Nadu 629001</Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" mb={3} color="#0A2540">
            <IconCircle>
              <PhoneIcon />
            </IconCircle>
            <Box>
              <Typography variant="body1">+91 7305197833</Typography>
              <Typography variant="body1">+91 9486178103</Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" color="#0A2540">
            <IconCircle>
              <EmailIcon />
            </IconCircle>
            <Box>
              <Typography variant="body1">matt@mattengg.com</Typography>
              <Typography variant="body1"></Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section - Contact Form */}
        <Grid size={{ xs: 12, md: 7 }} sx={{width:"560px"}}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              height: "100%",
            }}
          >
            <Typography variant="h4" component="h2" fontWeight="bold" color="#0A2540">
              Get in Touch
            </Typography>
            <BlueUnderline />

            <ContactForm onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email*"
                    variant="outlined"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="phone"
                    label="Phone"
                    variant="outlined"
                    value={formData.phone}
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="subject"
                    label="Subject*"
                    variant="outlined"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                  />
                </Grid>
                <Grid size={12} sx={{width:"94%"}}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Your Message*"
                    variant="outlined"
                    multiline
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                  />
                </Grid>
                
                {/* Status message */}
                {submitStatus && (
                  <Grid size={12}>
                    <Typography 
                      color={submitStatus.success ? "success.main" : "error.main"}
                      sx={{ fontWeight: 'bold' }}
                    >
                      {submitStatus.message}
                    </Typography>
                  </Grid>
                )}
                
                <Grid size={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      padding: "12px 24px",
                      fontWeight: "bold",
                      '&:disabled': {
                        backgroundColor: '#cccccc',
                      }
                    }}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </Button>
                </Grid>
              </Grid>
            </ContactForm>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactSection
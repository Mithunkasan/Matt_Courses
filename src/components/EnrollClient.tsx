"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  MenuItem, 
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Award, GraduationCap, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";


// Custom styled components (exactly like getin.tsx)
const BlueUnderline = styled("div")({
  width: "40px",
  height: "4px",
  backgroundColor: "#1976d2",
  marginTop: "8px",
  marginBottom: "20px",
});

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
  flexShrink: 0
});

const EnrollmentForm = styled("form")({
  width: "100%",
  marginTop: "16px",
});

const coursesList = [
  { title: "Basic Electronics", category: "Hardware & Embedded" },
  { title: "PCB Designing", category: "Hardware & Embedded" },
  { title: "Robotics", category: "Hardware & Embedded" },
  { title: "Internet of Things (IoT)", category: "Hardware & Embedded" },
  { title: "Drone Technology", category: "Hardware & Embedded" },
  { title: "Embedded Systems", category: "Hardware & Embedded" },
  { title: "C Programming", category: "Programming Languages" },
  { title: "C++ Programming", category: "Programming Languages" },
  { title: "Java Programming", category: "Programming Languages" },
  { title: "Python Programming", category: "Programming Languages" },
  { title: "Data Analysis", category: "Analytics & AI" },
  { title: "Data Science", category: "Analytics & AI" },
  { title: "Machine Learning", category: "Analytics & AI" },
  { title: "Artificial Intelligence", category: "Analytics & AI" },
  { title: "Power BI", category: "Analytics & AI" },
  { title: "MATLAB", category: "Analytics & AI" },
  { title: "Python Full Stack", category: "Software & Cyber" },
  { title: "MERN Stack", category: "Software & Cyber" },
  { title: "Fullstack Development", category: "Software & Cyber" },
  { title: "Cyber Security", category: "Software & Cyber" },
  { title: "Linux Administration", category: "Software & Cyber" },
  { title: "RPA (Automation)", category: "Software & Cyber" },
  { title: "Digital Marketing", category: "Software & Cyber" },
];

const internshipsList = [
  { title: "Firmware Engineer", category: "Hardware & Embedded" },
  { title: "IoT Solutions Engineer", category: "Hardware & Embedded" },
  { title: "Autonomous Systems Engineer", category: "Hardware & Embedded" },
  { title: "Hardware Design Engineer", category: "Hardware & Embedded" },
  { title: "Software Engineer", category: "Programming" },
  { title: "Python Developer", category: "Programming" },
  { title: "ML / AI Engineer", category: "Data, AI & Analytics" },
  { title: "Data Scientist", category: "Data, AI & Analytics" },
  { title: "Business Intelligence Analyst", category: "Data, AI & Analytics" },
  { title: "Simulation & Modelling Engineer", category: "Data, AI & Analytics" },
  { title: "Full Stack Developer", category: "Web, Security & Automation" },
  { title: "Cyber Security Analyst", category: "Web, Security & Automation" },
  { title: "RPA Developer", category: "Web, Security & Automation" },
  { title: "Digital Marketing Analyst", category: "Web, Security & Automation" },
  { title: "Linux Systems Administrator", category: "Web, Security & Automation" },
];

export default function EnrollClient() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    type: "course", // 'course' or 'internship'
    program: "",
    mode: "Offline",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [nextBatchMonth, setNextBatchMonth] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Calculate next batch month start (consistent with admissions and contact forms)
    const now = new Date();
    const currentDay = now.getDate();
    let targetMonth = now.getMonth();
    let targetYear = now.getFullYear();

    if (currentDay >= 5) {
      targetMonth += 1;
      if (targetMonth > 11) {
        targetMonth = 0;
        targetYear += 1;
      }
    }

    const nextBatchDate = new Date(targetYear, targetMonth, 5);
    const monthName = nextBatchDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    setNextBatchMonth(monthName);
  }, []);

  useEffect(() => {
    // Automatically pre-select first program from the chosen type list
    const list = formData.type === "course" ? coursesList : internshipsList;
    setFormData((prev) => ({ ...prev, program: list[0]?.title || "" }));
  }, [formData.type]);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
    if (!formData.qualification.trim()) tempErrors.qualification = "Qualification is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials are not configured in your .env file.");
      }

      const emailSubject = `[Enrollment] ${formData.name} - ${formData.program}`;
      const emailMessage = `
A new enrollment application has been submitted for MATT ACADEMY:

Student Details:
----------------------------------------
Full Name: ${formData.name}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Highest Qualification: ${formData.qualification}

Program Selection:
----------------------------------------
Type: ${formData.type.toUpperCase()}
Selected Course/Role: ${formData.program}
Training Mode: ${formData.mode}
Expected Start Batch: ${nextBatchMonth} 5th

Please follow up with this student within 24 hours to secure their registration.
      `.trim();

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: emailSubject,
          message: emailMessage,
        },
        publicKey
      );

      setOpenSuccessDialog(true);
    } catch (error: any) {
      console.error("Error sending enrollment email notification:", error);
      const errorMsg = error?.text || error?.message || (error && typeof error === "object" ? JSON.stringify(error) : String(error));
      alert(`Failed to register: ${errorMsg}\n\nPlease check your EmailJS dashboard settings and verify that your Service ID, Template ID, and Public Key in the .env file are active and configured correctly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentProgramList = formData.type === "course" ? coursesList : internshipsList;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        
        {/* Left Section - Academy Details (styled exactly like getin.tsx left section) */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ width: "500px" }}>
          <Typography variant="h4" component="h2" fontWeight="bold" color="#0A2540">
            Begin Your Journey
          </Typography>
          <BlueUnderline />
          
          <Typography variant="body1" color="black" paragraph sx={{ mb: 4 }}>
            Register for specialized, certified engineering and software training. Secure your future with dual certifications, hands-on lab projects, and 100% placement support.
          </Typography>

          {/* Dual Certification Highlight */}
          <Box display="flex" alignItems="center" mb={3}>
            <IconCircle>
              <Award style={{ width: 26, height: 26 }} />
            </IconCircle>
            <Box>
              <Typography variant="body1" fontWeight="bold" color="#0A2540">
                Dual Certifications
              </Typography>
              <Typography variant="body2" color="textSecondary">
                NACTET Certified & IAO Approved Syllabus
              </Typography>
            </Box>
          </Box>

          {/* Admissions Desk Contact */}
          <Box display="flex" alignItems="center" mb={3}>
            <IconCircle>
              <PhoneIcon />
            </IconCircle>
            <Box>
              <Typography variant="body1" fontWeight="bold" color="#0A2540">
                Call Admissions Desk
              </Typography>
              <Typography variant="body1" color="#0A2540">
                +91 7305197833
              </Typography>
              <Typography variant="body1" color="#0A2540">
                +91 9486178103
              </Typography>
            </Box>
          </Box>

          {/* Admission Email */}
          <Box display="flex" alignItems="center" mb={3}>
            <IconCircle>
              <EmailIcon />
            </IconCircle>
            <Box>
              <Typography variant="body1" fontWeight="bold" color="#0A2540">
                Email Enquiries
              </Typography>
              <Typography variant="body1" color="#0A2540">
                matt@mattengg.com
              </Typography>
            </Box>
          </Box>

          {/* Campus Location */}
          <Box display="flex" alignItems="center">
            <IconCircle>
              <LocationOnIcon />
            </IconCircle>
            <Box>
              <Typography variant="body1" fontWeight="bold" color="#0A2540">
                Kerala & Nagercoil Campus
              </Typography>
              <Typography variant="body2" color="#0A2540">
                3rd floor, Pillars Gate,
              </Typography>
              <Typography variant="body2" color="#0A2540">
                Vadasery, Kanyakumari Dist,
              </Typography>
              <Typography variant="body2" color="#0A2540">
                Tamil Nadu 629001
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section - Enrollment Form (styled exactly like getin.tsx Paper card) */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ width: "560px" }}>
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
              Quick Enrollment
            </Typography>
            <BlueUnderline />

            <EnrollmentForm onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                
                {/* Full Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name*"
                    variant="outlined"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    sx={{ backgroundColor: "white" }}
                  />
                </Grid>

                {/* Email Address */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email Address*"
                    type="email"
                    variant="outlined"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{ backgroundColor: "white" }}
                  />
                </Grid>

                {/* Phone Number */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="phone"
                    label="Phone Number*"
                    variant="outlined"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    sx={{ backgroundColor: "white" }}
                  />
                </Grid>

                {/* Highest Qualification */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    select
                    fullWidth
                    name="qualification"
                    label="Highest Qualification*"
                    variant="outlined"
                    required
                    value={formData.qualification}
                    onChange={handleChange}
                    error={!!errors.qualification}
                    helperText={errors.qualification}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="B.Tech / BE">B.Tech / BE</MenuItem>
                    <MenuItem value="M.Tech / ME">M.Tech / ME</MenuItem>
                    <MenuItem value="Diploma Engineering">Diploma Engineering</MenuItem>
                    <MenuItem value="BCA / MCA">BCA / MCA</MenuItem>
                    <MenuItem value="B.Sc / M.Sc">B.Sc / M.Sc</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </TextField>
                </Grid>

                {/* Registration Type Select */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    select
                    fullWidth
                    name="type"
                    label="Registration Type*"
                    variant="outlined"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="course">Course Training</MenuItem>
                    <MenuItem value="internship">Internship Program</MenuItem>
                  </TextField>
                </Grid>

                {/* Dynamic Program Choose */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    select
                    fullWidth
                    name="program"
                    label="Choose Program*"
                    variant="outlined"
                    required
                    value={formData.program}
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                  >
                    {currentProgramList.map((item) => (
                      <MenuItem key={item.title} value={item.title}>
                        {item.title} ({item.category})
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Training Mode Select */}
                <Grid size={12} sx={{ width: "94%" }}>
                  <TextField
                    select
                    fullWidth
                    name="mode"
                    label="Training Mode*"
                    variant="outlined"
                    required
                    value={formData.mode}
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="Offline">Offline Classroom (Kerala Campus)</MenuItem>
                    <MenuItem value="Online Classroom">Online Interactive Classroom</MenuItem>
                  </TextField>
                </Grid>

                {/* Next Batch Info Callout */}
                <Grid size={12} sx={{ width: "94%", mt: 1 }}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      bgcolor: "#e3f2fd", 
                      border: "1px solid #bbdefb",
                      borderRadius: "6px" 
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: "bold", color: "#0d47a1", display: "block" }}>
                      Next Batch Commencing
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bold", color: "#1565c0" }}>
                      {nextBatchMonth} 5th (Only 20 Seats Max Per Batch)
                    </Typography>
                  </Paper>
                </Grid>

                {/* Register seat button */}
                <Grid size={12} sx={{ mt: 2 }}>
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
                      "&:disabled": {
                        backgroundColor: "#cccccc",
                      },
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    {isSubmitting ? "REGISTERING..." : "REGISTER SEAT"}
                  </Button>
                </Grid>

              </Grid>
            </EnrollmentForm>
          </Paper>
        </Grid>

      </Grid>

      {/* Success Dialog Modal (MUI Style) */}
      <Dialog 
        open={openSuccessDialog} 
        onClose={() => setOpenSuccessDialog(false)} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: { borderRadius: "16px", p: 2 }
        }}
      >
        <DialogTitle sx={{ fontWeight: "black", color: "#0A2540", textAlign: "center", pt: 4 }}>
          Enrollment Submitted Successfully!
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center", px: 4 }}>
          <Box display="flex" justifyContent="center" mb={2}>
            <IconCircle sx={{ mr: 0, bgcolor: "#4caf50" }}>
              <GraduationCap style={{ width: 32, height: 32 }} />
            </IconCircle>
          </Box>
          <Typography variant="body1" sx={{ mt: 2, mb: 4, color: "#4a5568", lineHeight: 1.6 }}>
            Congratulations, <strong>{formData.name}</strong>! Your application for the <strong>{formData.program}</strong> program has been received. Our admission counselors will contact you within 24 hours.
          </Typography>
          <Box 
            sx={{ 
              p: 2, 
              bgcolor: "#f1f8e9", 
              border: "1px solid #dcedc8", 
              borderRadius: "8px", 
              display: "inline-flex", 
              gap: 4, 
              mb: 2 
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#33691e" }}>
              Batch: {nextBatchMonth} 5th
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#33691e" }}>
              Mode: {formData.mode}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 4, gap: 2 }}>
          <Button 
            variant="contained" 
            onClick={() => {
              setOpenSuccessDialog(false);
              router.push("/");
            }}
            sx={{ bgcolor: "#1976d2", fontWeight: "bold", px: 3 }}
          >
            Go to Home
          </Button>
          <Button 
            variant="outlined" 
            onClick={() => {
              setOpenSuccessDialog(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                qualification: "",
                type: "course",
                program: coursesList[0].title,
                mode: "Offline",
              });
            }}
            sx={{ color: "#1976d2", borderColor: "#1976d2", fontWeight: "bold", px: 3 }}
          >
            Register Another
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
}

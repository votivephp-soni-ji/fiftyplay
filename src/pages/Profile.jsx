import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  MenuItem,
  Switch,
  Paper,
  Card,
  CardContent,
  Divider,
  Container,
  alpha,
  styled,
} from "@mui/material";
import { CameraAlt, Person } from "@mui/icons-material";

// Gradient button
const GradientButton = styled(Button)(() => ({
  background: "linear-gradient(135deg, #ee127b 60%)",
  borderRadius: "30px",
  padding: "12px 32px",
  fontWeight: 600,
  textTransform: "none",
  fontSize: "16px",
  boxShadow: "0 8px 20px rgba(255, 0, 127, 0.3)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    background: "linear-gradient(135deg, #e6006b 0%)",
    transform: "translateY(-2px)",
    boxShadow: "0 12px 24px rgba(255, 0, 127, 0.4)",
  },
}));

// Card styling
const StyledCard = styled(Card)(() => ({
  borderRadius: "24px",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
}));

// Input fields styling
const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ee127b",
      },
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ee127b",
        borderWidth: 2,
      },
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ee127b",
  },
}));

// Avatar overlay
const AvatarContainer = styled(Box)(() => ({
  position: "relative",
  display: "inline-block",
  "& .avatar-overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
    cursor: "pointer",
  },
  "&:hover .avatar-overlay": {
    opacity: 1,
  },
}));

// Notification card
const NotificationCard = styled(Paper)(() => ({
  padding: "20px",
  borderRadius: "16px",
  backgroundColor: alpha("#ee127b", 0.05),
  border: `1px solid ${alpha("#ee127b", 0.1)}`,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: alpha("#ee127b", 0.08),
    transform: "translateY(-2px)",
  },
}));

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    language: "en",
    notifications: {
      email: true,
      push: false,
    },
  });

  // Upload image
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSwitch = (field, value) => {
    setForm((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, [field]: value },
    }));
  };

  const handleSave = () => {
    console.log("Profile Data:", form);
    alert("Profile saved successfully ✅");
    // API call to save profile can go here
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%)",
        py: 4,
        px: 2,
        fontFamily: "Jost, sans-serif",
      }}
    >
      <Container maxWidth="md">
        <StyledCard>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            {/* Header */}
            <Box textAlign="center" mb={5}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #ee127b 0%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1,
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Profile Settings
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: "1.1rem" }}
              >
                Manage your account information and preferences
              </Typography>
            </Box>

            {/* Profile Image */}
            <Box textAlign="center" mb={5}>
              <AvatarContainer>
                <Avatar
                  src={profileImage || ""}
                  sx={{
                    width: { xs: 120, md: 140 },
                    height: { xs: 120, md: 140 },
                    mx: "auto",
                    boxShadow: "0 8px 24px rgba(255, 0, 127, 0.2)",
                    border: "4px solid rgba(255, 0, 127, 0.1)",
                  }}
                >
                  <Person sx={{ fontSize: 60, color: "#ee127b" }} />
                </Avatar>
                <input
                  accept="image/*"
                  type="file"
                  id="upload-profile"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <label htmlFor="upload-profile">
                  <Box className="avatar-overlay">
                    <CameraAlt sx={{ color: "white", fontSize: 30 }} />
                  </Box>
                </label>
              </AvatarContainer>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, fontSize: "0.9rem" }}
              >
                Click to upload profile picture
              </Typography>
            </Box>

            {/* Personal Info */}
            <Box mb={5}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#333",
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                Personal Information
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 3,
                }}
              >
                <StyledTextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your full name"
                />
                <StyledTextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email"
                />
                <StyledTextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                />
                <StyledTextField
                  select
                  fullWidth
                  label="Preferred Language"
                  value={form.language}
                  onChange={(e) => handleChange("language", e.target.value)}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                </StyledTextField>
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Notification Settings */}
            <Box mb={5}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#333",
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                Notification Preferences
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 3,
                }}
              >
                <NotificationCard>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        Notifications
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Receive updates and news via email
                      </Typography>
                    </Box>
                    <Switch
                      checked={form.notifications.email}
                      onChange={(e) => handleSwitch("email", e.target.checked)}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: "#ee127b",
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                          {
                            backgroundColor: "#ee127b",
                          },
                      }}
                    />
                  </Box>
                </NotificationCard>
              </Box>
            </Box>

            {/* Save Button */}
            <Box textAlign="center">
              <GradientButton
                variant="contained"
                size="large"
                onClick={handleSave}
                sx={{ px: { xs: 4, md: 6 }, py: 1.5 }}
              >
                Save Profile
              </GradientButton>
            </Box>
          </CardContent>
        </StyledCard>
      </Container>
    </Box>
  );
};

export default Profile;

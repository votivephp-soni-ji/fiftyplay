import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signup } from "../services/AuthService";

// ✅ Validation schema
const schema = yup.object({
  //name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "At least 6 characters").required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

const SignupModal = ({ open, handleClose, handleLoginClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ React Hook Form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {

          res = await signup(data)
        } catch (err) {
          if (err.response?.status === 422) {
            const validationErrors = err.response.data.errors;
            Object.keys(validationErrors).forEach((field) => {
              setError(field, {
                type: "server",
                message: validationErrors[field][0],
              });
            });
          }
        } finally {
          setLoading(false);
        }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2, // padding for small screens
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: 400 }, // responsive width
            maxWidth: "100%",
            bgcolor: "white",
            borderRadius: "16px",
            p: { xs: 3, sm: 4 },
            position: "relative",
            boxShadow: 24,
            fontFamily: "Jost, sans-serif",
          }}
        >
          {/* Close Button */}
          <IconButton
            sx={{ position: "absolute", top: 15, right: 15 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" fontWeight="bold" mb={3}>
            Sign up
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <TextField
              fullWidth
              placeholder="Enter your full name"
              variant="standard"
              sx={{ mb: 2 }}
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "gray" }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Email */}
            <TextField
              fullWidth
              placeholder="Enter your email address"
              variant="standard"
              sx={{ mb: 2 }}
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "gray" }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              variant="standard"
              sx={{ mb: 2 }}
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "gray" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Confirm Password */}
            <TextField
              fullWidth
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              variant="standard"
              sx={{ mb: 3 }}
              {...register("password_confirmation")}
              error={!!errors.password_confirmation}
              helperText={errors.password_confirmation?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "gray" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Register Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#ff007f",
                borderRadius: "30px",
                py: 1.4,
                fontWeight: "bold",
                fontSize: "15px",
                mb: 2,
                textTransform: "none",
                "&:hover": { bgcolor: "#e60073" },
              }}
            >
              Register
            </Button>
          </form>

          {/* Already have account */}
          <Typography align="center" variant="body2" mb={3}>
            Already have an account?{" "}
            <span
              onClick={handleLoginClick}
              style={{
                color: "#7b1fa2",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login
            </span>
          </Typography>

          {/* Divider */}
          <Typography align="center" variant="body2" color="textSecondary" mb={2}>
            or continue with
          </Typography>

          {/* Social Icons */}
          <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        mb: 3
                      }}
                    >
                      <a href="#">
                        <img src="/images/apple.png" alt="Apple" width="40" />
                      </a>
                      <a href="#">
                        <img src="/images/facebook.png" alt="Facebook" width="40" />
                      </a>
                      <a href="#">
                        <img src="/images/google-play.png" alt="Google" width="40" />
                      </a>
                    </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignupModal;

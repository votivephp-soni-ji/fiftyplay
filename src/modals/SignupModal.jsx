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
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signup, socialLogin } from "../services/AuthService";
import {
  auth,
  googleProvider,
  facebookProvider,
  appleProvider,
  requestForToken,
} from "../firebase";
import { signInWithPopup } from "firebase/auth";

// ✅ Validation schema
const schema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

const SignupModal = ({
  open,
  handleClose,
  handleLoginClick,
  onLoginSuccess,
}) => {
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
    // Add user type

    const payload = {
      ...data,
      user_type: 4, // 🔹 change dynamically as needed
    };

    try {
      res = await signup(payload);
      onLoginSuccess(res);
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

  const socialLoginHandler = async (provider, type) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      let idToken = await user.getIdToken();

      // Get FCM Device Token (for push notifications)

      let deviceToken = null;
      try {
        deviceToken = await requestForToken();
        console.log("device token", deviceToken);
      } catch (err) {
        console.warn("⚠️ Could not get device token:", err.message);
      }

      let res = await socialLogin({
        device_token: deviceToken,
        token: idToken,
        provider: type,
      });
      onLoginSuccess(res);
      toast.success(res.message || `${type} login successful!`);
      handleClose();
    } catch (err) {
      toast.error(err.message);
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
          <Typography
            align="center"
            variant="body2"
            color="textSecondary"
            mb={2}
          >
            or continue with
          </Typography>

          {/* Social Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 3,
            }}
          >
            <IconButton
              sx={{ color: "#1877F2" }}
              onClick={() => socialLoginHandler(facebookProvider, "facebook")}
            >
              <FacebookIcon fontSize="medium" />
            </IconButton>
            <IconButton
              sx={{ color: "black" }}
              onClick={() => socialLoginHandler(appleProvider, "apple")}
            >
              <AppleIcon fontSize="medium" />
            </IconButton>
            <IconButton
              sx={{ color: "#DB4437" }}
              onClick={() => socialLoginHandler(googleProvider, "google")}
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                style={{ width: 24, height: 24 }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignupModal;

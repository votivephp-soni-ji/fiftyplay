import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Checkbox,
  FormControlLabel,
  Alert,
  InputAdornment
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { login } from "../services/AuthService";

import { auth, googleProvider, facebookProvider, appleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const LoginModal = ({ open, handleClose, handleSignupClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setErrors({});
    setServerError("");

    try {
      const res = await login({ email, password });
      console.log("✅ Login Success:", res);
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors || {});
      } else if (err.response?.data?.message) {
        setServerError(err.response.data.message);
      } else {
        setServerError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

   const socialLogin = async (provider, type) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      let token = await user.getIdToken();

      // Send token to Laravel backend
      let res = await axios.post("/api/social-login", {
        provider: type,
        token
      });

      toast.success(res.data.message || `${type} login successful!`);
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
          px: 2,
          fontFamily: '"Jost", sans-serif'
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "480px" },
            bgcolor: "white",
            borderRadius: "20px",
            p: { xs: 3, sm: 4 },
            position: "relative",
            boxShadow: 24
          }}
        >
          {/* Close Button */}
          <IconButton
            sx={{ position: "absolute", top: 14, right: 14 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          {/* Logo */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <img src="/images/logo.png" alt="logo" width="100" />
          </Box>

          {/* Title */}
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
            Login
          </Typography>

          {/* Server error */}
          {serverError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {serverError}
            </Alert>
          )}

          {/* Email */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <EmailIcon sx={{ mr: 1.5, color: "gray" }} />
            <TextField
              variant="standard"
              placeholder="Enter your email address"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email ? errors.email[0] : ""}
              InputProps={{
                style: { fontFamily: '"Jost", sans-serif' }
              }}
            />
          </Box>

          {/* Password */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LockIcon sx={{ mr: 1.5, color: "gray" }} />
            <TextField
              type={showPassword ? "text" : "password"}
              variant="standard"
              placeholder="Enter your password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password ? errors.password[0] : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { fontFamily: '"Jost", sans-serif' }
              }}
            />
          </Box>

          {/* Remember + Forgot */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              sx={{ fontFamily: '"Jost", sans-serif' }}
            />
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: "pointer", fontWeight: 500 }}
            >
              Forgot Password?
            </Typography>
          </Box>

          {/* Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#ff007f",
              borderRadius: "30px",
              py: 1.4,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "16px",
              mb: 3,
              "&:hover": { bgcolor: "#e60073" }
            }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          {/* Social Login */}
          <Typography
            align="center"
            color="text.secondary"
            sx={{ mb: 1, fontFamily: '"Jost", sans-serif' }}
          >
            or continue with
          </Typography>
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

          {/* Signup Link */}
          <Typography
            align="center"
            variant="body2"
            sx={{ fontFamily: '"Jost", sans-serif' }}
          >
            Don’t have an account?{" "}
            <span
              onClick={handleSignupClick}
              style={{
                color: "#7b1fa2",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Sign up
            </span>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;

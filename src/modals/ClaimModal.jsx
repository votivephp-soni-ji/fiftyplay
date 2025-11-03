import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { toast } from "react-toastify";

const ClaimModal = ({ open, handleClose, ticketData }) => {
  const [name, setName] = useState(ticketData?.name || "");
  const [eventId, setEventId] = useState(ticketData?.event_id || "");
  const [ticketNumber, setTicketNumber] = useState(
    ticketData?.ticket_number || ""
  );
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setServerError("");

    try {
      // Example payload
      const payload = {
        name,
        event_id: eventId,
        ticket_number: ticketNumber,
      };

      console.log("Claim Data:", payload);

      // 👉 Call your API here (example)
      // const res = await claimWinner(payload);
      // toast.success(res.message || "Claim submitted successfully!");

      toast.success("🎉 Claim submitted successfully!");
      handleClose();
    } catch (err) {
      setServerError("Something went wrong. Try again.");
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
          px: 2,
          fontFamily: '"Jost", sans-serif',
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "480px" },
            bgcolor: "white",
            borderRadius: "20px",
            p: { xs: 3, sm: 4 },
            position: "relative",
            boxShadow: 24,
          }}
        >
          {/* Close Button */}
          <IconButton
            sx={{ position: "absolute", top: 14, right: 14 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          {/* Crown Image */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <img
              src="/winner.png" // 👑 your uploaded winner image path
              alt="Winner Crown"
              width="100"
              style={{
                animation: "bounce 1.5s infinite ease-in-out",
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            mb={3}
            sx={{ color: "#00c853" }}
          >
            Claim Your Prize
          </Typography>

          {/* Server Error */}
          {serverError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {serverError}
            </Alert>
          )}

          {/* Name Field */}
          <TextField
            fullWidth
            label="Full Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 3 }}
          />



          {/* Ticket Number */}
          <TextField
            fullWidth
            label="Ticket Number"
            variant="standard"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(e.target.value)}
            sx={{ mb: 4 }}
          />

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            startIcon={<EmojiEventsIcon />}
            sx={{
              bgcolor: "#00c853",
              borderRadius: "30px",
              py: 1.4,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "16px",
              "&:hover": { bgcolor: "#00b248" },
            }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Claim Now"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ClaimModal;

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PaidIcon from "@mui/icons-material/Paid";

// ✅ Gradient background
const GradientBox = styled(Box)(() => ({
  background: "linear-gradient(90deg, #e91e63, #673ab7)",
  color: "#fff",
  padding: "80px 20px",
  textAlign: "center",
}));

const About = () => {
  return (
    <Box>
      {/* 🔹 Hero Section */}
      <GradientBox>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          A few words about us
        </Typography>
        <Typography variant="h3" fontWeight="900">
          WE DREAM BIG SO YOU CAN WIN BIG
        </Typography>
        <Typography variant="body1" mt={3} maxWidth="800px" mx="auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          egestas mi sollicitudin consequat. Sed rhoncus ligula vel justo
          dignissim aliquam. Maecenas non est vitae ipsum luctus feugiat.
        </Typography>

        {/* Stats Bar */}
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 5,
            py: 3,
            px: 2,
            borderRadius: "20px",
            backgroundColor: "#000",
            color: "#fff",
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          <Box textAlign="center">
            <Typography variant="h5" fontWeight="bold">
              28
            </Typography>
            <Typography variant="body2">Winners Last Month</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5" fontWeight="bold">
              2500+
            </Typography>
            <Typography variant="body2">Tickets Sold</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5" fontWeight="bold">
              28
            </Typography>
            <Typography variant="body2">Payouts</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h5" fontWeight="bold">
              28387K
            </Typography>
            <Typography variant="body2">Payouts to Winners</Typography>
          </Box>
        </Paper>
      </GradientBox>

      {/* 🔹 Why Choose Us Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          What makes <span style={{ color: "#e91e63" }}>Fifty Play</span>{" "}
          different?
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          mb={6}
          color="text.secondary"
        >
          These are the key drivers that make us different: Safe, Social,
          Reliable, and Fun. Fifty Play Raffle is dedicated to trust and safety.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <EmojiEmotionsIcon fontSize="large" />,
              text: "No Commission on Winnings",
            },
            {
              icon: <SecurityIcon fontSize="large" />,
              text: "Safe and Secure Playing",
            },
            {
              icon: <EmojiEventsIcon fontSize="large" />,
              text: "Biggest Raffle Jackpots",
            },
            {
              icon: <EventAvailableIcon fontSize="large" />,
              text: "Daily & Weekly Draws",
            },
            {
              icon: <VerifiedUserIcon fontSize="large" />,
              text: "Fair Play Guaranteed",
            },
            { icon: <PeopleIcon fontSize="large" />, text: "Verified Winners" },
            {
              icon: <SupportAgentIcon fontSize="large" />,
              text: "Dedicated Support",
            },
          ].map((item, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: "20px",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Box color="primary.main">{item.icon}</Box>
                <Typography variant="subtitle1" mt={2} fontWeight="bold">
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 🔹 How It Works */}
      <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            How It Works
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={3}>
            {[
              {
                step: "01",
                title: "Sign Up Instantly",
                desc: "Create your account in just a few minutes.",
                icon: <PeopleIcon fontSize="large" />,
              },
              {
                step: "02",
                title: "Deposit Securely",
                desc: "Safe payments with full security.",
                icon: <PaidIcon fontSize="large" />,
              },
              {
                step: "03",
                title: "Win Real Amount",
                desc: "Get instant payouts for your wins.",
                icon: <EmojiEventsIcon fontSize="large" />,
              },
            ].map((item, idx) => (
              <Grid key={idx} item xs={12} md={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 5,
                    textAlign: "center",
                    borderRadius: "20px",
                    height: "100%",
                  }}
                >
                  <Box color="secondary.main">{item.icon}</Box>
                  <Typography variant="h6" mt={2} fontWeight="bold">
                    Step {item.step}: {item.title}
                  </Typography>
                  <Typography variant="body2" mt={1} color="text.secondary">
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🔹 Call to Action */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: "url('/stadium.jpg') center/cover no-repeat",
          color: "#fff",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          BIGGEST JACKPOTS AWAIT
        </Typography>
        <Typography variant="body1" mb={3}>
          Enter for a chance to win life-changing prizes with the largest raffle
          jackpots online.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: "30px", px: 4, py: 1.5 }}
        >
          BUY TICKETS
        </Button>
      </Box>
    </Box>
  );
};

export default About;

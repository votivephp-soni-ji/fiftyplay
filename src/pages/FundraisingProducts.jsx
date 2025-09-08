import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const events = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "Title goes here",
  price: 12.85,
  tickets: "95k+ Remaining",
  date: "30 AUG 2025",
  image: "/images/event-sample.jpg", // replace with real
}));

const Fundraising = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 } }}>
      {/* Section Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">
          Latest <span style={{ color: "#EC008C" }}>Events</span>
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          We celebrate every win, no matter how big or small. Our platform is
          buzzing with excitement as players hit jackpots and score massive
          crypto payouts daily.
        </Typography>
      </Box>

      {/* Event Grid */}
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={event.id}>
            <Card
              sx={{
                bgcolor: "#121212",
                color: "#fff",
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Image */}
              <Box position="relative">
                <CardMedia
                  component="img"
                  height="180"
                  image={event.image}
                  alt={event.title}
                />
                {/* Exclusive Label */}
                <Chip
                  label="Exclusive"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    bgcolor: "transparent",
                    border: "1px solid #EC008C",
                    color: "#EC008C",
                    fontWeight: "bold",
                  }}
                />
                {/* Favorite Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: "#00000070",
                    borderRadius: "50%",
                    p: 0.5,
                  }}
                >
                  <FavoriteBorderIcon sx={{ color: "#fff" }} />
                </Box>
                {/* Contest Badge */}
                <Chip
                  label="Contest 582"
                  size="small"
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    bgcolor: "#EC008C",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                />
              </Box>

              {/* Content */}
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {event.title}
                </Typography>
                <Typography variant="body2" color="gray">
                  Ticket Price: ${event.price}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={1}
                >
                  <Typography variant="body2">{event.tickets}</Typography>
                  <Typography variant="body2">{event.date}</Typography>
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#EC008C",
                    borderRadius: 5,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#d6007f" },
                  }}
                >
                  View Details →
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Fundraising;

import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Typography variant="h4">
        Page Not Found
      </Typography>
      <Typography variant="h6">
        Could not find the requested resource
      </Typography>
      <Link href="/">
        <Button variant="contained" color="primary">
          Return Home
        </Button>
      </Link>
    </Box>
  );
}

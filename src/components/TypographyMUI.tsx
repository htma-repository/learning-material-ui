import { Typography, Stack } from "@mui/material";

export default function TypographyMUI() {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h1" gutterBottom>
        Lorem, ipsum.
      </Typography>
      <Typography variant="h2" gutterBottom>
        Lorem, ipsum.
      </Typography>
      <Typography variant="h3" gutterBottom>
        Lorem, ipsum.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Lorem, ipsum.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Lorem, ipsum.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Lorem, ipsum.
      </Typography>
    </Stack>
  );
}

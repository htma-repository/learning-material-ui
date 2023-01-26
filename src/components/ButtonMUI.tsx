import { useState } from "react";
import {
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
} from "@mui/material";
import {
  Send,
  FormatItalic,
  FormatBold,
  FormatUnderlined,
} from "@mui/icons-material";

type ButtonProps =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | undefined;

type SizeProps = "small" | "medium" | "large" | undefined;

export default function ButtonMUI() {
  const [format, setFormat] = useState<string | null>(null);
  const [formats, setFormats] = useState<string[]>([]);

  function toggleButtonHandler(
    _event: React.MouseEvent<HTMLElement>,
    value: string | null
  ) {
    // setFormats(value);
    setFormat(value);
  }

  console.log(format);

  function buttonVariant(color: ButtonProps, size: SizeProps) {
    return (
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color={color}
          size={size}
          href="https://google.com"
        >
          Submit
        </Button>
        <Button variant="outlined" color={color} size={size}>
          Submit
        </Button>
        <Button variant="text" color={color} size={size}>
          Submit
        </Button>
      </Stack>
    );
  }

  return (
    <Stack
      direction={"row"}
      spacing={5}
      alignItems="center"
      justifyContent={"center"}
      mt="4rem"
    >
      <Stack direction="column" spacing={2}>
        {buttonVariant("primary", "large")}
        {buttonVariant("secondary", "large")}
        {buttonVariant("success", "large")}
        {buttonVariant("warning", "medium")}
        {buttonVariant("error", "medium")}
        {buttonVariant("info", "small")}
        {buttonVariant("inherit", "small")}
      </Stack>

      <Stack direction="column" spacing={2}>
        <Stack display="block" direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<Send />}
            disableElevation
            disableRipple
          >
            Submit
          </Button>
          <Button variant="contained" endIcon={<Send />}>
            Submit
          </Button>
          <IconButton size="medium" color="primary">
            <Send />
          </IconButton>
        </Stack>

        <Stack direction="row" display={"block"}>
          <ButtonGroup variant="outlined" orientation="horizontal">
            <Button onClick={() => alert("Left")}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction={"row"}>
          <ToggleButtonGroup
            size="small"
            color="success"
            onChange={toggleButtonHandler}
            value={formats}
            exclusive
          >
            <ToggleButton value={"bold"}>
              <FormatBold />
            </ToggleButton>
            <ToggleButton value={"italic"}>
              <FormatItalic />
            </ToggleButton>
            <ToggleButton value={"underline"}>
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </Stack>
  );
}

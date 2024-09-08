import { memo, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import BreadCrumbs from "../../Components/BreadCrumbs";

const currencies = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

function Form() {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClick();
    reset()
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
    <BreadCrumbs title={"CREATE USER"} subTitle={"Create a New User Profile"}/>
      <Stack
        sx={{
          gap: 3,
        }}
        direction={"row"}
      >
        <TextField
          sx={{
            flex: 1,
          }}
          label="First Name"
          variant="filled"
          // @ts-ignore
          error={errors.Fname}
          helperText={
            errors.Fname && "First Name must be at least 4 characters"
          }
          {...register("Fname", {
            required: "Name is required",
          })}
        />

        <TextField
          sx={{
            flex: 1,
          }}
          label="Last Name"
          variant="filled"
          // @ts-ignore
          error={errors.Lname}
          helperText={errors.Lname && "Last Name must be at least 4 characters"}
          {...register("Lname", {
            required: "Name is required",
          })}
        />
      </Stack>
      <TextField
        id="filled-basic"
        label="Email"
        variant="filled"
        // @ts-ignore
        error={errors.email}
        helperText={errors.email && "Invalid email format"}
        {...register("email", {
          required: true,
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format",
          },
        })}
      />
      <TextField
        id="filled-basic"
        label="Contact Namber"
        variant="filled"
        // @ts-ignore
        error={errors.phone}
        helperText={errors.phone && "Invalid phone number"}
        {...register("phone", {
          required: true,
          pattern: {
            value: /^\d{10,15}$/,
            message: "Invalid phone number",
          },
        })}
      />
      <TextField id="filled-basic" label="Address 1" variant="filled" />
      <TextField id="filled-basic" label="Address 2" variant="filled" />

      <TextField
        id="outlined-select-currency"
        select
        variant="filled"
        label="Role"
        defaultValue="User"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
export default memo(Form);

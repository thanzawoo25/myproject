import { config } from "@/config";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const Company = () => {
  const [companyName, setCompanyName] = useState("");
  const handleCreateCompany = async () => {
    const isValid = companyName;
    if (!isValid) return alert("Name is required.");
    await fetch(`${config.apiBaseUrl}/company`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: companyName }),
    });
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <TextField
          sx={{ mb: 3, width: 400 }}
          onChange={(event) => setCompanyName(event.target.value)}
        />
        <Button
          variant="contained"
          sx={{ width: "fit-content" }}
          onClick={handleCreateCompany}
        >
          Create new company
        </Button>
      </Box>
    </Box>
  );
};

export default Company;

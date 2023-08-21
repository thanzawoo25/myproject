import Layout from "@/components/Layout";
import { Box, Button } from "@mui/material";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          variant="contained"
          onClick={() => signIn("google", { callbackUrl: "/backoffice" })}
        >
          Sign In
        </Button>
      </Box>
    </Layout>
  );
};

export default SignIn;

import Company from "@/components/Company";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BackofficeApp = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!data && status !== "loading") {
      router.push("/auth/signin");
    }
  }, []);

  if (status === "loading") return null;

  return (
    <Layout>
      <Company />
    </Layout>
  );
};
export default BackofficeApp;

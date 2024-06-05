import { useAPI } from "@/utils/useAPI";
import { Container, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignOut() {
  const router = useRouter()
  const api = useAPI(false);
  useEffect(() => {
    api?.clearAllCache().then(() => {
      router.replace("/auth/signin")
    });
  }, [api]);
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title order={2}>ログアウト中...</Title>
      </Container>
    </>
  )
}
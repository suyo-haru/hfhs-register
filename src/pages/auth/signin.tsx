import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useAPI } from "@/utils/useAPI";
import { Button, Container, Text, Title, rem } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";
import type { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth/next";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function SignIn() {
  const providers = { "google": { "id": "google", "name": "Google", "type": "oauth", "signinUrl": "http://localhost:3000/api/auth/signin/google", "callbackUrl": "http://localhost:3000/api/auth/callback/google" } }
  const api = useAPI(false);
  useEffect(() => {
    api?.clearAllCache();
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
        <Title order={2}>ログイン</Title>
        <Text>学校のGoogleアカウントを使って、ログインしてください。</Text>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button
              leftIcon={
                <IconBrandGoogle size="1.2rem" stroke={1.5} />
              }
              radius="xl"
              size="md"
              styles={{
                root: { paddingRight: rem(14), height: rem(48) },
              }}
              onClick={() => signIn(provider.id)}
            >
              Googleでログイン
            </Button>
          </div>
        ))}
      </Container>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return { redirect: { destination: "/" } };
  }
  return { props: {} };
}
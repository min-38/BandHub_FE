import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/i/flow/login",
    newUser: "/i/flow/signup",
  },
  providers: [
    Credentials({
      name: "Credentials",
      authorize: async (credentials) => {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          }
        );
        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return {
          id: user.id,
          name: user.username,
          ...user,
        };
      },
    }),
  ],

  // next-auth는 email, name, image만을 리턴해줄 수 있으니 아래와 같이 커스텀해서 데이터를 session에 넣어주면 된다.

  callbacks: {
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (session as any).userData = {
        id: "커스텀 id",
        email: "커스텀 이메일",
        name: "박요셉",
        token: token,
      };
      console.log("token, session", token, session);
      return session;
    },
  },
});

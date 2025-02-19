import NextAuth from "next-auth";
import Google from "@auth/core/providers/google"
import GitHub from "@auth/core/providers/github"
import Discord from "@auth/core/providers/discord"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

const options = {
    providers: [ Google, GitHub, Discord ],
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
};



export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth(options);


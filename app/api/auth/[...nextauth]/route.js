 import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const Handler =  nextAuth({
    providers:[ 
        GoogleProvider({
             clientId: process.env.GOOGLE_CLIENT_ID,
             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })],
        async session({session}){},
        async signIn({profile}){
        }
    })

    export {Handler as GET, Handler as POST }


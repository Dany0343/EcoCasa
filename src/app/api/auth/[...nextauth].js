// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db"; // Asegúrate de que la ruta a tu base de datos es correcta
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Aquí colocas tu lógica para encontrar al usuario y validar su contraseña
        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userFound) {
          throw new Error("No user found");
        }

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!matchPassword) {
          throw new Error("Wrong password");
        }

        // Retorna un objeto usuario si la autenticación es exitosa
        return {
          id: userFound.id,
          name: userFound.username, // Asegúrate de que el campo 'username' exista en tu modelo de usuario
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // Asegúrate de tener esta ruta en tu aplicación
  },
  // Aquí puedes agregar más configuraciones como callbacks, session, etc.
});

"use client"
import React from "react";
import LoginForm from "@/components/molecules/LoginForm";
import Image from "next/image";
const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full flex items-center justify-center">
        <div className="mr-10 flex-grow">
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Connexion
          </h2>
          <LoginForm />
        </div>
        <div>
          <Image
            src="/auth.svg"
            priority={true}
            alt="auth"
            width="564"
            height="496"
            className="w-94 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import Image from "next/image";

interface PasswordToggleProps {
  showPassword: boolean;
  togglePassword: () => void;
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({
  showPassword,
  togglePassword,
}) => {
  return (
    <button
      type="button"
      onClick={togglePassword}
      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
    >
        <Image
          src= {showPassword ? "/eye.svg"  : "/eyeCrossed.svg"}
          alt="passwordNoVisible"
          width="19"
          height="16"
        ></Image>
    </button>
  );
};

export default PasswordToggle;

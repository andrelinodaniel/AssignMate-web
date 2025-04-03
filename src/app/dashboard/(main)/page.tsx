import React from "react";
import Image from "next/image";
import bemvindo from "../../../../public/bg_bemvindo.png";
import { Container } from "../_components/container";

const Administrador = async () => {
  return (
    <div className=" flex justify-center bg-[#d9d9d9] h-screen relative">
      <Container>
        <h1 className="text-center text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-playfair ">
          Bem-vindo
        </h1>

        <Image
          src={bemvindo}
          alt="bemvindo"
          fill
          priority
          className="absolute bottom-0"
        />
      </Container>
    </div>
  );
};

export default Administrador;

import React from "react";
import { getProfessorTurmas } from "../turmas/actions/turmas-professor";
import { Turma } from "@/types";
import { Container } from "@/app/dashboard/_components/container";
import { SectionHeaderProfessor } from "@/app/portal-professor/components/sectionHeaderProfessor";
import Link from "next/link";
import Disciplinas from "@/app/dashboard/disciplinas/page";

const TurmasProfessor = async () => {




  return (
    <main className="bg-[#d9d9d9] min-h-screen">
      <Container>
        <SectionHeaderProfessor title="Quadro de Horários" />
      </Container>
    </main>
  );
};

export default TurmasProfessor;

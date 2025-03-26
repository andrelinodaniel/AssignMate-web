"use server";

import { api } from "@/lib/axios";
import { StudentSchemaType } from "@/schemas/studentSchema";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function getStudents() {
  const token = (await cookies()).get("token")?.value;
  const data = await api.get("/alunos", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data.data;
}

export async function addNewStudent(studentData: StudentSchemaType) {
  const token = (await cookies()).get("token")?.value;
  try {
    const response = await api.post(
      "/alunos",
      {
        data: {
          matricula: studentData.matricula,
          nomeCompleto: studentData.nomeCompleto,
          dataNascimento: studentData.dataNascimento,
          curso: "Engenharia da Computação",
          email: studentData.email,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    revalidatePath("/dashboard/usuarios/alunos");
  } catch (error) {
    return error;
  }
}

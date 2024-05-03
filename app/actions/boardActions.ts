"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function createNewBoard(formData: FormData) {
  try {
    const name = formData.get("boardname") as string;
    const user = await currentUser();

    const existingBoard = await prisma.kanbanBoard.findFirst({
      where: {
        userId: user?.id,
      },
    });

    if (existingBoard) {
      await prisma.kanbanBoard.update({
        where: {
          id: existingBoard.id,
        },
        data: {
          name: name,
        },
      });
    } else {
      await prisma.kanbanBoard.create({
        data: {
          name: name,
          userId: user?.id as string | "guest",
        },
      });
    }

    revalidatePath("/");
    revalidatePath("/mykanban");
    redirect("/mykanban");
  } catch (error) {
    console.error("Error creating new board:", error);
  }
}

export async function createTask(formData: FormData) {
  try {
    const name = formData.get("task") as string;
    const boardId = formData.get("boardId") as string;

    if (!name.trim()) {
      return;
    }

    await prisma.task.create({
      data: {
        name: name,
        board: { connect: { id: boardId } },
        status: "TODO",
      },
    });

    revalidatePath("/");
    revalidatePath("/mykanban");
    redirect("/mykanban");
  } catch (error) {
    console.error("Error creating task:", error);
  }
}

export async function editTask(formData: FormData) {
  try {
    const newTask = formData.get("newTask") as string;
    const taskId = formData.get("taskId") as string;

    if (!newTask.trim()) {
      return;
    }

    await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        name: newTask,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error editing task:", error);
  }
}

export async function deleteTask(formData: FormData) {
  try {
    const taskId = formData.get("taskId") as string;

    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}

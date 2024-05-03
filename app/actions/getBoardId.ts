"use server";
import { prisma } from "@/utils/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getBoardId() {
  const { userId }: { userId: string | null } = auth();
  const board = await prisma.kanbanBoard.findFirst({
    where: {
      userId: userId!,
    },
  });

  return board ? board.id : null;
}

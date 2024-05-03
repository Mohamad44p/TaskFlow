"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Input from "./Input";
import { Button } from "@/components/ui/button";
import { SyncLoader } from "react-spinners";
import { createNewBoard, createTask } from "@/app/actions/boardActions";

const variants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
};

const OnboardingForm = ({
  user,
  boardId,
}: {
  user: string | undefined | null;
  boardId: string | null;
}) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const stepOneSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await createNewBoard(formData);
    setStep(2);
    setLoading(false);
  };

  const stepTwoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.get("boardId") || formData.append("boardId", boardId!);
    await createTask(formData);
    toast.success("Task Created Successfully!");
    setLoading(false);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-[100vh] pt-[82px] w-[90%] mx-auto max-w-[1450px]"
    >
      {step === 1 && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          <h1 className="mb-10 text-4xl font-bold uppercase">
            Hey {user},🙋🏻‍♂️ Lets Give Your Board a Name!
          </h1>
          <form
            className="flex flex-col gap-10 items-center"
            action={createNewBoard}
            onSubmit={stepOneSubmit}
          >
            <Input
              name="boardname"
              type="text"
              placeholder="Board Name"
              disabled={loading}
            />
            <Button
              type="submit"
              className="w-full text-white"
              disabled={loading}
            >
              Continuee
            </Button>
          </form>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          <h1 className="mb-10 text-4xl font-bold">
            Great!🥳 Now Lets Add Your first Task!
          </h1>
          <form
            className="flex flex-col gap-7 items-center"
            onSubmit={stepTwoSubmit}
          >
            <Input
              name="task"
              type="text"
              placeholder="Task Name"
              disabled={loading}
            />
            <div className="flex justify-between w-4/5 mb-10">
              <Button
                type="button"
                className="text-white"
                onClick={() => {
                  setStep(1);
                }}
                disabled={loading}
              >
                Go Back
              </Button>
              <Button type="submit" className="text-white" disabled={loading}>
                Continue
              </Button>
            </div>

            {loading ? (
              <div className="flex gap-3 items-center text-white">
                <SyncLoader color="#fff" size={10} />
                <p>Creating Your Board...</p>
              </div>
            ) : null}
          </form>
        </motion.div>
      )}
    </motion.div>
  );
};

export default OnboardingForm;

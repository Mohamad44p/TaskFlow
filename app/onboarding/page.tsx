import { currentUser } from "@clerk/nextjs";
import OnboardingForm from "../../components/OnboardingForm";
import { getBoardId } from "@/app/actions/getBoardId";
import { unstable_noStore as noStore } from "next/cache";
const onboradingPage = async () => {
  noStore();
  const boardId = await getBoardId();
  const user = await currentUser();
  const userName = user?.firstName ?? "User";
  return (
    <div>
      <OnboardingForm user={userName} boardId={boardId} />
    </div>
  );
};

export default onboradingPage;

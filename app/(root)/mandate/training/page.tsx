import Banner from "@/components/Mandate/Training/Banner";
import Federal from "@/components/Mandate/Training/Federal";
import Intern from "@/components/Mandate/Training/Intren";
import Super from "@/components/Mandate/Training/Super";
import Journal from "@/components/Shared/Journal";

const training = () => {
  return (
    <section>
      <Banner />
      <Federal />
      <Intern />
      <Super />
      <Journal />
    </section>
  );
};

export default training;

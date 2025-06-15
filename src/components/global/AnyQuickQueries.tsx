import Faq from "../faqPage/Faq";
import Heading1 from "./Heading1";

export default function AnyQuickQueries() {
  return (
    <div className="w-full flex justify-center">
      <div className="pb-[4.375rem] px-6 md:px-[8rem]">
        <div className="mt-16 text-center">
          <Heading1>Any <span className="text-brand">Quick</span> Queries
          <span className="text-brand">?</span></Heading1>
        </div>
        <Faq />
  
      </div>
    </div>
  );
}



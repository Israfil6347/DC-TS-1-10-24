import PageContainer from "global_shared/components/PageContainer";
import { useEffect } from "react";
import Contact from "./Contact";

function ContactMap() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <PageContainer>
        <div className="text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <h2 className="mb-6 text-2xl font-semibold">Our Service Areas</h2>
            <Contact />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default ContactMap;

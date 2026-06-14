import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { content } from "../content";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const { marqueeTop: items, marqueeBottom: items2, headline } =
    content.contactSummary;

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ {headline.line1} <br />
          <span className="font-normal">{headline.emphasis1}</span>{" "}
          {headline.conjunction}{" "}
          <span className="italic">{headline.emphasis2}</span> <br />
          {headline.line2}{" "}
          <span className="text-gold">{headline.accent}</span> “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;

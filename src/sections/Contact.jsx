import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Got an app idea or a role in mind?
    I’d love to hear from you and discuss further!`;
  const items = [
    "Say Hello",
    "Start A Project",
    "Open For Work",
    "Let's Chat",
    "Get In Touch",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-1 sm:px-1 md:px-3 lg:px-6 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10 ultra-small-screen">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                abdullah.tariq.ansariata@gmail.com
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                +92 316 0120286
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-3 mt-3 md:gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-3 px-5 py-3 overflow-hidden uppercase border rounded-full group border-white/30 hover:border-gold"
                  >
                    {/* gold fill rising on hover */}
                    <span className="absolute inset-0 origin-bottom transition-transform duration-300 ease-out scale-y-0 bg-gold group-hover:scale-y-100" />
                    <Icon
                      icon={social.icon}
                      className="relative z-10 transition-colors duration-300 size-5 group-hover:text-black"
                    />
                    <span className="relative z-10 text-sm tracking-widest transition-colors duration-300 group-hover:text-black">
                      {social.name}
                    </span>
                    <Icon
                      icon="lucide:arrow-up-right"
                      className="relative z-10 transition-all duration-300 -translate-x-2 opacity-0 size-4 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-black"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;

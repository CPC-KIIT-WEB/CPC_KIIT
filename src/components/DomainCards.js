import { motion } from "framer-motion";

const DomainCards = () => {
  const domains = [
    { title: "Cyber Security", tag: "Cyber Peace Corps" },
    { title: "Web Development & Design", tag: "Cyber Peace Corps" },
    { title: "Event Management", tag: "Cyber Peace Corps" },
    { title: "Research & Development", tag: "Cyber Peace Corps" },
    { title: "Digital Marketing & GD", tag: "Cyber Peace Corps" },
  ];

  return (
    <section className="bg-neutral-900 px-3 py-8">
      <div className="mx-auto flex flex-wrap justify-center gap-6">
        {domains.map((domain, index) => (
          <Card key={index} {...domain} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ title, tag }) => {
  const randomDuration = 4 + Math.random() * 4; // Random duration between 4s and 8s

  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      className="relative h-67 w-56 shrink-0 overflow-hidden rounded-lg p-5 flex flex-col items-center justify-center text-center"
      style={{
        background: "linear-gradient(270deg, #8f1db4 0%, #222872 25%, #8f1db4 50%, #222872 100%)",
        backgroundSize: "400% 400%",
        animation: `gradientBG ${randomDuration}s ease infinite`,
      }}
    >
      <span className="absolute z-50 top-5 left-5 block w-fit rounded-full bg-white/30 px-2 py-0.5 text-xs font-light text-white">
        {tag}
      </span>
      <div className="relative z-10 text-white">
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="my-1 block font-mono text-3xl font-black leading-[1.2]"
        >
          {title}
        </motion.span>
      </div>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="224"
      height="269"
      viewBox="0 0 224 269"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{ hover: { scale: 1.5 } }}
      transition={{ duration: 1, ease: "backInOut" }}
    >
      <motion.circle
        variants={{ hover: { scaleY: 0.5, y: -18 } }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
        cx="112"
        cy="80"
        r="71"
        fill="#262626"
      />
      <motion.ellipse
        variants={{ hover: { scaleY: 2.25, y: -18 } }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
        cx="112"
        cy="185"
        rx="71"
        ry="30"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default DomainCards;

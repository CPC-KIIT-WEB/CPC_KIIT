import { motion } from "framer-motion";

const LeadCards = () => {
  const leads = [
    { name: "John Doe", domain: "Cyber Security", image: "/pfp.jpeg" },
    { name: "Jane Smith", domain: "Web Development", image: "/pfp.jpeg" },
    { name: "Alice Brown", domain: "Event Management", image: "/pfp.jpeg" },
    { name: "Bob Johnson", domain: "Research & Development", image: "/pfp.jpeg" },
    { name: "Charlie Lee", domain: "Digital Marketing", image: "/pfp.jpeg" },
    { name: "Emma Watson", domain: "AI & ML", image: "/pfp.jpeg" },
    { name: "Liam Williams", domain: "Finance & Accounting", image: "/pfp.jpeg" },
    { name: "Sophia Miller", domain: "Product Management", image: "/pfp.jpeg" },
    { name: "Oliver Davis", domain: "Human Resources", image: "/pfp.jpeg" },
    { name: "Mia Wilson", domain: "UI/UX Design", image: "/pfp.jpeg" },
  ];

  return (
    <section className="bg-neutral-900 px-3 py-8 w-full overflow-x-auto scrollbar-hide">
      <div className="flex flex-row items-center gap-6 px-6">
        {leads.map((lead, index) => (
          <Card key={index} {...lead} index={index} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ name, domain, image, index }) => {
  const randomDuration = 4 + Math.random() * 4;

  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-56 shrink-0 overflow-hidden rounded-lg p-5 flex flex-col items-center text-center"
      style={{
        background:
          "linear-gradient(270deg, #8f1db4 0%, #222872 25%, #8f1db4 50%, #222872 100%)",
        backgroundSize: "400% 400%",
        animation: `gradientBG ${randomDuration}s ease infinite`,
      }}
    >
      <span className="text-lg font-bold text-white">{name}</span>
      <motion.img
        src={image}
        alt={name}
        className="my-3 h-24 w-24 rounded-full object-cover border-2 border-white"
        whileHover={{ scale: 1.1 }}
      />
      <span className="text-sm text-gray-300">{domain}</span>
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </motion.div>
  );
};

export default LeadCards;
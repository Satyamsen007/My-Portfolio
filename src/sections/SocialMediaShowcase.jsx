import FlameStarEffectUnderline from "@/components/FlameStarEffectUnderline";
import { motion } from 'framer-motion';
const platforms = [
  {
    name: 'GitHub',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    url: 'https://github.com/Satyamsen007',
    color: 'bg-[#240C36]/60',
    borderColor: 'border-[#2d1b4d]',
    textColor: 'text-[#e0c6f7]',
    username: '@Satyamsen007',
    iconColor: 'text-[#e0c6f7]',
    buttonColor: 'from-[#a084e8] to-[#8e44ec]'
  },
  {
    name: 'WhatsApp',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
    ),
    url: 'https://wa.me/9832929287',
    color: 'bg-[#240C36]/60',
    borderColor: 'border-[#2d1b4d]',
    textColor: 'text-[#e0c6f7]',
    username: '+91 9832929287',
    iconColor: 'text-[#25D366]',
    buttonColor: 'from-[#25D366] to-[#1b7e4f]'
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    url: 'https://www.linkedin.com/in/satyam-sen-web-dev',
    color: 'bg-[#240C36]/60',
    borderColor: 'border-[#2d1b4d]',
    textColor: 'text-[#e0c6f7]',
    username: 'Satyam Sen',
    iconColor: 'text-[#0A66C2]',
    buttonColor: 'from-[#0A66C2] to-[#004182]'
  },
  {
    name: 'Email',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    url: 'mailto:satyamsen280@gmail.com',
    color: 'bg-[#240C36]/60',
    borderColor: 'border-[#2d1b4d]',
    textColor: 'text-[#e0c6f7]',
    username: 'satyamsen280@gmail.com',
    iconColor: 'text-[#E1306C]',
    buttonColor: 'from-[#E1306C] to-[#C13584]'
  }
];
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
const SocialMediaShowcase = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      variants={sectionVariants}
      className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <div className="w-full flex flex-col items-center relative mb-10">
        <h1
          className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-[#e0c6f7] via-[#a084e8] to-[#8e44ec] text-transparent bg-clip-text drop-shadow-lg text-center mb-4">
          Connect With Me
        </h1>

        <p className="max-w-2xl text-sm md:text-base text-gray-300 text-center font-medium">
          Find me on these platforms. Let's connect and collaborate!
        </p>

        {/* Fade underlines */}
        <FlameStarEffectUnderline />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-xl p-4 border ${platform.borderColor} ${platform.color} flex flex-col items-center justify-center space-y-2 h-32 transition-all duration-300`}
            >
              <div className={`p-2 rounded-lg ${platform.iconColor} transition-all duration-700 ease-in-out group-hover:rotate-[25deg] group-hover:scale-125 group-hover:drop-shadow-lg`}>
                {platform.icon}
              </div>
              <h3 className="text-lg font-bold text-[#e0c6f7]">
                {platform.name}
              </h3>
              <p className="text-sm text-[#a084e8]">
                {platform.username}
              </p>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialMediaShowcase;

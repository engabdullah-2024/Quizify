import { 
    FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare, 
    FaFigma, FaDatabase, FaGithub, FaGitAlt 
  } from 'react-icons/fa'; // Import icons
  import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si'; // More icons
  import abdalla from '../images/abdalla.jpg'; // Import local image
  import { motion } from 'framer-motion'; // Import framer-motion
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect between children
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Items drop from above
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  
  function AboutDev() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8">
          
          {/* Developer Image and Info with Animations */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <motion.img
              src={abdalla}
              alt="Developer"
              className="w-40 h-40 rounded-full object-cover shadow-md"
              initial={{ x: -100, opacity: 0 }} // Image enters from the left
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              initial={{ x: 100, opacity: 0 }} // Text enters from the right
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-extrabold text-indigo-600 mb-2">
                Abdalla Ali
              </h2>
              <p className="text-gray-700 text-lg">
                I am a passionate Full-Stack Developer and UI/UX Designer with experience in building dynamic web applications and intuitive user interfaces.
              </p>
              <p className="mt-2 text-gray-600">
                I specialize in modern front-end and back-end technologies, designing scalable applications, and creating user-friendly digital experiences.
              </p>
            </motion.div>
          </div>
  
          {/* Technologies Section with Staggered Animations */}
          <motion.div
            className="mt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Skills & Technologies
            </h3>
  
            {/* Frontend Technologies */}
            <div className="mt-4">
              <h4 className="text-lg font-bold text-gray-700">Frontend</h4>
              <motion.div className="flex space-x-6 text-4xl text-indigo-500 mt-2">
                {[
                  { icon: FaReact, name: 'React' },
                  { icon: FaHtml5, name: 'HTML5' },
                  { icon: FaCss3Alt, name: 'CSS3' },
                  { icon: FaJsSquare, name: 'JavaScript' },
                  { icon: SiTailwindcss, name: 'Tailwind CSS' },
                  { icon: FaFigma, name: 'Figma' },
                ].map(({ icon: Icon, name }, index) => (
                  <motion.div key={index} variants={itemVariants} title={name}>
                    <Icon />
                  </motion.div>
                ))}
              </motion.div>
            </div>
  
            {/* Backend Technologies */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-gray-700">Backend</h4>
              <motion.div className="flex space-x-6 text-4xl text-indigo-500 mt-2">
                {[
                  { icon: FaNodeJs, name: 'Node.js' },
                  { icon: SiExpress, name: 'Express.js' },
                  { icon: SiMongodb, name: 'MongoDB' },
                  { icon: FaDatabase, name: 'SQL / Databases' },
                ].map(({ icon: Icon, name }, index) => (
                  <motion.div key={index} variants={itemVariants} title={name}>
                    <Icon />
                  </motion.div>
                ))}
              </motion.div>
            </div>
  
            {/* Tools & Version Control */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-gray-700">Tools & Version Control</h4>
              <motion.div className="flex space-x-6 text-4xl text-indigo-500 mt-2">
                {[
                  { icon: FaGithub, name: 'GitHub' },
                  { icon: FaGitAlt, name: 'Git' },
                ].map(({ icon: Icon, name }, index) => (
                  <motion.div key={index} variants={itemVariants} title={name}>
                    <Icon />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
  
          {/* Contact Info Section */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Contact</h3>
            <p className="text-gray-700">Feel free to reach out to me:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:enga9a5311@gmail.com"
                  className="text-indigo-500 hover:underline"
                >
                  enga95311@gmail.com
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/engabdullah-2024"
                  className="text-indigo-500 hover:underline"
                >
                  https://github.com/engabdullah-2024
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    );
  }
  
  export default AboutDev;
  
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import sowndaryakpportfolio from '../assets/images/sowndaryakpportfolio.png';
import todoreactImage from '../assets/images/todoreact.png';
import gerbindia1 from '../assets/images/gerbindia1.png';
import inventoryManagement1 from '../assets/images/inventoryManagement1.png';
import reportTemplate1 from '../assets/images/reportTemplate1.png';
import smartMetrology1 from '../assets/images/smartMetrology1.png';
import commingsoon from '../assets/images/commingsoon.jpeg';

const projects = [
  {
    title: 'Sowndarya K P Portfolio',
    description: 'A personal portfolio website showcasing skills, projects, and contact information.',
    image: sowndaryakpportfolio,
    details: `
      <strong>Problem Statement:</strong><br />
      Develop a personal portfolio website for myself, showcasing my skills, projects, and contact information. The website will be built using React.js for frontend development, Tailwind CSS for styling, and integrated with EmailJS for contact form submissions.<br /><br />

      <strong>Technical Skills:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>React.js</li>
        <li>Tailwind CSS</li>
        <li>Knowledge of EmailJS</li>
      </ul><br />

      <strong>Challenges:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Designing and implementing a visually appealing and user-friendly portfolio website using Tailwind CSS.</li>
        <li>Integrating React.js components to showcase my skills, projects, and other relevant information effectively.</li>
        <li>Implementing a contact form with EmailJS integration to enable users to reach out to me.</li>
        <li>Ensuring responsiveness and cross-browser compatibility for optimal viewing experience across devices and platforms.</li>
        <li>Implementing smooth transitions and animations to enhance user engagement and interaction.</li>
        <li>Optimizing website performance for fast loading times and smooth user experience.</li>
      </ul><br />

      <strong>Learning:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Enhanced proficiency in React.js for building modern and dynamic web applications.</li>
        <li>Improved skills in UI design and styling using Tailwind CSS, focusing on creating visually appealing and responsive interfaces.</li>
        <li>Practical experience in integrating external services like EmailJS for enhanced functionality and user interaction.</li>
        <li>Understanding best practices for frontend development, including code organization, component reusability, and performance optimization, in React.js projects.</li>
        <li>Exploring techniques for optimizing website performance and user experience through efficient code practices and resource management.</li>
        <li>Gaining insights into user behavior and preferences through analytics and user feedback to continually improve my portfolio website.</li>
      </ul>
    `,

  },
  {
    title: 'Todo App in ReactJS, Tailwind CSS, and Firebase',
    description: 'A simple Todo app built with ReactJS and Tailwind CSS',
    image: todoreactImage,
    details: `
      <strong>Problem Statement:</strong><br />
      Create a Todo application using ReactJS and Tailwind CSS that allows users to add, delete, and mark tasks as completed.<br /><br />
  
      <strong>Technical Skills:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>ReactJS (Hooks)</li>
        <li>Tailwind CSS</li>
        <li>Firebase integration for data management</li>
        <li>State management within React</li>
        <li>Event handling for user interactions</li>
      </ul><br />
  
      <strong>Challenges:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Implementing state management to handle Todo items efficiently.</li>
        <li>Styling components effectively using Tailwind CSS to ensure a visually appealing interface.</li>
        <li>Managing user interactions such as adding, deleting, and marking tasks as completed in a seamless manner.</li>
      </ul><br />
  
      <strong>Learning:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Understanding and utilizing React Hooks for efficient state management within the application.</li>
        <li>Exploring advanced Tailwind CSS techniques to enhance the visual presentation of components.</li>
        <li>Adopting best practices for building Todo applications, including handling data storage and user interactions effectively.</li>
      </ul>
    `,
  },
  {
    title: 'IOT-based Solution for Machine Monitoring [GerbIndia]',
    description: 'Develop a frontend web application for a machine monitoring dashboard.',
    image: gerbindia1,
    details: `
      <strong>Problem Statement:</strong><br />
      Develop a frontend web application for a machine monitoring dashboard.<br /><br />
  
      <strong>Technical Skills:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>HTML5, CSS3, Tailwind CSS</li>
        <li>JavaScript, and Vue.js</li>
        <li>Axios library.</li>
        <li>Experience in modern frontend technologies, particularly Vue.js and Axios.</li>
      </ul><br />
  
      <strong>Challenges:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Creating a responsive and visually appealing user interface for the machine monitoring dashboard.</li>
        <li>Successfully integrating Axios for seamless data communication with the backend.</li>
        <li>Ensuring a user-friendly experience by implementing best practices in frontend development.</li>
      </ul><br />
  
      <strong>Learning:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Enhanced proficiency in Vue.js and Axios through practical application in a real-world project.</li>
        <li>Improved skills in responsive design and user interface development.</li>
        <li>Hands-on experience in integrating frontend libraries and frameworks to enhance application functionality and performance.</li>
      </ul>
    `,
  },  
  {
    title: 'Inventory Management System',
    description: 'A system designed to efficiently track, manage, and update inventory levels in real-time.',
    image: inventoryManagement1,
    details: `
      <strong>Problem Statement:</strong><br />
      Develop an inventory management system to efficiently track and manage inventory levels.<br /><br />
  
      <strong>Technical Skills:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Proficiency in React with TypeScript for frontend development.</li>
        <li>Understanding of Java for backend development.</li>
        <li>Experience in database management.</li>
        <li>Knowledge of RESTful API development for communication between frontend and backend.</li>
        <li>Familiarity with authentication and authorization mechanisms for secure access.</li>
        <li>Ability to implement CRUD (Create, Read, Update, Delete) operations for inventory items.</li>
      </ul><br />
  
      <strong>Challenges:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Integrating React with TypeScript for building a robust and type-safe frontend.</li>
        <li>Implementing backend functionality using Java to handle inventory data storage and retrieval.</li>
        <li>Setting up and managing databases for storing inventory information efficiently.</li>
        <li>Designing and implementing RESTful APIs to facilitate communication between frontend and backend.</li>
        <li>Implementing authentication and authorization mechanisms to ensure secure access to inventory data.</li>
      </ul><br />
  
      <strong>Learning:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Enhanced proficiency in React with TypeScript, gaining experience in building scalable and maintainable frontend applications.</li>
        <li>Improved understanding of backend development with Java, including handling data storage and retrieval operations.</li>
        <li>Hands-on experience in database management and optimization for inventory-related data.</li>
        <li>Practical knowledge in designing and implementing secure APIs for seamless communication between frontend and backend components.</li>
        <li>Understanding best practices in authentication and authorization to ensure data security and integrity within the inventory management system.</li>
      </ul>
    `,
  },  
  {
    title: 'Report Template Creation with Vue.js and Tailwind CSS',
    description: 'A module for creating, customizing, and editing report templates.',
    image: reportTemplate1,
    details: `
      <strong>Problem Statement:</strong><br />
      Develop a feature-rich report template creation module using Vue.js and Tailwind CSS, allowing users to create customizable and editable report templates.<br /><br />
  
      <strong>Technical Skills:</strong><br />
      <ul class="list-disc list-inside space-y-2"> 
        <li>Proficiency in Vue.js for frontend development.</li>
        <li>Experience in utilizing Tailwind CSS for styling and UI design.</li>
        <li>Knowledge of state management within Vue.js applications.</li>
        <li>Understanding of dynamic content rendering and manipulation in Vue.js.</li>
        <li>Ability to implement features for template creation, customization, and editing.</li>
        <li>Familiarity with Vue.js libraries/plugins for enhanced functionality (e.g., Vue Router, Vuex).</li>
      </ul><br />
  
      <strong>Challenges:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Designing a user-friendly interface for creating and customizing report templates using Tailwind CSS.</li>
        <li>Implementing dynamic content rendering and manipulation to enable users to add, edit, and remove template sections.</li>
        <li>Integrating Vue.js state management techniques to handle template data and user interactions effectively.</li>
        <li>Ensuring responsiveness and compatibility across different devices and screen sizes.</li>
        <li>Adding features for template editing, including text formatting, image insertion, and layout adjustments.</li>
        <li>Providing options for template saving, exporting, and sharing functionalities.</li>
      </ul><br />
  
      <strong>Learning:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Enhanced proficiency in Vue.js for building interactive and dynamic web applications.</li>
        <li>Improved skills in UI design and styling using Tailwind CSS, focusing on creating visually appealing and responsive interfaces.</li>
        <li>Practical experience in state management within Vue.js applications, utilizing techniques such as component state, props, and Vuex for managing complex application states.</li>
        <li>Hands-on experience in implementing advanced features and functionalities within Vue.js applications, including dynamic content manipulation and template customization.</li>
        <li>Understanding best practices for frontend development, including code organization, component reusability, and performance optimization, in Vue.js projects.</li>
        <li>Exploring Vue.js ecosystem and leveraging libraries/plugins to enhance the functionality and productivity of the report template creation module.</li>
      </ul>
    `,
  },  
  {
    title: 'Smart Metrology System',
    description: 'A system for selecting, viewing, and zooming DXF files, connecting Bluetooth devices like vernier calipers to update measured values.',
    image: smartMetrology1,
    details: `
      <strong>Problem Statement:</strong><br />
      Develop a smart metrology system capable of handling DXF file selection, zooming functionality, and displaying metrology data in the frontend. Additionally, integrate Bluetooth devices for connecting vernier calipers to update measured values, and implement CRUD operations for managing metrology data.<br /><br />
  
      <strong>Technical Skills:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Proficiency in frontend development technologies such as Vue.js for building interactive user interfaces.</li>
        <li>Experience in utilizing JavaScript libraries/frameworks for handling DXF file selection and zooming functionalities.</li>
        <li>Knowledge of Bluetooth connectivity and integration for connecting vernier calipers to update measured values.</li>
        <li>Understanding of CRUD operations for managing metrology data effectively.</li>
        <li>Familiarity with frontend data visualization techniques for displaying metrology data in a user-friendly manner.</li>
        <li>Ability to implement real-time data updates and synchronization between frontend and Bluetooth devices.</li>
      </ul><br />
  
      <strong>Challenges:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Implementing DXF file selection functionality and integrating zooming features for viewing detailed metrology data.</li>
        <li>Integrating Bluetooth connectivity to establish a connection with vernier calipers and update measured values in real-time.</li>
        <li>Designing and implementing CRUD operations for managing metrology data efficiently.</li>
        <li>Developing a responsive and visually appealing user interface for displaying metrology data fetched from Bluetooth devices.</li>
        <li>Ensuring data accuracy and consistency during real-time data updates and synchronization processes.</li>
        <li>Handling potential errors and exceptions arising from Bluetooth device connections and data transmissions.</li>
      </ul><br />
  
      <strong>Learning:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Enhanced proficiency in Vue.js for building dynamic and interactive frontend applications.</li>
        <li>Improved skills in integrating external libraries/frameworks for handling specialized functionalities such as DXF file handling and Bluetooth connectivity.</li>
        <li>Practical experience in working with Bluetooth devices and implementing real-time data updates in frontend applications.</li>
        <li>Hands-on experience in implementing CRUD operations for managing metrology data effectively, including data validation and error handling.</li>
        <li>Understanding best practices for frontend data visualization and user interface design to enhance user experience and usability.</li>
        <li>Exploring techniques for optimizing data synchronization and ensuring data integrity in real-time applications involving Bluetooth devices and frontend interfaces.</li>
      </ul>
    `,
  },  
  {
    title: 'Online Examination Portal (Ongoing)',
    description: 'A secure and scalable platform for conducting online exams with real-time monitoring, built using Java.',
    image: commingsoon,
    details: `
      <strong>Problem Statement:</strong><br />
      Develop an online examination portal to facilitate conducting examinations remotely. The portal will be built using Java for backend development, Vue.js for frontend development, and PostgreSQL for database management. Tailwind CSS will be used for styling the frontend components.<br /><br />
  
      <strong>Technical Skills:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Proficiency in Java for building robust and scalable backend systems.</li>
        <li>Experience in utilizing Vue.js for developing dynamic and interactive user interfaces.</li>
        <li>Knowledge of PostgreSQL for relational database management.</li>
        <li>Understanding of RESTful API design and implementation for communication between frontend and backend.</li>
        <li>Ability to integrate Tailwind CSS for efficient and responsive UI design.</li>
        <li>Familiarity with security best practices for handling sensitive examination data.</li>
      </ul><br />
  
      <strong>Challenges:</strong><br />
      <ul class="list-disc list-inside space-y-2">
        <li>Designing and implementing a secure authentication system for students and administrators.</li>
        <li>Creating a user-friendly interface for exam creation, management, and participation using Vue.js components.</li>
        <li>Developing backend services to handle exam scheduling, question storage, and result management.</li>
        <li>Integrating PostgreSQL database to store examination-related data securely and efficiently.</li>
        <li>Implementing features for real-time monitoring and proctoring during online examinations.</li>
        <li>Ensuring scalability and performance optimization to handle a large number of concurrent users during peak times.</li>
      </ul><br />
  
      <strong>Learning:</strong><br />
      <ul class="list-disc list-inside space-y-2"> 
        <li>Enhanced proficiency in Java for backend development, including RESTful API design and implementation.</li>
        <li>Improved skills in frontend development using Vue.js, focusing on creating dynamic and responsive user interfaces.</li>
        <li>Practical experience in database management with PostgreSQL, including data modeling and query optimization.</li>
        <li>Understanding security considerations for handling sensitive examination data and implementing measures to prevent unauthorized access.</li>
        <li>Exploring techniques for real-time monitoring and proctoring to maintain the integrity of online examinations.</li>
        <li>Gaining insights into scalability and performance optimization strategies to ensure smooth operation of the examination portal under varying loads.</li>
      </ul>
    `,
  },  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { darkMode } = useTheme();

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projectCardClasses = darkMode ? 'bg-black-800 text-white' : 'bg-white text-gray-800';
  const descriptionClasses = darkMode ? 'text-gray-200' : 'text-gray-700';
  const closeBtnColor = darkMode ? 'text-white' : 'text-gray-800'; // Adjust close button color based on dark mode

  return (
    <div id="projects" className={`py-12 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <hr className={`mt-20 mb-0 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />
      <div className="p-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Projects</h2>
        <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          Below are some of the advanced projects I have developed, showcasing my expertise and versatility in Fullstack Web Development. Each project reflects my commitment to creating efficient, scalable, and user-friendly applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`p-6 border border-gray-300 rounded-lg shadow-lg rounded-lg shadow-md flex items-center transition-shadow duration-300 ease-in-out hover:shadow-2xl ${projectCardClasses}`} onClick={() => openModal(project)}>
              <img src={project.image} alt={project.title} className="w-10 h-10 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className={descriptionClasses}>{project.description}</p>
                <div onClick={() => openModal(project)} className="cursor-pointer">
                  <p className="text-blue-500 underline">Read More</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className={`fixed inset-0 ${darkMode ? 'bg-black' : 'bg-white'} bg-opacity-50 flex items-center justify-center z-50`}>
          <div className={`p-8 rounded-lg shadow-lg max-w-2xl w-full relative ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`} style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <button onClick={closeModal} className={`absolute top-2 right-2 ${closeBtnColor}`}>
              <FaTimes size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto mb-4" />
            <div dangerouslySetInnerHTML={{ __html: selectedProject.details }} className="mb-4"></div>
          </div>
        </div>
      )}
       <hr className={`mt-20 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />
    </div>
  );
};

export default Projects;

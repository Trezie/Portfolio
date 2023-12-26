import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';
import { Link } from 'react-router-dom';



const ProjectSingle = ({ title, category, image, url }) => {
	console.log('URL:', url);
	return (
	  <div>
		<div aria-label="Single Project">
		  <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
			<div>
			  <img
				src={image}
				className="rounded-t-xl border-none"
				alt="Single Project"
			  />
			</div>
			<div className="text-center px-4 py-6">
			  <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
				{title}
			  </p>
			  <span className="text-lg text-ternary-dark dark:text-ternary-light">
				{category}
			  </span>

			

			 
			</div>
		  </div>
		</div>
	  </div>
	);
  };
  
export default ProjectSingle;

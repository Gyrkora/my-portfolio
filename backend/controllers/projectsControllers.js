import Projects from '../model/projects.js';

// export const getAllProjects = async (req, res, next) => {
// 	let projectList;
// 	try {
// 		projectList = await Projects.find();
// 	} catch (error) {
// 		return console.log(error);
// 	}

// 	if (!projectList) {
// 		return res.status(400).json({ message: 'no projects found' });
// 	}

// 	return res.status(200).json({ projectList });
// 	// return res.status(200).json({ projectList });
// };
export const getAllProjects = async (req, res, next) => {
	// Retrieve all projects from the MongoDB collection
	try {
		// Retrieve all projects from the MongoDB collection
		const projects = await Projects.find();

		// Send the projects data as a response
		res.json(projects);
	} catch (error) {
		// Handle any errors that occur
		console.error(error);
		res.status(500).json({ error: 'Server error' });
	}
};

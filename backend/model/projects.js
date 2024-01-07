import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
	language: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
	photo: {
		type: String,
		required: true,
	},
	tools: {
		type: String,
		required: true,
	},

	code: {
		type: String,
		required: true,
	},
	demo: {
		type: String,
		required: true,
	},
});

export default mongoose.model('Projects', projectSchema, 'projects');

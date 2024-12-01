import htmlImage from './assets/html2.svg';
import cssImage from './assets/css2.svg';
import jsImage from './assets/javascript2.svg';
import reactImage from './assets/react2.svg';
import nodeImage from './assets/node.svg';
import gitImage from './assets/git3.svg';
import sassImage from './assets/sass-1.svg';
import tailwindImage from './assets/tailwind.svg';
import githubImage from './assets/github2.svg';
import jsonImage from './assets/json.svg';
import bootstrapImage from './assets/bootstrap5.svg';
import affinityImage from './assets/affinity2.svg';
import wordpress from './assets/wordpress.svg';
import phpImage from './assets/php.svg';
import pythonImage from './assets/python.svg';
import styledComponentImage from './assets/styled-components.svg';
import mongoImage from './assets/mongodb.svg';
import sqliteImage from './assets/sqlite.svg';
import figmaImage from './assets/figma3.svg';
import mysql from './assets/mysql.svg';
import expressImage from './assets/express.svg';
import djangoImage from './assets/django.svg';
import firebaseImage from './assets/firebase.svg';
import moodle from './assets/moodle.svg';
import towImage from './assets/projects/tow.jpg';
import womendbImage from './assets/projects/womendb.svg';
import vocabulary_app from './assets/projects/vocabulary_app.jpg';

const imageList = [
	{
		id: 1,
		image: htmlImage,
		alt: 'html',
	},
	{
		id: 2,
		image: cssImage,
		alt: 'css',
	},
	{
		id: 3,
		image: jsImage,
		alt: 'js',
	},
	{
		id: 4,
		image: reactImage,
		alt: 'react',
	},
	{
		id: 5,
		image: nodeImage,
		alt: 'node',
	},
	{
		id: 6,
		image: gitImage,
		alt: 'git',
	},
	{
		id: 7,
		image: sassImage,
		alt: 'sassImage',
	},
	{
		id: 9,
		image: tailwindImage,
		alt: 'tailwind',
	},
	{
		id: 10,
		image: githubImage,
		alt: 'github',
	},
	{
		id: 11,
		image: jsonImage,
		alt: 'json',
	},
	{
		id: 12,
		image: bootstrapImage,
		alt: 'bootstrap',
	},
	{
		id: 13,
		image: affinityImage,
		alt: 'affinity',
	},
	{
		id: 14,
		image: wordpress,
		alt: 'wordpress',
	},
	{
		id: 15,
		image: phpImage,
		alt: 'php',
	},
	{
		id: 16,
		image: pythonImage,
		alt: 'python',
	},

	{
		id: 17,
		image: styledComponentImage,
		alt: 'styled-components',
	},
	{
		id: 18,
		image: mongoImage,
		alt: 'mongo',
	},
	{
		id: 19,
		image: sqliteImage,
		alt: 'sqlite',
	},

	{
		id: 20,
		image: figmaImage,
		alt: 'figma',
	},
	{
		id: 21,
		image: mysql,
		alt: 'mysql',
	},
	{
		id: 22,
		image: expressImage,
		alt: 'express',
	},
	{
		id: 23,
		image: djangoImage,
		alt: 'django',
	},
	{
		id: 24,
		image: firebaseImage,
		alt: 'firebase',
	},
	{
		id: 25,
		image: moodle,
		alt: 'Moodle',
	},
];
const proyectList = [
	{
		id: 1,
		language: 'Wordpress',
		name: 'TOW Spanish',
		alt: 'wordpress',
		photo: towImage,
		tools:
			'Wordpress, PHP, Plugins, Css, Javascript, Google Analytics, Podcast Platform, H5P',
		code: 'https://github.com/Gyrkora/desafios-tow',
		demo: 'https://theotherwayspanish.com/en/hello-tow-spanish-students/',
		descripton:
			'A language school that teaches Spanish with different tools and technologies',
	},
	{
		id: 2,
		language: 'React - Django',
		name: 'Women Database',
		alt: 'React js y Python',
		photo: womendbImage,
		tools:
			'Git, Styled-components, Formik, Django, Python, Postgres, Javascript, React, Django Rest-Framework ',
		code: 'https://github.com/Gyrkora/womendb/tree/main/client/src',
		demo: 'https://womendb.vercel.app',
		descripton:
			'A women opensource project that seeks to provide information about women in the world',

	},
	{
		id: 3,
		language: 'Javascript',
		name: 'Vocabulary App',
		alt: 'Js',
		photo: vocabulary_app,
		tools:
			'HTML, Css, Javascript, Git , Nodejs - LocalStorage, SpeechRecognition Google Chrome API and Merrian-Webster’s API',
		code: 'https://github.com/Gyrkora/vocabulary_app',
		demo: 'https://gyrkora.github.io/vocabulary_app',
		descripton: 'A vocabulary app to learn and practice your vocabulary in different languages',
	},
];

const proyectList2 = [
	{
		id: 1,
		language: 'Python',
		name: 'Women in Music',
		alt: 'Python-Django',
		photo:
			'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
		tools: 'HTML, Node-Sass, Javascript, Gulp, Git, Bootstrap, Nodemon',
		code: 'https://github.com/Gyrkora/desafios-tow',
		image: 'https://gyrkora.github.io/desafios-tow/',
	},
	{
		id: 2,
		language: 'Python',
		name: 'CSV Editor',
		alt: 'Js',
		photo:
			'https://blog.depositphotos.com/wp-content/uploads/2020/09/Vide-Infra.png.webp',
		tools:
			'HTML, TailwindCss, Javascript, Git , Nodejs - LocalStorage, SpeechRecognition Google Chrome API and Merrian-Webster’s API',
		code: 'https://github.com/Gyrkora/desafios-tow',
		image: 'https://gyrkora.github.io/desafios-tow/',
	},
	{
		id: 3,
		language: 'Python',
		name: 'Youtube Downloader',
		alt: 'React js y Python',
		photo:
			'https://c8.alamy.com/comp/2B098YD/quiz-test-survey-exam-vector-concept-quiz-online-on-laptop-vector-exam-for-education-illustration-of-quiz-test-2B098YD.jpg',
		tools:
			'Git, Styled-components, Firebase/Firestore, Formik, React dependencies (react-dom, react-router-dom, etc.) and Reactt Hooks. ',
		code: 'https://github.com/Gyrkora/desafios-tow',
		image: 'https://gyrkora.github.io/desafios-tow/',
	},
];

export { imageList, proyectList, proyectList2 };

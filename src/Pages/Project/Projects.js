import './Projects.css';
import offcampusMcmaster from '../../images/offcampus-mcmaster.png';
import premierEase from '../../images/premier-ease.png';
import blabberBox from '../../images/blabberbox.png';
import deepDive from '../../images/deepDive.png';
import todoList from '../../images/todoList.png';
import battleShip from '../../images/battleship.png';
import treeter from '../../images/treeter.png';
import etchSketch from '../../images/etch-a-sketch.png';
import Project from './Project';

function Projects() {
	return (
		<main className="projects" id="projects">
			<section className="left-column">
				<h1>Projects.📋</h1>
				<Project
					project={{
						image: offcampusMcmaster,
						projectName: 'OffCampus McMaster Clone',
						description: `A clone of my university's off-campus housing website. Allows user to upload information about a property and search uploaded properties.`,
						technologies: ['React', 'CSS/SASS', 'Express', 'MongoDB'],
						website: 'https://offcampus-mcmaster-clone.netlify.app/',
						github: [
							'https://github.com/ClearlyyConfused/mcmaster-housing-clone',
							'https://github.com/ClearlyyConfused/mcmaster-housing-clone-api',
						],
					}}
				/>
				<Project
					project={{
						image: blabberBox,
						projectName: 'BlabberBox',
						description: `Basic chatting app that allows users to create accounts and create/join rooms with the room's name and password.`,
						technologies: ['React', 'CSS/SASS', 'Express', 'MongoDB'],
						website: 'https://blabberbox.vercel.app/',
						github: [
							'https://github.com/ClearlyyConfused/blabberbox-frontend',
							'https://github.com/ClearlyyConfused/blabberbox_backend',
						],
					}}
				/>
				<Project
					project={{
						image: treeter,
						projectName: 'Treeter',
						description: `Twitter-like messaging board that allows users to create accounts and posts. Users can also comment on other posts and update/delete their post.`,
						technologies: ['React', 'CSS/SASS', 'Express', 'MongoDB'],
						website: 'https://treeter.netlify.app/',
						github: [
							'https://github.com/ClearlyyConfused/treeter',
							'https://github.com/ClearlyyConfused/treeter-api',
						],
					}}
				/>
				<Project
					project={{
						image: etchSketch,
						projectName: 'Etch-A-Sketch',
						description: `An etch-a-sketch that allows users to add colored squared to a board. User can also change number of squares board contains.`,
						technologies: ['HTML', 'CSS', 'JavaScript'],
						website: 'https://clearlyyconfused.github.io/Etch-a-Sketch/',
						github: ['https://github.com/ClearlyyConfused/Etch-a-Sketch'],
					}}
				/>
			</section>
			<section className="right-column">
				<h1>Projects.📋</h1>
				<Project
					project={{
						image: premierEase,
						projectName: 'Premier Ease',
						description: `A website that fetches data from an external API and displays data about the English Premier League. Data displayed includes league standings, live match scores, match results, and league news.`,
						technologies: ['React', 'CSS/SASS', 'Express', 'MongoDB'],
						website: 'https://premier-ease.vercel.app/',
						github: [
							'https://github.com/ClearlyyConfused/PremierEase',
							'https://github.com/ClearlyyConfused/matchday_madness_backend',
						],
					}}
				/>
				<Project
					project={{
						image: deepDive,
						projectName: 'Deep Dive',
						description: `An interesting site that allows users to control a submarine and explore the depths of the ocean by scrolling down the page. The user can discover and get information about creatures they find by clicking on them.`,
						technologies: ['React', 'CSS/SASS'],
						website: 'https://deeepdive.netlify.app/',
						github: ['https://github.com/ClearlyyConfused/deep_dive'],
					}}
				/>
				<Project
					project={{
						image: todoList,
						projectName: '2DO',
						description: `Simple todo app that allows users to create projects and then tasks under each project.`,
						technologies: ['HTML', 'CSS', 'JavaScript'],
						website: 'https://clearlyyconfused.github.io/todoList/',
						github: ['https://github.com/ClearlyyConfused/todoList'],
					}}
				/>
				<Project
					project={{
						image: battleShip,
						projectName: 'BattleShip',
						description: `Simple game of battleship vs an AI. AI has difficulty setting that makes it more/less likely to hit the user's ship.`,
						technologies: ['HTML', 'CSS', 'JavaScript', 'Jest'],
						website: 'https://clearlyyconfused.github.io/battleship/',
						github: ['https://github.com/ClearlyyConfused/battleship'],
					}}
				/>
			</section>
		</main>
	);
}

export default Projects;

import Image from 'next/image';

export const navbarMenu = [
	{
		title: 'Home',
		link: 'home',
	},
	{
		title: 'Tech Stack',
		link: 'techstack',
	},
	{
		title: 'Experience',
		link: 'experience',
	},
	{
		title: 'Projects',
		link: 'projects',
	},
	{
		title: 'Contact Me',
		link: 'contactme',
	},
];

export const stats = [
	{
		title: 'Years of Experience',
		value: -1,
	},
	{
		title: 'Projects Completed',
		value: 3,
	},
	{
		title: 'Happy Clients',
		value: 2,
	},
];

export const techstacks = [
	{
		logo: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='31'
				height='31'
				viewBox='0 0 48 48'
			>
				<path fill='#f7df1e' d='M6,42V6h36v36H6z'></path>
				<path
					fill='#000001'
					d='M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z'
				></path>
			</svg>
		),
		title: 'JavaScript',
		description: 'Language',
		link: 'https://javascript.info/',
	},
	{
		logo: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='31'
				height='31'
				viewBox='0 0 48 48'
			>
				<rect width='36' height='36' x='6' y='6' fill='#1976d2'></rect>
				<polygon
					fill='#fff'
					points='27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264'
				></polygon>
				<path
					fill='#fff'
					d='M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z'
				></path>
			</svg>
		),
		title: 'TypeScript',
		description: 'Language',
		link: 'https://www.typescriptlang.org/',
	},
	{
		logo: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='31'
				height='31'
				viewBox='0 0 48 48'
			>
				<path
					fill='#00acc1'
					d='M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z'
				></path>
			</svg>
		),
		title: 'TailwindCSS',
		description: 'CSS Framework',
		link: 'https://tailwindcss.com/',
	},
	{
		logo: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='31'
				height='31'
				viewBox='0 0 48 48'
			>
				<path
					fill='#80deea'
					d='M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z'
				></path>
				<path
					fill='#80deea'
					d='M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z'
				></path>
				<path
					fill='#80deea'
					d='M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z'
				></path>
				<circle cx='24' cy='24' r='4' fill='#80deea'></circle>
			</svg>
		),
		title: 'React.js',
		description: 'Javascript Library',
		link: 'https://reactjs.org/',
	},
	{
		logo: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width={31}
				height={31}
				viewBox='0,0,256,256'
			>
				<defs>
					<linearGradient
						x1='24'
						y1='43.734'
						x2='24'
						y2='4.266'
						gradientUnits='userSpaceOnUse'
						id='color-1_MWiBjkuHeMVq_gr1'
					>
						<stop offset='0' stopColor='#0a070a'></stop>
						<stop offset='0.465' stopColor='#0a070a'></stop>
						<stop offset='1' stopColor='#0a070a'></stop>
					</linearGradient>
					<linearGradient
						x1='30.512'
						y1='33.021'
						x2='30.512'
						y2='18.431'
						gradientUnits='userSpaceOnUse'
						id='color-2_MWiBjkuHeMVq_gr2'
					>
						<stop offset='0.377' stopColor='#ffffff' stopOpacity='0'></stop>
						<stop offset='0.666' stopColor='#ffffff' stopOpacity='0.3'></stop>
						<stop offset='0.988' stopColor='#ffffff'></stop>
					</linearGradient>
					<linearGradient
						x1='22.102'
						y1='21.443'
						x2='36.661'
						y2='40.529'
						gradientUnits='userSpaceOnUse'
						id='color-3_MWiBjkuHeMVq_gr3'
					>
						<stop offset='0.296' stopColor='#ffffff'></stop>
						<stop offset='0.521' stopColor='#ffffff' stopOpacity='0.5'></stop>
						<stop offset='0.838' stopColor='#ffffff' stopOpacity='0'></stop>
					</linearGradient>
				</defs>
				<g
					fill='none'
					fillRule='nonzero'
					stroke='none'
					strokeWidth='1'
					strokeLinecap='butt'
					strokeLinejoin='miter'
					strokeMiterlimit='10'
					strokeDasharray=''
					strokeDashoffset='0'
					fontFamily='none'
					fontWeight='none'
					fontSize='none'
					textAnchor='none'
					style={{ mixBlendMode: 'normal' }}
				>
					<g transform='scale(5.33333,5.33333)'>
						<circle cx='24' cy='24' r='19.734' fill='url(#color-1_MWiBjkuHeMVq_gr1)'></circle>
						<rect x='15.992' y='16.027' width='3.023' height='15.996' fill='#ffffff'></rect>
						<rect
							x='29.035'
							y='15.957'
							width='2.953'
							height='14.59'
							fill='url(#color-2_MWiBjkuHeMVq_gr2)'
						></rect>
						<path
							d='M36.781,38.094l-2.613,0.996l-18.176,-23.063h3.516z'
							fill='url(#color-3_MWiBjkuHeMVq_gr3)'
						></path>
					</g>
				</g>
			</svg>
		),
		title: 'Next.js',
		description: 'React Web Framework',
		link: 'https://nextjs.org/',
	},
	{
		logo: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width={31}
				height={31}
				viewBox='0,0,256,256'
			>
				<g
					fill='none'
					fillRule='nonzero'
					stroke='none'
					strokeWidth='1'
					strokeLinecap='butt'
					strokeLinejoin='miter'
					strokeMiterlimit='10'
					strokeDasharray=''
					strokeDashoffset='0'
					fontFamily='none'
					fontWeight='none'
					fontSize='none'
					textAnchor='none'
					style={{ mixBlendMode: 'normal' }}
				>
					<path
						transform='scale(5.12,5.12)'
						d='M43.079,41.129l-26.994,7.775c-1.029,0.296 -2.13,-0.105 -2.729,-0.994l-9.647,-14.323c-0.431,-0.64 -0.443,-1.474 -0.03,-2.126l19.151,-30.242c1.102,-1.741 3.685,-1.588 4.575,0.271l17.269,36.078c0.683,1.426 -0.078,3.124 -1.595,3.561z'
						id='strokeMainSVG'
						fill='#fffafa'
						stroke='#fffafa'
						strokeLinejoin='round'
					></path>
					<g transform='scale(5.12,5.12)' fill='#000000' stroke='none' strokeLinejoin='miter'>
						<path d='M44.674,37.568l-17.269,-36.078c-0.89,-1.859 -3.473,-2.012 -4.575,-0.271l-19.151,30.242c-0.413,0.652 -0.401,1.486 0.03,2.126l9.647,14.323c0.599,0.889 1.7,1.29 2.729,0.994l26.994,-7.775c1.517,-0.437 2.278,-2.135 1.595,-3.561zM40.86,38.865l-22.703,6.369c-0.526,0.148 -1.02,-0.318 -0.906,-0.853l8.049,-37.632c0.145,-0.678 1.064,-0.788 1.364,-0.163l14.843,30.881c0.259,0.566 -0.048,1.23 -0.647,1.398z'></path>
					</g>
				</g>
			</svg>
		),
		title: 'Prisma',
		description: 'ORM',
		link: 'https://www.prisma.io/',
	},
	{
		logo: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='31'
				height='31'
				viewBox='0 0 48 48'
			>
				<path
					fill='#fff'
					d='M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z'
				></path>
				<path
					fill='#0277bd'
					d='M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z'
				></path>
				<path
					fill='#0277bd'
					d='M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z'
				></path>
				<path
					fill='#0277bd'
					d='M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z'
				></path>
			</svg>
		),
		title: 'PostgreSQL',
		description: 'Database SQL',
		link: 'http://www.postgresql.org',
	},
	{
		logo: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='31'
				height='31'
				viewBox='0 0 48 48'
			>
				<path fill='#e64a19' d='M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z'></path>
				<path fill='#7c4dff' d='M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z'></path>
				<path
					fill='#66bb6a'
					d='M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z'
				></path>
				<path
					fill='#ff7043'
					d='M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z'
				></path>
				<circle cx='32' cy='24' r='7' fill='#29b6f6'></circle>
			</svg>
		),
		title: 'Figma',
		description: 'Design tool',
		link: 'https://www.figma.com/',
	},
	// {
	// 	logo: (
	// 		<svg
	// 			xmlns='http://www.w3.org/2000/svg'
	// 			x='0px'
	// 			y='0px'
	// 			width={31}
	// 			height={31}
	// 			viewBox='0 0 48 48'
	// 		>
	// 			<g id='Ð¡Ð»Ð¾Ð¹_1'>
	// 				<linearGradient
	// 					id='SVGID_1__sH0rW2TvYdr9_gr1'
	// 					x1='14.073'
	// 					x2='14.073'
	// 					y1='8.468'
	// 					y2='36.033'
	// 					gradientUnits='userSpaceOnUse'
	// 				>
	// 					<stop offset='0' stopColor='#7dffce'></stop>
	// 					<stop offset='1' stopColor='#50c08d'></stop>
	// 				</linearGradient>
	// 				<path
	// 					fill='url(#SVGID_1__sH0rW2TvYdr9_gr1)'
	// 					d='M24.2,30V6.3c0-1.8-2.3-2.6-3.4-1.2L4.5,25.9c-1.3,1.7-0.1,4.1,2,4.1H24.2z'
	// 				></path>
	// 				<linearGradient
	// 					id='SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2'
	// 					x1='34.249'
	// 					x2='34.249'
	// 					y1='48.404'
	// 					y2='19.425'
	// 					gradientUnits='userSpaceOnUse'
	// 				>
	// 					<stop offset='0' stopColor='#7dffce'></stop>
	// 					<stop offset='1' stopColor='#50c08d'></stop>
	// 				</linearGradient>
	// 				<path
	// 					fill='url(#SVGID_00000140728474547789280440000018204366184369975479__sH0rW2TvYdr9_gr2)'
	// 					d='M24,18.4v23.7c0,1.8,2.4,2.6,3.5,1.2 l16.4-20.7c1.3-1.7,0.1-4.1-2.1-4.1H24z'
	// 				></path>
	// 			</g>
	// 		</svg>
	// 	),
	// 	title: 'Supabase',
	// 	description: 'Firebase alternative',
	// 	link: 'https://supabase.io/',
	// },
	// {
	// 	logo: (
	// 		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128' width={31} height={31}>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#439934'
	// 				d='M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#45A538'
	// 				d='M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#46A037'
	// 				d='M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#409433'
	// 				d='M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#4FAA41'
	// 				d='M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#4AA73C'
	// 				d='M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#57AE47'
	// 				d='M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#60B24F'
	// 				d='M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#A9AA88'
	// 				d='M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#B6B598'
	// 				d='M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#C2C1A7'
	// 				d='M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#CECDB7'
	// 				d='M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#DBDAC7'
	// 				d='M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#EBE9DC'
	// 				d='M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#CECDB7'
	// 				d='M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z'
	// 			/>
	// 			<path
	// 				fillRule='evenodd'
	// 				clipRule='evenodd'
	// 				fill='#4FAA41'
	// 				d='M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z'
	// 			/>
	// 		</svg>
	// 	),
	// 	title: 'MongoDB',
	// 	description: 'NoSQL',
	// 	link: 'https://www.mongodb.com/',
	// },
];

export const projects = [
	{
		title: 'Si-TOMPEL',
		subTitle: 'Front-end, UI/UX',
		techstack: [
			<div key='techstack' className='flex items-center gap-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<rect width='36' height='36' x='6' y='6' fill='#1976d2'></rect>
					<polygon
						fill='#fff'
						points='27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264'
					></polygon>
					<path
						fill='#fff'
						d='M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z'
					></path>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<path
						fill='#80deea'
						d='M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z'
					></path>
					<path
						fill='#80deea'
						d='M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z'
					></path>
					<path
						fill='#80deea'
						d='M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z'
					></path>
					<circle cx='24' cy='24' r='4' fill='#80deea'></circle>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<path
						fill='#00acc1'
						d='M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z'
					></path>
				</svg>
				<Image
					src='/laravel.svg'
					alt='laravel icon'
					width={20}
					height={20}
					loading='lazy'
					draggable={false}
				/>
			</div>,
		],
		category: ['Website', 'Design'],
		link: 'https://www.si-tompel.my.id/',
		img: '/tompel.png',
		github: 'https://github.com/Eunlip/siticket-frontend',
	},
	{
		title: 'My Portfolio+',
		subTitle: 'Front-end, UI/UX',
		techstack: [
			<div key='techstack' className='flex items-center gap-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<path fill='#f7df1e' d='M6,42V6h36v36H6z'></path>
					<path
						fill='#000001'
						d='M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z'
					></path>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<path
						fill='#80deea'
						d='M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z'
					></path>
					<path
						fill='#80deea'
						d='M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z'
					></path>
					<path
						fill='#80deea'
						d='M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z'
					></path>
					<circle cx='24' cy='24' r='4' fill='#80deea'></circle>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<path
						fill='#00acc1'
						d='M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z'
					></path>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<path
						fill='#ff8f00'
						d='M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z'
					></path>
					<path
						fill='#ffa000'
						d='M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z'
					></path>
					<path fill='#ff6f00' d='M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z'></path>
					<path
						fill='#ffc400'
						d='M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z'
					></path>
				</svg>
				<Image
					src='/laravel.svg'
					alt='laravel icon'
					width={20}
					height={20}
					loading='lazy'
					draggable={false}
				/>
				<svg
					key='icon-desa-bayur'
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<path
						fill='#e64a19'
						d='M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z'
					></path>
					<path
						fill='#7c4dff'
						d='M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z'
					></path>
					<path
						fill='#66bb6a'
						d='M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z'
					></path>
					<path
						fill='#ff7043'
						d='M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z'
					></path>
					<circle cx='32' cy='24' r='7' fill='#29b6f6'></circle>
				</svg>
			</div>,
		],
		category: ['Website', 'Design'],
		link: 'https://www.figma.com/proto/Tyol6B2WNGRufhgHEoj4cN/My-portofolio?node-id=458-1784&p=f&t=c3ONDHoVrQHvkbVf-1&scaling=scale-down&content-scaling=fixed&page-id=6%3A137',
		img: '/tompel.png',
		github: 'https://github.com/orgs/My-Portfolio-TEAM/repositories',
	},
	{
		title: 'Desa Bayur',
		subTitle: 'UI/UX',
		techstack: [
			<svg
				key='icon-desa-bayur'
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='20'
				height='20'
				viewBox='0 0 48 48'
			>
				<path fill='#e64a19' d='M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z'></path>
				<path fill='#7c4dff' d='M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z'></path>
				<path
					fill='#66bb6a'
					d='M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z'
				></path>
				<path
					fill='#ff7043'
					d='M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z'
				></path>
				<circle cx='32' cy='24' r='7' fill='#29b6f6'></circle>
			</svg>,
		],
		category: ['Design'],
		link: 'https://www.figma.com/proto/bLZAASHhcHxRO3mNVUinqi/DESA-BAYUR?node-id=3-3&t=lHUJgNfyi27uMcIx-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A3',
		img: '/tompel.png',
	},
	{
		title: 'Redesign Maxim',
		subTitle: 'UI/UX',
		techstack: [
			<svg
				key='icon-desa-bayur'
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='20'
				height='20'
				viewBox='0 0 48 48'
			>
				<path fill='#e64a19' d='M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z'></path>
				<path fill='#7c4dff' d='M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z'></path>
				<path
					fill='#66bb6a'
					d='M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z'
				></path>
				<path
					fill='#ff7043'
					d='M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z'
				></path>
				<circle cx='32' cy='24' r='7' fill='#29b6f6'></circle>
			</svg>,
		],
		category: ['Design'],
		link: 'https://www.figma.com/proto/N3KvXmDYCMiWplt3RQf1ch/Redesign-Maxim?node-id=319-849&p=f&t=1MJMDCXuiFeJKaTJ-0&scaling=scale-down&content-scaling=fixed&page-id=193%3A2&starting-point-node-id=319%3A849',
		img: '/tompel.png',
	},
	{
		title: 'Discuse',
		subTitle: 'Front-end',
		techstack: [
			<div key='techstack' className='flex items-center gap-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<path fill='#f7df1e' d='M6,42V6h36v36H6z'></path>
					<path
						fill='#000001'
						d='M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z'
					></path>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<path
						fill='#80deea'
						d='M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z'
					></path>
					<path
						fill='#80deea'
						d='M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z'
					></path>
					<path
						fill='#80deea'
						d='M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z'
					></path>
					<circle cx='24' cy='24' r='4' fill='#80deea'></circle>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='20'
					height='20'
					viewBox='0 0 48 48'
				>
					<path
						fill='#00acc1'
						d='M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z'
					></path>
				</svg>
			</div>,
		],
		category: ['Website'],
		link: 'https://discuse-forum-app.vercel.app/',
		img: '/tompel.png',
		github: 'https://github.com/Eunlip/discuse-forum-app',
	},
];

export const experience = [
	{
		logo: '/dicoding.jpeg',
		company: 'PT. Presentologics (Independent Study)',
		role: 'React & Back-end Developer',
		date: '4 Month (Feb - Jun 2024)',
		description:
			'At the end of the program, there is a capstone project that must be completed, where i designed and built a website to share portfolios and learning processes in collaboration with Backend',
	},
	{
		logo: '/UNTR.JK.svg',
		company: 'PT. United Tractors Tbk. Site Tanjung (Internship)',
		role: 'Front-end Developer',
		date: '4 Month (Sep 2024 - Jan 2025)',
		description:
			'Designed and developed an IT Ticket and Complaint website to make it easier for employees to submit technical related issues',
	},
];

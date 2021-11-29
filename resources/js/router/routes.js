export default [
	{ path: '/', redirect: '/legstype' },
	{
		path: '/legstype',
		component: () => import('../Views/LegsType.vue'),
	},
	{
		path: '/designs',
		component: () => import('../Views/Designs.vue'),
		name: "designs"
	},
	{
		path: '/customization',
		component: () => import('../Views/Customization.vue'),
		name: "customization"
	},
	{
		path: '/size',
		component: () => import('../Views/Size.vue'),
		name: "size"
	},
	{
		path: '/room',
		component: () => import('../Views/Room.vue'),
		name: "room"
	},
	{
		path: '/other',
		component: () => import('../Views/Other.vue'),
		name: "other"
	},
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	redirect: '/',
	// }
];
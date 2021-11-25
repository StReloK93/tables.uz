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
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	redirect: '/',
	// }
];
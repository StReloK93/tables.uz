export default [
	{ path: '/', redirect: '/desktop/legstype' },
	{ path: '/desktop', redirect: '/desktop/legstype' },
	{
		path: '/desktop/legstype',
		component: () => import('../Views/LegsType.vue'),
		name: 'legstype'
	},
	{
		path: '/desktop/designs',
		component: () => import('../Views/Designs.vue'),
		name: "designs"
	},
	{
		path: '/desktop/customization',
		component: () => import('../Views/Customization.vue'),
		name: "customization"
	},
	{
		path: '/desktop/size',
		component: () => import('../Views/Size.vue'),
		name: "size"
	},
	{
		path: '/desktop/room',
		component: () => import('../Views/Room.vue'),
		name: "room"
	},
	{
		path: '/desktop/other',
		component: () => import('../Views/Other.vue'),
		name: "other"
	},
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	redirect: '/',
	// }
];
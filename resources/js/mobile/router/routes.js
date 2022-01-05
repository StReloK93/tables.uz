export default [
	{ path: '/', redirect: '/mobile/legstype' },
	{ path: '/mobile', redirect: '/mobile/legstype' },
	{
		path: '/mobile/legstype',
		component: () => import('../Views/LegsType.vue'),
		name: 'legstype'
	},
	{
		path: '/mobile/designs',
		component: () => import('../Views/Designs.vue'),
		name: "designs"
	},
	{
		path: '/mobile/customization',
		component: () => import('../Views/Customization.vue'),
		name: "customization"
	},
	{
		path: '/mobile/size',
		component: () => import('../Views/Size.vue'),
		name: "size"
	},
	{
		path: '/mobile/room',
		component: () => import('../Views/Room.vue'),
		name: "room"
	},
	{
		path: '/mobile/other',
		component: () => import('../Views/Other.vue'),
		name: "other"
	},
];
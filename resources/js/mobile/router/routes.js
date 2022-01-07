export default [
	{ path: '/', redirect: '/mobile/legstype' },
	{ path: '/mobile', redirect: '/mobile/legstype' },
	{
		path: '/mobile/legstype',
		component: () => import('../Views/LegsType.vue'),
		name: 'legstype',
		props: true
	},
	{
		path: '/mobile/designs',
		component: () => import('../Views/Designs.vue'),
		name: "designs",
		props: true
	},
	{
		path: '/mobile/customization',
		component: () => import('../Views/Customization.vue'),
		name: "customization",
		props: true
	},
	{
		path: '/mobile/size',
		component: () => import('../Views/Size.vue'),
		name: "size",
		props: true
	},
	{
		path: '/mobile/room',
		component: () => import('../Views/Room.vue'),
		name: "room",
		props: true
	}
];
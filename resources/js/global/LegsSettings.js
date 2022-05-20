export default {
    materials: ['oneTable', 'twoTable', 'threeTable', 'fourTable', 'fiveTable', 'fiveShkaf', 'tablesBevel', 'solidedge','forGlass'],
    parents: ['onelegParent', 'twolegParent', 'threelegParent', 'fourlegParent', 'fivelegParent'],
    filter: [
        ['desks/bamboo', 'desks/solidedge', 'desks/melamineglass' ,'desks/veneer'],
        [],
        ['desks/bamboo', 'desks/solidedge', 'desks/pyledge', 'desks/melamineglass'],
        ['desks/bamboo', 'desks/melamineglass'],
        ['desks/bamboo', 'desks/solidedge', 'desks/melamineglass', 'desks/solidtraditional'],
    ],
    corners: [
        [
            { name: 'oneTable', textureType: 1, corner: 1 },
            { name: 'oneTableCircle', textureType: 1, corner: 2 },
            { name: 'oneTableRounded', textureType: 1, corner: 3 },
            { name: 'oneTableTrad', textureType: 2, corner: 'all' },
        ],
        //twoLeg
        [
            { name: 'twoTable', textureType: 1, corner: 1 },
            { name: 'twoTableCircle', textureType: 1, corner: 2 },
            { name: 'twoTableRounded', textureType: 1, corner: 3 },

            { name: 'twoTableBambuk', textureType: 3, corner: 1 },
            { name: 'twoTableBambukCircle', textureType: 3, corner: 2 },
            { name: 'twoTableBambukRounded', textureType: 3, corner: 3 },

            { name: 'twoTableRoundedGlass', textureType: 4, corner: 'all' },
            { name: 'CtwoTableRounded', textureType: 4, corner: 'all' },

            { name: 'twoTableTrad', textureType: 2, corner: 'all' },
            { name: 'twoLiveEdge', textureType: 5, corner: 'all' },
            { name: 'twoLiveSilver', textureType: 6, corner: 'all' },
        ],
        //threeLeg
        [
            { name: 'threeTableLeft', textureType: 1, corner: 1 },
            { name: 'threeTableCirlceLeft', textureType: 1, corner: 2 },
            { name: 'threeTableRoundedLeft', textureType: 1, corner: 3 },
            { name: 'threeTableRight', textureType: 1, corner: 1 },
            { name: 'threeTableCircleRight', textureType: 1, corner: 2 },
            { name: 'threeTableRoundedRight', textureType: 1, corner: 3 },

            { name: 'threeTableLeftTrad', textureType: 2, corner: 'all' },
            { name: 'threeTableRightTrad', textureType: 2, corner: 'all' },
        ],
        //fourLeg
        [
            { name: 'fourTable', textureType: 1, corner: 1 },
            { name: 'fourTableCircle', textureType: 1, corner: 2 },
            { name: 'fourTableRounded', textureType: 1, corner: 3 },

            { name: 'fourTableTrad', textureType: 2, corner: 'all' },
            { name: 'fourLiveEdge', textureType: 5, corner: 'all' },
            { name: 'fourLiveSilver', textureType: 6, corner: 'all' },
        ],
        //fiveLeg
        [
            { name: 'fiveTable', textureType: 1, corner: 1 },
            { name: 'fiveTableCircle', textureType: 1, corner: 2 },
            { name: 'fiveTableRounded', textureType: 1, corner: 3 },
        ]
    ]
}
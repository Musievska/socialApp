export const Users = [
    {
        id: 1,
        username: 'Terry',
        profileImg: 'persons/terry.jpg',
    },
        {
        id: 2,
        username: 'Donald',
        profileImg: 'persons/donald.jpg',
    }
];

export const Posts = [
    {
        id: 1,
        description: 'Show me the money',
        picture: 'posts/show.png',
        userId: 1,
        date: '2 minutes ago',
        like: 4,
        comment: 2
    },

    {
        id: 2,
        description: 'Only God can judje me',
        picture: 'posts/onlygod.jpg',
        userId: 2,
        date: '3 hours ago',
        like: 12,
        comment: 7
    }
];

export default ( Users, Posts);

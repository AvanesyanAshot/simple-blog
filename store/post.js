export const actions = {
    async fetchAdminPosts({}) {
        return await new Promise(resolve => {
            setTimeout(()=>{
                resolve([
                    {title:'Post 1',date: new Date(), views: 22, comments:[1, 2], _id:Math.random()},
                    {title:'Post 2',date: new Date(), views: 22, comments:[1, 2], _id:Math.random()},
                    {title:'Post 3',date: new Date(), views: 22, comments:[1, 2], _id:Math.random()},
                    {title:'Post 4',date: new Date(), views: 22, comments:[1, 2], _id:Math.random()},
                    {title:'Post 5',date: new Date(), views: 22, comments:[1, 2], _id:Math.random()},
                    {title:'Post 6',date: new Date(), views: 22, comments:[1, 2], _id:Math.random()},
                    {title:'Post 7',date: new Date(), views: 22, comments:[1, 2], _id:Math.random()}
                ])
            }, )
        })
    },
    async remove({}, id) {

    }
}
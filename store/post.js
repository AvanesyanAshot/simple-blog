const posts = [
    {title:'Post 1',date: new Date(), views: 22, comments:[1, 2], _id:'id1'},
    {title:'Post 2',date: new Date(), views: 22, comments:[1, 2], _id:'id2'},
    {title:'Post 3',date: new Date(), views: 22, comments:[1, 2], _id:'id3'},
    {title:'Post 4',date: new Date(), views: 22, comments:[1, 2], _id:'id4'},
    {title:'Post 5',date: new Date(), views: 22, comments:[1, 2], _id:'id5'},
    {title:'Post 6',date: new Date(), views: 22, comments:[1, 2], _id:'id6'},
    {title:'Post 7',date: new Date(), views: 22, comments:[1, 2], _id:'id7'}
]

export const actions = {
    async fetchAdminPosts({}) {
        return await new Promise(resolve => {
            setTimeout(()=>{
                resolve(posts)
            }, )
        })
    },
    async remove({}, id) {
        
    },
    async update({}, {id, text}) {
        
    },
    async create({}, {title, text}){
        return await new Promise(resolve => {
            setTimeout(()=>{
                resolve()
            },1000 )
        })
    },
    async fetchAdminById({}, id){
        return await new Promise(resolve =>{
            setTimeout(()=>{
                resolve(posts.find(p => p._id === id))
            }, 1000)
        })

    },

}
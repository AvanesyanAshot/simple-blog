export default function({store, redirect}) {
    if(!store.getters.isAuth){
        redirect('/login') // push в логин
    }
}
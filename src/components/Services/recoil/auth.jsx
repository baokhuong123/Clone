import { atom, selector } from "recoil";

const UserAuthorization = atom({
    key: 'authorization',
    default: {username:'', authToken:'', email:'', avatar:''}
})

export const handleUserInformationLogin = selector({
    key: 'userInfo',
    get: ({ get }) => {
        return get(UserAuthorization);
    },
    set: ({get,set}, GoogleData) => {
        const setData = {username: GoogleData.username, 
            authToken: GoogleData.authToken, email: GoogleData.email, avatar: GoogleData.avatar}
        set(UserAuthorization, setData)
        console.log(get(UserAuthorization))
    }
})
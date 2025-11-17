export const initialState = {
    favorite_q: "",
    mood_q: "",
    fun_q: "",
    movieinfo: ""
}

export type State = typeof initialState;


export type PopAction = 
    | { type: "SET_FAVORITE_Q"; value: string}
    | { type: "SET_MOOD_Q"; value: string}
    | { type: "SET_FUN_Q"; value: string}
    | { type: "SET_MOVIE_INFO"; value: string};


export const PopReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_FAVORITE_Q":
            return {...state, favorite_q: action.value}
        case "SET_MOOD_Q":
            return {...state, mood_q: action.value}
        case "SET_FUN_Q":
            return {...state, fun_q: action.value}
        case "SET_MOVIE_INFO":
            return {...state, movieinfo: action.value}
    }
} 
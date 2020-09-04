import { GET_PAGES } from "../actions/types";

const initialState = {
    pages: [
        {
            label: "HOME",
            path: "/"
        },
        {
            label: "ABOUT",
            path: "/about"
        },
        {
            label: "WORK",
            path: "/work"
        },
        {
            label: "CONTACT",
            path: "/contact"
        }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PAGES:
            return { ...state }
        break;
        default: return state;
    }
}
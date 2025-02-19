export const Notification = "Notification"
export const Details = "Details"
export const Navbar = "Navbar"
export const CheckPricing = "CheckPricing"


export const getNotification = (value) => {
    return {
        type: Notification,
        payload: value
    }
}
export const getUserDetails = (value) => {
    return {
        type: Details,
        payload: value
    }
}
export const getNavbar = (value) => {
    return {
        type: Navbar,
        payload: value
    }
}
export const getCheckPricing = (value) => {
    return {
        type: CheckPricing,
        payload: value
    }
}

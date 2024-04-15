import {atom, selector} from "recoil";

export const networkAtom = atom({
    key: "networkAtom", 
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom", 
    default: 10
})

export const messagingAtom = atom({
    key: "messagingAtom", 
    default: 19
})

export const notificationAtom = atom({
    key: "notificationAtom", 
    default: 12
})




export const totalNotificationSelector = selector({
    key: "totalNotificationSelector", 
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom)
        const messageAtomCount = get(messagingAtom)
        const notificationAtomCount = get(notificationAtom)
        return networkAtomCount + jobsAtomCount + messageAtomCount + notificationAtomCount
    }
}) 
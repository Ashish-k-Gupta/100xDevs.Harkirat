import axios, { all } from "axios";
import {atom, selector} from "recoil";
import { promise } from "zod";

export const notifications = atom({
    key: "networkAtom", 
    default: selector({
        key: "networkAtomSelector", 
        get: async() => {
            // await new Promise (r => setTimeout(r, 5000));
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector", 
    get: ({get}) => {
        const allNotification = get(notifications);
        return allNotification.network +
        allNotification.jobs +
        allNotification.notifications +
        allNotification.messaging
    }
})
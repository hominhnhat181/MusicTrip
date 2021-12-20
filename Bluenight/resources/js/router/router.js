import Home from "../components/IndexTrue";
import User from "../components/User";

const routes = [
    {
        path: "/",
        component: Home,
        name: "Home",
        meta: {
            permission: [],
        },
    },
    {
        path: "/user",
        component: User,
        name: "User",
        meta: {
            permission: [],
        },
    },
    // {
    //     path: "/",
    //     component: () => import("../dashboard/Index"),
    //     children: [
    //       // Dashboard
    //       {
    //         name: "Dashboard",
    //         path: "",
    //         component: () => import("../dashboard/Dashboard"),
    //       },
    //     ]
    // }
];
export default routes;

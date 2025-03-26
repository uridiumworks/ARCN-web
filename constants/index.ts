type TopNavType = {
    name: string;
    url: string;
}

export const topNav: TopNavType[] = [ 
    {
        name: "Resources & Downloads",
        url: "/downloads",
    },
    {
        name: "Governance",
        url: "/governance",
    } , 
    {
        name: "Publications",
        url: "/publications",
    },
    {
        name: "Careers",
        url: "/career",
    } ,
    {
        name: "Contact",
        url: "/contact",
    },
]

type MainNavType = {
    name: string;
    url: string;
}
export const mainNav: MainNavType[] = [
    {  
        name: "Home",
        url: "/",
    },

    {
        name: "About Us",
        url: "/about/history",
    },

    {
        name: "mandate",
        url: "/mandate",
    },

    {
        name: "News & Events",
        url: "/news-and-events",
    },

    {
        name: "Programs & Projects",
        url: "/programs-and-projects",
    },

    {
        name: "Impacts",
        url:"/impacts",
    },

   ] as const;


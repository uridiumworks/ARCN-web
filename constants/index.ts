type TopNavType = {
    // label: ReactNode;
    name: string;
    url: string;
}

type NavType = {
  title?: string;
  url: string;
}

export const Ourservices: NavType[] = [
  {
    title: "ARCN Consult",
    url: "/our-services/consult",
  },
  {
    title: "ARCN Technical Services",
    url: "/our-services/technical-services",
  },
  {
    title: "Our Media Services",
    url: "/our-services/our-media",
  },
]

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
    // {
    //     name: "Careers",
    //     url: "/career",
    // } ,
    {
        name: "Contact",
        url: "/contact",
    },

    {
        name: "Impacts",
        url:"/impacts",
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
        name: "Our Services",
        url: "#",
    },
    

   ] as const;


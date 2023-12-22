export const API_URLS = [
  {
    name: 'auth',
    urls: [
      {
        subName : "login",
        url: "http://localhost:8086/auth/login"
      },
      {
        subName : "register",
        url: "http://localhost:8086/auth/register"
      },
      {
        subName : "logout",
        url: "http://localhost:8086/auth/logout"
      },
      {
        subName : "getUserID",
        url: "http://localhost:8086/auth/getUserID"
      }
    ],
  },
  {
    name: 'course',
    urls: [
      {
        subName: "common",
        url: "http://localhost:8087/api/course"
      },
      {
        subName: "findCourseByID",
        url: "http://localhost:8087/api/course/"
      }
      ,
      {
        subName: "findCourseByTitle",
        url: "http://localhost:8087/api/course/title"
      }
    ] ,
  },
  {
    name: 'order',
    urls: [
      {
        subName: "common",
        url: "http://localhost:8085/api/order"
      },
      {
        subName: "course",
        url: "http://localhost:8085/api/order/course"
      },      
      {
        subName: "findCourse",
        url: "http://localhost:8085/api/order/find-course/"
      },
    ]
    
  },
  {
    name: 'user',
    urls: [
      {
        subName: "updateUser",
        url: "http://localhost:8086/api/user"
      },
      {
        subName: "findUserById",
        url: "http://localhost:8086/api/user"
      },
    ] ,
  },
  {
    name: 'customer',
    urls: [
      {
        subName: "common",
        url: "http://localhost:8086/api/customer"
      },
      {
        subName: "findUser",
        url: "http://localhost:8086/api/customer/"
      },
      {
        subName: "findByID",
        url: "http://localhost:8086/api/customer"
      },
    ] ,
  },
]

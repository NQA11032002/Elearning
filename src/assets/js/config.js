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
]

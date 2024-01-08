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
        subName: "findCourseByUserID",
        url: "http://localhost:8087/api/course/user/"
      }
      ,
      {
        subName: "findCourseByTitle",
        url: "http://localhost:8087/api/course/title"
      },
      {
        subName: "upload",
        url: "http://localhost:8087/api/upload"
      },
      {
        subName: "course-image",
        url: "http://localhost:8087/api/course-image"
      },
      {
        subName: "findCourseByUserID",
        url: "http://localhost:8087/api/course/user"
      },
      {
        subName: "updateCourse",
        url: "http://localhost:8087/api/course"
      }
    ],
  },
  {
    name: 'thematic',
    urls: [
      {
        subName: "common",
        url: "http://localhost:8087/api/thematic"
      },
      {
        subName: "findThematicByID",
        url: "http://localhost:8087/api/thematic/"
      }
    ]
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
      {
        subName: "pay",
        url: "http://localhost:8085/api/v1/pay"
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
      {
        subName: "findCustomerByUserID",
        url: "http://localhost:8086/api/customer/user/"
      }
    ] ,
  },
  {
    name: 'categories',
    urls: [
      {
        subName: "common",
        url: "http://localhost:8087/api/categories"
      }
    ] ,
  },
  {
    name: 'educations',
    urls: [
      {
        subName: "common",
        url: "http://localhost:8087/api/educations"
      }
    ] ,
  },
  {
    name: 'video',
    urls: [
      {
        subName: "common",
        url: "http://localhost:8087/api/course-video"
      }
    ],
  },
]

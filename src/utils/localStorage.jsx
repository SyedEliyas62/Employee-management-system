const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Complete Project Report",
          description: "Prepare the final project report for submission.",
          date: "2025-02-25",
          category: "Documentation",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Fix UI Bug",
          description: "Resolve the UI issue in the login form.",
          date: "2025-02-24",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Team Meeting",
          description: "Attend the team meeting to discuss project updates.",
          date: "2025-02-26",
          category: "Meetings",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Code Review",
          description: "Review the code of the latest feature update.",
          date: "2025-02-25",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Client Meeting",
          description: "Discuss project requirements with the client.",
          date: "2025-02-27",
          category: "Meetings",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Database Backup",
          description: "Perform a backup of the production database.",
          date: "2025-02-23",
          category: "Maintenance",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Bug Fixing",
          description: "Fix the reported bugs in the payment module.",
          date: "2025-02-28",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Write Documentation",
          description: "Update the API documentation.",
          date: "2025-02-26",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Server Maintenance",
          description: "Perform maintenance on the staging server.",
          date: "2025-02-25",
          category: "Maintenance",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Security Audit",
          description: "Check for vulnerabilities in the system.",
          date: "2025-02-27",
          category: "Security",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Frontend Optimization",
          description: "Improve page speed by optimizing assets.",
          date: "2025-02-24",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "User Feedback Analysis",
          description: "Review and document user feedback.",
          date: "2025-02-26",
          category: "Analysis",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Product Demo",
          description: "Prepare for the upcoming product demonstration.",
          date: "2025-02-28",
          category: "Presentation",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Deploy New Feature",
          description: "Deploy the new feature to the production server.",
          date: "2025-02-25",
          category: "Deployment",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Test API Endpoints",
          description: "Run tests on the new API endpoints.",
          date: "2025-02-26",
          category: "Testing",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Code Refactoring",
          description: "Refactor the legacy code for better performance.",
          date: "2025-02-27",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    }
  ];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
];

export const  setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage = () =>{
  const employees=  JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
return{employees, admin}
  

}


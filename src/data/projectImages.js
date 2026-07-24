const defaultImage = "/projects/default.png";

export const projectImages = {

  "GoBus-Transportation-System": "/projects/gobus-home.png",

  "Expense-Manager": "/projects/expense-manager.png",

  "my-portfolio": "/projects/my-portfolio.png",

  "Tharaa-App-Backend": "/projects/tharaa-app-backend.png",

  "my-job-website-": "/projects/my-job-website.png",

  "Help-Me-Communicate-website-": "/projects/help-me-communicate.png",

  "HalalFood-backend": "/projects/halalfood-backend.png",

  "Green-Asir-platform-": "/projects/green-asir-platform.png",

  "cadeverse-backend": "/projects/codeverse-backend.png",

  "Nursess-Assistant-Backend-": "/projects/nursess-assistant-backend.png",

  "ecommerce-project-": "/projects/ecommerce-project.png",

  "yara-portfolio": "/projects/yara-portfolio.jpg",

  "my-reminder-backend": "/projects/my-reminder-backend.png",

  "ExamFlow": "/projects/examflow.png",

  "Rahtak-Delivery-System": "/projects/rahtak-delivery-system.png",

};

export const getProjectImage = (projectName = "") => {

    const key = Object.keys(projectImages).find(
        name => name.toLowerCase() === projectName.toLowerCase()
    );

    return key ? projectImages[key] : defaultImage;

};
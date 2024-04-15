import cards from "../../../assets/image/cards.png";
import todolist from "../../../assets/image/todo.png";
import socialNetwork from "../../../assets/image/sn.png";
import incatgram from "../../../assets/image/inctag.png";
import { StackTitle } from "./project-stack";

export type ProjectType = {
    id: string;
    title: string;
    projectType: string;
    projectStack: StackTitle[];
    goals: string;
    stack: string;
    problems: string;
    final: string;
    githubLink: string;
    deployLink: string;
    githubSecondLink?: string;
    deploySecondLink?: string;
    coverLogo: string;
    descriptionShort: string;
    descriptionLong: string;
    color: string;
};

export const projects: ProjectType[] = [
    {
        id: "1",
        title: "Inctagram (on development stage)",
        projectType: "Educational internship",
        goals:
            "It is a platform for posting photos (a kind of Instagram).\n" +
            "The platform allows users to post photos to their feed, subscribe to other users' pages, buy a paid account, leave comments, give likes and exchange private messages",
        stack:
            "To enhance the project's functionality and maintainability, a robust stack of technologies was employed:\n" +
            " Typescript: Leveraged for static typing, enhancing code clarity and catching errors early in development.\n" +
            "Next.js: Utilized for server-side rendering and routing, optimizing performance and SEO.\n" +
            "Redux Toolkit: Employed for efficient state management, providing a centralized store for application data.\n" +
            "Apollo: Integrated for GraphQL client-side queries and mutations, facilitating data fetching and manipulation.\n" +
            "GraphQL: Implemented for querying and manipulating data from the server, ensuring efficient data transfer between client and server.\n" +
            "Kubernetes: Deployed for container orchestration, enabling scalability and efficient management of containerized applications.\n" +
            "Jenkins: Utilized for continuous integration and continuous deployment (CI/CD), automating the build and deployment processes.\n" +
            "Socket.IO: Integrated for real-time bidirectional communication between client and server, facilitating live updates and notifications.\n" +
            "React-hook-form: Employed for managing and validating form input in React components, enhancing user experience and data integrity.\n" +
            "Stripe: Integrated for secure online payment processing, enabling seamless transactions within the application.\n" +
            "Paypal: Utilized as an alternative payment processing solution, offering flexibility and convenience for users.",
        problems:
            "On the project, the following main issues arose:\n" +
            "\n" +
            "Photo editor development: I had to tackle complex tasks in developing a functional and user-friendly photo editor. This included ensuring smooth operation with images of different sizes and formats, as well as implementing various editing tools.\n" +
            "\n" +
            "Working with new technologies such as Docker, Jenkins, GraphQL: I had to familiarize myself with new technologies such as Docker, Jenkins, and GraphQL. This required additional time for learning and implementation, especially if I had no prior experience with them. There were challenges in configuring and integrating these technologies into the existing project infrastructure.",
        final: "From my experience on the project, I've gained valuable insights and skills. Working successfully within a team environment, I've learned numerous new technologies. I encountered challenges in developing functionalities, but overcoming these hurdles has significantly contributed to my growth as a developer. Overall, I've expanded my knowledge base and become more proficient in various aspects of software development.",
        githubLink: "https://github.com/sonyhero/project-inctagram",
        githubSecondLink: "https://github.com/sonyhero/admin-project-inctagram",
        deployLink: "https://project-inctagram.vercel.app",
        deploySecondLink: "https://admin-project-inctagram.vercel.app",
        coverLogo: incatgram,
        projectStack: [
            "Typescript",
            "Next.js",
            "Redux Toolkit",
            "Apollo",
            "GraphQL",
            "Kubernetes",
            "Jenkins",
            "Jira",
            "Confluence",
            "Socket.IO",
            "React-hook-form",
            "Stripe",
            "Paypal",
        ],
        descriptionShort:
            "The platform allows users to post photos to their feed, subscribe to other users' pages, buy a paid account, leave comments, give likes and exchange private messages",
        descriptionLong:
            "The platform allows users to post photos to their feed, subscribe to other users' pages, buy a paid account, leave comments, give likes and exchange private messages",
        color: "#06d6a0",
    },
    {
        id: "2",
        title: "Cards",
        projectType: "Learning Project",
        goals:
            "This project was a team effort and involved a variety of tasks:\n" +
            "1. We developed a full authentication loop that allows users to create accounts, reset passwords via email tokens, and log in securely.\n" +
            "2. We developed a user-friendly interface to display data in the form of tables including cards, decks, and users. These tables are equipped with search, sorting and pagination functionality to make working with the data more efficient.\n" +
            "3. We implemented an interval repetition system for card training. This process allows users to effectively memorise and repeat information based on specific time intervals.\n" +
            "4. We created modal windows with support for adding images and other additional functionality that enriches the user experience.",
        stack: "Application is built using modern technology and tools to provide the best user experience:\n 1. State Management: To effectively manage the state of the application, we chose Redux, which provides a reliable repository for data and simplifies data management. The Redux Toolkit (RTK) is a set of tools that makes working with Redux more convenient by providing tools to reduce redundant code and improve performance.\n 2. Server Queries: We use RTK Query, integrated with the Redux Toolkit, to handle server queries. RTK Query simplifies fetching data from the server by automatically generating selectors and mutations based on the data schema, reducing code complexity.\n 3. UI Library: We chose Radix UI to create the user interface of our application. It provides great flexibility and performance, allowing us to quickly develop interactive and colourful UI components.\n 4. Form Management: For form management and validation, we use React Hook Form. This library provides a convenient way to create and manage forms in React applications, and allows for easy validation, keeping user inputs secure.\n 5. Animation: To improve the user experience and create smooth animations in the app, we integrated Framer Motion.",
        problems:
            "The most challenging part of our project was working with polymorphic components and creating universal modal windows. This required developing components that could be adapted and used in different parts of the application, providing high flexibility and code reuse.\n" +
            "In addition, we faced the need to effectively assign tasks to the team. This involved assigning tasks to each member, keeping track of their current status, and coordinating efforts to realise the various functionalities of the project. This was an important aspect of our work to ensure effective implementation of the developed solutions.",
        final:
            "This project was a valuable experience that taught me how to work in a team and take responsibility for the entire development process. An important lesson was to realise the importance of doing research before starting development, especially when using libraries that are new to me.\n" +
            "During the course of the project I learnt a lot about code structure and organisation. We invested a lot of time refactoring and optimising the code to ensure it was clean and readable. The result is a frontend application that is ready to use, with a beautiful user interface and smooth animations. The app interface encourages active exploration of the map library by other users, making the product more attractive and useful to users.",
        githubLink: "https://github.com/alik-avizha/Learning-Cards",
        deployLink: "https://flaskcards-project.vercel.app/",
        coverLogo: cards,
        projectStack: ["Typescript", "React", "Redux Toolkit", "React-hook-form", "Storybook", "Framer Motion"],
        descriptionShort:
            "Cards is a collaboratively developed frontend application, one of the key features of which is an interval repetition method that allows you to memorise information quickly and efficiently.",
        descriptionLong:
            "Cards is a collaboratively developed frontend application with a full-fledged authentication system. One of the key features in Cards is the interval repetition method, which allows you to memorise information quickly and efficiently. In the application, users can create sets of cards, fill them with text or images, learn, and share sets with other users, creating an opportunity for collaborative learning and exploration.",
        color: "#8c61ff",
    },
    {
        id: "3",
        title: "Social network",
        projectType: "Learning Project",
        goals: "The main goal of this project was to master React, including working with class components, higher-order components (e.g. connect), component lifecycle management, implementing routing and the classic state management approach using Redux.",
        stack: "The goal of the project was to learn the React library and state management tools, which allowed us to develop a relatively small web application. The core tools included React and Redux, but I also implemented additional technologies to extend functionality. I used the Redux-Thunk middleware module to handle asynchronous operations, Redux-Form to create a login form, and the Axios library to execute REST API requests. In addition, to enrich the functionality of the project, I implemented a WebSocket connection mechanism that allows users to exchange messages and interact in real-time in a chat room. ",
        problems:
            "The main challenge I faced in the project is the presence of outdated libraries. This makes the task of updating the application more difficult than rewriting it from scratch. This situation results in a number of other challenges, such as more complex lifecycle management of class components compared to functional components, unnecessary layers associated with the use of containerised components, and the presence of redundant boilerplate code in the classic Redux approach to state management, to name a few.",
        final: "Nevertheless, addressing these challenges builds programming skills, allows you to abstract components more clearly, isolate code, and simplify interfaces.",
        githubLink: "https://github.com/alik-avizha/my_social_network",
        deployLink: "https://alik-avizha.github.io/my_social_network",
        coverLogo: socialNetwork,
        projectStack: ["Typescript", "React", "Redux", "Redux Thunk", "Material UI"],
        descriptionShort:
            "An online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections.",
        descriptionLong:
            "An online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections.",
        color: "#7d93bd",
    },

    {
        id: "4",
        title: "Todolist",
        projectType: "Learning Project",
        goals: "Built using React framework, Material UI library and Redux. The project is a robust and stable web application. Unit tests and screenshot tests have been implemented to ensure quality and reliability. The application offers a wide range of functionality including authentication, CRUD operations to manage task lists and tasks. Unit tests and screenshot tests play a key role in ensuring that the implemented features work correctly and in preventing visual regression issues, making them an integral part of frontend projects.",
        stack: "To gain a deeper understanding of state management in the project, a classic Redux implementation was first chosen. I actively used snapshot tests to ensure that the visual elements of the frontend were consistent with the expected results. In addition, the project used the Storybook tool, which provided a convenient way to test and document the various frontend components and states. These approaches contributed not only to the correct operation of the application, but also provided ease in testing and documenting it.",
        problems:
            "During the development of the project, I encountered some difficulties in reconciling the states of the reducers responsible for tasks and task lists. This raised concerns about the correctness of each reducer. In addition, I had to address the issue of excessive rendering in React when using hooks.",
        final: "This project primarily enriched my experience in managing complex global state in an application using Redux and Redux Toolkit. It emphasised the importance of using unit tests in the development process of complex applications with state. While working on the project, I learnt the skills of connecting to REST APIs, handling and debugging network requests. I also familiarised myself with Material UI and Formik libraries, which expanded my toolkit for creating user interfaces and working with forms.",
        githubLink: "https://github.com/alik-avizha/Happy-Life-Checklist",
        deployLink: "https://alik-avizha.github.io/Happy-Life-Checklist",
        coverLogo: todolist,
        projectStack: [
            "Typescript",
            "React",
            "Redux Thunk",
            "Storybook",
            "Snapshots",
            "Unit-tests",
            "Material UI",
            "Formik",
        ],
        descriptionShort:
            "Todolist is a simple and easy-to-use task management app to help you organise your day. It allows you to create a to-do list, helping you to be more organised and efficient.",
        descriptionLong:
            "Todolist is a simple and easy-to-use task management app to help you organise your day. It allows you to create a to-do list, helping you to be more organised and efficient.",
        color: "#9dafa9",
    },
];

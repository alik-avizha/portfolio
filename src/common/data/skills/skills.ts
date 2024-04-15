import { SkillsNameType } from "../../components/svgSelector/SvgSelector";

type SkillsType = {
    title: string;
    svg: SkillsNameType;
    description: string;
};

export const skills: SkillsType[] = [
    {
        title: "JavaScript",
        svg: `JS`,
        description: "Promises, Eventloop, this, Closures, Recursion, Prototypes, Scope",
    },
    {
        title: "React",
        svg: `REACT`,
        description: "Hooks, Class components, React-router-dom v6",
    },
    {
        title: "Next.js",
        svg: `NEXT_JS`,
        description: "Client and Server Rendering",
    },
    {
        title: "Redux",
        svg: `REDUX`,
        description: "Reducers, Thunks, Store Structure, Redux Toolkit, RTK Query",
    },

    {
        title: "Typescript",
        svg: `TS`,
        description: "Primitive types, Objects, Generics, Union types",
    },
    {
        title: "Storybook",
        svg: `STORYBOOK`,
        description: "Decorators, Addons, Stories",
    },
    {
        title: "Unit tests",
        svg: `TEST`,
        description: "TDD, Jest unit/snapshot integration testing",
    },
    {
        title: "SCSS",
        svg: `SCSS`,
        description: "Mixins, variables",
    },
    {
        title: "HTML",
        svg: `HTML`,
        description: "Semantics, Layout, Styling, Responsive",
    },
    {
        title: "CSS",
        svg: `CSS`,
        description: "Responsive & adaptive design. Flexbox, grid, positioning",
    },
    {
        title: "Payment systems",
        svg: `PAYMENT`,
        description: "Working with payment systems Stripe and Paypal",
    },
    {
        title: "GraphQL",
        svg: `GRAPHQL`,
        description: "GraphQl API, Apollo Client, GraphQl Subscriptions, Codegen",
    },
];

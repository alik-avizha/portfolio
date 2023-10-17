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
        title: "Git",
        svg: `GIT`,
        description: "Semantic commits, all basic operations & resolving merge conflicts",
    },
];

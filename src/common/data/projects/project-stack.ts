import redux from "../../../assets/icons/redux.svg";
import storybook from "../../../assets/icons/storybook.svg";
import material from "../../../assets/icons/material.svg";
import framer from "../../../assets/icons/framer-motion.svg";
import formik from "../../../assets/icons/formik.svg";
import reacthookform from "../../../assets/icons/react-hook-form.svg";
import jest from "../../../assets/icons/jest.svg";
import reactLogo from "../../../assets/icons/react.svg";
import typescript from "../../../assets/icons/typescript.svg";
import javascript from "../../../assets/icons/javascript.svg";
import rest from "../../../assets/icons/rest.svg";
import git from "../../../assets/icons/git.svg";
import html from "../../../assets/icons/html.svg";
import css from "../../../assets/icons/css.svg";
import next from "../../../assets/icons/next.svg";
import apollo from "../../../assets/icons/apollo.svg";
import graphQl from "../../../assets/icons/graphql.svg";
import kubernetes from "../../../assets/icons/kubernetes.svg";
import jenkins from "../../../assets/icons/jenkins.svg";
import jira from "../../../assets/icons/jira.svg";
import confluence from "../../../assets/icons/confluence.svg";
import socket from "../../../assets/icons/socket-io.svg";
import stripe from "../../../assets/icons/stripe.svg";
import paypal from "../../../assets/icons/paypal.svg";

export type StackTitle = (typeof projectStack)[number]["title"];

export const projectStack = [
    { title: "Typescript" as const, img: typescript },
    { title: "JavaScript" as const, img: javascript },
    { title: "Rest API" as const, img: rest },
    { title: "Jest" as const, img: jest },
    { title: "Git" as const, img: git },
    { title: "React" as const, img: reactLogo },
    { title: "Redux" as const, img: redux },
    { title: "Redux Thunk" as const, img: redux },
    { title: "Redux Toolkit" as const, img: redux },
    { title: "Material UI" as const, img: material },
    { title: "Storybook" as const, img: storybook },
    { title: "Unit-tests" as const, img: jest },
    { title: "Snapshots" as const, img: jest },
    { title: "Framer Motion" as const, img: framer },
    { title: "Formik" as const, img: formik },
    { title: "React-hook-form" as const, img: reacthookform },
    { title: "HTML" as const, img: html },
    { title: "CSS" as const, img: css },
    { title: "Next.js" as const, img: next },
    { title: "Apollo" as const, img: apollo },
    { title: "GraphQL" as const, img: graphQl },
    { title: "Kubernetes" as const, img: kubernetes },
    { title: "Jenkins" as const, img: jenkins },
    { title: "Jira" as const, img: jira },
    { title: "Confluence" as const, img: confluence },
    { title: "Socket.IO" as const, img: socket },
    { title: "Stripe" as const, img: stripe },
    { title: "Paypal" as const, img: paypal },
];

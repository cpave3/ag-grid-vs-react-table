import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AgGrid } from './ag-grid';


export default {
    title: "Barebones/AgGrid",
    component: AgGrid,
    argTypes: {},
} as ComponentMeta<typeof AgGrid>;

const Template: ComponentStory<typeof AgGrid> = () => <AgGrid />;
export const Barebones = Template.bind({});
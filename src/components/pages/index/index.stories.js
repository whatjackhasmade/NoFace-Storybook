import React from "react";
import { array } from "@storybook/addon-knobs";
import Index from "./index";

import knobData from "./index.knobs.json";

export const indexWrapper = () => <Index />;

export default {
	component: Index,
	title: `Pages/Reset Password`
};

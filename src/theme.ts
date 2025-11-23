import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
    primaryColor: 'teal'
});
export const vars = themeToVars(theme);

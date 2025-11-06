import { colorsTuple, createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
    primaryColor: 'teal',
    colors: {
        colourCamPrimaryColor: colorsTuple('#FF3B30')
    }
});
export const vars = themeToVars(theme);

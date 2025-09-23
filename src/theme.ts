import { colorsTuple, createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
    primaryColor: 'violet',
    colors: {
        colourCamPrimaryColor: colorsTuple('#FF3B30')
    }
});
export const vars = themeToVars(theme);

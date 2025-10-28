import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { Page } from './Page';

export default function Home() {
    const date = new Date()

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? 'light' : 'dark'}>
            <Page />
        </MantineProvider>
    )
}
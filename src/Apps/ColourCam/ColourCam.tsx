import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import { Anchor, AspectRatio, Center, Container, Image, MantineProvider, Paper, Stack, Text, Title } from '@mantine/core';
import { theme } from '../../theme';
import { Carousel } from '@mantine/carousel';

export default function ColourCam() {
    const date = new Date()
    const forceDarkMode = false
    const darkMode = date.getHours() >= 5 && date.getHours() <= 17

    const images = [
        'one',
        'one_a',
        'two',
        'three',
        'four',
        'five',
        'six'
    ].map((image) => {
        return (
            <Carousel.Slide>
                <Paper radius={'lg'} withBorder>
                    <Image radius={'lg'} src={`/colourcam/${image}.png`} />
                </Paper>
            </Carousel.Slide>
        )
    })

    return (
        <MantineProvider theme={theme} forceColorScheme={forceDarkMode ? 'dark' : darkMode ? 'light' : 'dark'}>
            <Container my={'xl'}>
                <Stack>
                    <Center>
                        <AspectRatio ratio={1 / 1} w={60}>
                            <Paper radius={'lg'} withBorder>
                                <Image radius={'lg'} src={'/colourcam/tinted.png'} />
                            </Paper>
                        </AspectRatio>
                    </Center>
                    <Anchor href='https://twitter.com/antique_codes' ta={'center'} target='_blank'>
                        @antique_codes
                    </Anchor>
                    <Title order={1} ta={'center'}>
                        ColourCam
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Capture colour information from the world around you in real-time
                    </Text>
                    <Carousel align={'start'} slideGap={'md'} slideSize={{ base: '100%', sm: '33.333333%', lg: '25%' }}>
                        {images}
                    </Carousel>
                </Stack>
            </Container>
        </MantineProvider>
    )
}
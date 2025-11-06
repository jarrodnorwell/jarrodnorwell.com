import '@mantine/core/styles.css';
import {
    ActionIcon,
    AspectRatio,
    Avatar,
    AvatarGroup,
    Container,
    Group,
    MantineProvider,
    Paper,
    Space,
    Stack, Text, Title, Image
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { theme } from '../../theme';
import { IconBrandGithub, IconCode } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';

export default function Loca() {
    const date = new Date()
    const os = useOs()

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? 'light' : 'dark'}>
            <Container my={'xl'} size={'xl'}>
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title>
                                ColourCam
                            </Title>
                            <Text c={'dimmed'}>
                                Capture colour information from the environment around you in real-time
                            </Text>
                        </Stack>
                    </Group>
                    <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                        {
                            [
                                { color: 'gray', icon: <IconBrandGithub />, link: 'https://github.com/jarrodnorwell/colourcam' }
                            ].map((element) => {
                                return (
                                    <ActionIcon color={element.color} component={'a'} href={element.link} variant={'transparent'}>
                                        {element.icon}
                                    </ActionIcon>
                                )
                            })
                        }
                    </Group>
                </Group>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack align={'center'}>
                    <AvatarGroup spacing={'lg'}>
                        <Avatar radius={'xl'} size={'lg'}>
                            <IconCode />
                        </Avatar>
                        <Avatar radius={'xl'} size={'lg'} src={'/colourcam/colourcam_circle.png'} />
                    </AvatarGroup>
                    <Title order={2}>
                        About
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        ColourCam is a small, camera-based app allowing users to capture colour information from the world, this colour can then be saved to the Photo Library as a background image, saved as a HEX or RGBA value or used in a fluid gradient with 8 or more colours which can then be saved to the Photo Library as a background image
                    </Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Carousel align={'start'} slideGap={'lg'} slideSize={['android', 'ios'].includes(os) ? '50%' : '25%'} withIndicators>
                    {
                        [
                            'ss_one', 'ss_two', 'ss_three', 'ss_four'
                        ].map((image) => (
                            <Carousel.Slide>
                                <Paper radius={['android', 'ios'].includes(os) ? 'lg' : 'xl'} style={{ overflow: 'hidden' }} withBorder>
                                    <AspectRatio ratio={9 / 19.5}>
                                        <Image src={`/colourcam/${image}.heic`} fit='contain' loading='lazy' />
                                    </AspectRatio>
                                </Paper>
                            </Carousel.Slide>
                        ))
                    }
                </Carousel>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        Privacy Policy
                    </Title>
                    <Text c={'dimmed'}>
                        ColourCam uses camera for the functionality of the app. Absolutely no images are saved when extracting colours. Absolutely no information is shared with or sold to other companies or entities
                    </Text>
                </Stack>
            </Container>
        </MantineProvider>
    )
}
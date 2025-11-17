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
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconCode, IconMail } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';

export default function Folium() {
    const date = new Date()
    const os = useOs()

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? 'light' : 'dark'}>
            <Container my={'xl'} size={'xl'}>
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title>
                                Folium
                            </Title>
                            <Text c={'dimmed'}>
                                Multi-system emulation in the palm of your hands
                            </Text>
                        </Stack>
                    </Group>
                    <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                        {
                            [
                                { color: 'gray', icon: <IconBrandGithub />, link: 'https://github.com/jarrodnorwell/folium' }
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
                        <Avatar radius={'xl'} size={'lg'} src={'/folium/folium_circle.png'} />
                    </AvatarGroup>
                    <Title order={2}>
                        About
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Folium is a beautifully designed, high performing multi-system emulation app bringing retro gaming to Apple devices
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
                                        <Image src={`/folium/${image}.heic`} fit='contain' />
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
                        Folium uses camera and a username provided by the user for the functionality of the app. Absolutely no images are saved off-device. Absolutely no information is shared with or sold to other companies or entities
                    </Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        Support
                    </Title>
                    <Text c={'dimmed'}>
                        Got a question, want to request a feature or submit an issue? Reach out using the buttons below
                    </Text>
                    <Group>
                        {
                            [
                                { color: 'gray', icon: <IconBrandGithub />, link: 'https://github.com/jarrodnorwell/folium' },
                                { color: 'yellow', icon: <IconMail />, link: 'mailto:official.antique@gmail.com?subject=Folium' },
                                { color: 'red', icon: <IconBrandReddit />, link: 'https://reddit.com/u/antique_codes' },
                                { color: 'blue', icon: <IconBrandTwitter />, link: 'https://twitter.com/antique_codes' }
                            ].map((element) => {
                                return (
                                    <ActionIcon color={element.color} component={'a'} href={element.link} variant={'transparent'}>
                                        {element.icon}
                                    </ActionIcon>
                                )
                            })
                        }
                    </Group>
                </Stack>
            </Container>
        </MantineProvider>
    )
}
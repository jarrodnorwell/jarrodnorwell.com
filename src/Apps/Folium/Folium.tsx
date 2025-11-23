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
    Stack, Text, Title, Image,
    Card,
    Grid,
    VisuallyHidden,
    Tooltip,
    Badge
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { theme } from '../../theme';
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconCode, IconExternalLink, IconMail } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';

interface CoreProp {
    colour: string, core: string
    console: string, link?: string
    beta: boolean
}

interface ExtensionProp {
    core: string, console: string
    extensions: Array<string>
}

export function CoreCard(prop: CoreProp) {
    function ActionIconOrText() {
        if (prop.link) {
            return (
                <Tooltip label={`https://github.com/folium-app/${prop.link}`}>
                    <ActionIcon component={'a'} href={`https://github.com/folium-app/${prop.link}`} target={'_blank'} variant={'transparent'}>
                        <IconExternalLink />
                    </ActionIcon>
                </Tooltip>
            )
        } else {
            return (
                <VisuallyHidden />
            )
        }
    }

    return (
        <Card padding={'lg'} radius={'lg'} withBorder>
            <Group justify={'space-between'}>
                <Group>
                    <Title order={3}>
                        {prop.core}
                    </Title>
                    <Text c={'dimmed'}>
                        {prop.console}
                    </Text>
                </Group>
                <ActionIconOrText />
            </Group>
        </Card>
    )
}

export function ExtensionCard(prop: ExtensionProp) {
    return (
        <Card padding={'lg'} radius={'lg'} withBorder>
            <Stack>
                <Group>
                    <Title order={3}>
                        {prop.core}
                    </Title>
                    <Text c={'dimmed'}>
                        {prop.console}
                    </Text>
                </Group>
                <Grid justify={'flex-start'}>
                    {
                        prop.extensions.map((element) => {
                            return (
                                <Grid.Col span={'content'}>
                                    <Badge size={'lg'}>
                                        {element}
                                    </Badge>
                                </Grid.Col>
                            )
                        })
                    }
                </Grid>
            </Stack>
        </Card>
    )
}

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
                        Supported Cores
                    </Title>
                    <Grid>
                        {
                            [
                                { colour: 'yellow', core: 'Cytrus', console: '3DS', link: 'cytrus', beta: false },
                                { colour: 'purple', core: 'Grape', console: 'DS', link: 'grape', beta: false },
                                { colour: 'red', core: 'Guava', console: 'NES', link: 'guava', beta: false },
                                { colour: 'green', core: 'Kiwi', console: 'GB', link: 'kiwi', beta: false },
                                { colour: 'orange', core: 'Mandarine', console: 'PS1', link: 'mandarine', beta: false },
                                { colour: 'yellow', core: 'Mango', console: 'SNES', link: 'mango', beta: true },
                                { colour: 'purple', core: 'Plum', console: 'GENESIS', link: 'plum', beta: true },
                                { colour: 'red', core: 'Tomato', console: 'GBA', link: 'tomato', beta: false }
                            ].map((element) => {
                                return (
                                    <Grid.Col span={{ base: 12, lg: 3 }}>
                                        <CoreCard {...element} />
                                    </Grid.Col>
                                )
                            })
                        }
                    </Grid>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        Supported Extensions
                    </Title>
                    <Grid>
                        {
                            [
                                { core: 'Cytrus', console: '3DS', extensions: ['3ds', 'app', 'cci', 'cia', 'cxi'] },
                                { core: 'Grape', console: 'DS', extensions: ['ds', 'srl'] },
                                { core: 'Guava', console: 'NES', extensions: ['nes'] },
                                { core: 'Kiwi', console: 'GB', extensions: ['gb', 'gbc'] },
                                { core: 'Mandarine', console: 'PS1', extensions: ['chd', 'cue', 'exe', 'img', 'iso'] },
                                { core: 'Mango', console: 'SNES', extensions: ['sfc', 'smc'] },
                                { core: 'Plum', console: 'GENESIS', extensions: ['gen', 'md', 'smd'] },
                                { core: 'Tomato', console: 'GBA', extensions: ['gba'] }
                            ].map((element) => {
                                return (
                                    <Grid.Col span={{ base: 12, lg: 4 }}>
                                        <ExtensionCard {...element} />
                                    </Grid.Col>
                                )
                            })
                        }
                    </Grid>
                </Stack>

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
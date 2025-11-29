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
    Badge,
    Button
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconCode, IconMail } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';

interface CoreProp {
    colour: string, core: string
    console: string, link?: string
    beta: boolean
}

interface ExtensionProp {
    span: number
    core: string, console: string
    extensions: Array<string>
}

export function CoreCard(prop: CoreProp) {
    function ActionIconOrText() {
        if (prop.link) {
            return (
                <Tooltip label={`https://github.com/folium-app/${prop.link}`}>
                    <ActionIcon color={'gray'} component={'a'} href={`https://github.com/folium-app/${prop.link}`} target={'_blank'} variant={'transparent'}>
                        <IconBrandGithub />
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
                <Title order={3}>
                    {prop.core}
                </Title>
                <Group>
                    <Title c={'dimmed'} fw={'normal'} order={3}>
                        {prop.console}
                    </Title>
                    <ActionIconOrText />
                </Group>
            </Group>
        </Card>
    )
}

export function ExtensionCard(prop: ExtensionProp) {
    return (
        <Card padding={'lg'} radius={'lg'} withBorder>
            <Stack>
                <Title order={3}>
                    {prop.core}
                </Title>
                <Grid>
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
        <MantineProvider theme={{ primaryColor: 'green' }} forceColorScheme={date.getHours() >= 6 && date.getHours() <= 19 ? 'light' : 'dark'}>
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

                    <Space />

                    <Group>
                        <Button color={'blue'} component={'a'} href={'https://apps.apple.com/us/app/folium/id6498623389'} radius={'xl'} target={'_blank'}>
                            App Store
                        </Button>
                        <Button color={'blue'} component={'a'} href={'https://testflight.apple.com/join/pRGScBR7'} radius={'xl'} target={'_blank'}>
                            TestFlight
                        </Button>
                        <Button color={'gray'} component={'a'} href={'https://github.com/folium-app/Folium/releases/download/1.35/Folium.ipa'} radius={'xl'} target={'_blank'}>
                            Sideload
                        </Button>
                    </Group>
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
                                { span: 4, core: 'Cytrus', console: '3DS', extensions: ['3ds', 'app', 'cci', 'cia', 'cxi'] },
                                { span: 4, core: 'Grape', console: 'DS', extensions: ['ds', 'srl'] },
                                { span: 4, core: 'Guava', console: 'NES', extensions: ['nes'] },
                                { span: 4, core: 'Kiwi', console: 'GB', extensions: ['gb', 'gbc'] },
                                { span: 4, core: 'Mandarine', console: 'PS1', extensions: ['chd', 'cue', 'exe', 'img', 'iso'] },
                                { span: 4, core: 'Mango', console: 'SNES', extensions: ['sfc', 'smc'] },
                                { span: 4, core: 'Plum', console: 'GENESIS', extensions: ['gen', 'md', 'smd'] },
                                { span: 4, core: 'Tomato', console: 'GBA', extensions: ['gba'] }
                            ].map((element) => {
                                return (
                                    <Grid.Col span={{ base: 12, lg: element.span }}>
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
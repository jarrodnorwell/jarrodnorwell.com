import { ActionIcon, Container, Group, MantineProvider, Space, Stack, Text, Title, Tooltip, Avatar, AvatarGroup, Grid, AspectRatio, Image, Popover } from "@mantine/core";
import { theme } from "../../theme";

import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import { useOs } from "@mantine/hooks";
import { IconBrandDiscord, IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconCodeDots, IconDeviceGamepad3, IconDeviceMobileRotated, IconHandClick, IconInfoCircle, IconMail, IconMicrophone, IconVolume } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

export default function Folium() {
    return (
        <MantineProvider theme={{ ...theme, primaryColor: 'indigo' }}>
            <Container py={'xl'} size={'xl'}>
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title order={1}>Folium</Title>
                            <Text c={'dimmed'}>Generations of gaming in the palm of your hands</Text>
                        </Stack>
                    </Group>
                    <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                        {
                            [
                                {
                                    color: 'dimmed',
                                    icon: <IconBrandGithub />,
                                    link: 'https://github.com/folium-app/folium',
                                    title: 'Browse the Source Code'
                                }
                            ].map((element) => {
                                return (
                                    <Tooltip label={
                                        <Stack gap={0}>
                                            <Text>{element.title}</Text>
                                            <Text c={'dimmed'} size={'sm'}>{element.link.replace('https://', '').replace('mailto:', '')}</Text>
                                        </Stack>
                                    }>
                                        <ActionIcon color={element.color} component={'a'} href={element.link} variant={'transparent'}>{element.icon}</ActionIcon>
                                    </Tooltip>
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
                            <IconCodeDots />
                        </Avatar>
                        <Avatar radius={'xl'} size={'lg'}>
                            <IconDeviceGamepad3 />
                        </Avatar>
                        <Avatar radius={'xl'} size={'lg'} src={'/folium/circle.png'} />
                    </AvatarGroup>
                    <Title order={1}>About</Title>
                    <Text c={'dimmed'} ta={'center'}>Folium is a beautifully designed, high performing multi-system emulation app bringing retro console and handheld gaming to Apple devices</Text>
                </Stack>
                <Space h={'xl'} />
                <Space h={'xl'} />
                <Grid px={'md'} gap={'xl'}>
                    {
                        [
                            {
                                color: '#4A5FA8',
                                company: 'bandai',
                                description: 'Introducing Durian, the new, fully featured WonderSwan emulation system',
                                extensions: [
                                    'ws',
                                    'wsc'
                                ],
                                features: [
                                    <IconDeviceGamepad3 />,
                                    <IconVolume />,
                                    <IconDeviceMobileRotated />
                                ],
                                images: [
                                    'games',
                                    'emulation'
                                ],
                                system: 'ws'
                            },
                            {
                                color: '#C89B5A',
                                company: 'coleco',
                                description: 'Introducing Cherry, the new, fully featured ColecoVision emulation system',
                                extensions: [
                                    'col',
                                    'rom'
                                ],
                                features: [
                                    <IconDeviceGamepad3 />,
                                    <IconVolume />,
                                    <IconDeviceMobileRotated />

                                ],
                                images: [
                                    'games',
                                    'emulation'

                                ],
                                system: 'cv'
                            },
                            {
                                color: '#5B8CC9',
                                company: 'nintendo',
                                description: 'Introducing Cytrus, the fully featured 3DS and New 3DS emulation system',
                                extensions: [
                                    '3ds',
                                    'cci',
                                    'cxi'
                                ],
                                features: [
                                    <IconDeviceGamepad3 />,
                                    <IconMicrophone />,
                                    <IconVolume />,
                                    <IconDeviceMobileRotated />,
                                    <IconHandClick />
                                ],
                                images: [
                                    'games',
                                    'emulation'
                                ],
                                system: '3ds'
                            },
                            {
                                color: '#4A7DB8',
                                company: 'nintendo',
                                description: 'Introducing Grape, the fully featured DS and DSi emulation system',
                                extensions: [
                                    'dsi',
                                    'nds'
                                ],
                                features: [
                                    <IconDeviceGamepad3 />,
                                    <IconMicrophone />,
                                    <IconVolume />,
                                    <IconDeviceMobileRotated />,
                                    <IconHandClick />

                                ],
                                images: [
                                    'games',
                                    'emulation'

                                ],
                                system: 'ds'
                            },
                            {
                                color: '#71805A',
                                company: 'nintendo',
                                description: 'Introducing Kiwi, the new, fully featured Game Boy and Game Boy Color emulation system',
                                extensions: [
                                    'gb',
                                    'gbc'
                                ],
                                features: [
                                    <IconDeviceGamepad3 />,
                                    <IconVolume />,
                                    <IconDeviceMobileRotated />

                                ],
                                images: [
                                    'games',
                                    'emulation',
                                    'emulation_two'

                                ],
                                system: 'gb'
                            },
                            {
                                color: '#8C6CC1',
                                company: 'nintendo',
                                description: 'Introducing Tomato, the new, fully featured Game Boy Advance emulation system',
                                extensions: [
                                    'gba'
                                ],
                                features: [
                                    <IconDeviceGamepad3 />,
                                    <IconVolume />,
                                    <IconDeviceMobileRotated />

                                ],
                                images: [
                                    'games',
                                    'emulation'

                                ],
                                system: 'gba'
                            },
                            {
                                color: '#9A3E32',
                                company: 'nintendo',
                                description: 'Introducing Mango, the new, fully featured Nintendo Entertainment System emulation system',
                                extensions: [
                                    'nes'
                                ],
                                features: [
                                    <IconDeviceGamepad3 />,
                                    <IconVolume />,
                                    <IconDeviceMobileRotated />

                                ],
                                images: [
                                    'games',
                                    'emulation'

                                ],
                                system: 'nes'
                            },
                            {
                                color: '#6B5B95',
                                company: 'nintendo',
                                description: 'Introducing Lychee, the new, fully featured Super Nintendo Entertainment System emulation system',
                                extensions: [
                                    'sfc',
                                    'smc'
                                ],
                                features: [
                                    <IconDeviceGamepad3 />,
                                    <IconVolume />,
                                    <IconDeviceMobileRotated />

                                ],
                                images: [
                                    'games',
                                    'emulation'

                                ],
                                system: 'snes'
                            },
                            {
                                color: '#D52B2B',
                                company: 'sega',
                                description: 'Introducing Plum, the new, fully featured Genesis and Mega Drive emulation system',
                                extensions: [
                                    'gen',
                                    'md'
                                ],
                                features: [
                                    <IconDeviceGamepad3 />,
                                    <IconVolume />,
                                    <IconDeviceMobileRotated />

                                ],
                                images: [
                                    'games',
                                    'emulation'

                                ],
                                system: 'gen'
                            },
                            {
                                color: '#2E4A7D',
                                company: 'sony',
                                description: 'Introducing Mandarine, the new, fully featured PlayStation 1 emulation system',
                                extensions: [
                                    'bin',
                                    'cue'
                                ],
                                features: [
                                    <IconDeviceGamepad3 />,
                                    <IconVolume />,
                                    <IconDeviceMobileRotated />
                                ],
                                images: [
                                    'games',
                                    'emulation'
                                ],
                                system: 'ps1'
                            }
                        ].map((element) => (
                            <Grid.Col span={{ base: 12, md: 3 }}>
                                <Stack>
                                    <Carousel slideGap={'lg'} withIndicators>
                                        {
                                            element.images.map((image) => (
                                                <Carousel.Slide>
                                                    <AspectRatio ratio={460 / 960}>
                                                        <Image src={`/folium/${element.company}/${element.system}/${image}.png`} fit={'contain'} />
                                                    </AspectRatio>
                                                </Carousel.Slide>
                                            ))
                                        }
                                    </Carousel>
                                    <Group justify={'space-between'}>
                                        <Group gap={'xs'}>
                                            <Title order={2}>{element.company.toUpperCase()}</Title>
                                            <Title c={element.color} order={2}>{element.system.toUpperCase()}</Title>
                                        </Group>
                                        <Popover radius={'xl'} shadow={'xl'}>
                                            <Popover.Target>
                                                <ActionIcon color={element.color} variant={'transparent'}>
                                                    <IconInfoCircle />
                                                </ActionIcon>
                                            </Popover.Target>
                                            <Popover.Dropdown>
                                                {`Supported extensions are: ${element.extensions.join(', ').toUpperCase()}`}
                                            </Popover.Dropdown>
                                        </Popover>
                                    </Group>
                                    <Grid justify={'flex-start'}>
                                        {
                                            element.features.map((feature) => (
                                                <Grid.Col span={{ base: 2 }}>
                                                    <ActionIcon color={element.color} variant={'transparent'}>{feature}</ActionIcon>
                                                </Grid.Col>
                                            ))
                                        }
                                    </Grid>
                                    <Text c={'dimmed'}>{element.description}</Text>
                                </Stack>
                            </Grid.Col>
                        ))
                    }
                </Grid>
                <Space h={'xl'} />
                <Space h={'xl'} />
                <Stack>
                    <Title order={1}>Privacy Policy</Title>
                    <Text c={'dimmed'}>Folium requires several permissions for the functionality of the app, namely Bluetooth, Camera, Local Network, Microphone and Motion. Absolutely no information is shared with or sold to other companies or entities</Text>
                </Stack>
                <Space h={'xl'} />
                <Space h={'xl'} />
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title order={1}>Support</Title>
                            <Text c={'dimmed'}>Got a question, want to request a feature or submit an issue? Reach out using the buttons below</Text>
                        </Stack>
                    </Group>
                    <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                        {
                            [
                                {
                                    color: 'indigo',
                                    icon: <IconBrandDiscord />,
                                    link: 'https://discord.gg/skA8ENHNsm',
                                    title: 'Discord'
                                },
                                {
                                    color: 'dimmed',
                                    icon: <IconBrandGithub />,
                                    link: 'https://github.com/folium-app/folium/issues',
                                    title: 'Create an Issue'
                                },
                                {
                                    color: 'yellow',
                                    icon: <IconMail />,
                                    link: 'mailto:official.antique@gmail.com?subject=Folium',
                                    title: 'Send an Email'
                                },
                                {
                                    color: 'red',
                                    icon: <IconBrandReddit />,
                                    link: 'https://reddit.com/u/antique_codes',
                                    title: 'Reddit'
                                },
                                {
                                    color: 'blue',
                                    icon: <IconBrandTwitter />,
                                    link: 'https://twitter.com/antique_codes',
                                    title: 'Twitter'
                                }
                            ].map((element) => {
                                return (
                                    <Tooltip label={
                                        <Stack gap={0}>
                                            <Text>{element.title}</Text>
                                            <Text c={'dimmed'} size={'sm'}>{element.link.replace('https://', '').replace('mailto:', '')}</Text>
                                        </Stack>
                                    }>
                                        <ActionIcon color={element.color} component={'a'} href={element.link} variant={'transparent'}>{element.icon}</ActionIcon>
                                    </Tooltip>
                                )
                            })
                        }
                    </Group>
                </Group>
            </Container>
        </MantineProvider>
    )
}



/*import '@mantine/core/styles.css';
import {
    ActionIcon,
    Avatar,
    AvatarGroup,
    Container,
    Group,
    MantineProvider,
    Space,
    Text,
    Title,
    Card,
    Grid,
    VisuallyHidden,
    Tooltip,
    Badge,
    SimpleGrid,
    Button,
    AspectRatio,
    Paper,
    Image,
    Stack,
    Center
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { IconBrandDiscord, IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconClock, IconCheck, IconCode, IconMail } from '@tabler/icons-react';
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
                <Title size={'lg'}>
                    {prop.core}
                </Title>
                <Group>
                    <Title c={'dimmed'} fw={'normal'} size={'lg'}>
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
                <Title size={'lg'}>
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
    const os = useOs()

    return (
        <MantineProvider theme={{ primaryColor: 'indigo' }} forceColorScheme={'light'}>
            <Container my={'xl'} size={'xl'}>
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title>
                                Folium
                            </Title>
                            <Text c={'dimmed'}>
                                Generations of gaming in the palm of your hands
                            </Text>
                        </Stack>
                    </Group>
                    <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                        {
                            [
                                { color: 'dimmed', icon: <IconBrandGithub />, link: 'https://github.com/folium-app/folium' }
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
                        <Avatar radius={'xl'} size={'lg'} src={'/folium/circle.png'} />
                    </AvatarGroup>
                    <Title size={'lg'}>
                        About
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Folium is a beautifully designed, high performing multi-system emulation app bringing retro gaming to Apple devices
                    </Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={'xl'}>
                    <Stack align={'center'}>
                        <AvatarGroup spacing={'lg'}>
                            <Avatar color={'orange'} radius={'xl'} size={'lg'}>
                                <IconClock />
                            </Avatar>
                        </AvatarGroup>
                        <Title size={'lg'}>
                            Release Status
                        </Title>
                        <Text c={'dimmed'} ta={'center'}>
                            In-Development
                        </Text>

                        <Space />

                        <Group>
                            <Button color={'blue'} radius={'xl'} variant={'light'} disabled>
                                App Store
                            </Button>
                        </Group>
                    </Stack>

                    <Stack align={'center'}>
                        <AvatarGroup spacing={'lg'}>
                            <Avatar color={'green'} radius={'xl'} size={'lg'}>
                                <IconCheck />
                            </Avatar>
                        </AvatarGroup>
                        <Title size={'lg'}>
                            Release Status
                        </Title>
                        <Text c={'dimmed'} ta={'center'}>
                            Distributed
                        </Text>

                        <Space />

                        <Group>
                            <Button color={'blue'} component={'a'} href={'https://testflight.apple.com/join/Nxfyd62y'} radius={'xl'} target={'_blank'} variant={'light'}>
                                TestFlight
                            </Button>
                        </Group>
                    </Stack>
                </SimpleGrid>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Center>
                    <Button color={'yellow'} component={'a'} href={'https://www.icloud.com/notes/017lgq0s5s-blp0-A6H0vegpg'} radius={'xl'} target={'_blank'} variant={'light'}>
                        Changelog
                    </Button>
                </Center>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Carousel slideGap={'lg'} slideSize={['android', 'ios'].includes(os) ? '50%' : '25%'} withIndicators>
                        {
                            [
                                'ss_one', 'ss_two', 'ss_three', 'ss_four', 'ss_five', 'ss_six', 'ss_seven', 'ss_eight'
                            ].map((image) => (
                                <Carousel.Slide>
                                    <Paper radius={['android', 'ios'].includes(os) ? 'lg' : 'xl'} style={{ overflow: 'hidden' }} withBorder>
                                        <AspectRatio ratio={9 / 19.5}>
                                            <Image src={`/folium/${image}.png`} fit='contain' />
                                        </AspectRatio>
                                    </Paper>
                                </Carousel.Slide>
                            ))
                        }
                    </Carousel>
                    <Text c={'dimmed'}>Screenshots are a work in progress</Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Carousel slideGap={'lg'} slideSize={['android', 'ios'].includes(os) ? '100%' : '50%'} withIndicators>
                        {
                            [
                                'ss_one_ls', 'ss_two_ls', 'ss_three_ls', 'ss_four_ls'
                            ].map((image) => (
                                <Carousel.Slide>
                                    <Paper radius={['android', 'ios'].includes(os) ? 'lg' : 'xl'} style={{ overflow: 'hidden' }} withBorder>
                                        <AspectRatio ratio={19.5 / 9}>
                                            <Image src={`/folium/${image}.png`} fit='contain' />
                                        </AspectRatio>
                                    </Paper>
                                </Carousel.Slide>
                            ))
                        }
                    </Carousel>
                    <Text c={'dimmed'}>Screenshots are a work in progress</Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title size={'lg'}>
                        Privacy Policy
                    </Title>
                    <Text c={'dimmed'}>
                        Folium uses Bluetooth, Camera, Local Network and Motion for the functionality of the app. Absolutely no information is shared with or sold to other companies or entities
                    </Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title size={'lg'}>
                        Support
                    </Title>
                    <Text c={'dimmed'}>
                        Got a question, want to request a feature or submit an issue? Reach out using the buttons below
                    </Text>
                    <Group>
                        {
                            [
                                { color: 'indigo', icon: <IconBrandDiscord />, link: 'https://discord.gg/skA8ENHNsm' },
                                { color: 'dimmed', icon: <IconBrandGithub />, link: 'https://github.com/folium-app/folium' },
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
}*/
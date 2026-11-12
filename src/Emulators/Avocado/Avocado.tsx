import { ActionIcon, AspectRatio, Avatar, AvatarGroup, Button, Card, Container, Grid, Group, Image, List, MantineProvider, Space, Stack, Text, Title } from '@mantine/core';


import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconDeviceDesktop, IconDeviceMobile, IconDeviceGamepad2, IconMail } from '@tabler/icons-react';

import { theme } from '../../theme';

export namespace COMMON {
    export namespace ROOT {
        export class HEADER {
            static readonly TITLE: string = 'Avocado'
            static readonly SUBTITLE: string = 'PlayStation 1 emulator'
        }

        export class ABOUT {
            static readonly TITLE: string = 'About'
            static readonly SUBTITLE: string = 'Avocado is a revival of the original PlayStation 1 emulator by Jakub Czekański, Avocado'
        }
    }
}

export default function Avocado() {
    return (
        <MantineProvider theme={{ ...theme, primaryColor: 'green' }} forceColorScheme={'light'}>
            <Container py={'xl'} size={'xl'}>
                <Group>
                    <Stack>
                        <Title order={1}>{COMMON.ROOT.HEADER.TITLE}</Title>
                        <Text c={'dimmed'}>{COMMON.ROOT.HEADER.SUBTITLE}</Text>
                    </Stack>
                </Group>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack align={'center'}>
                    <AvatarGroup spacing={'lg'}>
                        <Avatar radius={'xl'} size={'lg'}>
                            <IconDeviceDesktop />
                        </Avatar>
                        <Avatar radius={'xl'} size={'lg'}>
                            <IconDeviceMobile />
                        </Avatar>
                        <Avatar color={'green'} radius={'xl'} size={'lg'}>
                            <IconDeviceGamepad2 />
                        </Avatar>
                    </AvatarGroup>

                    <Title order={1}>{COMMON.ROOT.ABOUT.TITLE}</Title>
                    <Text c={'dimmed'} ta={'center'}>{COMMON.ROOT.ABOUT.SUBTITLE}</Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <AspectRatio ratio={4 / 3}>
                            <Card padding={0} radius={'lg'} shadow={'md'} withBorder>
                                <Image src={'/avocado/atlantis.png'} />
                            </Card>
                        </AspectRatio>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <AspectRatio ratio={4 / 3}>
                            <Card padding={0} radius={'lg'} shadow={'md'} withBorder>
                                <Image src={'/avocado/chickenrun.png'} />
                            </Card>
                        </AspectRatio>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <AspectRatio ratio={4 / 3}>
                            <Card padding={0} radius={'lg'} shadow={'md'} withBorder>
                                <Image src={'/avocado/crashbandicoot.png'} />
                            </Card>
                        </AspectRatio>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <AspectRatio ratio={4 / 3}>
                            <Card padding={0} radius={'lg'} shadow={'md'} withBorder>
                                <Image src={'/avocado/granturismo2.png'} />
                            </Card>
                        </AspectRatio>
                    </Grid.Col>
                </Grid>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack id={'changelog'}>
                    <Title order={2}>
                        Changelog
                    </Title>
                    <Text c={'dimmed'}>
                        Avocado by Jarrod Norwell is, at its core, Avocado by Jakub Czekański
                    </Text>

                    <Title order={3}>
                        Release Hamachi
                    </Title>
                    <List>
                        <List.Item>Added
                            <List>
                                <List.Item>
                                    Added a new font, refreshing the appearance in the simplest way
                                </List.Item>
                                <List.Item>
                                    Added a new AppImage to Releases for Linux users on x86_64
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item>Changed
                            <List>
                                <List.Item>
                                    Changed the data and user directories to their original locations
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item>Fixed
                            <List>
                                <List.Item>
                                    Fixed a build issue with Windows related to the old lerp code
                                </List.Item>
                            </List>
                        </List.Item>
                    </List>

                    <Space />

                    <Group>
                        <Button color={'dark'} component={'a'} href={'https://github.com/jarrodnorwell/avocado/releases'} radius={'xl'} target={'_blank'} variant={'filled'}>
                            GitHub Releases
                        </Button>
                    </Group>
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
                                { color: 'dimmed', icon: <IconBrandGithub />, link: 'https://github.com/jarrodnorwell/avocado' },
                                { color: 'yellow', icon: <IconMail />, link: 'mailto:official.antique@gmail.com?subject=Avocado' },
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

                    <Space h={'xl'} />

                    <Text c={'dimmed'} ta={'center'}>© {new Date().getFullYear()} Jarrod Norwell</Text>
                </Stack>
            </Container>
        </MantineProvider>
    )
}
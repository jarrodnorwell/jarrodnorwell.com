import '@mantine/core/styles.css';
import { ActionIcon, Avatar, AvatarGroup, Container, Grid, Group, MantineProvider, Space, Stack, Text, Title } from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { IconBrandGithub, IconBrandReddit, IconBrandTwitch, IconBrandTwitter, IconDeviceGamepad2, IconCode } from '@tabler/icons-react';
import { theme } from '../theme';

import { LanguageCard } from './LanguageCard';
import { ProjectCard } from './ProjectCard';
import { WorkCard } from './WorkCard';

export default function Home() {
    const date = new Date()

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 6 && date.getHours() <= 19 ? 'light' : 'dark'}>
            <Container my={'xl'} size={'xl'}>
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title>
                                Jarrod Norwell
                            </Title>
                            <Text c={'dimmed'}>
                                Human. Gamer. Software Developer.
                            </Text>
                        </Stack>
                    </Group>
                    <Group>
                        <Stack>
                            <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                                {
                                    [
                                        { color: 'gray', icon: <IconBrandGithub />, link: 'https://github.com/jarrodnorwell' },
                                        { color: 'red', icon: <IconBrandReddit />, link: 'https://reddit.com/u/antique_codes' },
                                        { color: 'indigo', icon: <IconBrandTwitch />, link: 'https://twitch.tv/antique_codes' },
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
                            <Text c={'dimmed'} ta={'right'}>
                                Source Code. Social Media.
                            </Text>
                        </Stack>
                    </Group>
                </Group>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack align={'center'}>
                    <AvatarGroup spacing={'lg'}>
                        <Avatar radius={'xl'} size={'lg'}>
                            <IconDeviceGamepad2 />
                        </Avatar>
                        <Avatar radius={'xl'} size={'lg'}>
                            <IconCode />
                        </Avatar>
                        <Avatar radius={'xl'} size={'lg'} src={'/jarrodnorwell.png'} />
                    </AvatarGroup>
                    <Title order={2}>
                        About
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Jarrod Norwell is a Software Developer from Australia with over 15 years of experience spanning across over 8 languages
                    </Text>
                    <Text c={'dimmed'} ta={'center'}>
                        Jarrod is best known for being the first to port Citra and Yuzu to Apple devices, Folium, a multi-system emulator for iPad and iPhone and Sudachi, a Nintendo Switch emulator for Android, Linux, macOS and Windows
                    </Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        Languages
                    </Title>
                    <Grid>
                        {
                            [
                                { language: 'C/++', yoe: 6 },
                                { language: 'C#', yoe: 2 },
                                { language: 'CSS', yoe: 3 },
                                { language: 'HTML', yoe: 3 },
                                { language: 'JavaScript', yoe: 3 },
                                { language: 'Kotlin', yoe: 5 },
                                { language: 'Objective-C', yoe: 12 },
                                { language: 'Python', yoe: 8 },
                                { language: 'Swift', yoe: 10 },
                                { language: 'TypeScript', yoe: 3 }
                            ].map((element) => {
                                return (
                                    <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
                                        <LanguageCard language={element.language} yoe={element.yoe} />
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
                        Projects
                    </Title>
                    <Grid>
                        {
                            [
                                { image: 'colourcam/colourcam_square', impressions: '59K', detailsLink: '/colourcam', link: 'https://apps.apple.com/au/app/colourcam/id6745690307', project: 'ColourCam', price: '', subtitle: 'Capture real world colour information' },
                                { image: 'folium/folium_square', impressions: '46M', detailsLink: '/folium', link: 'https://apps.apple.com/au/app/folium/id6498623389', project: 'Folium', price: '$2.99', subtitle: 'Multi-system emulation in the palm of your hands' },
                                { image: 'fuely/fuely_square', impressions: '10K', detailsLink: undefined, link: 'https://apps.apple.com/au/app/fuely/id6753147277', project: 'Fuely', price: '', subtitle: 'Up-to-date fuel prices around Western Australia' },
                                { image: 'lavvy/lavvy_square', impressions: 'Unknown', detailsLink: '/lavvy', link: undefined, project: 'Lavvy', price: '$0.99', subtitle: 'Browse a map of public toilets all across Australia' },
                                { image: 'loca/loca_square', impressions: 'Unknown', detailsLink: '/loca', link: undefined, project: 'Loca', price: '', subtitle: 'Browse a map of your friends' },
                                { image: 'keyr/keyr_square', impressions: '12K', detailsLink: '/keyr', link: 'https://apps.apple.com/au/app/keyr/id6755037755', project: 'Keyr', price: '', subtitle: 'Beautifully designed, simple 2-factor authentication' }
                            ].map((element) => {
                                return (
                                    <Grid.Col span={{ base: 12, lg: 6 }}>
                                        <ProjectCard image={element.image} impressions={element.impressions} detailsLink={element.detailsLink} link={element.link} project={element.project} price={element.price} subtitle={element.subtitle} />
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
                        Work Experience
                    </Title>
                    <Title order={3}>
                        Active
                    </Title>
                    <Text c={'dimmed'}>
                        Below is a list of experiences where the project is still being developed
                    </Text>
                    <Grid>
                        {
                            [
                                { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkupaWwXqoIPNdq5fWsXKpPeEMP5vdpDLbqw&s', link: undefined, company: 'Blueprint Health & Fitness', role: 'Software Developer', subtitle: 'Personal trainer in the Brisbane CBD, Australia' },
                                { image: 'https://texts.com/icon.png', link: 'https://texts.com', company: 'Texts', role: 'Software Developer', subtitle: 'All of your messages. In one inbox' }
                            ].map((element) => {
                                return (
                                    <Grid.Col span={{ base: 12, lg: 6 }}>
                                        <WorkCard image={element.image} link={element.link} company={element.company} role={element.role} subtitle={element.subtitle} />
                                    </Grid.Col>
                                )
                            })
                        }
                    </Grid>

                    <Space h={'xl'} />

                    <Title order={3}>
                        Inactive
                    </Title>
                    <Text c={'dimmed'}>
                        Below is a list of experiences where the project is no longer being developed
                    </Text>
                    <Grid>
                        {
                            [
                                { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gAb4f-DQLxUQH5XMGLozpvdj9OPbe3BCYg&s', link: undefined, company: 'Australian Karaoke', role: 'Software Developer', subtitle: 'iPad controlled pro-karaoke systems' },
                                { image: '/we/orderthai.png', link: 'https://www.honeycombsoftwares.com/portfolio/orderthai', company: 'Order Thai', role: 'Software Developer', subtitle: 'Restaurant ordering system for dine-in and takeaway' },
                                { image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/51/ba/d0/51bad02a-2ec2-1303-ef01-b0dcf0dc28bf/source/256x256bb.jpg', link: undefined, company: 'Wopadu', role: 'Designer', subtitle: 'Restaurant ordering system for dine-in and takeaway' }
                            ].map((element) => {
                                return (
                                    <Grid.Col span={{ base: 12, lg: 6 }}>
                                        <WorkCard image={element.image} link={element.link} company={element.company} role={element.role} subtitle={element.subtitle} />
                                    </Grid.Col>
                                )
                            })
                        }
                    </Grid>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack align={'center'}>
                    <Title order={2} ta={'center'}>
                        Under Development
                    </Title>
                    <Text c={'dimmed'}>
                        Please note, this website is always being worked on. Check back occasionally to see new changes
                    </Text>
                </Stack>
            </Container>
        </MantineProvider>
    )
}
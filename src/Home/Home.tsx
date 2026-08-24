import '@mantine/core/styles.css';
import { ActionIcon, Anchor, Container, Flex, Group, MantineProvider, Stack, Text, Title, Tooltip, Avatar, SimpleGrid, Space } from '@mantine/core';
import { theme } from '../theme';
import { IconBrandGithub, IconBrandReddit, IconBrandTwitch, IconBrandTwitter } from '@tabler/icons-react';
import { useOs } from '@mantine/hooks';


/*
C/C++
CSS
HTML
JavaScript
Kotlin
Objective-C
Python
Swift
TypeScript

<Container mt={'xl'} size={'xl'}>
                <Group>
                    <Stack>
                        <Title order={1} ta={'left'}>Jarrod Norwell</Title>
                        <Text c={'dimmed'} ta={'left'}>Software Developer</Text>
                    </Stack>
                </Group>
            </Container>

            <Container size={'xl'}>
                <Center>
                    <Stack>
                        <AvatarGroup>
                            {
                                [
                                    { colour: 'violet.1', icon: <IconDeviceGamepad2 /> },
                                    { colour: 'gray.1', icon: <IconCode /> }
                                ].map((element) => (
                                    <Avatar color={element.colour} size={'lg'}>
                                        {element.icon}
                                    </Avatar>
                                ))
                            }
                            <Avatar size={'lg'} src={'/jarrodnorwell.png'} />
                        </AvatarGroup>
                    </Stack>
                </Center>
            </Container>

            <Space h={'lg'} />

            <Container size={'xl'}>
                <Stack>
                    <Title order={1} ta={'center'}>About</Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Jarrod is a 28-year-old, self-taught software developer based in Perth, Western Australia, with more than 16 years of programming experience spanning approximately 9 programming languages
                    </Text>
                </Stack>
            </Container>

            <Container size={'xxl'}>

            </Container>

<Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                                {
                                    [
                                        { colour: 'gray', icon: <IconBrandGithub />, url: 'github.com/jarrodnorwell' },
                                        { colour: 'red', icon: <IconBrandReddit />, url: 'reddit.com/u/antique_codes' },
                                        { colour: 'violet', icon: <IconBrandTwitch />, url: 'twitch.tv/antique_codes' },
                                        { colour: 'blue', icon: <IconBrandTwitter />, url: 'twitter.com/antique_codes' }
                                    ].map((element) => (
                                        <Tooltip label={element.url}>
                                            <ActionIcon color={element.colour} component={'a'} href={`https://${element.url}`} variant={'transparent'}>
                                                {element.icon}
                                            </ActionIcon>
                                        </Tooltip>
                                    ))
                                }
                            </Group>
*/
export default function Home() {
    return (
        <MantineProvider theme={theme} forceColorScheme={'light'}>
            <Container h={'100dvh'}>
                <Flex align={'center'} direction={'column'} h={'100%'} justify={'center'} w={'100%'}>
                    <Group>
                        {
                            [
                                { colour: 'gray', icon: <IconBrandGithub />, title: 'GitHub', url: 'github.com/jarrodnorwell' },
                                { colour: 'red', icon: <IconBrandReddit />, title: 'Reddit', url: 'reddit.com/u/antique_codes' },
                                { colour: 'violet', icon: <IconBrandTwitch />, title: 'Twitch', url: 'twitch.tv/antique_codes' },
                                { colour: 'blue', icon: <IconBrandTwitter />, title: 'Twitter', url: 'twitter.com/antique_codes' }
                            ].map((element) => (
                                <Tooltip label={
                                    <Stack gap={0}>
                                        <Text>{element.title}</Text>
                                        <Text c={'gray'} size={'sm'}>{element.url}</Text>
                                    </Stack>
                                }>
                                    <ActionIcon color={element.colour} component={'a'} href={`https://${element.url}`} size={'md'} variant={'transparent'}>
                                        {element.icon}
                                    </ActionIcon>
                                </Tooltip>
                            ))
                        }
                    </Group>

                    <Space h={'xl'} />

                    <Group>
                        <Stack>
                            <Title order={1} ta={'center'}>Jarrod Norwell</Title>
                            <Text c={'gray'} ta={'center'}>
                                Jarrod is a 28-year-old, self-taught software developer based in Perth, Western Australia, with more than 16 years of programming experience spanning approximately 9 programming languages
                            </Text>
                        </Stack>
                    </Group>

                    <Space h={'xl'} />

                    <SimpleGrid cols={['android', 'ios'].includes(useOs()) ? 4 : 8}>
                        {
                            [
                                { icon: 'alune/alune_square', title: 'Alune', url: 'jarrodnorwell.com/apps/alune' },
                                { icon: 'colourcam/colourcam_square', title: 'ColourCam', url: 'jarrodnorwell.com/apps/colourcam' },
                                { icon: 'folium/folium_square', title: 'Folium', url: 'jarrodnorwell.com/apps/folium' },
                                { icon: 'fuely/fuely_square', title: 'Fuely', url: 'jarrodnorwell.com/apps/fuely' },
                                { icon: 'lavvy/lavvy_square', title: 'Lavvy', url: 'jarrodnorwell.com/apps/lavvy' },
                                { icon: 'loca/loca_square', title: 'Loca', url: 'jarrodnorwell.com/apps/loca' },
                                { icon: 'keyr/keyr_square', title: 'Keyr', url: 'jarrodnorwell.com/apps/keyr' },
                                { icon: 'vion/vion_square', title: 'Vion', url: 'jarrodnorwell.com/apps/vion' }
                            ].map((element) => (
                                <Tooltip label={
                                    <Stack gap={0}>
                                        <Text>{element.title}</Text>
                                        <Text c={'gray'} size={'sm'}>{element.url}</Text>
                                    </Stack>
                                }>
                                    <Anchor href={`https://${element.url}`} target='_self' underline={'never'}>
                                        <Avatar radius={'md'} size={'md'} src={`/${element.icon}.png`} />
                                    </Anchor>
                                </Tooltip>
                            ))
                        }
                    </SimpleGrid>

                    <Space h={'xl'} />

                    <Group>
                        <Stack>
                            <Title order={2}>Previous Companies</Title>

                            <Group justify={'center'}>
                                {
                                    [
                                        { colour: 'violet', icon: 'we/australiankaraoke', initials: 'AK', radius: 'md', title: 'Australian Karaoke', url: 'australiankaraoke.com.au' },
                                        { colour: 'blue', icon: undefined, initials: 'BHF', radius: 'md', title: 'Blueprint Health & Fitness', url: undefined },
                                        { colour: 'blue', icon: 'we/texts', initials: undefined, radius: 0, title: 'Texts', url: 'texts.com' },
                                        { colour: 'orange', icon: undefined, initials: 'UV', radius: 'md', title: 'UseVerb', url: 'useverb.com' },
                                        { colour: 'green', icon: undefined, initials: 'W', radius: 'md', title: 'Wopadu', url: undefined }
                                    ].map((element) => (
                                        <Tooltip label={
                                            <Stack gap={0}>
                                                <Text>{element.title}</Text>
                                                <Text c={'gray'} size={'sm'}>{element.url}</Text>
                                            </Stack>
                                        }>
                                            <Anchor href={element.url ? undefined : `https://${element.url}`} target={element.url ? undefined : '_self'} underline={'never'}>
                                                <Avatar color={element.colour} radius={element.radius} size={'md'} src={`/${element.icon}.png`}>{element.initials}</Avatar>
                                            </Anchor>
                                        </Tooltip>
                                    ))
                                }
                            </Group>
                        </Stack>
                    </Group>

                    <Space h={'xl'} />
                    <Text c={'gray.3'} ta={'center'}>
                        Please note, this website is always being worked on. Check back occasionally to see new changes
                    </Text>
                </Flex>
            </Container>


            {/*
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
                                { image: 'alune/alune_square', impressions: 'Unknown', detailsLink: '/apps/alune', link: undefined, project: 'Alune', price: '', subtitle: 'PlayStation 2 emulation in the palm of your hands' },
                                { image: 'colourcam/colourcam_square', impressions: '73K', detailsLink: '/apps/colourcam', link: 'https://apps.apple.com/us/app/colourcam/id6745690307', project: 'ColourCam', price: '', subtitle: 'Capture snapshots of colour from the environment' },
                                { image: 'folium/folium_square', impressions: '49.2M', detailsLink: '/apps/folium', link: 'https://apps.apple.com/us/app/folium/id6498623389', project: 'Folium', price: '$2.99', subtitle: 'Generations of gaming in the palm of your hands' },
                                { image: 'fuely/fuely_square', impressions: '23.1K', detailsLink: undefined, link: 'https://apps.apple.com/us/app/fuely/id6753147277', project: 'Fuely', price: '', subtitle: 'Up-to-date fuel prices around Western Australia' },
                                { image: 'lavvy/lavvy_square', impressions: '9K', detailsLink: '/apps/lavvy', link: 'https://apps.apple.com/us/app/lavvy/id6758861444', project: 'Lavvy', price: '', subtitle: 'Browse a map of public toilets all across Australia' },
                                { image: 'loca/loca_square', impressions: 'Unknown', detailsLink: '/apps/loca', link: undefined, project: 'Loca', price: '', subtitle: 'Browse a map of your friends' },
                                { image: 'keyr/keyr_square', impressions: '22.2K', detailsLink: '/apps/keyr', link: 'https://apps.apple.com/us/app/keyr/id6755037755', project: 'Keyr', price: '', subtitle: 'Beautifully designed, simple 2-factor authentication' },
                                { image: 'vion/vion_square', impressions: '13.8K', detailsLink: '/apps/vion', link: 'https://apps.apple.com/us/app/vion/id6770823399', project: 'Vion', price: '$2.99', subtitle: 'PlayStation Vita emulation in the palm of your hands' },
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
                        Projects (Cont.)
                    </Title>
                    <Grid>
                        {
                            [
                                { image: 'paintbrush/paintbrush_square', impressions: 'Unknown', detailsLink: '/apps/paintbrush', link: undefined, project: 'Paintbrush', price: '', subtitle: 'Revival of the original simple paint program for macOS' }
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
                                { image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d6/ca/56/d6ca56d6-88f3-2d9b-9afb-3825533a7d16/Placeholder.mill/400x400bb-75.webp', link: 'https://www.blueprinthealthandfitness.com.au', company: 'Blueprint Health & Fitness', role: 'Software Developer', subtitle: 'Personal trainer in the Brisbane CBD, Australia' },
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
            */}
        </MantineProvider>
    )
}
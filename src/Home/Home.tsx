import '@mantine/core/styles.css';
import { ActionIcon, Container, Flex, Group, MantineProvider, Stack, Text, Title, Avatar, SimpleGrid, Space, Menu, Tooltip, Button, Popover, Anchor } from '@mantine/core';
import { theme } from '../theme';
import { IconBrandCpp, IconBrandCss3, IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandKotlin, IconBrandPython, IconBrandReddit, IconBrandSwift, IconBrandTwitch, IconBrandTwitter, IconBrandTypescript, IconPlus, IconQuestionMark } from '@tabler/icons-react';
import { useDisclosure, useOs } from '@mantine/hooks';

interface CompanyProp {
    colour: string
    icon?: string
    initials?: string
    radius: string | number
    title: string
    url?: string

    details?: string
}

function CompanyElement(prop: CompanyProp) {
    if (prop.details) {
        return (
            <Tooltip label={
                <Stack gap={0}>
                    <Text>{prop.title}</Text>
                    <Text c={'gray'} size={'sm'}>{prop.url}</Text>
                </Stack>
            }>
                <Anchor underline={'never'}>
                    <Popover radius={'xl'} shadow={'md'} withArrow>
                        <Popover.Target>
                            <Avatar color={prop.colour} radius={prop.radius} size={'md'} src={`/${prop.icon}.png`}>{prop.initials}</Avatar>
                        </Popover.Target>

                        <Popover.Dropdown>
                            <Text size={'sm'}>{prop.details}</Text>
                        </Popover.Dropdown>
                    </Popover>
                </Anchor>
            </Tooltip>
        )
    } else {
        return (
            <Tooltip label={
                <Stack gap={0}>
                    <Text>{prop.title}</Text>
                    <Text c={'gray'} size={'sm'}>{prop.url}</Text>
                </Stack>
            }>
                <Anchor href={prop.url ? `https://${prop.url}` : undefined} target={prop.url ? '_self' : undefined} underline={'never'}>
                    <Avatar color={prop.colour} radius={prop.radius} size={'md'} src={`/${prop.icon}.png`}>{prop.initials}</Avatar>
                </Anchor>
            </Tooltip>
        )
    }
}

export default function Home() {
    const [opened, { toggle }] = useDisclosure(true)

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

                    <Stack>
                        <Title order={1} ta={'center'}>Jarrod Norwell</Title>
                        <Text c={'gray'} ta={'center'}>
                            Jarrod is a 28-year-old, self-taught software developer based in Perth, Western Australia, with more than 16 years of programming experience spanning approximately 9 programming languages
                        </Text>
                    </Stack>

                    <Space h={'xl'} />

                    <Stack>
                        <SimpleGrid cols={['android', 'ios'].includes(useOs()) ? 4 : 9}>
                            {
                                [
                                    { icon: 'alune/alune_square', title: 'Alune', url: 'jarrodnorwell.com/apps/alune' },
                                    { icon: 'colourcam/colourcam_square', title: 'ColourCam', url: 'jarrodnorwell.com/apps/colourcam' },
                                    { icon: 'folium/small_square', title: 'Folium', url: 'jarrodnorwell.com/apps/folium' },
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

                            <Menu>
                                <Menu.Target>
                                    <Anchor>
                                        <Avatar color={'gray'} radius={'md'} size={'md'}>
                                            <IconPlus />
                                        </Avatar>
                                    </Anchor>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Sub>
                                        <Menu.Sub.Target>
                                            <Menu.Sub.Item>Emulation</Menu.Sub.Item>
                                        </Menu.Sub.Target>

                                        <Menu.Sub.Dropdown>
                                            <Menu.Sub>
                                                <Menu.Sub.Target>
                                                    <Menu.Sub.Item>Nintendo</Menu.Sub.Item>
                                                </Menu.Sub.Target>

                                                <Menu.Sub.Dropdown>
                                                    <Menu.Item>Nintendo 3DS</Menu.Item>
                                                    <Menu.Item>Nintendo Switch</Menu.Item>
                                                </Menu.Sub.Dropdown>
                                            </Menu.Sub>

                                            <Menu.Sub>
                                                <Menu.Sub.Target>
                                                    <Menu.Sub.Item>PlayStation</Menu.Sub.Item>
                                                </Menu.Sub.Target>

                                                <Menu.Sub.Dropdown>
                                                    <Menu.Item>PlayStation 1</Menu.Item>
                                                </Menu.Sub.Dropdown>
                                            </Menu.Sub>
                                        </Menu.Sub.Dropdown>
                                    </Menu.Sub>
                                </Menu.Dropdown>
                            </Menu>
                        </SimpleGrid>
                    </Stack>

                    <Space h={'xl'} />

                    <Button color={'gray'} onClick={toggle} radius={'xl'} size={'md'} variant={'light'}>{opened ? 'Show More' : 'Show Less'}</Button>

                    <div hidden={opened}>
                        <Space h={'xl'} />

                        <Stack>
                            <Title order={2} ta={'center'}>Previous Companies</Title>

                            <Group justify={'center'}>
                                {
                                    [
                                        { colour: 'violet', icon: undefined, initials: 'AK', radius: 'md', title: 'Australian Karaoke', url: 'australiankaraoke.com.au', details: undefined },
                                        { colour: 'blue', icon: undefined, initials: 'BHF', radius: 'md', title: 'Blueprint Health & Fitness', url: undefined, details: 'Owner turned out to be a convicted paedophile' },
                                        { colour: 'pink', icon: undefined, initials: 'OT', radius: 'md', title: 'OrderThai', url: 'https://honeycombsoftwares.com/portfolio/orderthai', details: 'Closed down due to a compromised server resulting in data loss' },
                                        { colour: 'blue', icon: 'companies/texts', initials: undefined, radius: 0, title: 'Texts', url: 'texts.com', details: undefined },
                                        { colour: 'orange', icon: undefined, initials: 'UV', radius: 'md', title: 'UseVerb', url: 'useverb.com', details: undefined },
                                        { colour: 'green', icon: undefined, initials: 'W', radius: 'md', title: 'Wopadu', url: undefined, details: 'Closed down to a limited userbase' }
                                    ].map((element) => (
                                        <CompanyElement {...element} />
                                    ))
                                }
                            </Group>
                        </Stack>

                        <Space h={'xl'} />

                        <Stack>
                            <Title order={2} ta={'center'}>Programming Languages</Title>

                            <SimpleGrid cols={['android', 'ios'].includes(useOs()) ? 5 : 10}>
                                {
                                    [
                                        { colour: 'gray', icon: <IconBrandCpp />, radius: 'md', title: 'C++', years: '7' },
                                        { colour: 'blue', icon: <IconBrandCss3 />, radius: 'md', title: 'CSS', years: '4' },
                                        { colour: 'orange', icon: <IconBrandHtml5 />, radius: 'md', title: 'HTML', years: '4' },
                                        { colour: 'yellow', icon: <IconBrandJavascript />, radius: 'md', title: 'JavaScript', years: '4' },
                                        { colour: 'violet', icon: <IconBrandKotlin />, radius: 'md', title: 'Kotlin', years: '6' },
                                        { colour: 'gray', icon: <IconQuestionMark />, radius: 'md', title: 'Objective-C', years: '13' },
                                        { colour: 'gray', icon: <IconBrandPython />, radius: 'md', title: 'Python', years: '9' },
                                        { colour: 'orange', icon: <IconBrandSwift />, radius: 'md', title: 'Swift', years: '11' },
                                        { colour: 'blue', icon: <IconBrandTypescript />, radius: 'md', title: 'TypeScript', years: '4' }
                                    ].map((element) => (
                                        <Tooltip label={
                                            <Stack gap={0}>
                                                <Text>{element.title}</Text>
                                                <Text c={'gray'} size={'sm'}>{`${element.years} years`}</Text>
                                            </Stack>
                                        }>
                                            <Avatar color={element.colour} radius={element.radius} size={'md'} src={`/${element.icon}.png`}>{element.icon}</Avatar>
                                        </Tooltip>
                                    ))
                                }

                                <Avatar color={'gray'} radius={'md'} size={'md'}>
                                    <IconPlus />
                                </Avatar>
                            </SimpleGrid>
                        </Stack>
                    </div>
                </Flex>
            </Container>
        </MantineProvider>
    )
}
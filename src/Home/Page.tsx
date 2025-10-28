import { ActionIcon, Anchor, Avatar, AvatarGroup, Card, Container, Grid, Group, Space, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useOs } from "@mantine/hooks";
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconBrandTwitch, IconCode, IconDeviceGamepad2 } from "@tabler/icons-react";

interface LanguageProp {
    language: string
    yoe: number
}

interface ProjectProp {
    image: string
    impressions: string
    link?: string
    project: string
    subtitle: string
}

export function LanguageCard(prop: LanguageProp) {
    return (
        <Card padding={'lg'} radius={'lg'} withBorder>
            <Group justify={'space-between'}>
                <Title order={3}>
                    {prop.language}
                </Title>
                <Text c={'dimmed'}>
                    {`${prop.yoe} years`}
                </Text>
            </Group>
        </Card>
    )
}

export function ProjectCard(prop: ProjectProp) {
    const theme = useMantineTheme();

    function AnchorOrText() {
        if (prop.link) {
            return (
                <Anchor c={theme.colors.blue[7]} href={prop.link} target={'_blank'}>
                    Open in App Store
                </Anchor>
            )
        } else {
            return (
                <Text c={'dimmed'}>
                    Coming Soon
                </Text>
            )
        }
    }

    return (
        <Card padding={'lg'} radius={'xl'} withBorder>
            <Stack>
                <Group justify={'space-between'}>
                    <Stack>
                        <Title order={3}>
                            {prop.project}
                        </Title>
                        <Text c={'dimmed'}>
                            {prop.subtitle}
                        </Text>
                    </Stack>
                    <Avatar display={['android', 'ios'].includes(useOs()) ? 'none' : undefined} radius={'0%'} size={'lg'} src={`/${prop.image}.png`} />
                </Group>
                <Group justify={'space-between'}>
                    <Group gap={'xs'}>
                        <Text fw={700}>
                            {prop.impressions}
                        </Text>
                        <Text c={'dimmed'}>
                            impressions
                        </Text>
                    </Group>
                    <AnchorOrText />
                </Group>
            </Stack>
        </Card>
    )
}

export function Page() {
    const theme = useMantineTheme();

    return (
        <Container my={'xl'} size={'xl'}>
            <Group justify={'space-between'}>
                <Stack>
                    <Title>
                        Jarrod Norwell
                    </Title>
                    <Text c={'dimmed'}>
                        Human. Gamer. Software Developer.
                    </Text>
                </Stack>
                <Group>
                    {
                        [
                            { color: theme.colors.gray[7], icon: <IconBrandGithub />, link: 'https://github.com/jarrodnorwell' },
                            { color: theme.colors.red[7], icon: <IconBrandReddit />, link: 'https://reddit.com/u/antique_codes' },
                            { color: theme.colors.indigo[7], icon: <IconBrandTwitch />, link: 'https://twitch.tv/antique_codes' },
                            { color: theme.colors.blue[7], icon: <IconBrandTwitter />, link: 'https://twitter.com/antique_codes' }
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
                            { language: 'Objective-C/++', yoe: 12 },
                            { language: 'Python', yoe: 8 },
                            { language: 'Swift', yoe: 10 },
                            { language: 'TypeScript', yoe: 3 }
                        ].map((element) => {
                            return (
                                <Grid.Col span={{ base: 12, lg: 3 }}>
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
                            { image: 'colourcam', impressions: '47K', link: 'https://apps.apple.com/au/app/colourcam/id6745690307', project: 'ColourCam', subtitle: 'Capture real world colour information' },
                            { image: 'folium', impressions: '42M', link: 'https://apps.apple.com/au/app/folium/id6498623389', project: 'Folium', subtitle: 'Retro gaming in the palm of your hands' },
                            { image: 'fuely', impressions: '#', link: 'https://apps.apple.com/au/app/fuely/id6753147277', project: 'Fuely', subtitle: 'Up-to-date fuel prices around Western Australa' },
                            { image: 'noctiloquy', impressions: '#', link: undefined, project: 'Noctiloquy', subtitle: 'Simple sleep recording for snoring, talking, etc' }
                        ].map((element) => {
                            return (
                                <Grid.Col span={{ base: 12, lg: 6 }}>
                                    <ProjectCard image={element.image} impressions={element.impressions} link={element.link} project={element.project} subtitle={element.subtitle} />
                                </Grid.Col>
                            )
                        })
                    }
                </Grid>
            </Stack>

            <Space h={'xl'} />
            <Space h={'xl'} />

            <Title order={2} ta={'center'}>
                Under Development
            </Title>
        </Container>
    )
}
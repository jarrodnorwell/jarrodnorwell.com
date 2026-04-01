import '@mantine/core/styles.css';
import {
    ActionIcon,
    Avatar,
    AvatarGroup,
    Container,
    Group,
    MantineProvider,
    Space,
    Stack, Text, TextInput, Title,
    Image,
    Paper,
    Button,
    SimpleGrid,
    Center
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconCode, IconMail, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { Carousel } from '@mantine/carousel';

interface GameItem {
    game_id: string;
    game_name: string;
}

export default function Ludara() {
    const date = new Date()
    const lightMode = date.getHours() >= 6 && date.getHours() <= 19

    const database = fetch(`https://raw.githubusercontent.com/ludara-emu/GameIcons/refs/heads/main/database.json`)
        .then((response) => response.json())
        .then((data) => data)

    var [games, setGames] = useState<GameItem[]>([])

    window.addEventListener('load', (_) => {
        database.then(elements => setGames(elements))
    })

    return (
        <MantineProvider theme={{ primaryColor: 'violet' }} forceColorScheme={lightMode ? 'light' : 'dark'}>
            <Container my={'xl'} size={'xl'}>
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title>
                                Ludara
                            </Title>
                            <Text c={'dimmed'}>
                                Emulates the Nintendo Switch
                            </Text>
                        </Stack>
                    </Group>
                    <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                        {
                            [
                                { color: 'gray', icon: <IconBrandGithub />, link: '' }
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
                        <Avatar radius={'xl'} size={'lg'} src={'/ludara/ludara_circle.png'} />
                    </AvatarGroup>
                    <Title order={2}>
                        About
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Ludara is a continuation of Sudachi, a Nintendo Switch emulator focused on accuracy, clean code, compatibility and performance
                    </Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        Screenshots
                    </Title>
                    <Carousel slideGap={'lg'} slideSize={['android', 'ios'].includes(useOs()) ? '100%' : '33%'}>
                        {
                            [
                                'ss_one', 'ss_two', 'ss_three'
                            ].map((image) => (
                                <Carousel.Slide>
                                    <Paper style={{ overflow: 'hidden' }} withBorder>
                                        <Image src={`/ludara/${image}${lightMode ? '' : '_dark'}.png`} fit='contain' />
                                    </Paper>
                                </Carousel.Slide>
                            ))
                        }
                    </Carousel>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        Search
                    </Title>
                    <Text c={'orange'}>
                        Search a game below to see if its icon exists. Click ( + ) to submit a new icon on the GameIcons GitHub repository via a pull request
                    </Text>
                    <TextInput onChange={(event) => {
                        setGames([])
                        const value = event.currentTarget.value
                        if (value.length > 0) {
                            database.then((elements: [GameItem]) => { // [{}, {}, {}]
                                setGames(elements.filter(element => element.game_name.startsWith(value)))
                            })
                        } else {
                            database.then(elements => setGames(elements))
                        }
                    }} placeholder="Search" radius={'xl'} size={'lg'} />

                    <Center>
                        <Button component={'a'} href={'https://github.com/ludara-emu/GameIcons'} radius={'xl'} target={'_blank'}>
                            <IconPlus size={20} strokeWidth={3} />
                        </Button>
                    </Center>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        Game Icons
                    </Title>
                    <SimpleGrid cols={['android', 'ios'].includes(useOs()) ? 2 : 8} spacing={'lg'} verticalSpacing={'lg'}>
                        {
                            games.map((game) => (
                                <Stack>
                                    <Paper radius={'xl'} style={{ overflow: 'hidden' }} withBorder>
                                        <Image src={`https://raw.githubusercontent.com/ludara-emu/GameIcons/refs/heads/main/${game.game_id}.png`} />
                                    </Paper>
                                </Stack>
                            ))
                        }
                    </SimpleGrid>
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
                                { color: 'gray', icon: <IconBrandGithub />, link: '' },
                                { color: 'yellow', icon: <IconMail />, link: 'mailto:official.antique@gmail.com?subject=Ludara' },
                                { color: 'red', icon: <IconBrandReddit />, link: 'https://reddit.com/r/ludaraemulator' },
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
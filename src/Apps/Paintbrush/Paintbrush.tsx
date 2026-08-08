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
    List
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconCode, IconMail } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';

export default function Paintbrush() {
    return (
        <MantineProvider theme={{ primaryColor: 'blue' }} forceColorScheme={'dark'}>
            <Container my={'xl'} size={'xl'}>
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title>
                                Paintbrush
                            </Title>
                            <Text c={'dimmed'}>
                                Revival of the original simple paint program for macOS
                            </Text>
                        </Stack>
                    </Group>
                    <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                        {
                            [
                                { color: 'gray', icon: <IconBrandGithub />, link: 'https://github.com/jarrodnorwell/paintbrush' }
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
                        <Avatar radius={'xl'} size={'lg'} src={'/paintbrush/paintbrush_circle.png'} />
                    </AvatarGroup>
                    <Title order={2}>
                        About
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Paintbrush is a revival of the original simple paint program for macOS by Soggy Waffles, Paintbrush
                    </Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Carousel slideGap={'lg'} slideSize={'100%'} withIndicators>
                    {
                        [
                            'ss_one', 'ss_two', 'ss_three'
                        ].map((image) => (
                            <Carousel.Slide>
                                <Paper radius={'lg'} style={{ overflow: 'hidden' }} withBorder>
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={`/paintbrush/${image}.png`} fit='contain' />
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
                        What's Changed
                    </Title>
                    <Text c={'dimmed'}>
                        Paintbrush by Jarrod Norwell is, at its core, Paintbrush by Soggy Waffles
                    </Text>

                    <List>
                        <List.Item>Changed
                            <List>
                                <List.Item>
                                    Changed the design of the toolbox, initial size, resizing and other windows utilising SF Symbols where possible
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item>Fixed
                            <List>
                                <List.Item>
                                    Fixed an issue where the Text tool would not correctly format by using the native macOS Rich Text formatting tools
                                </List.Item>
                                <List.Item>
                                    Fixed an issue where saving an image would fail silently by removing broken file formats (see Removed)
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item>Removed
                            <List>
                                <List.Item>
                                    Removed temporarily, currently broken file formats when saving, leaving PNG available
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item>Updated
                            <List>
                                <List.Item>
                                    Updated source code fixing most deprecation issues and migrating to Automatic Reference Counting
                                </List.Item>
                            </List>
                        </List.Item>
                    </List>
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
                                { color: 'gray', icon: <IconBrandGithub />, link: 'https://github.com/jarrodnorwell/paintbrush' },
                                { color: 'yellow', icon: <IconMail />, link: 'mailto:official.antique@gmail.com?subject=Paintbrush' },
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
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
    List,
    SimpleGrid,
    Button,
    Center,
    Divider
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconCheck, IconCode, IconMail, IconX } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';

export default function Paintbrush() {
    return (
        <MantineProvider theme={{ primaryColor: 'blue' }} forceColorScheme={'light'}>
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
                        <Avatar radius={'lg'} size={'lg'} src={'/paintbrush/paintbrush_square.png'} />
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

                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={'xl'}>
                    <Stack align={'center'}>
                        <AvatarGroup spacing={'lg'}>
                            <Avatar color={'red'} radius={'xl'} size={'lg'}>
                                <IconX />
                            </Avatar>
                        </AvatarGroup>
                        <Title order={2}>
                            Release Status
                        </Title>
                        <Text c={'dimmed'} ta={'center'}>
                            Unplanned
                        </Text>

                        <Space />

                        <Group>
                            <Button color={'blue'} radius={'xl'} variant={'filled'} disabled>
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
                        <Title order={2}>
                            Release Status
                        </Title>
                        <Text c={'dimmed'} ta={'center'}>
                            Distributed
                        </Text>

                        <Space />

                        <Group>
                            <Button color={'dark'} component={'a'} href={'https://github.com/jarrodnorwell/paintbrush/releases/latest'} radius={'xl'} target={'_blank'} variant={'filled'}>
                                GitHub
                            </Button>
                        </Group>
                    </Stack>
                </SimpleGrid>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Center>
                    <Button color={'yellow'} component={'a'} href={'#changelog'} radius={'xl'} variant={'filled'}>
                        Changelog
                    </Button>
                </Center>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <SimpleGrid cols={['android', 'ios'].includes(useOs()) ? 1 : 2} spacing={'xl'}>
                    <Group>
                        <Paper radius={'lg'} style={{ overflow: 'hidden' }} withBorder>
                            <AspectRatio ratio={3456 / 2234}>
                                <Image src={`/paintbrush/ss_one.png`} fit='contain' />
                            </AspectRatio>
                        </Paper>
                    </Group>

                    <Group>
                        <Stack>
                            <Title order={2}>
                                Size Window
                            </Title>
                            <Text c={'dimmed'}>
                                Exactly the same as the original Paintbrush, the Size window allows you to create a canvas of a custom size, select a size from a list of presets or use the size of an image copied to the pasteboard
                            </Text>
                        </Stack>
                    </Group>
                </SimpleGrid>

                <Space h={'xl'} />
                <Divider />
                <Space h={'xl'} />

                <SimpleGrid cols={['android', 'ios'].includes(useOs()) ? 1 : 2} spacing={'xl'}>
                    <Group>
                        <Stack>
                            <Title order={2}>
                                Paint Window
                            </Title>
                            <Text c={'dimmed'}>
                                Extremely similar to the original Paintbrush, the Paint window allows you to design, draw, fill, erase, add text, images and more all with a redesigned interface
                            </Text>
                        </Stack>
                    </Group>

                    <Group>
                        <Paper radius={'lg'} style={{ overflow: 'hidden' }} withBorder>
                            <AspectRatio ratio={3456 / 2234}>
                                <Image src={`/paintbrush/ss_two.png`} fit='contain' />
                            </AspectRatio>
                        </Paper>
                    </Group>
                </SimpleGrid>

                <Space h={'xl'} />
                <Divider />
                <Space h={'xl'} />

                <SimpleGrid cols={['android', 'ios'].includes(useOs()) ? 1 : 2} spacing={'xl'}>
                    <Group>
                        <Paper radius={'lg'} style={{ overflow: 'hidden' }} withBorder>
                            <AspectRatio ratio={3456 / 2234}>
                                <Image src={`/paintbrush/ss_three.png`} fit='contain' />
                            </AspectRatio>
                        </Paper>
                    </Group>

                    <Group>
                        <Stack>
                            <Title order={2}>
                                Resize Window
                            </Title>
                            <Text c={'dimmed'}>
                                Exactly the same as the original Paintbrush, the Resize window allows you to resize an existing canvas to the newly specified size, either by percentage or by pixels
                            </Text>
                        </Stack>
                    </Group>
                </SimpleGrid>

                <Space h={'xl'} />
                <Divider />
                <Space h={'xl'} />

                <SimpleGrid cols={['android', 'ios'].includes(useOs()) ? 1 : 2} spacing={'xl'}>
                    <Group>
                        <Stack>
                            <Title order={2}>
                                Save Window
                            </Title>
                            <Text c={'dimmed'}>
                                Exactly the same as the original Paintbrush, the Save window allows you to save the current canvas to multiple file formats just with a redesigned interface
                            </Text>
                        </Stack>
                    </Group>

                    <Group>
                        <Carousel slideGap={'lg'} withIndicators>
                            {
                                [
                                    'ss_four', 'ss_five'
                                ].map((image) => (
                                    <Carousel.Slide>
                                        <Paper radius={'lg'} style={{ overflow: 'hidden' }} withBorder>
                                            <AspectRatio ratio={3456 / 2234}>
                                                <Image src={`/paintbrush/${image}.png`} fit='contain' />
                                            </AspectRatio>
                                        </Paper>
                                    </Carousel.Slide>
                                ))
                            }
                        </Carousel>
                    </Group>
                </SimpleGrid>

                <Space h={'xl'} />
                <Divider />
                <Space h={'xl'} />

                <SimpleGrid cols={['android', 'ios'].includes(useOs()) ? 1 : 2} spacing={'xl'}>
                    <Group>
                        <Paper radius={'lg'} style={{ overflow: 'hidden' }} withBorder>
                            <AspectRatio ratio={3456 / 2234}>
                                <Image src={`/paintbrush/ss_six.png`} fit='contain' />
                            </AspectRatio>
                        </Paper>
                    </Group>

                    <Group>
                        <Stack>
                            <Title order={2}>
                                Check For Updates
                            </Title>
                            <Text c={'dimmed'}>
                                Use the File &gt; Check For Updates menu item to check for updates, if an update is available a prompt will be displayed with the changelog and several options to choose from
                            </Text>
                        </Stack>
                    </Group>
                </SimpleGrid>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack id={'changelog'}>
                    <Title order={2}>
                        Changelog
                    </Title>
                    <Text c={'dimmed'}>
                        Paintbrush by Jarrod Norwell is, at its core, Paintbrush by Soggy Waffles
                    </Text>

                    <Title order={3}>
                        Release 4.0
                    </Title>
                    <Text c={'orange'} size={'sm'}>
                        Release 4.0 is the initial release of Paintbrush by Jarrod Norwell, further releases will be updates to this release
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
                                    Fixed an issue where saving a file in a format other than PNG would not work correctly
                                </List.Item>
                            </List>
                        </List.Item>
                        <List.Item>Updated
                            <List>
                                <List.Item>
                                    Updated source code fixing most deprecation issues and migrating to Automatic Reference Counting
                                </List.Item>
                                <List.Item>
                                    Updated the Sparkle dependency and changed endpoints, etc. where necessary allowing for updates to be pulled from GitHub Releases
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
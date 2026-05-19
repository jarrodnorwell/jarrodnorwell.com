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
    Button,
    SimpleGrid,
    Center
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconCheck, IconClock, IconCode, IconMail } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';

export default function Vion() {
    const os = useOs()

    return (
        <MantineProvider theme={{ primaryColor: 'green' }} forceColorScheme={'light'}>
            <Container my={'xl'} size={'xl'}>
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title>
                                Vion
                            </Title>
                            <Text c={'dimmed'}>
                                PlayStation Vita emulation in the palm of your hands
                            </Text>
                        </Stack>
                    </Group>
                    <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                        {
                            [
                                { color: 'gray', icon: <IconBrandGithub />, link: 'https://github.com/vion-app-org/vion' }
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
                        <Avatar radius={'xl'} size={'lg'} src={'/vion/vion_circle.png'} />
                    </AvatarGroup>
                    <Title order={2}>
                        About
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Vion is a beautifully designed emulation app bringing PlayStation Vita to Apple devices
                    </Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={'xl'}>
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
                            Ready for Testing
                        </Text>

                        <Space />

                        <Group>
                            <Button color={'indigo'} component={'a'} href={'https://github.com/vion-app-org/Releases/releases/download/1.0/Vion-1.0-build-2.ipa.zip'} radius={'xl'} target={'_blank'} variant={'light'}>
                                Sideload
                            </Button>
                        </Group>
                    </Stack>

                    <Stack align={'center'}>
                        <AvatarGroup spacing={'lg'}>
                            <Avatar color={'orange'} radius={'xl'} size={'lg'}>
                                <IconClock />
                            </Avatar>
                        </AvatarGroup>
                        <Title order={2}>
                            Release Status
                        </Title>
                        <Text c={'dimmed'} ta={'center'}>
                            Waiting for Release
                        </Text>

                        <Space />

                        <Group>
                            <Button color={'blue'} component={'a'} href={'https://testflight.apple.com/join/TXJCfKCa'} radius={'xl'} target={'_blank'} variant={'light'} disabled>
                                TestFlight
                            </Button>
                        </Group>
                    </Stack>
                </SimpleGrid>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Center>
                    <Button color={'yellow'} radius={'xl'} variant={'light'} disabled>
                        Changelog
                    </Button>
                </Center>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Carousel slideGap={'lg'} slideSize={['android', 'ios'].includes(os) ? '50%' : '25%'} withIndicators>
                    {
                        [
                            'ss_one', 'ss_two'
                        ].map((image) => (
                            <Carousel.Slide>
                                <Paper radius={['android', 'ios'].includes(os) ? 'lg' : 'xl'} style={{ overflow: 'hidden' }} withBorder>
                                    <AspectRatio ratio={9 / 19.5}>
                                        <Image src={`/vion/${image}.png`} fit='contain' />
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
                        Privacy Policy
                    </Title>
                    <Text c={'dimmed'}>
                        Vion uses Bluetooth for the functionality of the app. Absolutely no information is shared with or sold to other companies or entities
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
                                { color: 'gray', icon: <IconBrandGithub />, link: 'https://github.com/vion-app-org/vion' },
                                { color: 'yellow', icon: <IconMail />, link: 'mailto:official.antique@gmail.com?subject=Vion' },
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

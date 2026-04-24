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
    Button
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter, IconCheck, IconCode, IconMail } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';

export default function Alune() {
    const os = useOs()

    return (
        <MantineProvider theme={{ primaryColor: 'green' }} forceColorScheme={'light'}>
            <Container my={'xl'} size={'xl'}>
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title>
                                Alune
                            </Title>
                            <Text c={'dimmed'}>
                                PlayStation 2 emulation in the palm of your hands
                            </Text>
                        </Stack>
                    </Group>
                    <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                        {
                            [
                                { color: 'gray', icon: <IconBrandGithub />, link: 'https://github.com/alune-app/alune' }
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
                        <Avatar radius={'xl'} size={'lg'} src={'/alune/alune_circle.png'} />
                    </AvatarGroup>
                    <Title order={2}>
                        About
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Alune is a beautifully designed emulation app bringing PlayStation 2 to Apple devices
                    </Text>
                    {/*
                    <Space />

                    <Group>
                        <Button color={'blue'} component={'a'} href={'https://apps.apple.com/us/app/folium/id6498623389'} radius={'xl'} target={'_blank'}>
                            App Store
                        </Button>
                        <Button color={'blue'} component={'a'} href={'https://testflight.apple.com/join/pRGScBR7'} radius={'xl'} target={'_blank'}>
                            TestFlight
                        </Button>
                        <Button color={'gray'} component={'a'} href={'https://github.com/folium-app/Folium/releases/download/1.35/Folium.ipa'} radius={'xl'} target={'_blank'}>
                            Sideload
                        </Button>
                    </Group>
                    */}
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

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
                        <Button color={'blue'} component={'a'} href={'https://testflight.apple.com/join/jDZ4BM99'} radius={'xl'} target={'_blank'} variant={'light'}>
                            TestFlight
                        </Button>
                        <Button color={'yellow'} component={'a'} href={''} radius={'xl'} target={'_blank'} variant={'light'} disabled>
                            Changelog
                        </Button>
                    </Group>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Carousel slideGap={'lg'} slideSize={['android', 'ios'].includes(os) ? '50%' : '25%'} withIndicators>
                    {
                        [
                            'ss_one', 'ss_two', 'ss_three', 'ss_four'
                        ].map((image) => (
                            <Carousel.Slide>
                                <Paper radius={['android', 'ios'].includes(os) ? 'lg' : 'xl'} style={{ overflow: 'hidden' }} withBorder>
                                    <AspectRatio ratio={9 / 19.5}>
                                        <Image src={`/alune/${image}.png`} fit='contain' />
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
                        Alune uses bluetooth and the camera for the functionality of the app. Absolutely no images are saved off-device. Absolutely no information is shared with or sold to other companies or entities
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
                                { color: 'gray', icon: <IconBrandGithub />, link: 'https://github.com/alune-app/alune' },
                                { color: 'yellow', icon: <IconMail />, link: 'mailto:official.antique@gmail.com?subject=Alune' },
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

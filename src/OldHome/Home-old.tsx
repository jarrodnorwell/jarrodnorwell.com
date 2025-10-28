import '@mantine/carousel/styles.css';
import "@mantine/core/styles.css";
import { Carousel } from '@mantine/carousel';
import {
    AspectRatio, Badge, Button, Card, Container,
    Group, Paper, Stack,
    Image, MantineProvider, SimpleGrid, Space,
    Text, Title
} from "@mantine/core";
import { IconCircleArrowLeftFilled, IconCircleArrowRightFilled } from '@tabler/icons-react';
import { theme } from "../theme";

export function Articles() {
    const data = [
        {
            article_link: 'https://9to5mac.com/2024/06/06/nintendo-3ds-emulator-ios-app-store/',
            article_img: 'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/nintendo-3ds-emulator-iphone-ios-app-store.jpg?w=1500&quality=82&strip=all&ssl=1',
            article_title: 'There\'s now a Nintendo 3DS emulator available on the iOS App Store',
            article_subtitle: 'Folium was recently launched on the App Store for iPhone. While it is compatible with Game Boy Advance and Nintendo DS games...',
            author: 'Filipe Espósito',
            author_img: 'https://secure.gravatar.com/avatar/36d1bcbba2ffa3509f294100b9af0388?s=370&d=mm&r=r',
            color: 'blue',
            date: '6th June 2024',
            website: '9to5Mac',
        },
        {
            article_link: 'https://www.macrumors.com/2024/06/04/nintendo-3ds-emulator-for-iphone-on-app-store/',
            article_img: 'https://images.macrumors.com/t/Y5fl-VbgPPL4zNRx0t7NAaJgvt4=/1600x0/article-new/2024/06/Folium-Alpha-Sapphire-Feature.jpg',
            article_title: 'Nintendo 3DS Emulator for iPhone Released in App Store With Caveats',
            article_subtitle: 'Foremost, this is the first Nintendo emulator on the App Store that costs money. Folium developer Jarrod Norwell is charging $4.99 for the app...',
            author: 'Joe Rossignol',
            author_img: 'https://www.gravatar.com/avatar/07110a84cd4f6075a3905be3eee2b5d7?s=160',
            color: 'red',
            date: '4th June 2024',
            website: 'MacRumors',
        },
        {
            article_link: 'https://appleinsider.com/articles/24/04/26/retro-gold-rush-these-emulators-are-coming-to-the-app-store-soon/',
            article_img: 'https://photos5.appleinsider.com/gallery/59455-121333-psp-game-on-iphone-xl.jpg',
            article_title: 'Retro gold rush: which emulators are on the App Store, and what\'s coming',
            article_subtitle: 'Apple is allowing emulators on App Store. Here\'s what\'s arrived, and what\'s on the way to play your favorite retro games on your iPhone, updated on June 28...',
            author: 'Malcolm Owen',
            author_img: 'https://photos5.appleinsider.com/gallery/malcolm+owen.jpg',
            color: '#0C121A',
            date: '30th May 2024',
            website: 'AppleInsider',
        },
        {
            article_link: 'https://www.imore.com/iphone/ive-played-an-early-nintendo-3ds-emulator-for-iphone-light-on-features-but-games-run-perfectly-even-without-3d/',
            article_img: 'https://cdn.mos.cms.futurecdn.net/kWwRkUTdYCBqBUxLfthNbG-970-80.jpg.webp',
            article_title: 'I\'ve played an early Nintendo 3DS emulator for iPhone...',
            article_subtitle: 'Unleash the emulation kraken! Now that you can download retro gaming emulators from the App Store, we’re starting to see and hear about more upcoming releases of apps that will be able to run console games from the past...',
            author: 'Daryl Baxter',
            author_img: 'https://cdn.mos.cms.futurecdn.net/bnXgLe6eZaTyaWjLhVw6e3-300-80.png.webp',
            color: 'yellow',
            date: '2nd May 2024',
            website: 'iMore',
        }
    ];

    const cards = data.map((article) => (
        <>
            <Carousel.Slide>
                <SimpleGrid cols={{ base: 1, md: 2 }}>
                    <div key={'image'}>
                        <Paper radius={'lg'} withBorder>
                            <AspectRatio ratio={16 / 9}>
                                <Image radius={'lg'} src={article.article_img} />
                            </AspectRatio>
                        </Paper>
                    </div>
                    <div key={'details'}>
                        <Stack justify='space-between' h={'100%'} align='stretch'>
                            <div key={'top'}>
                                <Badge color={article.color}>
                                    {article.website}
                                </Badge>
                                <Space h={'md'} />
                                <Title order={2}>
                                    {article.article_title}
                                </Title>
                                <Text c={'dimmed'}>
                                    {article.article_subtitle}
                                </Text>
                            </div>
                            <div key={'bottom'}>
                                <Group>
                                    <div key={'left'}>
                                        <Image h={'xl'} radius={'md'} src={article.author_img} />
                                    </div>
                                    <div key={'right'}>
                                        <Text fw={700} size='lg'>
                                            {article.author}
                                        </Text>
                                        <Text c={'dimmed'}>
                                            {article.date}
                                        </Text>
                                    </div>
                                </Group>
                            </div>
                        </Stack>
                    </div>
                </SimpleGrid>

                {/*<Card radius={'md'} shadow='md'>
                    <AspectRatio ratio={1920 / 1080}>
                        <Image radius={'sm'} src={article.article_img} />
                    </AspectRatio>
                    <Space h={'md'} />
                    <Badge color={article.color}>{article.website}</Badge>
                    <Space h={'sm'} />
                    <Text fw={700} size='lg'>{article.article_title}</Text>
                    <Text c={'dimmed'}>{article.author + ' - ' + article.date}</Text>
                </Card>*/}
            </Carousel.Slide>
        </>
    ));

    return (
        <>
            <Title order={1}>Articles</Title>
            <Space h={'sm'} />
            <Carousel align={'start'} slideGap={'md'} slideSize={'100%'}
                nextControlIcon={
                    <IconCircleArrowRightFilled size={'lg'} />
                }
                previousControlIcon={
                    <IconCircleArrowLeftFilled size={'lg'} />
                }>
                {cards}
            </Carousel>

            {/*<Carousel align={'start'} slideGap={'md'} slideSize={{ base: '100%', sm: '50%' }}
                nextControlIcon={
                    <IconCircleArrowRightFilled size={'lg'} />
                }
                previousControlIcon={
                    <IconCircleArrowLeftFilled size={'lg'} />
                }>
                {cards}
            </Carousel>
            */}
        </>
    );
}

export function Projects() {
    const data = [
        {
            image:
                '/IMG_1881.jpg',
            title: 'Folium',
            country: 'Emulation',
            description:
                'Beautifully designed, high performing multi-system emulation in the palm of your hands',
            badges: [
                { label: 'App Store' },
                { label: 'Apple' },
                { label: 'Apple TV' },
                { label: 'Emulation' },
                { label: 'Emulator' },
                { label: 'iPad' },
                { label: 'iPhone' }
            ],
            color: 'blue',
            button: {
                link: 'https://apps.apple.com/us/app/folium/id6498623389',
                text: 'Open in App Store'
            }
        },
        {
            image:
                'https://placehold.co/1280x720?text=N/A',
            title: 'InstaPy2',
            country: 'Automation',
            description:
                'Instagram automation tool for farming comments, follows and likes, written in Python',
            badges: [
                { label: 'Automation' },
                { label: 'Bot' },
                { label: 'Instagram' },
                { label: 'InstaPy' },
                { label: 'InstaPy2' },
                { label: 'Python' },
                { label: 'Python3' }
            ],
            color: 'gray',
            button: {
                link: 'https://github.com/jarrodnorwell/InstaPy2',
                text: 'Open in GitHub'
            }
        },
        {
            image:
                'https://placehold.co/1280x720?text=N/A',
            title: 'SeniorsDiscountCardsAPI',
            country: 'API',
            description:
                'API for SeniorsDiscountCards built on top of MongoDB and Vapor',
            badges: [
                { label: 'API' },
                { label: 'Linux' },
                { label: 'MongoDB' },
                { label: 'Oracle Cloud' },
                { label: 'Swift' },
                { label: 'Ubuntu' },
                { label: 'Vapor' }
            ],
            color: 'gray',
            button: {
                link: 'https://github.com/jarrodnorwell/seniorsdiscountcardsapi',
                text: 'Open in GitHub'
            }
        },
        {
            image:
                'https://placehold.co/1280x720?text=N/A',
            title: 'Sudachi',
            country: 'Emulation',
            description:
                'Sudachi is a Nintendo Switch emulator for Android, Linux and Windows, written in C++',
            badges: [
                { label: 'Android' },
                { label: 'Emulation' },
                { label: 'Emulator' },
                { label: 'Linux' },
                { label: 'Windows' }
            ],
            color: 'violet',
            button: {
                link: 'https://sudachi.emuplace.app',
                text: 'Open in Browser'
            }
        },
        {
            image:
                'https://placehold.co/1280x720?text=N/A',
            title: 'Limón',
            country: 'Emulation',
            description:
                'World\'s first Nintendo 3DS emulator for iPad and iPhone based on Citra',
            badges: [
                { label: 'App Store' },
                { label: 'Apple' },
                { label: 'Apple TV' },
                { label: 'Emulation' },
                { label: 'Emulator' },
                { label: 'iPad' },
                { label: 'iPhone' }
            ],
            color: 'gray',
            button: {
                link: '',
                disabled: true,
                text: 'Unavailable'
            }
        },
        {
            image:
                'https://placehold.co/1280x720?text=N/A',
            title: 'emuThreeDS',
            country: 'Emulation',
            description:
                'World\'s first Nintendo 3DS emulator for iPad and iPhone based on Citra',
            badges: [
                { label: 'App Store' },
                { label: 'Apple' },
                { label: 'Apple TV' },
                { label: 'Emulation' },
                { label: 'Emulator' },
                { label: 'iPad' },
                { label: 'iPhone' }
            ],
            color: 'gray',
            button: {
                link: '',
                disabled: true,
                text: 'Unavailable'
            }
        }
    ];

    const cards = data.map((project) => {
        const features = project.badges.map((badge) => (
            <Badge color={project.color} key={badge.label}>
                {badge.label}
            </Badge>
        ));

        return (
            <>
                <Carousel.Slide>
                    <Card p={'md'} radius={'lg'} withBorder>
                        <Card.Section withBorder>
                            <AspectRatio ratio={16 / 9}>
                                <Image src={project.image} />
                            </AspectRatio>
                        </Card.Section>

                        <Card.Section mt={'md'} pb={'md'} px={'md'} withBorder>
                            <Group justify='space-between'>
                                <Title order={2}>
                                    {project.title}
                                </Title>
                                <Badge color={project.color}>
                                    {project.country}
                                </Badge>
                            </Group>
                            <Text c={'dimmed'}>
                                {project.description}
                            </Text>
                        </Card.Section>

                        <Card.Section pb={'md'} px={'md'} withBorder>
                            <Group gap={'md'} mt={'md'}>
                                {features}
                            </Group>
                        </Card.Section>

                        <Button component='a' href={project.button.link} color={project.color} disabled={project.button.disabled} fullWidth radius="md" mt={'md'}>
                            {project.button.text}
                        </Button>
                    </Card>
                </Carousel.Slide>
            </>
        )
    });

    return (
        <>
            <Title order={1}>Projects</Title>
            <Space h={'sm'} />
            <Carousel align={'start'} slideGap={'md'} slideSize={{ base: '100%', sm: '50%' }}
                nextControlIcon={
                    <IconCircleArrowRightFilled size={'lg'} />
                }
                previousControlIcon={
                    <IconCircleArrowLeftFilled size={'lg'} />
                }>
                {cards}
            </Carousel>
        </>
    );
}

export function WorkExperiences() {
    function CarpetLayer() {
        const data = [
            {
                image:
                    'https://placehold.co/1280x720?text=N/A'
            }
        ];

        const cards = data.map((project) => {
            return (
                <>
                    <Carousel.Slide>
                        <Card p={'md'} radius={'lg'} withBorder>
                            <Card.Section withBorder>
                                <AspectRatio ratio={16 / 9}>
                                    <Image src={project.image} />
                                </AspectRatio>
                            </Card.Section>
                        </Card>
                    </Carousel.Slide>
                </>
            )
        });

        return (
            <>
                <div key={'CarpetLayer'}>
                    <Title order={2}>Carpet Layer</Title>
                    <Space h={'sm'} />
                    <Carousel align={'start'} slideGap={'md'} slideSize={{ base: '100%', sm: '50%' }}
                        nextControlIcon={
                            <IconCircleArrowRightFilled size={'lg'} />
                        }
                        previousControlIcon={
                            <IconCircleArrowLeftFilled size={'lg'} />
                        }>
                        {cards}
                    </Carousel>
                </div>
            </>
        );
    }

    function Painter() {
        const data = {
            name: 'Painter',
            images: [
                '/IMG_0006.jpg',
                '/IMG_0007.jpg',
                '/IMG_0008.jpg',
                '/IMG_1227.jpg',
                '/IMG_1228.jpg',
                '/IMG_1229.jpg',
                '/IMG_1230.jpg',
                '/IMG_1231.jpg',
                '/IMG_1232.jpg',
                '/IMG_1288.jpg',
                '/IMG_1289.jpg',
                '/IMG_1290.jpg',
                '/IMG_1291.jpg',
                '/IMG_1292.jpg',
                '/IMG_1293.jpg',
                '/IMG_1294.jpg',
                '/IMG_1295.jpg',
                '/IMG_1296.jpg',
                '/IMG_1297.jpg',
                '/IMG_1298.jpg',
                '/IMG_1299.jpg',

                '/IMG_1300.jpg',
                '/IMG_1301.jpg',
                '/IMG_1302.jpg',
                '/IMG_1303.jpg',

                '/IMG_1833.jpg',
                '/IMG_1834.jpg',
                '/IMG_1844.jpg',
                '/IMG_1845.jpg',
                '/IMG_1846.jpg',
                '/IMG_1847.jpg',
                '/IMG_1848.jpg',
                //'/IMG_1849.jpg',
                //'/IMG_1850.jpg',
                '/IMG_1897.jpg',
                '/IMG_1898.jpg',
                '/IMG_1899.jpg',

                '/IMG_1900.jpg',
                '/IMG_1901.jpg',
                '/IMG_1902.jpg',
                '/IMG_1903.jpg'
            ]
        };

        const images = data.images.map((image) => (
            <Carousel.Slide>
                <Paper radius={'lg'} withBorder>
                    <AspectRatio ratio={16 / 9}>
                        <Image radius={'lg'} src={image} />
                    </AspectRatio>
                </Paper>
            </Carousel.Slide>
        ));

        return (
            <>
                <div key={data.name}>
                    <Title order={2}>
                        {data.name}
                    </Title>
                    <Space h={'sm'} />
                    <Carousel align={'start'} slideGap={'md'} slideSize={{ base: '100%', md: '50%' }}
                        nextControlIcon={
                            <IconCircleArrowRightFilled size={'lg'} />
                        }
                        previousControlIcon={
                            <IconCircleArrowLeftFilled size={'lg'} />
                        }>
                        {images}
                    </Carousel>
                </div>
            </>
        );
    }

    function SoftwareDeveloper() {
        const data = [
            {
                image:
                    'https://placehold.co/1280x720?text=N/A',
                title: 'RealKaraoke2',
                country: 'Music',
                description:
                    'iPad controlled music system for karaoke',
                color: 'blue',
                button: {
                    link: '',
                    disabled: true,
                    text: 'Unavailable'
                }
            },
            {
                image:
                    '/IMG_2034.jpg',
                title: 'Senior Discounts',
                country: 'Shopping',
                description:
                    'Discount finder for seniors card holders',
                color: 'blue',
                button: {
                    link: 'https://apps.apple.com/au/app/senior-cards-discount/id1490840352',
                    disabled: false,
                    text: 'Open in App Store'
                }
            },
            {
                image:
                    'https://texts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-dark-v3.e5de4b7a.png&w=3840&q=75',
                title: 'Texts',
                country: 'Messaging',
                description:
                    'All of your messages. In one inbox',
                color: 'violet',
                button: {
                    link: 'https://texts.com',
                    disabled: false,
                    text: 'Open in Browser'
                }
            },
            {
                image:
                    'https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/f6/7a/99/f67a994f-b69a-aeb5-4af2-f6121693d148/pr_source.png/750x750bb.jpeg',
                title: 'Wopadu',
                country: 'Shopping',
                description:
                    'Restaraunt ordering system',
                color: 'gray',
                button: {
                    link: 'https://github.com/ADBY/wopadu-project',
                    disabled: false,
                    text: 'Open in GitHub'
                }
            }
        ];

        const cards = data.map((project) => {
            return (
                <>
                    <Carousel.Slide>
                        <Card p={'md'} radius={'lg'} withBorder>
                            <Card.Section withBorder>
                                <AspectRatio ratio={16 / 9}>
                                    <Image src={project.image} />
                                </AspectRatio>
                            </Card.Section>

                            <Card.Section mt={'md'} pb={'md'} px={'md'} withBorder>
                                <Group justify='space-between'>
                                    <Title order={2}>
                                        {project.title}
                                    </Title>
                                    <Badge color={project.color}>
                                        {project.country}
                                    </Badge>
                                </Group>
                                <Text c={'dimmed'}>
                                    {project.description}
                                </Text>
                            </Card.Section>

                            <Button component='a' href={project.button.link} color={project.color} disabled={project.button.disabled} fullWidth radius="md" mt={'md'}>
                                {project.button.text}
                            </Button>
                        </Card>
                    </Carousel.Slide>
                </>
            )
        });

        return (
            <>
                <div key={'SoftwareDeveloper'}>
                    <Title order={2}>Software Developer</Title>
                    <Space h={'sm'} />
                    <Carousel align={'start'} slideGap={'md'} slideSize={{ base: '100%', sm: '50%' }}
                        nextControlIcon={
                            <IconCircleArrowRightFilled size={'lg'} />
                        }
                        previousControlIcon={
                            <IconCircleArrowLeftFilled size={'lg'} />
                        }>
                        {cards}
                    </Carousel>
                </div>
            </>
        );
    }

    return (
        <>
            <Title order={1}>
                Work Experiences
            </Title>
            <Space h={'sm'} />
            <SimpleGrid>
                {CarpetLayer()}
                {Painter()}
                {SoftwareDeveloper()}
            </SimpleGrid>
        </>
    );
}

export function AboutMe() {
    return (
        <>
            <Title order={1}>
                About Jarrod
            </Title>
            <Space h={'sm'} />
            <Text c={'dimmed'}>
                Jarrod Norwell is a Senior Software with 14 years experience across roughly 11 programming languages most recently known for his work on Folium, a multi-system emulation app for Apple devices and Sudachi, a Nintendo Switch emulation program for Android, Apple, Linux and Windows devices
                <br />
                <br />
                Prior to his work in application and emulation development, Jarrod was most known for his work within the iOS jailbreaking community between 2015 and 2019 under the moniker "antique_dev", developing tweak requests posted on the Reddit platform in r/jailbreaking
            </Text>
        </>
    )
}

export default function Home() {
    return (
        <MantineProvider theme={theme} forceColorScheme='dark'>
            <Container py={100} size={'lg'}>
                <Badge color={theme.primaryColor} size='lg'>Portfolio</Badge>
                <Space h={'sm'} />
                <Title order={1}>Jarrod Norwell</Title>
                <Text c={'dimmed'}>Senior Software Developer</Text>
                <Space h={'xl'} />
                <AboutMe />
                <Space h={'xl'} />
                <Articles />
                <Space h={'xl'} />
                <Projects />
                <Space h={'xl'} />
                <WorkExperiences />
            </Container>
        </MantineProvider>
    );
}

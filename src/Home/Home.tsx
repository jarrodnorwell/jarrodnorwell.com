import '@mantine/carousel/styles.css';
import "@mantine/core/styles.css";
import { Carousel } from '@mantine/carousel';
import { Anchor, ActionIcon, Container, MantineProvider, Group, Badge, Space, Text, Title, Grid, Divider, Button, VisuallyHidden, Image, AspectRatio, Paper, Card, SimpleGrid } from "@mantine/core";
import { IconQuote, IconHash, IconBrandReddit, IconBrandTwitch, IconBrandTwitter } from "@tabler/icons-react";
import { theme } from "../theme";

interface BadgeProp {
    color: string | undefined, title: string, variant: string | undefined
}

interface BusinessProp {
    name: string, type: string
}

interface PropDetailed {
    id: string
    description: string
    businesses?: Array<BusinessProp>
    images?: Array<string>
    roles: Array<string>
}

interface Prop {
    id: string, linkTo?: string, description: string, title: string
    badges: Array<BadgeProp>
    hideReadMode: boolean

    details?: PropDetailed
}

export function FWECard(prop: Prop) {
    const badges = prop.badges.map((badge) => (
        <Badge color={badge.color} variant={badge.variant}>{badge.title}</Badge>
    ))

    const readMoreButton = function () {
        if (prop.hideReadMode) {
            return (
                <VisuallyHidden>
                    <Button>
                        Read More
                    </Button>
                </VisuallyHidden>
            )
        } else {
            return (
                <ActionIcon component="a" href={`#${prop.linkTo}`} size={'sm'} variant="transparent">
                    <IconHash />
                </ActionIcon>
            )
        }
    }

    return (
        <div key={prop.id}>
            <Group justify={prop.hideReadMode ? "flex-start" : "space-between"}>
                <Title id={prop.id} order={3}>
                    {prop.title}
                </Title>
                {readMoreButton()}
            </Group>
            <Space h={'sm'} />
            <Group>
                {badges}
            </Group>
            <Space h={'sm'} />
            <Text c={'dimmed'}>{prop.description}</Text>
        </div>
    )
}

export default function Home() {
    const freelancers = [
        {
            id: 'f_rep_tech',
            description: 'Jarrod has been a repair technician for 12 years servicing the south west with desktop, laptop and mobile repairs of all kinds',
            title: 'Repair Technician',
            badges: [
                {
                    color: theme.primaryColor,
                    title: 'Started 2012',
                    variant: 'light'
                },
                {
                    color: undefined,
                    title: '12 years',
                    variant: 'default'
                }
            ],
            linkTo: 'f_rep_tech_detailed',
            hideReadMode: true
        },
        {
            id: 'f_sen_soft_dev',
            description: 'Jarrod has been a freelance software developer for over 14 years having started out as a website developer and later an application developer',
            title: 'Senior Software Developer',
            badges: [
                {
                    color: theme.primaryColor,
                    title: 'Started 2010',
                    variant: 'light'
                },
                {
                    color: undefined,
                    title: '14 years',
                    variant: 'default'
                }
            ],
            linkTo: 'f_sen_soft_dev_detailed',
            hideReadMode: false,
            details: {
                id: 'f_sen_soft_dev_detailed',
                businesses: [
                    {
                        name: 'Australian Karaoke Pty Ltd',
                        type: 'Freelance'
                    },
                    {
                        name: 'Blueprint Health & Fitness',
                        type: 'Subcontracted'
                    },
                    {
                        name: 'Seniors Card Discount',
                        type: 'Subcontracted'
                    },
                    {
                        name: 'Texts',
                        type: 'Subcontracted'
                    },
                    {
                        name: 'Wopadu',
                        type: 'Freelance'
                    }
                ],
                description: 'Shown above are some of the projects Jarrod has worked on',
                roles: [

                ]
            }
        },
        {
            id: 'f_painter',
            description: 'Jarrod has been a freelance painter for 4 years on and off doing requests on AirTasker as well as subcontracted by smaller painting companies',
            title: 'Painter',
            badges: [
                {
                    color: theme.primaryColor,
                    title: 'Started 2014',
                    variant: 'light'
                },
                {
                    color: undefined,
                    title: '4 years',
                    variant: 'default'
                }
            ],
            linkTo: 'f_painter_detailed',
            hideReadMode: false,
            details: {
                id: 'f_painter_detailed',
                businesses: [],
                description: 'Shown above are a handful of pictures demonstrating Jarrod\'s work',
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
                    '/IMG_1897.jpg',
                    '/IMG_1898.jpg',
                    '/IMG_1899.jpg',

                    '/IMG_1900.jpg',
                    '/IMG_1901.jpg',
                    '/IMG_1902.jpg',
                    '/IMG_1903.jpg'
                ],
                roles: [

                ]
            }
        }
    ]

    const freelancers_mapped = freelancers.sort((lhs, rhs) => lhs.title.localeCompare(rhs.title)).map((freelance) => (
        <>
            <Grid.Col span={{ base: 12, md: 6 }}>
                <FWECard {...freelance} />
            </Grid.Col>
        </>
    ))

    const freelancers_details_mapped = freelancers.filter((element) => element.details).map((element, index) => {
        const slides = element.details?.images?.map((element) => (
            <Carousel.Slide>
                <Paper radius={'md'} style={{ overflow: 'hidden' }} withBorder>
                    <AspectRatio ratio={1 / 1}>
                        <Image src={element} />
                    </AspectRatio>
                </Paper>
            </Carousel.Slide>
        ))

        const businessSlides = element.details?.businesses?.map((element) => (
            <Card id={element.name} radius={'md'} withBorder>
                <Badge variant='light'>
                    {element.type}
                </Badge>

                <Space h={'md'} />

                <Title order={4}>
                    {element.name}
                </Title>
            </Card>
        ))

        return (
            <>
                <Title id={element.details?.id} order={3}>
                    {element.title}
                </Title>
                <Space h={'sm'} />
                <SimpleGrid cols={{ base: 1, md: 3 }} hidden={businessSlides == null}>
                    {businessSlides}
                </SimpleGrid>
                <Carousel align={'start'} hidden={slides == null} slideGap={'md'} slideSize={{ base: '50%', md: '25%' }}>
                    {slides}
                </Carousel>
                <Space h={'sm'} />
                <Group>
                    <ActionIcon size={'sm'} variant="transparent">
                        <IconQuote />
                    </ActionIcon>
                    <Text>{element.details?.description}</Text>
                </Group>
                <Space h={index == (freelancers.filter((element) => element.details).length - 1) ? 0 : 'md'} />
            </>
        )
    })

    const work_experiences = [
        {
            id: 'we_floor_xtra',
            description: 'Jarrod was hired by Flooring Xtra initially to sell furniture to customers but within weeks the role would switch over to installing carpet, vinyl and more across the south',
            title: 'Flooring Xtra',
            badges: [
                {
                    color: theme.primaryColor,
                    title: 'Started 201X',
                    variant: 'light'
                },
                {
                    color: undefined,
                    title: '1 year',
                    variant: 'default'
                }
            ],
            hideReadMode: true
        },
        {
            id: 'we_texts',
            description: 'Jarrod was hired by Texts to work on several new features including OpenAI integration for speech to text, automatic message deletion support for Telegram and to fix general issues throughout the application on iPad and iPhone',
            title: 'Texts',
            badges: [
                {
                    color: theme.primaryColor,
                    title: 'Started 201X',
                    variant: 'light'
                },
                {
                    color: undefined,
                    title: '2 months',
                    variant: 'default'
                }
            ],
            hideReadMode: true
        },
        {
            id: 'we_aus_kar_pty_ltd',
            description: 'Jarrod was hired by Australian Karaoke Pty Ltd to design and develop a new and improved version of their existing RealKaraoke application on iPad with the addition of support for iPhone',
            title: 'Australian Karaoke Pty Ltd',
            badges: [
                {
                    color: theme.primaryColor,
                    title: 'Started 201X',
                    variant: 'light'
                },
                {
                    color: undefined,
                    title: '2 years',
                    variant: 'default'
                }
            ],
            hideReadMode: true
        },
        {
            id: 'we_sen_disc',
            description: 'Jarrod was hired by Seniors Card Discount  to design and develop a new and improved version of their existing Senior Cards Discount application',
            title: 'Seniors Card Discount',
            badges: [
                {
                    color: theme.primaryColor,
                    title: 'Started 201X',
                    variant: 'light'
                },
                {
                    color: undefined,
                    title: '3 years',
                    variant: 'default'
                }
            ],
            hideReadMode: true
        },
        {
            id: 'we_blu_health_fitness',
            description: 'Jarrod was hired by Blueprint Health & Fitness to fix issues with the layout of the application on iPhone X and higher and YouTube videos not displaying correctly',
            title: 'Blueprint Health & Fitness',
            badges: [
                {
                    color: theme.primaryColor,
                    title: 'Started 201X',
                    variant: 'light'
                },
                {
                    color: undefined,
                    title: '1 month',
                    variant: 'default'
                }
            ],
            hideReadMode: true
        },
        {
            id: 'we_wop',
            description: 'Jarrod was hired by Wopadu initially to redesign images used within the application but later assisted in the development of the frontend',
            title: 'Wopadu',
            badges: [
                {
                    color: theme.primaryColor,
                    title: 'Started 201X',
                    variant: 'light'
                },
                {
                    color: undefined,
                    title: '3 years',
                    variant: 'default'
                }
            ],
            hideReadMode: true
        }
    ].sort((lhs, rhs) => lhs.title.localeCompare(rhs.title)).map((work_experience) => (
        <>
            <Grid.Col span={{ base: 12, md: 6 }}>
                <FWECard {...work_experience} />
            </Grid.Col>
        </>
    ))

    const date = new Date()
    const forceDarkMode = false

    return (
        <MantineProvider theme={theme} forceColorScheme={forceDarkMode ? "dark" : date.getHours() >= 5 && date.getHours() <= 17 ? "light" : "dark"}>
            <Container my={'xl'}>
                <Group justify="space-between">
                    <Title order={1}>
                        Jarrod Norwell
                    </Title>
                    <Group>
                        {/*<ActionIcon component="a" href="mailto:official.antique@gmail.com" variant="transparent">
                            <IconMail />
                        </ActionIcon>
                        <ActionIcon component="a" href="tel:+61499152077" color="green" variant="transparent">
                            <IconPhone />
                        </ActionIcon>*/}
                        <ActionIcon component="a" href="https://reddit.com/u/antique_codes" color="red" variant="transparent">
                            <IconBrandReddit />
                        </ActionIcon>
                        <ActionIcon component="a" href="https://twitch.tv/antique_codes" variant="transparent">
                            <IconBrandTwitch />
                        </ActionIcon>
                        <ActionIcon component="a" href="https://twitter.com/antique_codes" color="blue" variant="transparent">
                            <IconBrandTwitter />
                        </ActionIcon>
                    </Group>
                </Group>

                <Divider my="md" />

                <Title order={2}>
                    About
                </Title>
                <Space h={'sm'} />
                <Text c={'dimmed'}>
                    Jarrod Norwell is a Senior Software Developer with 14 years experience spanning across roughly 14 programming languages having worked freelance most of his professional career with companies such as <Anchor fw={700} href="#we_aus_kar_pty_ltd">Australian Karaoke Pty Ltd</Anchor>, <Anchor fw={700} href="#we_blu_health_fitness">Blueprint Health & Fitness</Anchor>, <Anchor fw={700} href="#we_texts">Texts</Anchor> and <Anchor fw={700} href="#we_wop">Wopadu</Anchor>
                </Text>

                <Divider my="md" />

                <Title order={2}>
                    Freelance
                </Title>
                <Space h={'sm'} />
                <Grid>
                    {freelancers_mapped}
                </Grid>

                <Divider my="md" />

                <Title order={2}>
                    Work Experience
                </Title>
                <Space h={'sm'} />
                <Grid>
                    {work_experiences}
                </Grid>

                <Divider my="md" />

                <Title order={2}>
                    Freelance (cont.)
                </Title>
                <Space h={'sm'} />
                {freelancers_details_mapped}
            </Container>
        </MantineProvider>
    )
}
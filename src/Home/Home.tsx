import "@mantine/core/styles.css";
import { Anchor, Container, MantineProvider, Group, Badge, Space, Text, Title, Grid, Divider, ActionIcon } from "@mantine/core";
import { IconBrandReddit, IconBrandTwitch, IconBrandTwitter } from "@tabler/icons-react";
import { theme } from "../theme";

interface BadgeProp {
    color: string | undefined, title: string, variant: string | undefined
}

interface Prop {
    id: string, description: string, title: string
    badges: Array<BadgeProp>
}

export function FWECard(prop: Prop) {
    const badges = prop.badges.map((badge) => (
        <Badge color={badge.color} variant={badge.variant}>{badge.title}</Badge>
    ));

    return (
        <div key={prop.id}>
            <Title id={prop.id} order={3}>
                {prop.title}
            </Title>
            <Space h={'sm'} />
            <Group>
                {badges}
            </Group>
            <Space h={'sm'} />
            <Text c={'dimmed'}>{prop.description}</Text>
        </div>
    );
}

export default function Home() {
    const freelancers = [
        {
            id: 'f_rep_tech',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat malesuada tortor. Vivamus ligula orci, tempus ut gravida et, sodales in arcu. Nulla facilisi. Nam dignissim enim non odio tempor.',
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
            ]
        },
        {
            id: 'f_sen_soft_dev',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat malesuada tortor. Vivamus ligula orci, tempus ut gravida et, sodales in arcu. Nulla facilisi. Nam dignissim enim non odio tempor.',
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
            ]
        },
        {
            id: 'f_painter',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat malesuada tortor. Vivamus ligula orci, tempus ut gravida et, sodales in arcu. Nulla facilisi. Nam dignissim enim non odio tempor.',
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
            ]
        }
    ].sort((lhs, rhs) => lhs.title.localeCompare(rhs.title)).map((freelance) => (
        <>
            <Grid.Col span={{ base: 12, md: 6 }}>
                <FWECard {...freelance} />
            </Grid.Col>
        </>
    ));

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
            ]
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
            ]
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
            ]
        },
        {
            id: 'we_sen_disc',
            description: 'Jarrod was hired by Seniors Card Discount...',
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
            ]
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
            ]
        },
        {
            id: 'we_wop',
            description: 'Jarrod was hired by Wopadu initially to redesign images used within the application but later assisted in the development of frontend',
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
            ]
        }
    ].sort((lhs, rhs) => lhs.title.localeCompare(rhs.title)).map((work_experience) => (
        <>
            <Grid.Col span={{ base: 12, md: 6 }}>
                <FWECard {...work_experience} />
            </Grid.Col>
        </>
    ));


    return (
        <MantineProvider theme={theme}>
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
                    {freelancers}
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

                <Title order={4} ta={'center'}>
                    To Be Continued
                </Title>
            </Container>
        </MantineProvider>
    );
}
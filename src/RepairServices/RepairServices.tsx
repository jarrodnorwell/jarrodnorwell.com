import { ActionIcon, Avatar, AvatarGroup, Card, Container, Grid, Group, MantineProvider, Space, Stack, Text, Title, Tooltip } from '@mantine/core';
import { theme } from '../theme';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { IconDeviceDesktop, IconDeviceMobile, IconHammer, IconPhone } from '@tabler/icons-react';
import { useOs } from '@mantine/hooks';

export default function RepairServices() {
    return (
        <MantineProvider theme={{ ...theme, primaryColor: 'blue' }}>
            <Container py={'xl'} size={'xl'}>
                <Group justify={'space-between'}>
                    <Group>
                        <Stack>
                            <Title order={1}>Repair Services</Title>
                            <Text c={'dimmed'}>Professional desktop and mobile repair services</Text>
                        </Stack>
                    </Group>
                    <Group justify={['android', 'ios'].includes(useOs()) ? undefined : 'flex-end'}>
                        {
                            [
                                {
                                    color: 'green',
                                    icon: <IconPhone />,
                                    link: 'tel:0499 152 077',
                                    title: 'Call me, maybe?'
                                }
                            ].map((element) => {
                                return (
                                    <Tooltip label={
                                        <Stack gap={0}>
                                            <Text>{element.title}</Text>
                                            <Text c={'dimmed'} size={'sm'}>{element.link.replace('https://', '').replace('mailto:', '').replace('tel:', '')}</Text>
                                        </Stack>
                                    }>
                                        <ActionIcon color={element.color} component={'a'} href={element.link} variant={'transparent'}>{element.icon}</ActionIcon>
                                    </Tooltip>
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
                            <IconDeviceDesktop />
                        </Avatar>
                        <Avatar radius={'xl'} size={'lg'}>
                            <IconDeviceMobile />
                        </Avatar>
                        <Avatar color={'blue'} radius={'xl'} size={'lg'}>
                            <IconHammer />
                        </Avatar>
                    </AvatarGroup>

                    <Title order={1}>About</Title>
                    <Text c={'dimmed'} ta={'center'}>Professional desktop and mobile repairs, from simple battery and screen replacements to complete housing swaps, data backups, hardware upgrades, software installations, virus removal and fully custom-built PCs. With over 16 years of hands-on experience, Jarrod provides reliable, high-quality workmanship and personalised service you can trust</Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Group>
                    <Stack>
                        <Title order={1}>Desktop Services</Title>
                        <Text c={'dimmed'}>Under construction</Text>
                    </Stack>
                </Group>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Group>
                    <Stack>
                        <Title order={1}>Mobile Services</Title>
                        <Text c={'dimmed'}>Battery not holding charge? Cracked the screen? Dented the housing? Whatever the issue, get it fixed</Text>

                        <Space h={'xl'} />

                        <Grid gap={'xl'}>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Title order={2}>Batteries</Title>
                                <Text c={'dimmed'}>Batteries degrade over time reducing device performance and the time the device can be powered. Replacing the battery restores device lifespan and performance</Text>

                                <Space h={'xl'} />

                                <Grid>
                                    {
                                        [
                                            { brand: 'Apple', starting_price: '$29' },
                                            { brand: 'Google', starting_price: '$29' },
                                            { brand: 'Samsung', starting_price: '$29' }
                                        ].map((element) => (
                                            <Grid.Col span={{ base: 12, md: 6 }}>
                                                <Card pl={'xl'} pr={'lg'} py={'sm'} radius={'xl'} shadow={'md'} withBorder>
                                                    <Group justify={'space-between'}>
                                                        <Title fw={'normal'} ta={'left'} order={2}>{element.brand}</Title>
                                                        <Stack gap={0}>
                                                            <Text c={'dimmed'} size={'sm'} ta={'right'}>from</Text>
                                                            <Title ta={'right'} order={2}>{element.starting_price}</Title>
                                                        </Stack>
                                                    </Group>
                                                </Card>
                                            </Grid.Col>
                                        ))
                                    }
                                </Grid>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Title order={2}>Displays</Title>
                                <Text c={'dimmed'}>Displays can be damaged from numerous causes, including drops, impacts, and exposure to liquids. Replacing the display restores functionality to the device</Text>

                                <Space h={'xl'} />

                                <Grid>
                                    {
                                        [
                                            { brand: 'Apple', starting_price: '$29' },
                                            { brand: 'Google', starting_price: '$29' },
                                            { brand: 'Samsung', starting_price: '$29' }
                                        ].map((element) => (
                                            <Grid.Col span={{ base: 12, md: 6 }}>
                                                <Card pl={'xl'} pr={'lg'} py={'sm'} radius={'xl'} shadow={'md'} withBorder>
                                                    <Group justify={'space-between'}>
                                                        <Title fw={'normal'} ta={'left'} order={2}>{element.brand}</Title>
                                                        <Stack gap={0}>
                                                            <Text c={'dimmed'} size={'sm'} ta={'right'}>from</Text>
                                                            <Title ta={'right'} order={2}>{element.starting_price}</Title>
                                                        </Stack>
                                                    </Group>
                                                </Card>
                                            </Grid.Col>
                                        ))
                                    }
                                </Grid>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Title order={2}>Housing</Title>
                                <Text c={'dimmed'}>Housings are one of the easiest parts of a device to damage, whether it's from a drop or impact. Replacing the housing restores the appearance of the device</Text>

                                <Space h={'xl'} />

                                <Grid>
                                    {
                                        [
                                            { brand: 'Apple', starting_price: '$29' },
                                            { brand: 'Google', starting_price: '$29' },
                                            { brand: 'Samsung', starting_price: '$29' }
                                        ].map((element) => (
                                            <Grid.Col span={{ base: 12, md: 6 }}>
                                                <Card pl={'xl'} pr={'lg'} py={'sm'} radius={'xl'} shadow={'md'} withBorder>
                                                    <Group justify={'space-between'}>
                                                        <Title fw={'normal'} ta={'left'} order={2}>{element.brand}</Title>
                                                        <Stack gap={0}>
                                                            <Text c={'dimmed'} size={'sm'} ta={'right'}>from</Text>
                                                            <Title ta={'right'} order={2}>{element.starting_price}</Title>
                                                        </Stack>
                                                    </Group>
                                                </Card>
                                            </Grid.Col>
                                        ))
                                    }
                                </Grid>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Title order={2}>Internals</Title>
                                <Text c={'dimmed'}>Internals are the core of the device and can be damaged from a harsh impact. Replacing internals is necessary for the device to function properly</Text>

                                <Space h={'xl'} />

                                <Grid>
                                    {
                                        [
                                            { brand: 'Apple', starting_price: '$29' },
                                            { brand: 'Google', starting_price: '$29' },
                                            { brand: 'Samsung', starting_price: '$29' }
                                        ].map((element) => (
                                            <Grid.Col span={{ base: 12, md: 6 }}>
                                                <Card pl={'xl'} pr={'lg'} py={'sm'} radius={'xl'} shadow={'md'} withBorder>
                                                    <Group justify={'space-between'}>
                                                        <Title fw={'normal'} ta={'left'} order={2}>{element.brand}</Title>
                                                        <Stack gap={0}>
                                                            <Text c={'dimmed'} size={'sm'} ta={'right'}>from</Text>
                                                            <Title ta={'right'} order={2}>{element.starting_price}</Title>
                                                        </Stack>
                                                    </Group>
                                                </Card>
                                            </Grid.Col>
                                        ))
                                    }
                                </Grid>
                            </Grid.Col>
                        </Grid>
                    </Stack>
                </Group>
            </Container >
        </MantineProvider >
    )
}
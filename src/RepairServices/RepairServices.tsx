import { ActionIcon, AspectRatio, Avatar, AvatarGroup, Blockquote, Card, Container, Grid, Group, MantineProvider, Space, Stack, Table, Text, Title, Tooltip } from '@mantine/core';


import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { IconDeviceDesktop, IconDeviceDesktopPlus, IconDeviceDesktopUp, IconDeviceMobile, IconHammer, IconInfoCircle, IconMessage, IconPhone, IconShield } from '@tabler/icons-react';
import { useOs } from '@mantine/hooks';

import { load } from "@apple/mapkit-loader";
import { useEffect, useRef } from 'react';
import { theme } from '../theme';

export default function RepairServices() {
    const mapElement = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let cancelled = false

        const initializeMap = async () => {

            try {
                const mapkit = await load({
                    token: 'eyJraWQiOiI5R1hBV1o5ODQ2IiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJaM1pFQUJZWTZQIiwiaWF0IjoxNzkxNTU5Njc2LCJzY29wZSI6Im1hcGtpdF9qcyIsImV4cCI6MTc5MjIyMDM5OX0.bgfgHu0YdDV8ewAQjaoiQi-mRdZN4kgwVoHYZW6-9ty6aN-hTtH7ia1XVz7h0rTjbDSqXdKb2C_F4s9a2LCNRw',
                    language: 'en-AU',
                    libraries: [
                        'full-map',
                        'overlays'
                    ]
                })

                if (cancelled || !mapElement.current)
                    return

                const center = new mapkit.Coordinate(-32.9308, 117.1781);
                const span = new mapkit.CoordinateSpan(1.25);
                const region = new mapkit.CoordinateRegion(center, span);

                const map = new mapkit.Map(mapElement.current, {
                    region,
                    colorScheme: mapkit.ColorScheme.Adaptive,
                    isScrollEnabled: false,
                    isZoomEnabled: false,
                    isRotationEnabled: false,
                    showsZoomControl: false,
                    showsCompass: mapkit.FeatureVisibility.Hidden
                });

                const radiusInMeters = 50 * 1000;
                const circleStyle = new mapkit.Style({
                    strokeColor: '#007AFF',
                    lineWidth: 2,
                    fillColor: '#007AFF',
                    fillOpacity: 0.05
                })

                const circleOverlay = new mapkit.CircleOverlay(
                    center,
                    radiusInMeters,
                    { style: circleStyle }
                )

                map.addOverlay(circleOverlay)
            } catch (error) {
                console.error('Failed to initialize Apple MapKit:', error)
            }
        }

        initializeMap()

        return () => { cancelled = true }
    }, [])

    return (
        <MantineProvider theme={{ ...theme }} defaultColorScheme={'auto'}>
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

                <Stack>
                    <AspectRatio ratio={16 / 9}>
                        <Card padding={0} radius={'1.5rem'} shadow={'md'} withBorder>
                            <div id={'map'} ref={mapElement} style={{ borderRadius: '1.5rem', width: '100%', height: '100%', overflow: 'hidden' }} />
                        </Card>
                    </AspectRatio>
                    <Text c={'orange'}>Delivery and pick-up is available free of charge within Narrogin, additional fees for fuel apply for surrounding towns</Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Group>
                    <Stack>
                        <Group justify={'space-between'}>
                            <Title order={1}>Desktop Services</Title>
                            <Group>
                                <Tooltip label={
                                    <Stack gap={0}>
                                        <Text>Send a message</Text>
                                        <Text c={'dimmed'} size={'sm'}>m.me/jarrodjnorwell</Text>
                                    </Stack>
                                }>
                                    <ActionIcon color={'blue'} component={'a'} href={'https://m.me/jarrodjnorwell'} variant={'transparent'}>
                                        <IconMessage />
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label={
                                    <Stack gap={0}>
                                        <Text>Make a call</Text>
                                        <Text c={'dimmed'} size={'sm'}>0499 152 077</Text>
                                    </Stack>
                                }>
                                    <ActionIcon color={'green'} component={'a'} href={'tel:0499152077'} variant={'transparent'}>
                                        <IconPhone />
                                    </ActionIcon>
                                </Tooltip>
                            </Group>
                        </Group>
                        <Text c={'dimmed'}>Desktop running slow? Obnoxious or unknown popups appearing or need a brand new system or upgrade to handle the tasks at hand? Get it all below</Text>

                        <Space />

                        <Grid gap={'xl'}>
                            <Grid.Col span={{ base: 12 }}>
                                <Grid>
                                    {
                                        [
                                            {
                                                icon: <IconDeviceDesktopPlus style={{ width: '100%', height: '100%' }} />,
                                                text: 'Custom Builds',
                                                secondaryText: 'Get a fully customised desktop built to your specifications, whether it be for gaming, work, or general use, all within the provided budget, if possible'
                                            },
                                            {
                                                icon: <IconDeviceDesktopUp style={{ width: '100%', height: '100%' }} />,
                                                text: 'Desktop Upgrade',
                                                secondaryText: 'Games or programs not running as well as they should? Get a full review and upgrade your system so it can handle any of the tasks you want to throw at it'
                                            },
                                            {
                                                icon: <IconShield style={{ width: '100%', height: '100%' }} />,
                                                text: 'Virus Removal',
                                                secondaryText: 'Accidently clicked on a dodgy link, downloaded and ran a suspicious file or want to make sure your system is clean? Get a full virus scan and removal'
                                            }
                                        ].map((element) => (
                                            <Grid.Col span={{ base: 12, md: 6 }}>
                                                <Card p={'xl'} radius={'xl'} shadow={'md'} withBorder>
                                                    <Stack>
                                                        <Group>
                                                            <ActionIcon c={'blue'} size={'lg'} variant={'transparent'}>
                                                                {element.icon}
                                                            </ActionIcon>
                                                            <Title order={2}>{element.text}</Title>
                                                        </Group>
                                                        <Text c={'dimmed'}>{element.secondaryText}</Text>
                                                    </Stack>
                                                </Card>
                                            </Grid.Col>
                                        ))
                                    }
                                </Grid>
                            </Grid.Col>
                        </Grid>
                    </Stack>
                </Group>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Group>
                    <Stack>
                        <Title order={1}>Mobile Services</Title>
                        <Text c={'dimmed'}>Battery not holding charge? Cracked the screen? Dented the housing? Whatever the issue, get it fixed</Text>

                        <Space />

                        <Grid gap={'xl'}>
                            <Grid.Col span={{ base: 12, md: 4 }}>
                                <Title order={2}>Batteries</Title>
                                <Text c={'dimmed'}>Batteries degrade over time reducing device performance and the time the device can be powered. Replacing the battery restores device lifespan and performance</Text>

                                <Space h={'xl'} />

                                <Card radius={'xl'} shadow={'md'} withBorder>
                                    <Table>
                                        <Table.Thead>
                                            <Table.Tr>
                                                <Table.Th>Brand</Table.Th>
                                                <Table.Th>Average Repair Time</Table.Th>
                                                <Table.Th>Starting Price</Table.Th>
                                            </Table.Tr>
                                        </Table.Thead>

                                        <Table.Tbody>
                                            {
                                                [
                                                    { average_repair_time: 30, brand: 'Apple', starting_from: '90' },
                                                    { average_repair_time: 60, brand: 'Google', starting_from: '80' },
                                                    { average_repair_time: 60, brand: 'Samsung', starting_from: '90' }
                                                ].map((element) => (
                                                    <Table.Tr key={element.brand}>
                                                        <Table.Td>{element.brand}</Table.Td>
                                                        <Table.Td>{element.average_repair_time} mins</Table.Td>
                                                        <Table.Td>${element.starting_from}</Table.Td>
                                                    </Table.Tr>
                                                ))
                                            }
                                        </Table.Tbody>
                                    </Table>
                                </Card>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 4 }}>
                                <Title order={2}>Displays</Title>
                                <Text c={'dimmed'}>Displays can be damaged from numerous causes, including drops, impacts, and exposure to liquids. Replacing the display restores functionality to the device</Text>

                                <Space h={'xl'} />

                                <Card radius={'xl'} shadow={'md'} withBorder>
                                    <Table>
                                        <Table.Thead>
                                            <Table.Tr>
                                                <Table.Th>Brand</Table.Th>
                                                <Table.Th>Average Repair Time</Table.Th>
                                                <Table.Th>Starting Price</Table.Th>
                                            </Table.Tr>
                                        </Table.Thead>

                                        <Table.Tbody>
                                            {
                                                [
                                                    { average_repair_time: 30, brand: 'Apple', starting_from: '75' },
                                                    { average_repair_time: 60, brand: 'Google', starting_from: '125' },
                                                    { average_repair_time: 60, brand: 'Samsung', starting_from: '80' }
                                                ].map((element) => (
                                                    <Table.Tr key={element.brand}>
                                                        <Table.Td>{element.brand}</Table.Td>
                                                        <Table.Td>{element.average_repair_time} mins</Table.Td>
                                                        <Table.Td>${element.starting_from}</Table.Td>
                                                    </Table.Tr>
                                                ))
                                            }
                                        </Table.Tbody>
                                    </Table>
                                </Card>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Title order={2}>Housing</Title>
                                <Text c={'dimmed'}>Housings are one of the easiest parts of a device to damage, whether it's from a drop or impact. Replacing the housing restores the appearance of the device</Text>

                                <Blockquote color={'orange'} iconSize={38} icon={<IconInfoCircle />} radius={'xl'} mt={'xl'}>
                                    Due to only a large handful of devices having housing parts available, pricing for repairs is not available. Please contact me for a quote
                                </Blockquote>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Title order={2}>Internals</Title>
                                <Text c={'dimmed'}>Internals are the core of the device and can be damaged from a harsh impact. Replacing internals is necessary for the device to function properly</Text>

                                <Blockquote color={'orange'} iconSize={38} icon={<IconInfoCircle />} radius={'xl'} mt={'xl'}>
                                    Due to the wide variety of internal components, pricing for repairs is not available. Please contact me for a quote
                                </Blockquote>
                            </Grid.Col>
                        </Grid>

                        <Space h={'xl'} />

                        <Text c={'dimmed'} ta={'center'}>© {new Date().getFullYear()} Jarrod Norwell</Text>
                    </Stack>
                </Group>
            </Container >
        </MantineProvider >
    )
}
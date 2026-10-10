import { ActionIcon, AspectRatio, Avatar, AvatarGroup, Card, Container, Grid, Group, MantineProvider, Space, Stack, StyleProp, Table, Text, Title } from '@mantine/core';


import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { IconDeviceDesktop, IconDeviceDesktopPlus, IconDeviceDesktopUp, IconDeviceMobile, IconHammer, IconMessage, IconPhone, IconProps, IconShield } from '@tabler/icons-react';
import { useOs } from '@mantine/hooks';

import { load } from "@apple/mapkit-loader";
import { useEffect, useRef } from 'react';
import { theme } from '../theme';

export interface DesktopItem {
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
    title: string
    subtitle?: string

    tintColor?: string,

    span?: StyleProp<number | 'auto' | 'content'>
}

export interface MobileItem {
    type: 'mobile'

    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
    title: string
    subtitle?: string

    tintColor?: string,

    span?: StyleProp<number | 'auto' | 'content'>
}

export interface MobileTableItem {
    type: 'mobileTable'

    title: string
    subtitle?: string

    tableHeaders: Array<string>
    tableElements: Array<[brand: string, avg_repair_time: string, starting_price: string]>

    span?: StyleProp<number | 'auto' | 'content'>
}

export function DesktopItemCol(item: DesktopItem) {
    const Icon = item.icon

    return (
        <Grid.Col span={item.span ?? { base: 12, md: 6 }}>
            <Card p={'xl'} radius={'xl'} shadow={'md'} withBorder>
                <Stack>
                    <Group>
                        <ActionIcon c={item.tintColor ?? theme.primaryColor} size={'lg'} variant={'transparent'}>
                            <Icon height={'100%'} width={'100%'} />
                        </ActionIcon>
                        <Title order={2}>{item.title}</Title>
                    </Group>
                    <Text c={'dimmed'} hidden={item.subtitle == undefined}>{item.subtitle}</Text>
                </Stack>
            </Card>
        </Grid.Col>
    )
}

export function MobileItemCol(item: MobileItem) {
    const Icon = item.icon

    return (
        <Grid.Col span={item.span ?? { base: 12, md: 6 }}>
            <Title order={2}>{item.title}</Title>
            <Text c={'dimmed'}>{item.subtitle}</Text>

            <Space h={'xl'} />

            <Card p={'xl'} radius={'xl'} shadow={'md'} withBorder>
                <Stack>
                    <Group>
                        <ActionIcon c={item.tintColor ?? theme.primaryColor} size={'md'} variant={'transparent'}>
                            <Icon height={'100%'} width={'100%'} />
                        </ActionIcon>
                        <Title order={3}>{item.title}</Title>
                    </Group>
                    <Text c={'dimmed'} hidden={item.subtitle == undefined}>{item.subtitle}</Text>
                </Stack>
            </Card>
        </Grid.Col>
    )
}

export function MobileTableItemCol(item: MobileTableItem) {
    return (
        <Grid.Col span={item.span ?? { base: 12, md: 6 }}>
            <Title order={2}>{item.title}</Title>
            <Text c={'dimmed'}>{item.subtitle}</Text>

            <Space h={'xl'} />

            <Card p={['android', 'ios'].includes(useOs()) ? 'md' : 'xl'} radius={'xl'} shadow={'md'} withBorder>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            {
                                item.tableHeaders.map((header) => (
                                    <Table.Th>
                                        <Title order={['android', 'ios'].includes(useOs()) ? 6 : 3}>{header}</Title>
                                    </Table.Th>
                                ))
                            }
                        </Table.Tr>
                    </Table.Thead>

                    <Table.Tbody>
                        {
                            item.tableElements.map((row) => (
                                <Table.Tr key={row[0]}>
                                    {
                                        row.map((col) => (
                                            <Table.Td>
                                                <Text size={['android', 'ios'].includes(useOs()) ? 'sm' : 'md'}>{col}</Text>
                                            </Table.Td>
                                        ))
                                    }
                                </Table.Tr>
                            ))
                        }
                    </Table.Tbody>
                </Table>
            </Card>
        </Grid.Col>
    )
}

export namespace COMMON {
    export namespace ROOT {
        export class HEADER {
            static readonly TITLE: string = 'Local & Surrounds Services'
            static readonly SUBTITLE: string = 'Professional repairs and services for all technology needs in the Narrogin and surrounding area'
        }

        export class ABOUT {
            static readonly TITLE: string = 'About Local & Surround Services'
            static readonly SUBTITLE: string = 'Local and professional repairs and services whether it be replacing the battery, display, etc. on a smartphone, cleaning out the charging port, building a custom desktop or upgrading an existing one, removing viruses or setting up software. Jarrod is able to do *almost* everything thrown at him with his over 16 years of experience'
        }

        export class MAP {
            static readonly SUBTITLE: string = 'Delivery and pick-up are available free of charge within Narrogin. Additional fees for fuel apply for surrounding towns'
        }

        export class DESKTOP {
            static readonly TITLE: string = 'Desktop Repairs & Services'
            static readonly SUBTITLE: string = 'Custom desktop builds and build upgrades, general troubleshooting, virus removal and more'

            static readonly ITEMS: Array<DesktopItem> = [
                {
                    icon: IconDeviceDesktopPlus,
                    title: 'Custom Desktops',
                    subtitle: 'Built from the ground up to every individuals requirements, a custom desktop allows for the customisation of every single part within the build',

                    tintColor: 'blue'
                },
                {
                    icon: IconDeviceDesktopUp,
                    title: 'Desktop Upgrades',
                    subtitle: 'Games and software of today require more and more power, upgrading the system is often cheaper and ensures everything runs smoothly',

                    tintColor: 'blue'
                },
                {
                    icon: IconShield,
                    title: 'Virus Removal',
                    subtitle: 'Removal of obnoxious notifications, unexplained popups, suspicious files and everything else associated ensuring the system is back to it\'s original operating state',

                    tintColor: 'blue',

                    span: { base: 12 }
                }
            ]
        }

        export class MOBILE {
            public static readonly TITLE: string = 'Mobile Repairs & Services'
            public static readonly SUBTITLE: string = 'Battery, charging port, display, housing, etc. replacements, virus removal and more'

            static readonly ITEMS: Array<MobileItem | MobileTableItem> = [
                {
                    type: 'mobile',
                    icon: IconDeviceDesktopPlus,
                    title: 'Custom Desktops',
                    subtitle: 'Built from the ground up to every individuals requirements, a custom desktop allows for the customisation of every single part within the build',

                    tintColor: 'blue'
                },
                {
                    type: 'mobile',
                    icon: IconDeviceDesktopPlus,
                    title: 'Custom Desktops',
                    subtitle: 'Built from the ground up to every individuals requirements, a custom desktop allows for the customisation of every single part within the build',

                    tintColor: 'blue'
                },
                {
                    type: 'mobileTable',
                    title: 'Custom Desktops',
                    subtitle: 'Built from the ground up to every individuals requirements, a custom desktop allows for the customisation of every single part within the build',

                    tableHeaders: [
                        'Brand',
                        'Avg. Repair Time',
                        'Starting Price'
                    ],
                    tableElements: [
                        ['Apple', '30 mins', '$90'],
                        ['Samsung', '30 mins', '$90']
                    ]
                }
            ]
        }
    }
}

export default function Local() {
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
                            <Title order={1}>{COMMON.ROOT.HEADER.TITLE}</Title>
                            <Text c={'dimmed'}>{COMMON.ROOT.HEADER.SUBTITLE}</Text>
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
                            ].map((element) => (
                                <ActionIcon color={element.color} component={'a'} href={element.link} variant={'transparent'}>{element.icon}</ActionIcon>
                            ))
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

                    <Title order={1}>{COMMON.ROOT.ABOUT.TITLE}</Title>
                    <Text c={'dimmed'} ta={'center'}>{COMMON.ROOT.ABOUT.SUBTITLE}</Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <AspectRatio ratio={16 / 9}>
                        <Card padding={0} radius={'1.5rem'} shadow={'md'} withBorder>
                            <div id={'map'} ref={mapElement} style={{ borderRadius: '1.5rem', width: '100%', height: '100%', overflow: 'hidden' }} />
                        </Card>
                    </AspectRatio>
                    <Text c={'orange'}>{COMMON.ROOT.MAP.SUBTITLE}</Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Group>
                    <Stack>
                        <Group justify={'space-between'}>
                            <Stack>
                                <Group>
                                    <ActionIcon color={'blue'} component={'a'} href={'https://m.me/jarrodjnorwell'} variant={'transparent'}>
                                        <IconMessage />
                                    </ActionIcon>
                                    <ActionIcon color={'green'} component={'a'} href={'tel:0499152077'} variant={'transparent'}>
                                        <IconPhone />
                                    </ActionIcon>
                                </Group>
                                <Title order={1}>{COMMON.ROOT.DESKTOP.TITLE}</Title>
                            </Stack>
                        </Group>
                        <Text c={'dimmed'}>{COMMON.ROOT.DESKTOP.SUBTITLE}</Text>

                        <Space />

                        <Grid gap={'xl'}>
                            <Grid.Col span={{ base: 12 }}>
                                <Grid gap={'xl'}>
                                    {
                                        COMMON.ROOT.DESKTOP.ITEMS.map((item) => DesktopItemCol(item))
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
                        <Title order={1}>{COMMON.ROOT.MOBILE.TITLE}</Title>
                        <Text c={'dimmed'}>{COMMON.ROOT.MOBILE.SUBTITLE}</Text>

                        <Space />

                        <Grid gap={'xl'}>
                            {
                                COMMON.ROOT.MOBILE.ITEMS.map((item) => {
                                    switch (item.type) {
                                        case 'mobile':
                                            return (MobileItemCol(item))
                                        case 'mobileTable':
                                            return (MobileTableItemCol(item))
                                        default:
                                            return undefined
                                    }
                                })

                            /*
                            <Grid.Col span={{ base: 12, md: 6 }}>
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
                            <Grid.Col span={{ base: 12, md: 6 }}>
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
                                <Title order={2}>Housings</Title>
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
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Title order={2}>Cleaning</Title>
                                <Text c={'dimmed'}>Cleaning the charging port or the inside of the device itself can allow for a proper connection, prolong the life of the device and lower the risk of damage</Text>

                                <Space h={'xl'} />

                                <Card p={'xl'} radius={'xl'} shadow={'md'} withBorder>
                                    <Stack>
                                        <Group>
                                            <ActionIcon c={'blue'} size={'lg'} variant={'transparent'}>
                                                <IconLogout style={{ width: '100%', height: '100%' }} />
                                            </ActionIcon>
                                            <Title order={2}>External</Title>
                                        </Group>
                                        <Text c={'dimmed'}>External includes all external cleaning that does not require opening the device itself such as the charging port, cameras, housing, etc</Text>
                                    </Stack>
                                </Card>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Title order={2}>Cleaning</Title>
                                <Text c={'dimmed'}>Cleaning the charging port or the inside of the device itself can allow for a proper connection, prolong the life of the device and lower the risk of damage</Text>

                                <Space h={'xl'} />

                                <Card p={'xl'} radius={'xl'} shadow={'md'} withBorder>
                                    <Stack>
                                        <Group>
                                            <ActionIcon c={'blue'} size={'lg'} variant={'transparent'}>
                                                <IconLogin style={{ width: '100%', height: '100%' }} />
                                            </ActionIcon>
                                            <Title order={2}>Internal</Title>
                                        </Group>
                                        <Text c={'dimmed'}>Internal includes all internal cleaning that requires the device itself to be opened such as the internal cavity, logic boards, cameras, etc</Text>
                                    </Stack>
                                </Card>
                            </Grid.Col>
                            */}
                        </Grid>

                        <Space h={'xl'} />

                        <Text c={'dimmed'} ta={'center'}>© {new Date().getFullYear()} Jarrod Norwell</Text>
                    </Stack>
                </Group>
            </Container >
        </MantineProvider >
    )
}
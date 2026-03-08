import '@mantine/core/styles.css';
import { Avatar, AvatarGroup, Container, Flex, Group, MantineProvider, Space, Stack, Text, Title } from '@mantine/core';
import { theme } from '../theme';
import { IconDeviceMobile, IconDeviceDesktop } from '@tabler/icons-react';

import { RepairCard } from './RepairCard';

export default function AppleRepairs() {
    const date = new Date()

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 6 && date.getHours() <= 19 ? 'light' : 'dark'}>
            <Container my={'xl'} size={'xl'}>
                <Group>
                    <Stack>
                        <Title>
                            Apple Repairs
                        </Title>
                        <Text c={'dimmed'}>
                            iPad, iPhone and Mac
                        </Text>
                    </Stack>
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
                        <Avatar radius={'xl'} size={'lg'} src={'/jarrodnorwell.png'} />
                    </AvatarGroup>
                    <Title order={2}>
                        About
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Back glass, battery, charging port and screen replacements, device backups and restores and more
                    </Text>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        iPad Pro
                    </Title>
                    <Text c={'dimmed'}>
                        Repairs and services are available for the iPad Pro 9.7 and above, prices are listed as "starting from"
                    </Text>
                    <Flex>
                        {
                            [
                                { repair: 'Battery', price: 999, time: '1-2 hours' }
                            ].map((element) => (
                                <RepairCard repair={element.repair} price={element.price} time={element.time} />
                            ))
                        }
                    </Flex>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        iPad Air
                    </Title>
                    <Text c={'dimmed'}>
                        Repairs and services are available for the iPad Air 1 and above, prices are listed as "starting from"
                    </Text>
                    <Flex>
                        {
                            [
                                { repair: 'Battery', price: 999, time: '1-2 hours' }
                            ].map((element) => (
                                <RepairCard repair={element.repair} price={element.price} time={element.time} />
                            ))
                        }
                    </Flex>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        iPad mini
                    </Title>
                    <Text c={'dimmed'}>
                        Repairs and services are available for the iPad mini 1 and above, prices are listed as "starting from"
                    </Text>
                    <Flex>
                        {
                            [
                                { repair: 'Battery', price: 999, time: '1-2 hours' }
                            ].map((element) => (
                                <RepairCard repair={element.repair} price={element.price} time={element.time} />
                            ))
                        }
                    </Flex>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack>
                    <Title order={2}>
                        iPad
                    </Title>
                    <Text c={'dimmed'}>
                        Repairs and services are available for the iPad 2 and above, prices are listed as "starting from"
                    </Text>
                    <Flex>
                        {
                            [
                                { repair: 'Battery', price: 999, time: '1-2 hours' }
                            ].map((element) => (
                                <RepairCard repair={element.repair} price={element.price} time={element.time} />
                            ))
                        }
                    </Flex>
                </Stack>

                <Space h={'xl'} />
                <Space h={'xl'} />

                <Stack align={'center'}>
                    <Title order={2} ta={'center'}>
                        Under Development
                    </Title>
                    <Text c={'dimmed'}>
                        Please note, this website is always being worked on. Check back occasionally to see new changes
                    </Text>
                </Stack>
            </Container>
        </MantineProvider>
    )
}
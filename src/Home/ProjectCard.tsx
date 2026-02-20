import { Anchor, Group, Card, Stack, Avatar, Title, Text, VisuallyHidden } from '@mantine/core'
import { useOs } from '@mantine/hooks'
import { theme } from '../theme'

interface ProjectProp {
    image: string, impressions: string
    detailsLink?: string, link?: string
    project: string, price: string, subtitle: string
}

export function ProjectCard(prop: ProjectProp) {
    function AnchorOrText2() {
        if (prop.detailsLink) {
            return (
                <Anchor c={theme.primaryColor} href={prop.detailsLink} target={'_blank'}>
                    Details
                </Anchor>
            )
        } else {
            return (
                <VisuallyHidden />
            )
        }
    }

    function AnchorOrText() {
        if (prop.link) {
            return (
                <Group>
                    <AnchorOrText2 />
                    <Anchor c={'blue'} href={prop.link} target={'_blank'}>
                        Open in App Store
                    </Anchor>
                </Group>
            )
        } else {
            return (
                <Group>
                    <AnchorOrText2 />
                    <VisuallyHidden />
                </Group>
            )
        }
    }

    return (
        <Card padding={'lg'} radius={'xl'} withBorder>
            <Stack>
                <Group justify={'space-between'}>
                    <Avatar display={['android', 'ios'].includes(useOs()) ? undefined : 'none'} radius={'0%'} size={'lg'} src={`/${prop.image}.png`} />
                    <Stack>
                        <Group>
                            <Title order={3}>
                                {prop.project}
                            </Title>
                            <Title fw={500} order={3} c={'dimmed'}>
                                {prop.price}
                            </Title>
                        </Group>
                        <Text c={'dimmed'}>
                            {prop.subtitle}
                        </Text>
                    </Stack>
                    <Avatar display={['android', 'ios'].includes(useOs()) ? 'none' : undefined} radius={'0%'} size={'lg'} src={`/${prop.image}.png`} />
                </Group>
                <Group justify={'space-between'}>
                    <Group gap={5}>
                        <Text fw={600}>
                            {prop.impressions}
                        </Text>
                        <Text c={'dimmed'}>
                            views
                        </Text>
                    </Group>
                    <AnchorOrText />
                </Group>
            </Stack>
        </Card>
    )
}
import { Anchor, Card, Stack, Group, Avatar, Title, Text, VisuallyHidden } from '@mantine/core'
import { useOs } from '@mantine/hooks'

interface WorkProp {
    image: string
    link?: string
    company: string, role: string, subtitle: string
}

export function WorkCard(prop: WorkProp) {
    function AnchorOrText() {
        if (prop.link) {
            return (
                <Anchor c={'blue'} href={prop.link} target={'_blank'}>
                    Open in Browser
                </Anchor>
            )
        } else {
            return (
                <VisuallyHidden />
            )
        }
    }

    return (
        <Card padding={'lg'} radius={'xl'} withBorder>
            <Stack>
                <Group justify={'space-between'}>
                    <Card display={['android', 'ios'].includes(useOs()) ? undefined : 'none'} padding={'xs'} radius={'lg'} withBorder>
                        <Avatar radius={'md'} src={prop.image} />
                    </Card>
                    <Stack>
                        <Title order={3}>
                            {prop.company}
                        </Title>
                        <Text c={'dimmed'}>
                            {prop.subtitle}
                        </Text>
                    </Stack>
                    <Card display={['android', 'ios'].includes(useOs()) ? 'none' : undefined} padding={'xs'} radius={'lg'} withBorder>
                        <Avatar radius={'md'} src={prop.image} />
                    </Card>
                </Group>
                <Group justify={'space-between'}>
                    <Group gap={'xs'}>
                        <Text fw={600}>
                            {prop.role}
                        </Text>
                    </Group>
                    <AnchorOrText />
                </Group>
            </Stack>
        </Card >
    )
}
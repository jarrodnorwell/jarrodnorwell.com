import { Card, Group, Title } from '@mantine/core'

interface LanguageProp {
    language: string
    yoe: number
}

export function LanguageCard(prop: LanguageProp) {
    return (
        <Card padding={'lg'} radius={'lg'} withBorder>
            <Group align={'center'} justify={'space-between'}>
                <Title order={3}>
                    {prop.language}
                </Title>
                <Title c={'dimmed'} fw={500} order={3}>
                    {`${prop.yoe} years`}
                </Title>
            </Group>
        </Card>
    )
}
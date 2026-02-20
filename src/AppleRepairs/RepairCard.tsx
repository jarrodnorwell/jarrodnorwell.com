import { Badge, Text } from '@mantine/core'

interface RepairProp {
    repair: string, price: number, time: string
}

export function RepairCard(prop: RepairProp) {
    return (
        <Badge fw={700} size={'xl'} rightSection={
            <Text>
                {`$${prop.price}`}
            </Text>
        } variant={'light'}>
            {prop.repair}
        </Badge>
    )
}
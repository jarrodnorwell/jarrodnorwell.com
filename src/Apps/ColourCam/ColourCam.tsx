import '@mantine/core/styles.css';
import {
    Anchor, AspectRatio, Badge, Center, Container,
    Flex,
    Image,
    MantineProvider,
    Paper,
    Space,
    Stack, Text, Title
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { theme } from '../../theme';
import { useOs } from '@mantine/hooks';

export default function ColourCam() {
    const os = useOs();

    return (
        <MantineProvider theme={theme}>
            <Container>
                <Flex align={'center'} mih={'100vh'} justify={'center'}>
                    <Stack>
                        <Anchor href='https://twitter.com/antique_codes' target={'_blank'}>
                            <Text c={'colourCamPrimaryColor'} ta={'center'}>
                                @antique_codes
                            </Text>
                        </Anchor>
                        <Title order={1} ta={'center'}>
                            ColourCam
                        </Title>
                        <Center>
                            <Badge color={'green'} variant={'dot'}>
                                #main
                            </Badge>
                        </Center>
                        <Text c={'dimmed'} ta={'center'}>
                            Capture colour information from the environment around you in real-time
                        </Text>
                        {/*
                    <Space h={'md'} />
                    <Accordion radius={'lg'} variant={'contained'}>
                        {items}
                    </Accordion>
                    */}
                        <Space h={'md'} />
                        <Carousel withIndicators slideGap={'lg'} slideSize={['android', 'ios'].includes(os) ? '50%' : '20%'} align={'start'}>
                            {
                                [
                                    'S41XnH08/colourcam-new', '0jKqpfFP/colourcam-one', 'Jw8kNZgS/colourcam-two', 'r2ztd813/colourcam-three',
                                    'QvG75Pk7/colourcam-four'
                                ].map((image) => (
                                    <>
                                        <Carousel.Slide>
                                            <Paper radius={['android', 'ios'].includes(os) ? 'lg' : 'xl'} style={{ overflow: 'hidden' }} withBorder>
                                                <AspectRatio ratio={9 / 19.5}>
                                                    <Image src={`https://i.ibb.co/${image}.png`} fit='contain' loading='lazy' />
                                                </AspectRatio>
                                            </Paper>
                                        </Carousel.Slide>
                                    </>
                                ))
                            }
                        </Carousel>
                    </Stack>
                </Flex>
            </Container>
        </MantineProvider>
    )
}
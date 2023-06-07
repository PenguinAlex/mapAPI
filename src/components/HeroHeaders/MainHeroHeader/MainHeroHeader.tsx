import {Overlay, Container, Title, Button, Text,} from '@mantine/core';
import {useStyles} from "./styles.ts";


export const MainHeroHeader =  ()  => {
    const {classes} = useStyles();

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <Title className={classes.title}>PORTAL - VR online Multiverse</Title>
                <Text className={classes.description} size="xl" mt="xl">
                    Мультивселенная работает из веб-браузера на настольных компьютерах, смартфонах, планшетах и гарнитурах виртуальной реальности. Для использования ничего дополнительно устанавливать не нужно.

                </Text>

                <Button  size="xl" radius="xl" className={classes.control}>
                    Открытое тестирование
                </Button>
            </Container>
        </div>
    );
}
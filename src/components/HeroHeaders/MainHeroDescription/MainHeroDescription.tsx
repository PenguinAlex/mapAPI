import {
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '../../../assets/vr-glasses.svg';
import {useStyles} from "./style.ts";

const MainHeroDescription = () => {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                             <span className={classes.highlight}>Четыре</span> основных направления нашей компании <br />
                        </Title>
                        <Text color="dimmed" mt="md">
                            С учетом перехода мира искусства в новую эру, мы будем регулярно
                            публиковать обновленные отчеты о нашей платформе, текущих проектах,
                            заинтересованных сторонах, планах на поездки, а также о предстоящих лекциях и семинарах.
                            Мы всегда будем следить за актуальностью информации и обновлять ее по мере необходимости,
                            чтобы наши пользователи всегда были в курсе всех событий и новостей в мире искусства.
                        </Text>

                        <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    <IconCheck size={rem(12)} stroke={1.5} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <b>X Program</b> – Разработка ПО, Основное направление платформа PortalMultiVerse
                            </List.Item>
                            <List.Item>
                                <b>Магазин</b> – Продажара устройств виртуальной реальности
                            </List.Item>
                            <List.Item>
                                <b>Аренда</b> – Доставка оборудования виртуальной реальности на Ваше мероприятие
                            </List.Item>
                            <List.Item>
                                <b>Клуб</b> – Игровой клуб виртуальной реальности
                            </List.Item>
                        </List>

                        <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control}>
                                Попробовать
                            </Button>
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                Услуги
                            </Button>
                        </Group>
                    </div>
                    <Image src={image} className={classes.image} />
                </div>
            </Container>
        </div>
    );
}

export default MainHeroDescription;




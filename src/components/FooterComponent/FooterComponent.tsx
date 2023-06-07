import {Text, Container, ActionIcon, Group, } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import {FC} from "react";
import logo from "../../assets/logo.svg";
import {useStyles} from "./style.ts";
import {Link,} from "react-router-dom";

interface FooterLinksProps {
    data: {
        title: string;
        links: { label: string; link: string }[];
    }[];
}
const FooterComponent:FC<FooterLinksProps> = ({ data }) => {

    const { classes } = useStyles();
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text
                key={index}
                className={classes.link}
            >
                <Link to={link.link} style={{all:"unset"}}>
                    {link.label}
                </Link>

            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <img className={classes.logo} src={logo} height='60%'/>
                    <Text size="xs" color="dimmed" className={classes.description}>
                        Тут должен быть слоган
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2023 Portal. Все права защищены.
                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon size="lg">
                        <IconBrandTwitter size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandYoutube size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

export default FooterComponent;








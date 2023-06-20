import {
    Header,
    Menu,
    Group,
    Center,
    Burger,
    ActionIcon,
    ColorScheme,
    useMantineColorScheme,
     Text,
} from '@mantine/core';
import {useClickOutside, } from '@mantine/hooks';
import {IconChevronDown, IconMoonStars, IconSun,} from '@tabler/icons-react';
import {useStyles} from "./styles.ts";
import {Link} from "react-router-dom";
import logo from '../../assets/logo.svg'
import {FC, useState} from "react";

interface HeaderSearchProps {
    links: { link: string; label: string; links?: { link: string; label: string }[] }[];
    colorScheme?: ColorScheme,
    toggleColorScheme?: (colorScheme?: ColorScheme) => void;
}

const HeaderComponent:FC<HeaderSearchProps> = ({ links }) => {

    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(!opened));
    const { classes } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';


    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link} component={Link} to={item.link}>

                    {link.label}
            </Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <Text
                            className={classes.link}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </Text>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <Link
                key={link.label}
                to={link.link}
                className={classes.link}
            >
                {link.label}
            </Link>
        );
    });

    return (
        <Header height={56} className={classes.header}   >
                <div className={classes.inner}>
                    <Link to='/'>
                        <img className={classes.logo} src={logo} height='28px'/>
                    </Link>
                    <Group spacing={5} className={classes.links}>

                        {items}
                        <ActionIcon
                            variant="outline"
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => {
                                toggleColorScheme()
                                console.log(colorScheme)
                            }}
                            title="Toggle color scheme"
                        >
                            {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
                        </ActionIcon>
                    </Group>
                    <Menu

                        transitionProps={{ transition: 'pop-top-right' }}
                        position="top-end"
                        width={220}
                        withinPortal
                    >
                        <Menu.Target>
                            <Burger
                                ref={ref}
                                opened={opened}
                                onClick={()=>setOpened(!opened)}
                                className={classes.burger}
                                size="sm"
                                color="#fff"
                            />
                        </Menu.Target>
                        <Menu.Dropdown >
                            {links.map(link =>
                                <Menu.Item

                                    onClick={()=>setOpened(!opened)}
                                >
                                    <Link
                                        to={link.link}
                                        style={{all:"unset"}}
                                    >
                                        {link.label}
                                    </Link>
                                </Menu.Item>
                            )}
                        </Menu.Dropdown>
                    </Menu>

                </div>

        </Header>
    );
}

export default HeaderComponent;




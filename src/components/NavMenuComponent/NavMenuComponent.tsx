import {useState} from 'react';
import {Navbar, Tooltip, UnstyledButton, Stack,} from '@mantine/core';
import {
    IconCalendarEvent,
    IconBuildingFactory2,
    IconInfoCircle,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,

    } from '@tabler/icons-react';

import {useStyles} from "./styles.ts";
import {Link} from "react-router-dom";


interface NavbarLinkProps {
    icon: React.FC<any>;
    label: string;
    active?: boolean;

    onClick?(): void;

    linkTo: string;
}

function NavbarLink({icon: Icon, label, active, onClick, linkTo}: NavbarLinkProps) {
    const {classes, cx} = useStyles();
    return (
        <Link to={linkTo}>
            <Tooltip label={label} position="right" transitionProps={{duration: 0}}>
                <UnstyledButton onClick={onClick} className={cx(classes.link, {[classes.active]: active})}>
                    <Icon size="1.8rem" stroke={1.5}/>
                </UnstyledButton>
            </Tooltip>
        </Link>
    );
}

const mockdata = [
    {icon: IconCalendarEvent, label: 'События', linkTo: '/events'},
    {icon: IconBuildingFactory2, label: 'Наши проекты', linkTo: '/projects'},
    {icon: IconInfoCircle, label: 'О нас', linkTo: '/about'},
    {icon: IconCalendarStats, label: 'Releases', linkTo: '/'},
    {icon: IconUser, label: 'Account', linkTo: '/'},
    {icon: IconFingerprint, label: 'Security', linkTo: '/'},
    {icon: IconSettings, label: 'Settings', linkTo: '/'},
];

const NavMenuComponent = () => {
    const [active, setActive] = useState(2);
    const {classes} = useStyles();

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <Navbar
            width={{base: 80}}
            p="md"
            className={classes.navBar}
        >
            <Navbar.Section grow>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>

        </Navbar>
    );
}
export default NavMenuComponent
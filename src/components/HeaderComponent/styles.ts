import {createStyles, rem} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        borderBottom: 0,
        position: "sticky"
    },

    inner: {
        padding:`0 ${rem(32)}`,
        height: rem(56),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'flex-end',
        },
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                0.1
            ),
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
    logo:{
        [theme.fn.smallerThan('sm')]:{
            display:'none'
        }
    }
}));
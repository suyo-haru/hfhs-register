import { createStyles, Navbar, Group, getStylesRef, rem, Title } from '@mantine/core';
import {
  IconCalculator,
  IconReceipt2,
  IconLogout,
  IconUserCircle,
  IconSettings,
  IconActivity,
  IconHelp,
} from '@tabler/icons-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useUserinfo } from '@/utils/useUserinfo';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: "green.9" }).background,
  },

  version: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: "green.9" }).background!,
      0.1
    ),
    color: theme.white,
    fontWeight: 700,
  },

  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: "green.9" }).background!,
      0.1
    )}`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: "green.9" }).background!,
      0.1
    )}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: "green.9" }).background!,
        0.1
      ),
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.white,
    opacity: 0.75,
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: "green.9" }).background!,
        0.15
      ),
      [`& .${getStylesRef('icon')}`]: {
        opacity: 0.9,
      },
    },
  },
}));

export const pages = [
  { link: '/', label: '会計', icon: IconCalculator },
  { link: '/history', label: '売上確認', icon: IconReceipt2 },
  { link: '/setting', label: '店舗設定', icon: IconSettings },
  { link: '/contact', label: '困った時は', icon: IconHelp },
  { link: 'https://stats.uptimerobot.com/qWXkvcLPmk', label: 'ステータスページ', icon: IconActivity }
] as const;

export function Comp_Navbar({ page }: { page: (typeof pages)[number]["label"] }) {
  const { classes, cx } = useStyles();
  const userinfo = useUserinfo();

  const links = pages.map((item) => (
    <Link
      className={cx(classes.link, { [classes.linkActive]: item.label === page })}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar hidden hiddenBreakpoint="xs" height="100%" width={{ xs: 170, sm: 210, md: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Title order={4} color='#fff'>{`${userinfo?.userClass ?? "取得中..."} | HFHS REGI`}</Title>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <div className={classes.link}>
          <IconUserCircle className={classes.linkIcon} stroke={1.5} />
          <span>{userinfo?.userName ?? "ゲスト"}</span>
        </div>
        <a href="#" className={classes.link} onClick={() => signOut({ redirect: true, callbackUrl: "/auth/signout" })}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>ログアウト</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}

'use client';
import {TriangleRightIcon} from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import {Box, Button, Theme} from '@radix-ui/themes';
import Link from 'next/link';

import {Search} from 'sentry-docs/components/search';

import styles from './styles.module.scss';

import {ThemeToggle} from '../theme-toggle';
import {LocaleSelector, T} from 'gt-next';

type Props = {
  pathname: string;
  searchPlatforms: string[];
};

export function MobileMenu({pathname, searchPlatforms}: Props) {
  return (
    <div className="flex gap-6 items-center">
      <LocaleSelector />
      <ThemeToggle />
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button
            variant="ghost"
            size="4"
            color="gray"
            radius="medium"
            className="font-medium text-[var(--foreground)]"
          >
            <T>Menu</T>
            <TriangleRightIcon />
          </Button>
        </Popover.Trigger>

        <Popover.Portal>
          <Theme accentColor="iris">
            <Popover.Content className={styles.PopoverContent} sideOffset={5}>
              <Box display={{xs: 'block', sm: 'none'}}>
                <li className={styles.MenuItem}>
                  <Search path={pathname} searchPlatforms={searchPlatforms} />
                </li>
                <div className={styles.MenuSeparator} />
              </Box>
              <li className={styles.MenuItem}>
                <T>
                  <Link href="https://sentry.io/changelog/">Changelog</Link>
                </T>
              </li>
              <li className={styles.MenuItem}>
                <T>
                  <Link href="https://sandbox.sentry.io/">Sandbox</Link>
                </T>
              </li>
              <li className={styles.MenuItem}>
                <T>
                  <Link href="https://sentry.io/">Go to Sentry</Link>
                </T>
              </li>
              <li className={styles.MenuItem}>
                <T>
                  <Link href="https://sentry.io/signup/">Get Started</Link>
                </T>
              </li>
            </Popover.Content>
          </Theme>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

import React, { FC } from 'react';
import { ActionIcon, Anchor, Flex, Menu } from '@mantine/core';
import { SignOutIcon, UserCheckIcon, UserIcon } from '@phosphor-icons/react';

import { buttonVariantMenu } from '../../theme/mantine-theme';

interface UserType {
  email: string;
  hashedEmail: string;
}

interface MenuStructureProps {
  isLoggedIn: boolean;
  user: UserType | null;
  logout: () => void;
}

const MenuStructure: FC<MenuStructureProps> = ({ isLoggedIn, user, logout }) => {
  return (
    <nav>
      <Flex gap="md" justify="space-between" align="center" direction="row" wrap="wrap" w="100%">
        {/* Left side - Navigation links */}
        <Flex gap="md" align="center">
          <Anchor href="/" c="var(--mantine-color-white)">
            Home
          </Anchor>
          <Anchor href="/category" c="var(--mantine-color-white)">
            Category
          </Anchor>
        </Flex>

        {/* Right side - User menu */}
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <ActionIcon variant={buttonVariantMenu} size="lg">
              {isLoggedIn ? <UserCheckIcon size={24} /> : <UserIcon size={24} />}
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            {isLoggedIn && user ? (
              <>
                <Menu.Label>Welcome, {user.email}!</Menu.Label>
                <Menu.Divider />
                <Menu.Item leftSection={<SignOutIcon size={16} />} onClick={logout} c="red">
                  Logout
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Label>Account</Menu.Label>
                <Menu.Item leftSection={<UserIcon size={16} />} component="a" href="/login">
                  Login
                </Menu.Item>
              </>
            )}
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </nav>
  );
};

export default MenuStructure;

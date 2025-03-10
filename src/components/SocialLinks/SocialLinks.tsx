import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { ActionIcon, Tooltip } from '@mantine/core';

export function SocialLinks() {
  return (
    <div>
      <Tooltip label="GitHub">
          <ActionIcon
            component="a"
            href=""
            target="_blank"
            variant="light"
            size="md"
            radius="md"
          >
            <IconBrandGithub size={20} />
          </ActionIcon>
        </Tooltip>

      <Tooltip label="LinkedIn">
          <ActionIcon
            component="a"
            href=""
            target="_blank"
            variant="light"
            size="md"
            radius="md"
            >
            <IconBrandLinkedin size={20} />
          </ActionIcon>
        </Tooltip>
    </div>
  );
}

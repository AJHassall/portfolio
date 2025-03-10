import { Anchor, Group, Text } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react'; // Import the arrow icon

export function DownloadResumeLink() {
  return (
    <Anchor href="portfolio/Adam_H_CV.pdf" download> {/* Replace with the actual path to your resume */}
      <Group gap="xs" justify="flex-end">
        <Text >See my full résumé</Text>
        <IconArrowUpRight size={16} />
      </Group>
    </Anchor>
  );
}
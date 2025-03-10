import { Anchor, Group, Text } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react'; // Import the arrow icon
import resume from '/Adam_H_CV.pdf'

export function DownloadResumeLink() {
  return (
    <Anchor href={resume}> {/* Replace with the actual path to your resume */}
      <Group gap="xs" justify="flex-end">
        <Text >See my full résumé</Text>
        <IconArrowUpRight size={16} />
      </Group>
    </Anchor>
  );
}
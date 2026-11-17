import { Column, Row, Text, Tag, Badge } from "@once-ui-system/core";
import { oss } from "@/resources";

export function OssProjects() {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {oss.projects.map((project: { name: string; description: string; link: string; stars: number; language: string; tags: string[] }) => (
        <Row key={project.name} fillWidth gap="m" vertical="center" paddingY="m" border="neutral-alpha-weak" radius="m">
          <Column fillWidth gap="8" horizontal="center">
            <Text variant="heading-strong-m">{project.name}</Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {project.description}
            </Text>
            <Row gap="8" wrap>
              {project.tags.map((tag) => (
                <Tag key={tag} size="s">{tag}</Tag>
              ))}
            </Row>
          </Column>
          <Column gap="8" horizontal="center" align="end">
            <Badge background="brand-alpha-weak" paddingX="8" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false} href={project.link}>
              <Row gap="8" vertical="center">
                <Text size="s">{project.language}</Text>
              </Row>
            </Badge>
          </Column>
        </Row>
      ))}
    </Column>
  );
}
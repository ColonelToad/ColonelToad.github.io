import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, oss } from "@/resources";
import { OssProjects } from "@/components/oss/OssProjects";

export async function generateMetadata() {
  return Meta.generate({
    title: oss.title,
    description: oss.description,
    baseURL: baseURL,
    path: oss.path,
  });
}

export default function Oss() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={oss.path}
        title={oss.title}
        description={oss.description}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {oss.title}
      </Heading>
      <OssProjects />
    </Column>
  );
}
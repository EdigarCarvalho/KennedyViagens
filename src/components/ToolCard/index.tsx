import { Description, Title , DeleteToolDialog} from "..";
import { ToolType } from "../../interfaces";
import {
  CardStyle,
  TagsContainer,
  Link,
  CardHeader,
  Tag,
} from "./index.stitches";

export function ToolCard({ id, title, description, link, tags , onToolRemove }: ToolType) {
  return (
    <CardStyle key={id}>
      <CardHeader>
        <Title>{title}</Title>
        <DeleteToolDialog onToolRemove={onToolRemove} id={id}/>
      </CardHeader>
      <Description>{description}</Description>
      <Link href={link} target="_blank">
        {link}
      </Link>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{`#${tag} `}</Tag>
        ))}
      </TagsContainer>
    </CardStyle>
  );
}


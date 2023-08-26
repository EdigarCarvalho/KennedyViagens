import { Button } from "..";
import { ToolType } from "../../pages/Dashboard";
import {
  CardStyle,
  Title,
  Description,
  TagsContainer,
  Link,
  CardHeader,
  Tag,
} from "./index.stitches";

function ToolCard({ id, title, description, link, tags }: ToolType) {
  return (
    <CardStyle key={id}>
      <CardHeader>
        <Title>{title}</Title>
        <Button color={"ButtonSecondaryDanger"} size={"sm"}>Delete</Button>
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

export default ToolCard;
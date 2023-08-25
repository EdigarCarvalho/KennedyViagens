import { ToolType } from "../../pages/Dashboard";

function ToolCard({ id, title, description, link, tags }: ToolType) {

  return (
    <div key={id} >
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default ToolCard;
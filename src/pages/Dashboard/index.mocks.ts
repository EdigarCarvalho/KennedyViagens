import { ToolType } from "../../interfaces";

export const mockTools: ToolType[] = [
    {
      id: 1,
      title: 'Tool 1',
      link: 'https://example.com/tool1',
      description: 'Description for Tool 1',
      tags: ['tag1', 'tag2'],
      onToolRemove: () => {

      },
    },
    {
      id: 2,
      title: 'Tool 2',
      link: 'https://example.com/tool2',
      description: 'Description for Tool 2',
      tags: ['tag3', 'tag4'],
      onToolRemove: () => {

      },
    },

  ];
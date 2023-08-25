export const extractHashtags = (text: string) => {
    const regex = /#(\w+)/g;
    const matches = text.match(regex);
    return matches || [];
  };

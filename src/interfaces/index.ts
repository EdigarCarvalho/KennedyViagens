export interface FormValues {
    email: string;
    password: string;
}
  
export interface ToolType {
    id: number;
    title: string;
    link: string;
    description: string;
    tags: string[];
    onToolRemove: () => void
}

export interface FormValues {
    name: string;
    link: string;
    description: string;
    tags: string;
  };

export interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

export interface ToolDataProps {
    title: string;
    link: string;
    description: string;
    tags: string[];
  }
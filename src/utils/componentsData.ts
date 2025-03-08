/* eslint-disable */
// Component interfaces
interface ComponentProperty {
  id: string;
  name: string;
  type: "string" | "number" | "boolean" | "select" | "color";
  defaultValue: any;
  options?: string[]; // For select type
  description?: string;
}
interface Component {
  id: string;
  name: string;
  category: "input" | "display" | "feedback" | "navigation" | "layout";
  properties: ComponentProperty[];
  currentValues: Record<string, any>;
}

export const componentsData: Component[] = [
  {
    id: "button",
    name: "Button",
    category: "feedback",
    properties: [
      {
        id: "variant",
        name: "Variant",
        type: "select",
        defaultValue: "primary",
        options: ["primary", "secondary", "text"],
      },
      {
        id: "size",
        name: "Size",
        type: "select",
        defaultValue: "medium",
        options: ["sm", "md", "lg"],
      },
    ],
    currentValues: {},
  },
];

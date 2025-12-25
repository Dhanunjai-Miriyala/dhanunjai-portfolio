import DefaultTemplate from "./default/Template";
import MinimalTemplate from "./minimal/Template";

export const templates = {
  default: DefaultTemplate,
  minimal: MinimalTemplate,
};

export type TemplateKey = keyof typeof templates;

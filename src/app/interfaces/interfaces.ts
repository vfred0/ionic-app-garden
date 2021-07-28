export interface Stage {
  option: string;
  recomendations: string[];
}

export interface Option {
  name: String;
  link: String;
  parameters: boolean;
}

export interface OptionButton {
  content: String;
  class: String[];
}

export interface BackMenu {
  image: String;
  link: String;
}
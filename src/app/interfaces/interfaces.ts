export interface Stage {
  option: string;
  recomendations: string[];
}

export interface Option {
  name: String;
  link: String;
  parameters: boolean;
}

export interface Button {
  title: String;
  class: String;
}

export interface ButtonTemperature extends Button {
  temperatures: BoxTemperature[];
}

export interface BackMenu {
  image: String;
  link: String;
}

export interface BoxTemperature {
  title: String;
  temperature: String;
}
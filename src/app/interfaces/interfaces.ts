export interface Stage {
  title: string;
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
  temperatures: Temperature[];
}

export interface Temperature {
  title: String;
  degrees: String;
}

export interface BackMenu {
  image: String;
  link: String;
}


export interface Plant {
  name: String;
  description: String;
  stages: Stage[];
}
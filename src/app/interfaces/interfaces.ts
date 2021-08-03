export interface Stage {
  title: string;
  recomendations: string[];
}

export interface Option {
  name: String;
  link: String;
}

export interface Button {
  title: String;
  class: String;
}

export interface Temperature {
  title: String;
  degrees: String;
}

export interface TemperatureStage {
  name: String;
  temperatures: Temperature[];
}

export interface BackMenu {
  image: String;
  link: String;
}


export interface Plant {
  name: String;
  description: String;
  stages: Stage[];
  temperaturesStages: TemperatureStage[];
  image: String;
}

export interface GardenStyle {
  name: String;
  shape: Shape[];
}

export interface Shape {
  name: String;
  controlName: ControlName[];
}

export interface ControlName {
  name: String;
  value: String;
}
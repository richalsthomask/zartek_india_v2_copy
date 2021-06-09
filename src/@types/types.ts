export interface WelcomeAreaPropType {
  applets: AppletType[];
  title: string;
  description: { description: string };
  option1: ButtonType;
  option2: ButtonType;
}

export interface AppletType {
  appIcon: { file: { url: string } };
  appTitle: string;
  redirectLink: string;
  id?: string;
}

export interface ButtonType {
  link: string;
  title: string;
  color: "white";
}

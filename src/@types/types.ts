export interface WelcomeAreaPropType {
  applets: AppletType[];
  title: string;
  description: { description: string };
  option1: ButtonType;
  option2: ButtonType;
}

interface FileType {
  file: { url: string };
}

export interface AppletType {
  appIcon: FileType;
  appTitle: string;
  redirectLink: string;
  id?: string;
}

export interface ButtonType {
  link: string;
  title: string;
  color: "white" | "primary";
}

export interface ServiceCardType {
  routerLink: string;
  title: string;
  description: string;
  icon: FileType;
  cardAdditionalClass?: string;
}

export interface ServiceAreaModelType {
  title: string;
  description: { description: string };
  services: ServiceCardType[];
}

export interface BulletPoint {
  id?: string;
  title: string;
  description: { description: string };
}

export interface BulletPointsWithImageType {
  position: "left-image-right-points" | "right-image-left-points";
  image: FileType;
  points: BulletPoint[];
}

export interface TestimonialType {
  id?: string;
  reviewerName: string;
  reviewerRole: string;
  reviewerProfilePic: FileType;
  review: string;
}

export interface ParallaxStatPodType {
  id?: string;
  title: string;
  description: {
    description: string;
  };
}

export interface FAQType {
  id?: string;
  question: string;
  answer: { answer: string };
}

import { viewPortOptions } from "@/components/Helpers/LazyImage";
import { SEOType } from "@/components/SEO";

export interface WelcomeAreaPropType {
  applets: AppletType[];
  title: string;
  description: { description: string };
  option1: ButtonType;
  option2: ButtonType;
  backgroundImage: FileType;
}

export interface FileType {
  file: { url: string };
}

export interface AppletType {
  appIcon: FileType;
  appTitle: string;
  redirectLink: string;
  id?: string;
  viewPort?: viewPortOptions;
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

export interface OurWorkType {
  title: string;
  id?: string;
  description: string;
  links: {
    websiteLink?: string;
    appStoreLink?: string;
    playStoreLink?: string;
  };
  icon: FileType;
  detailPage?: {
    slug: string;
  };
}

export interface ServiceModelType {
  id: string;
  icon: FileType;
  serviceDescription: string;
  serviceTitle: string;
  slug: string;
}

export interface TrainingModelType {
  id: string;
  trainingCardIcon: FileType;
  trainingCardShortDescription: string;
  trainingCardTitle: string;
  slug: string;
}

export interface HireDedicatedDevPodType {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: FileType;
}

export interface SolutionPodType {
  id: string;
  solutionTitle: string;
  solutionDescription: string;
  slug: string;
  icon: FileType;
}

export interface StructuredDataSnippet {
  snippet: { id: string; snippet: string };
}

export interface TestimonialCardType {
  id: string;
  userName: string;
  userDesignation: string;
  profilePic: FileType;
  feedback: {
    feedback: string;
  };
}

export interface MoreSolutionWeOffer {
  title: string;
  description: string;
  solutions: {
    slug: string;
    id: string;
    title: string;
    shortDescription: string;
    coverImage: FileType;
  }[];
}

export type onBoardedClient = {
  id: string;
  clientName: string;
  clientBrandLogo: {
    file: {
      url: string;
    };
  };
};

export interface PortfolioDetailEntity {
  deliverables: string;
  icon: FileType;
  title: string;
  links: Links;
  detailPage: PortfolioDetailPage;
}

export interface Links {
  websiteLink: string;
  appStoreLink: string;
  playStoreLink: string;
}
export interface PortfolioDetailPage {
  releasedDate: string;
  content: Content;
  client: Client;
  team: Team;
  services: Services;
  slug: string;

  seo: SEOType;
}
export interface Content {
  raw: string;
  references?: any;
}

export interface Client {
  client: string;
}
export interface Team {
  team: string;
}
export interface Services {
  services: string;
}

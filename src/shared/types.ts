export enum SelectedPage {
  Home = "Home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}
export interface BenefitType{
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType{
  name:string,
  description?:string,
  image:string;
}
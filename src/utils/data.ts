import { CommentsType, Option, serviceCard, services } from "./types";
import drill from "@/assets/images/drill.png";
import DoughMachine from "@/assets/images/DoughMachine.png";
import VacuumCleaner from "@/assets/images/VacuumCleaner.png";
import Plumbing from "@/assets/images/Plumbing.png";
import Electrician from "@/assets/images/Electrician.png";
import HouseCleaning from "@/assets/images/HouseCleaning.png";
import DogWalking from "@/assets/images/DogWalking.png";
import Kitchen1 from "@/assets/images/Kitchen1.png";
import Kitchen2 from "@/assets/images/Kitchen2.png";
import Kitchen3 from "@/assets/images/Kitchen3.png";
import Kitchen4 from "@/assets/images/Kitchen4.png";
import HandTools1 from "@/assets/images/HandTools1.png";
import HandTools2 from "@/assets/images/HandTools2.png";
import HandTools3 from "@/assets/images/HandTools3.png";
import HandTools4 from "@/assets/images/HandTools4.png";
import Professional1 from "@/assets/images/Professional1.png";
import Professional2 from "@/assets/images/Professional2.png";
import Professional3 from "@/assets/images/Professional3.png";
import Professional4 from "@/assets/images/Professional4.png";
import user1 from "@/assets/images/user1.png";
import user2 from "@/assets/images/user2.png";
export const servicesData: services[] = [
  { id: 1, image: drill, title: "Cordless Drill", price: "10$", per: "day" },
  {
    id: 2,
    image: DoughMachine,
    title: "Vacuum Cleaner",
    price: "5$",
    per: "day",
  },
  {
    id: 3,
    image: VacuumCleaner,
    title: "Dough Machine",
    price: "15$",
    per: "day",
  },
];
export const countries: Option[] = [
  {
    value: "US",
    name: "United States",
  },
  { value: "CA", name: "Canada" },
  { value: "FR", name: "France" },
  { value: "DE", name: "Germany" },
];
export const Nearservices: serviceCard[] = [
  { id: 1, image: Plumbing, title: "Plumbing" },
  { id: 2, image: DogWalking, title: "Dog Walking" },
  { id: 3, image: HouseCleaning, title: "House Cleaning" },
  { id: 4, image: Electrician, title: "Electrician" },
];
export const Kitchenservices: serviceCard[] = [
  { id: 1, image: Kitchen1, title: "Microwave" },
  { id: 2, image: Kitchen2, title: "Dishwasher" },
  { id: 3, image: Kitchen3, title: "Sandwich heater" },
  { id: 4, image: Kitchen4, title: "Rrefrigerator" },
];
export const HandToolsservices: serviceCard[] = [
  { id: 1, image: HandTools1, title: "Cordless Drill" },
  { id: 2, image: HandTools2, title: "Avomettar" },
  { id: 3, image: HandTools3, title: "Distance Scale" },
  { id: 4, image: HandTools4, title: "Hand Tools" },
];
export const Professionalsservices: serviceCard[] = [
  { id: 1, image: Professional1, title: "Photo restoration" },
  { id: 2, image: Professional2, title: "Photograph" },
  { id: 3, image: Professional3, title: "Web Developer" },
  { id: 4, image: Professional4, title: "filming" },
];
export const paymentMethod: Option[] = [
  { value: "0", name: "Choose a Accepted Payment Method" },
];
export const Comments: CommentsType[] = [
  {
    userName: "Abd Alsalam",
    rate: 5,
    date: "1 day ago",
    text: "Excellent treatment and speed of performance",
    userImage: user1,
  },
  {
    userName: "David",
    rate: 5,
    date: "1 month ago",
    text: "Thank you for the kind treatment.",
    userImage: user2,
  },
];

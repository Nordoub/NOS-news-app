import { Category } from "../models/category";

export const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const categories: { [key: string]: Category } = {
  Algemeen: "nosnieuwsalgemeen",
  Binnenland: "nosnieuwsbinnenland",
  Buitenland: "nosnieuwsbuitenland",
  Politiek: "nosnieuwspolitiek",
  Economie: "nosnieuwseconomie",
  Opmerkelijk: "nosnieuwsopmerkelijk",
  Koningshuis: "nosnieuwskoningshuis",
  Cultuur: "nosnieuwscultuurenmedia",
  Tech: "nosnieuwstech",
  Sport: "nossportalgemeen",
  Voetbal: "nosvoetbal",
  Wielrennen: "nossportwielrennen",
  Schaatsen: "nossportschaatsen",
  Tennis: "nossporttennis",
  Formule1: "nossportformule1",
  Nieuwsuur: "nieuwsuuralgemeen",
  Op3: "nosop3",
  Jeugdjournaal: "jeugdjournaal",
};

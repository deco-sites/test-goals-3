import { badRequest } from "deco/mod.ts";

export interface Props {
  /** @title Product Card layout props */
  showError: boolean;
  teste: string;
}

export type loaderObject = {
    data: string;
}

/** @title Loader de erro */
const loader = ({ showError }: Props, req : Request, _ctx: any): loaderObject => {
  console.log ("AQUIIAQUIIAQUIIAQUIIAQUIIAQUIIAQUIIAQUIIAQUIIAQUII");
  badRequest ({message: "Erro de teste"});
  // throw new Error("Erro de teste");
  return { data: "OK" };
}

export default loader;

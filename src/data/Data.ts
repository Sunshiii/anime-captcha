import type { CaptchaType } from "../models/CaptchaType";

// * Import all JSON Files Here
import * as loli from "./loli.json";
import * as trap from "./trap.json";

export const Data: CaptchaType[] = [loli, trap];

export function prepareData(Data: CaptchaType[]): CaptchaType {
  const data = Data[Math.floor(Math.random() * Data.length)];
  const questions = data.questions.sort(() => 0.5 - Math.random()).slice(0, 16);

  // * Some error occured and I need to do this
  return {
    title: data.title,
    questions: questions,
    onFail: data.onFail,
  };
}
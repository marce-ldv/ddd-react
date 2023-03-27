import {bindFake} from "./implementations/fake";

export enum Implementations {
  Fake = "Fake",
}

export const buildContainer = (imp: Implementations): void => {
  switch (imp) {
    case Implementations.Fake:
      bindFake();
      break;
  }
}

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Atom } from "lucide-react";

export const valueAtom = atomWithStorage("inputValue", "");
export const nameAtom = atom("India");

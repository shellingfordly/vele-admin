import { getCurrentInstance } from "vue";
import { error } from "./log";

export function isInSetup() {
  if (!getCurrentInstance()) {
    error("Please put useForm function in the setup function!");
  }
}

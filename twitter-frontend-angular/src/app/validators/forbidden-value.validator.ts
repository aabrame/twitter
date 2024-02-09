import { ValidatorFn } from "@angular/forms";

export namespace MyValidators {
  export function forbiddenValue(value: string, ...other: string[]): ValidatorFn {
    return (ac) => [ value, ...other].some(v => ac.value.toLowerCase().includes(v.toLowerCase())) ? { pirate: true } : null;
  }
}

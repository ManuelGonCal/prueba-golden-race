import { FormControl } from '@angular/forms';

export function betAmountValidator(control: FormControl) {
  let bet = control.value;
  if (bet < 5) {
    return {
      betAmount: true,
    };
  }

  return null;
}

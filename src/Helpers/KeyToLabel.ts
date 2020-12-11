import React, { ReactElement } from 'react';

interface Props {
  value: string;
}

export default function KeyToLabel({ value }: Props): string {
  const result =
    value === 'BANK_MELLI'
      ? 'بانک ملی'
      : value === 'BANK_MASKAN'
      ? 'بانک مسک'
      : value === 'BANK_MELLAT'
      ? 'بانک ملت'
      : value;
  return result;
}

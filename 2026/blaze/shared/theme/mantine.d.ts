import '@mantine/core';

type PrimaryButtonVariant = 'primaryButton';
type SecondaryButtonVariant = 'secondaryButton';
declare module '@mantine/core' {
  export interface ButtonProps {
    variant?:
      | import('@mantine/core').ButtonProps['variant']
      | PrimaryButtonVariant
      | SecondaryButtonVariant;
  }
}

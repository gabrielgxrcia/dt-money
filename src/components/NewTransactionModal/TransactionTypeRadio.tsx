import { css } from "../../../styled-system/css";
import * as RadioGroup from '@radix-ui/react-radio-group'

export interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
  children: React.ReactNode
}

export const TransactionTypeRadio: React.FC<TransactionTypeButtonProps> = ({ variant, children }) => {
  const color = variant === 'income' ? '#00B37E' : '#F75A68';
  return (
    <RadioGroup.Item value={variant} className={css({ background: '#29292E', p: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', borderRadius: '6px', cursor: 'pointer', border: '0', color })}>
      {children}
    </RadioGroup.Item>
  )
}
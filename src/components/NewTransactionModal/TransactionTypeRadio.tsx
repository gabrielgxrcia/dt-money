import React from 'react'
import { css } from '../../../styled-system/css'
import * as RadioGroup from '@radix-ui/react-radio-group'

export interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
  children: React.ReactNode
}

export const TransactionTypeRadio: React.FC<TransactionTypeButtonProps> = ({
  variant,
  children,
}) => {
  const color = variant === 'income' ? '#00B37E' : '#F75A68'
  const checkedColor = variant === 'income' ? '#00875F' : '#AB222E'

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === 'svg' && index === 0) {
      return React.cloneElement(
        child as React.ReactElement<React.SVGProps<SVGSVGElement>>,
        { fill: '#fff' },
      )
    }
    return child
  })

  return (
    <RadioGroup.Item
      value={variant}
      className={css({
        background: '#29292E',
        p: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        borderRadius: '6px',
        cursor: 'pointer',
        border: '0',
        color,
        '&[data-state="unchecked"]:hover': {
          background: '#323238',
          transition: 'background-color 0.2s',
        },
        '&[data-state="checked"]': {
          color: '#fff',
          background: checkedColor,
        },
      })}
    >
      {childrenWithProps}
    </RadioGroup.Item>
  )
}

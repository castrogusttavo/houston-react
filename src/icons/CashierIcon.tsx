import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CashierIcon({ iconName = 'cashier', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CashbackIcon({ iconName = 'cashback', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

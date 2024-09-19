import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SavingsIcon({ iconName = 'savings-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

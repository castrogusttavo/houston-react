import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WaiterIconIcon({ iconName = 'waiter-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

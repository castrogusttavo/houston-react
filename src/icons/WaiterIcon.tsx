import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WaiterIcon({ iconName = 'waiter', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

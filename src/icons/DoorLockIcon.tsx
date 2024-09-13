import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DoorLockIcon({ iconName = 'door-lock', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

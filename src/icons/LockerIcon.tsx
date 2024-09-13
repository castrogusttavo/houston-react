import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LockerIcon({ iconName = 'locker', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

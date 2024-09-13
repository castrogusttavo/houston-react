import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LockComputerIcon({
  iconName = 'lock-computer',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

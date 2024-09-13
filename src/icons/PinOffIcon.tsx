import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PinOffIcon({ iconName = 'pin-off', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

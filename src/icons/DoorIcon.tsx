import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DoorIcon({ iconName = 'door', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

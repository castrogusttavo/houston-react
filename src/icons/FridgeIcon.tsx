import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FridgeIcon({ iconName = 'fridge', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

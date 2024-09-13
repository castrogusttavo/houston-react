import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MushroomIcon({ iconName = 'mushroom', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MapsIcon({ iconName = 'maps', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

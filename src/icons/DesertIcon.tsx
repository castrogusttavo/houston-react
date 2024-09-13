import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DesertIcon({ iconName = 'desert', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

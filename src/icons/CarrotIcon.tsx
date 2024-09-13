import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CarrotIcon({ iconName = 'carrot', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

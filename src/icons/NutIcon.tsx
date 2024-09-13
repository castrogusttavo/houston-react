import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NutIcon({ iconName = 'nut', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

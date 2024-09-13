import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BedIcon({ iconName = 'bed', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

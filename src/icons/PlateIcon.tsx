import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlateIcon({ iconName = 'plate', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

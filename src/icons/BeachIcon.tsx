import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BeachIcon({ iconName = 'beach', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

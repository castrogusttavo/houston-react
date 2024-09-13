import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EuroIcon({ iconName = 'euro', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

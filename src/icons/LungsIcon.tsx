import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LungsIcon({ iconName = 'lungs', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

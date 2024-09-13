import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EggsIcon({ iconName = 'eggs', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

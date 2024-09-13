import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HierarchyIcon({ iconName = 'hierarchy', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

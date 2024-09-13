import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FactoryIcon({ iconName = 'factory', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

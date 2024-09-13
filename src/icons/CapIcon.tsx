import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CapIcon({ iconName = 'cap', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

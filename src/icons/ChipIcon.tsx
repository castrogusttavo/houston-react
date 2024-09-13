import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ChipIcon({ iconName = 'chip', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

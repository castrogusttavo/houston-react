import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CharityIcon({ iconName = 'charity', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

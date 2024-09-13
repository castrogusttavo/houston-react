import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BloodIcon({ iconName = 'blood', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

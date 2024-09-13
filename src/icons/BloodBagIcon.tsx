import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BloodBagIcon({ iconName = 'blood-bag', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CamperIcon({ iconName = 'camper', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

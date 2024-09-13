import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BriefcaseDollarIcon({
  iconName = 'briefcase-dollar',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

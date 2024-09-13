import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UniversityIcon({
  iconName = 'university',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GraduationScrollIcon({
  iconName = 'graduation-scroll',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

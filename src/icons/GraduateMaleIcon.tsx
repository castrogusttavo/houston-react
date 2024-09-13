import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GraduateMaleIcon({
  iconName = 'graduate-male',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

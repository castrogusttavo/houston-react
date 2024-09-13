import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LeftAngleIcon({
  iconName = 'left-angle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

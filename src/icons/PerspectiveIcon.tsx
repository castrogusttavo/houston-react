import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PerspectiveIcon({
  iconName = 'perspective',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

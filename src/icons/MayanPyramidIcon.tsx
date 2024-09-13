import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MayanPyramidIcon({
  iconName = 'mayan-pyramid',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

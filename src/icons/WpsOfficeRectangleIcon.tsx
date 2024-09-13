import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WpsOfficeRectangleIcon({
  iconName = 'wps-office-rectangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

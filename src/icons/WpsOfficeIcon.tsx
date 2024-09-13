import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WpsOfficeIcon({
  iconName = 'wps-office',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

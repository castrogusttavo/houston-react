import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PackageOpenIcon({
  iconName = 'package-open',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

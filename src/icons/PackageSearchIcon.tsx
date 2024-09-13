import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PackageSearchIcon({
  iconName = 'package-search',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

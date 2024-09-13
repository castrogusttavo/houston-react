import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PackageAddIcon({
  iconName = 'package-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

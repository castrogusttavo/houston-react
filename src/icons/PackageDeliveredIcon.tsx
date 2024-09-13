import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PackageDeliveredIcon({
  iconName = 'package-delivered',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

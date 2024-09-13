import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SkippingRopeIcon({
  iconName = 'skipping-rope',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextTrackingIcon({
  iconName = 'text-tracking',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

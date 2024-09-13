import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CancelCircleHalfDotIcon({
  iconName = 'cancel-circle-half-dot',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

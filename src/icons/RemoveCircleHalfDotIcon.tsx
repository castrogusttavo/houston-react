import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RemoveCircleHalfDotIcon({
  iconName = 'remove-circle-half-dot',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

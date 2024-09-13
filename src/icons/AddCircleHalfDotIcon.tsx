import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AddCircleHalfDotIcon({
  iconName = 'add-circle-half-dot',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

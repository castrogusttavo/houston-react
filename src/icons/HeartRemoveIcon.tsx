import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HeartRemoveIcon({
  iconName = 'heart-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

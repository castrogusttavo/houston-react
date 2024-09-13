import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HeartCheckIcon({
  iconName = 'heart-check',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

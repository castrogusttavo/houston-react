import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HeartbreakIcon({
  iconName = 'heartbreak',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

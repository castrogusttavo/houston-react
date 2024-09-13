import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UnavailableIcon({
  iconName = 'unavailable',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

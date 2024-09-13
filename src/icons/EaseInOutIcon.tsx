import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EaseInOutIcon({
  iconName = 'ease-in-out',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

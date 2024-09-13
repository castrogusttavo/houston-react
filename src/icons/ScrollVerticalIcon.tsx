import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ScrollVerticalIcon({
  iconName = 'scroll-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

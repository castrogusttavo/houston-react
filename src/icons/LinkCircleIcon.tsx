import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LinkCircleIcon({
  iconName = 'link-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

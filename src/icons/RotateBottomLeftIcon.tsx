import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RotateBottomLeftIcon({
  iconName = 'rotate-bottom-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

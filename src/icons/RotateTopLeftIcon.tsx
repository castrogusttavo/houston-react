import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RotateTopLeftIcon({
  iconName = 'rotate-top-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

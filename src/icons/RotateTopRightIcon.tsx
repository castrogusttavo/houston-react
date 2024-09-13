import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RotateTopRightIcon({
  iconName = 'rotate-top-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

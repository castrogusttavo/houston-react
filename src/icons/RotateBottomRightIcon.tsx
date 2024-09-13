import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RotateBottomRightIcon({
  iconName = 'rotate-bottom-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

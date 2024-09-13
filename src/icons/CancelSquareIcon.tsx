import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CancelSquareIcon({
  iconName = 'cancel-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

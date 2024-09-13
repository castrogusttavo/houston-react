import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlertSquareIcon({
  iconName = 'alert-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

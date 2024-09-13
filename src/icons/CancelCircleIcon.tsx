import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CancelCircleIcon({
  iconName = 'cancel-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

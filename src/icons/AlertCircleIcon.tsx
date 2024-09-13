import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlertCircleIcon({
  iconName = 'alert-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

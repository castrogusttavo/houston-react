import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckmarkCircle02Icon({
  iconName = 'checkmark-circle-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

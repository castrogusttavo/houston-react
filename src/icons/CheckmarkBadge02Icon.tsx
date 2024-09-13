import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckmarkBadge02Icon({
  iconName = 'checkmark-badge-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

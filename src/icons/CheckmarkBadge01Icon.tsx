import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckmarkBadge01Icon({
  iconName = 'checkmark-badge-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

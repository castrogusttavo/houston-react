import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ValidationIcon({
  iconName = 'validation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

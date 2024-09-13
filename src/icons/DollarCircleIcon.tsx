import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DollarCircleIcon({
  iconName = 'dollar-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PercentCircleIcon({
  iconName = 'percent-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

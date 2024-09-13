import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SummationCircleIcon({
  iconName = 'summation-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SummationSquareIcon({
  iconName = 'summation-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

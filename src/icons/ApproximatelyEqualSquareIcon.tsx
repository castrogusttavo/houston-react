import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ApproximatelyEqualSquareIcon({
  iconName = 'approximately-equal-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ApproximatelyEqualIcon({
  iconName = 'approximately-equal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

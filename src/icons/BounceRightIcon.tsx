import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BounceRightIcon({
  iconName = 'bounce-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BounceLeftIcon({
  iconName = 'bounce-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

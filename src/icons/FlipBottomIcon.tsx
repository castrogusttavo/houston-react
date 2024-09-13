import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlipBottomIcon({
  iconName = 'flip-bottom',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

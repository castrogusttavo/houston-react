import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LeftToRightListNumberIcon({
  iconName = 'left-to-right-list-number',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InfinitySquareIcon({
  iconName = 'infinity-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

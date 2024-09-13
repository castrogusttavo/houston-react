import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThumbsUpDownIcon({
  iconName = 'thumbs-up-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

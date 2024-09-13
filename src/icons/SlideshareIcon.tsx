import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SlideshareIcon({
  iconName = 'slideshare',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

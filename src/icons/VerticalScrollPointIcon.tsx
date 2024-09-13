import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VerticalScrollPointIcon({
  iconName = 'vertical-scroll-point',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

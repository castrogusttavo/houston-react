import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AppleNewsIcon({
  iconName = 'apple-news',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

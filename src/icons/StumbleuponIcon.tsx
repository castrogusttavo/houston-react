import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StumbleuponIcon({
  iconName = 'stumbleupon',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeviantartIcon({
  iconName = 'deviantart',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

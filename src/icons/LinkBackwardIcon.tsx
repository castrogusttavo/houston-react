import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LinkBackwardIcon({
  iconName = 'link-backward',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
